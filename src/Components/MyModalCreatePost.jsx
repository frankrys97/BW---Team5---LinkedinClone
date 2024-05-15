import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setShowModalCreatePost } from "../redux/actions";
import { CiFaceSmile } from "react-icons/ci";
import { AiOutlinePicture } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { BiParty } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { useState } from "react";

const MyModalCreatePost = (props) => {
  const myProfile = useSelector((state) => state.myProfile.content);
  const showModalCreatePost = useSelector(
    (state) => state.ModalCreatePost.showModalCreatePost
  );

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setShowModalCreatePost(false));
  };

  const [post, setPost] = useState({
    text: "",
    image: null,
  });

  const handleSumbit = (event) => {
    event.preventDefault();
    console.log(post);

    const myKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmQ5MjE2N2U1MzAwMTVmYTY5NmYiLCJpYXQiOjE3MTU1ODQ0MDIsImV4cCI6MTcxNjc5NDAwMn0.Ok0_vafY6vDobp0aoeNBS9RlvytHX3veJb6PlPGP7nE";
    fetch(`https://striveschool-api.herokuapp.com/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${myKey}`,
      },
      body: JSON.stringify(post),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        console.log("data", data);
        handleClose();
        // eslint-disable-next-line react/prop-types
        props.personalPost();
        setPost({
          text: "",
          image: null,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal show={showModalCreatePost} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title className=" border border-0">
          <div className="d-flex gap-2">
            <div style={{ width: "50px", height: "50px" }}>
              <img
                src={myProfile.image}
                alt=" profile"
                className="rounded-circle w-100 h-100"
              />
            </div>
            <div className="d-flex flex-column">
              <p className="m-0">
                {myProfile.name} {myProfile.surname}
              </p>
              <span className="text-secondary" style={{ fontSize: "0.8rem" }}>
                Pubblica: Chiunque
              </span>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Form className="w-100 h-100" onSubmit={handleSumbit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={8}
              placeholder="Di cosa vuoi parlare?"
              className="border-0 p-0"
              onChange={(e) => setPost({ ...post, text: e.target.value })}
              value={post.text}
            />
          </Form.Group>
          <CiFaceSmile />
          <div className="d-flex justify-content-start align-items-center gap-2 mt-2">
            <AiOutlinePicture />
            <IoCalendarOutline />
            <BiParty />
            <FaPlus />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <IoMdTime />
          <Button
            variant="primary"
            className="rounded-pill px-3 py-1"
            disabled={!post.text}
            type="submit"
          >
            Pubblica
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default MyModalCreatePost;
