import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setShowModalImageUpload } from "../redux/actions";
import { FaCamera, FaEye, FaPen, FaTrash } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { getMyProfile } from "../redux/actions";
const MyModalUploadImage = () => {
  const myProfile = useSelector((state) => state.myProfile.content);
  const showModalImageUpload = useSelector(
    (state) => state.ModalUploadImage.showModalImageUpload
  );
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    setUploadedFile(event.target.files[0]);
    // console.log(event.target.files[0]);

    console.log(uploadedFile);
  };

  const [showModalImageUpload2, setShowModalImageUpload2] = useState(false);
  const handleClose2 = () => setShowModalImageUpload2(false);

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setShowModalImageUpload(false));
  };

  const postUploadImage = () => {
    const myKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmQ5MjE2N2U1MzAwMTVmYTY5NmYiLCJpYXQiOjE3MTU1ODQ0MDIsImV4cCI6MTcxNjc5NDAwMn0.Ok0_vafY6vDobp0aoeNBS9RlvytHX3veJb6PlPGP7nE";
    const formData = new FormData();
    formData.append("profile", uploadedFile);
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${myProfile._id}/picture`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${myKey}`,
        },
        body: formData,
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        console.log("data", data);
        setShowModalImageUpload2(false);
        dispatch(setShowModalImageUpload(false));
        dispatch(getMyProfile());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (uploadedFile) {
      postUploadImage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadedFile]);

  return (
    <>
      <Modal
        show={showModalImageUpload}
        onHide={handleClose}
        data-bs-theme="dark"
        className="text-light"
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Foto profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div
              className="overflow-hidden mx-auto"
              style={{ width: "280px", height: "280px" }}
            >
              <img
                src={myProfile.image}
                alt=" profile"
                className=" rounded-circle w-100 h-100"
              />
            </div>

            <div>
              <Button variant="outline-light" className="rounded rounded-4">
                <FaEye /> Chiunque
              </Button>
            </div>
          </div>
        </Modal.Body>
        <hr className="my-2" />
        <div
          className="d-flex align-items-center justify-content-between mx-3 pb-3"
          style={{ paddingInline: "16px" }}
        >
          <div className="d-flex gap-2">
            <Button
              variant="outline-light border border-0"
              className="d-flex flex-column align-items-center"
            >
              <FaPen />
              <span>Modifica</span>
            </Button>
            <Button
              variant="outline-light border border-0"
              className="d-flex flex-column align-items-center"
              onClick={() => setShowModalImageUpload2(true)}
            >
              <FaCamera />
              <span>Aggiungi foto</span>
            </Button>
            <Button
              variant="outline-light border border-0"
              className="d-flex flex-column align-items-center"
            >
              <AiOutlinePicture />
              <span>Fotogrammi</span>
            </Button>
          </div>
          <div>
            <Button
              variant="outline-light border border-0"
              className="d-flex flex-column align-items-center"
            >
              <FaTrash />
              <span>Elimina</span>
            </Button>{" "}
          </div>
        </div>
      </Modal>
      <Modal show={showModalImageUpload2} onHide={handleClose2} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Cambia foto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column align-items-center justify-content-between">
            <div>
              <h4>
                {" "}
                <span className="fw-semibold">{myProfile.name}</span>, aiuta gli
                altri a riconoscerti!
              </h4>
            </div>
            <div
              className="overflow-hidden mt-5"
              style={{ width: "180px", height: "180px" }}
            >
              <img
                src={myProfile.image}
                alt=" profile"
                className=" rounded-circle w-100 h-100"
              />
            </div>

            <div>
              <p className="mt-3">
                {" "}
                Chiediamo agli utenti di LinkedIn di utilizzare le loro vere
                identità, quindi scatta o <br /> carica una tua foto. Poi
                ritagliala, applica dei filtri e perfezionala come vuoi.
              </p>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className="d-flex gap-2 mt-3">
          <Button variant="outline-primary rounded-4">Usa fotocamera</Button>
          <Button className="primary rounded-4" onClick={handleButtonClick}>
            Carica foto
          </Button>
          <input
            type="file"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="jpg, jpeg, png"
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModalUploadImage;
