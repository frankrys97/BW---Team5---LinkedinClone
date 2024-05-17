import {
  Button,
  ButtonGroup,
  Col,
  Collapse,
  Container,
  Dropdown,
  Form,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "../style/myHome.css";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import "../style/modalInvioButton.css";
import LoadingPost from "./LoadingPost";
import "../style/DropDowmAnimation.css";
import { HiDotsHorizontal } from "react-icons/hi";
import defaultCommentImage from "../assets/avatar-1577909_960_720.webp";

const MyHome = () => {
  const myProfile = useSelector((state) => state.myProfile.content);
  const [consigliaClicked, setConsigliaClicked] = useState({});
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [spreadCardId, setSpreadCardId] = useState(null);
  const [servicesDropdownOpen] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const fetchProfiles = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzI0NTE2N2U1MzAwMTVmYTY5N2IiLCJpYXQiOjE3MTU1ODU4NjAsImV4cCI6MTcxNjc5NTQ2MH0.cEKb2krnNiZwilYZItlDUMreBrz6t-HFPnjBGJ3WWC0`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        // Shuffle the array to get random profiles
        const shuffledProfiles = shuffleArray(data);
        // Select the first 10 profiles
        const randomProfiles = shuffledProfiles.slice(0, 10);
        setProfiles(randomProfiles);
      } else {
        console.error("Failed to fetch profiles");
      }
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  useEffect(() => {
    if (showModal) {
      fetchProfiles();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);

  const handleSendClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleConsigliaClick = (postId) => {
    setConsigliaClicked((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  const [showCommentInputs, setShowCommentInputs] = useState(false);

  const handleCommentButtonClick = (postId) => {
    const updatedShowCommentInputs = { ...showCommentInputs };

    updatedShowCommentInputs[postId] = !showCommentInputs[postId];

    setShowCommentInputs(updatedShowCommentInputs);

    if (updatedShowCommentInputs[postId]) {
      fetchComments();
    }
  };
  const showSpreadOptionsForCard = (postId) => {
    return spreadCardId === postId;
  };
  const handleSpreadButtonClick = (postId) => {
    if (spreadCardId === postId) {
      setSpreadCardId(null);
    } else {
      setSpreadCardId(postId);
    }
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const myKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzFlMjE2N2U1MzAwMTVmYTY5N2EiLCJpYXQiOjE3MTU1ODU1MDYsImV4cCI6MTcxNjc5NTEwNn0.oecTaz47mECzpHB7UYiFAMc5nr_2z96dIgXr_PhM62o";
  const URL = "https://striveschool-api.herokuapp.com/api/posts";
  const getPosts = async () => {
    try {
      const response = await fetch(URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${myKey}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        const result = data.reverse().slice(0, 50);
        setPosts(result);
      } else {
        alert("Errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  function subDate(dataString) {
    const dataPost = new Date(dataString);
    const today = new Date();
    const diffMill = today - dataPost;
    const millDay = 1000 * 60 * 60 * 24;
    const days = Math.floor(diffMill / millDay);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    if (days === 0) {
      return "Oggi";
    } else if (days <= 6) {
      return days === 1 ? "1 giorno" : `${days} giorni`;
    } else if (days <= 28) {
      return weeks === 1 ? "1 settimana" : `${weeks} settimane`;
    } else {
      return months === 1 ? "1 mese" : `${months} mesi`;
    }
  }

  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    setComments([]);
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmYTdhMDI4MzJlODAwMTk4NzMwYjUiLCJpYXQiOjE3MTU5Mzg2OTMsImV4cCI6MTcxNzE0ODI5M30.IY169-tdhysvS-MZeTeAJtv--THdReGe7fnRE_ZqhC4`,
          },
        }
      );
      if (response.ok) {
        console.log("fetching comments");
        const data = await response.json();
        setComments(data);
      } else {
        console.error("Failed to fetch profiles");
      }
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  const commentsFiltered = (current) =>
    comments.filter((commento) => commento.elementId === current);

  const formatInputDate = (dateString) => {
    const date = dateString.slice(0, 7);
    return date;
  };

  // const [inputComment, setInputComment] = useState({
  //   comment: "",
  //   rate: "1",
  //   elementId: "",
  // });

  // const handleFieldChange = (propertyName, propertyValue) => {
  //   setInputComment({ ...inputComment, [propertyName]: propertyValue });
  // };

  const [editMode, setEditMode] = useState(false);

  const submitComment = async (event, id) => {
    event.preventDefault();
    // handleFieldChange("elementId", id);
    console.dir(event.target[0].value);
    try {
      let resp;

      resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify({
            comment: event.target[0].value,
            rate: "1",
            elementId: id,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmQ5MjE2N2U1MzAwMTVmYTY5NmYiLCJpYXQiOjE3MTU1ODQ0MDIsImV4cCI6MTcxNjc5NDAwMn0.Ok0_vafY6vDobp0aoeNBS9RlvytHX3veJb6PlPGP7nE`,
          },
        }
      );
      if (resp.ok) {
        console.log("Post");
        console.log(comments);

        fetchComments();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const editComment = async (event, commentId, elementId) => {
    event.preventDefault();
    // handleFieldChange("elementId", id);
    console.dir(event.target[0].value);
    try {
      let resp;

      resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + commentId,
        {
          method: "PUT",
          body: JSON.stringify({
            comment: event.target[0].value,
            rate: "1",
            elementId: elementId,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmQ5MjE2N2U1MzAwMTVmYTY5NmYiLCJpYXQiOjE3MTU1ODQ0MDIsImV4cCI6MTcxNjc5NDAwMn0.Ok0_vafY6vDobp0aoeNBS9RlvytHX3veJb6PlPGP7nE`,
          },
        }
      );
      if (resp.ok) {
        console.log("Put");
        console.log(comments);

        fetchComments();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkDelete = (profileId, idComment) => {
    return profileId === idComment;
  };

  const deleteComment = async (id) => {
    try {
      let resp;

      resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmQ5MjE2N2U1MzAwMTVmYTY5NmYiLCJpYXQiOjE3MTU1ODQ0MDIsImV4cCI6MTcxNjc5NDAwMn0.Ok0_vafY6vDobp0aoeNBS9RlvytHX3veJb6PlPGP7nE`,
          },
        }
      );
      if (resp.ok) {
        console.log("Post");

        fetchComments();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    myProfile && (
      <Container style={{ paddingTop: "65px" }}>
        <Row className="justify-content-center">
          {/* Prima Colonna */}
          <Col xs={12} className="p-0 first-column ">
            <ListGroup className="mb-1">
              <ListGroup.Item className="text-center">
                <div className="rounded-top position-absolute start-0 top-0 end-0 overflow-hidden imgContainer">
                  <Image
                    src="https://media.licdn.com/dms/image/D4D16AQGdLXRnSjl7bQ/profile-displaybackgroundimage-shrink_350_1400/0/1713442065268?e=1721260800&v=beta&t=t-XxVkrYJWOMbzSDmeCUsoY-SVin550O1VB7x7tBfqk"
                    className="imgBackground"
                    alt="profile-img-background"
                  />
                </div>
                <Image
                  src={myProfile.image}
                  className="rounded-circle border border-2 border-white mb-4 position-relative mt-2 z-1"
                  alt="profile-img"
                  style={{ width: 72, height: 72 }}
                />
                <NavLink to="/profile_my" className="text-dark">
                  <p className="fw-bold m-0">
                    {myProfile.name} {myProfile.surname}
                  </p>
                </NavLink>
                {myProfile.bio ? (
                  <small className="text-body-secondary">{myProfile.bio}</small>
                ) : (
                  <small className="text-body-secondary">
                    Junior Full-Stack
                  </small>
                )}
              </ListGroup.Item>

              <Collapse in={open}>
                <div
                  id="example-collapse-text"
                  className="d-md-block"
                  style={{ marginBlockStart: -1 }}
                >
                  <ListGroup.Item
                    action
                    variant="light"
                    className="d-flex justify-content-between align-items-start py-3"
                  >
                    <small>
                      <div className=" me-auto">
                        Collegamenti
                        <div className="fw-bold">Espandi la tua rete</div>
                      </div>
                    </small>
                    <small className="text-primary">10</small>
                  </ListGroup.Item>
                  <ListGroup.Item action variant="light">
                    <small>
                      Accedi a strumenti esclusivi e informazioni in esclusiva
                      <p className="fw-bold">Prova Premium</p>
                    </small>
                  </ListGroup.Item>
                  <ListGroup.Item action variant="light">
                    <small className="fw-bold">
                      <i className="bi bi-bookmark-fill"></i> Elementi salvati
                    </small>
                  </ListGroup.Item>
                </div>
              </Collapse>
            </ListGroup>

            <Collapse in={open}>
              <div id="example-collapse-text" className="d-md-block mt-2">
                <ListGroup>
                  <ListGroup.Item>
                    <NavLink to="#" className="d-block mb-1">
                      <small>Gruppi</small>
                    </NavLink>
                    <div className="d-flex justify-content-between">
                      <NavLink to="#" className="d-block">
                        <small>eventi</small>
                      </NavLink>
                      <i className="bi bi-plus-lg"></i>
                    </div>
                    <NavLink to="#" className="d-block mt-1">
                      <small>Hastag seguiti</small>
                    </NavLink>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    variant="light"
                    className="text-center fw-semibold"
                  >
                    Scopri di più
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Collapse>

            <Button
              variant="light"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              className="d-md-none w-100 mt-1"
            >
              Vedi altro
            </Button>
          </Col>
          {/*  */}

          {/*  */}
          {/* Seconda colonna */}
          <Col xs={12} className="p-0 second-column mt-md-0 mt-4 ">
            <ListGroup>
              <ListGroupItem>
                <Row className="align-items-center justify-content-center gx-2">
                  <Col xs="auto">
                    <Image
                      src={myProfile.image}
                      className="rounded-circle z-3 border border-white "
                      alt="profile-img"
                      style={{ width: 48, height: 48 }}
                    />
                  </Col>
                  <Col>
                    <Button
                      className="w-100 py-2 rounded-5 text-start fw-semibold border border-dark-subtle btnPost"
                      variant="transparent"
                    >
                      Avvia un post
                    </Button>
                  </Col>
                </Row>
                <Row className="justify-content-between  mt-3">
                  <ButtonGroup>
                    <Button
                      variant="outline-light"
                      className="border-0 text-dark"
                    >
                      <i className="bi bi-image text-primary"></i> Contenuti
                      multimediali
                    </Button>
                    <Button
                      variant="outline-light"
                      className="border-0 text-dark"
                    >
                      <i className="bi bi-calendar3 text-warning"></i> Evento
                    </Button>
                    <Button
                      variant="outline-light"
                      className="border-0 text-dark"
                    >
                      <i className="bi bi-layout-text-window-reverse text-warning-emphasis"></i>{" "}
                      Scrivi un articolo
                    </Button>
                  </ButtonGroup>
                </Row>
              </ListGroupItem>
            </ListGroup>
            <div className="d-flex align-items-center">
              <div
                className="my-3 bg-dark-subtle me-2 flex-grow-1"
                style={{ height: "2px" }}
              ></div>
              <div className="d-flex align-items-center">
              <small className="d-inline-block">
                Seleziona la visualizzazione del feed:
              </small>
              <Dropdown data-bs-theme="light" className="mb-1">
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="transparent"
                  className=""
                >
                  <small className="fw-bold">Più rilevante per i primi</small>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" active>
                    <small>Più rilevanti per primi</small>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <small>Più recenti per primi</small>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>
            </div>

            {/* Post */}
            {posts.length > 0
              ? posts.map((post) => {
                  const isConsigliaClicked = consigliaClicked[post._id];

                  return (
                    <ListGroup className="mb-2" key={post._id}>
                      <ListGroupItem>
                        <div className="d-flex">
                          <Image
                            src={post.user.image}
                            className="rounded-circle "
                            style={{ width: 60, height: 60 }}
                          />
                          <div className="ms-2">
                            <p className="mb-0">
                              {post.user.name} {post.user.surname}
                            </p>
                            <p className="mb-0">{post.user.username}</p>
                            <small>
                              {subDate(post.createdAt)}{" "}
                              <i className="bi bi-dot"></i>{" "}
                              <i className="bi bi-globe2"></i>
                            </small>
                          </div>
                        </div>
                        <p className="mb-0">{post.text}</p>
                      </ListGroupItem>
                      {post.image && (
                        <ListGroupItem
                          // style={{ width: "100%", height: "300px" }}
                          className="overflow-hidden p-0"
                        >
                          <Image src={post.image} className="w-100" />
                        </ListGroupItem>
                      )}
                      <ListGroupItem>
                        <ButtonGroup className="d-flex justify-content-between">
                          <Button
                            variant="outline-light"
                            className={`border-0 text-${
                              isConsigliaClicked ? "primary" : "dark"
                            }`}
                            onClick={() => handleConsigliaClick(post._id)}
                          >
                            <i
                              className={`bi bi-hand-thumbs-up${
                                isConsigliaClicked ? "-fill" : ""
                              }`}
                            ></i>{" "}
                            Consiglia
                          </Button>
                          <Button
                            variant="outline-light"
                            className="border-0 text-dark"
                            onClick={() => handleCommentButtonClick(post._id)}
                          >
                            <i className="bi bi-chat-dots"></i> Commenta
                          </Button>
                          <Button
                            variant="outline-light"
                            className="border-0 text-dark"
                            onClick={() => handleSpreadButtonClick(post._id)}
                            style={{ position: "relative" }}
                          >
                            <i
                              className="bi bi-repeat"
                              style={{
                                position: "relative",
                                marginRight: "5px",
                              }}
                            ></i>{" "}
                            Diffondi il post
                          </Button>
                          <Button
                            variant="outline-light"
                            className="border-0 text-dark"
                            onClick={handleSendClick}
                          >
                            <i className="bi bi-send-fill"></i> Invia
                          </Button>
                          <Modal
                            show={showModal}
                            onHide={handleCloseModal}
                            size="lg"
                            backdropClassName="custom-backdrop"
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Invia il post</Modal.Title>
                            </Modal.Header>
                            <Modal.Body
                              style={{ maxHeight: "40rem", overflowY: "auto" }}
                            >
                              <input
                                type="text"
                                placeholder="Cerca un amico qui..."
                                style={{ width: "100%", marginBottom: "1rem" }}
                              />
                              {profiles.map((profile) => (
                                <div key={profile._id}>
                                  <div
                                    className="profile"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      marginBottom: "1rem",
                                    }}
                                  >
                                    <img
                                      src={profile.image}
                                      alt={profile.name}
                                      style={{
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "50%",
                                        marginRight: "1rem",
                                      }}
                                    />
                                    <div>
                                      <h4
                                        style={{
                                          fontSize: "1rem",
                                          marginBottom: "0.5rem",
                                        }}
                                      >
                                        {profile.name} {profile.surname}
                                      </h4>
                                      <p
                                        style={{
                                          fontSize: "0.8rem",
                                          marginBottom: "0.5rem",
                                        }}
                                      >
                                        {profile.bio}
                                      </p>
                                    </div>
                                  </div>
                                  <hr
                                    style={{
                                      border: "none",
                                      borderTop: "1px solid #ccc",
                                    }}
                                  />
                                </div>
                              ))}
                            </Modal.Body>
                          </Modal>
                        </ButtonGroup>
                        {showCommentInputs[post._id] && (
                          <>
                            <div
                              className="mt-2 mb-2"
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Image
                                src={myProfile.image}
                                className="rounded-circle z-3 border border-white"
                                alt="profile-img"
                                style={{
                                  width: 48,
                                  height: 48,
                                  marginRight: "10px",
                                }}
                              />
                              <div
                                style={{ position: "relative", width: "100%" }}
                              >
                                <Form
                                  onSubmit={(e) => {
                                    submitComment(e, post._id);

                                    e.target[0].value = "";
                                  }}
                                >
                                  <Form.Control
                                    id={`commentInput-${post._id}`}
                                    type="text"
                                    className="mb-1"
                                    placeholder="Aggiungi un commento..."
                                    style={{
                                      width: "100%",
                                      padding: "4px",
                                      border: "1px solid #f0f0f0",
                                      borderRadius: "20px",
                                    }}
                                  ></Form.Control>
                                </Form>

                                <div
                                  style={{
                                    position: "absolute",
                                    right: "10px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <i
                                    className="bi bi-emoji-smile"
                                    style={{
                                      marginRight: "7px",
                                      fontSize: "20px",
                                    }}
                                  ></i>
                                  <i
                                    className="bi bi-card-image"
                                    style={{
                                      marginRight: "7px",
                                      fontSize: "20px",
                                    }}
                                  ></i>
                                </div>
                              </div>
                            </div>

                            <ListGroup>
                              {comments &&
                                commentsFiltered(post._id).map((commento) => {
                                  return (
                                    <>
                                      <ListGroup.Item key={commento.elementId}>
                                        <div className="mt-2 d-flex gap-1">
                                          <Image
                                            src={defaultCommentImage}
                                            className="rounded-circle z-3 border border-white"
                                            alt="profile-img"
                                            style={{
                                              width: 48,
                                              height: 48,
                                              marginRight: "10px",
                                            }}
                                          />
                                          <div className="d-flex flex-column w-100 gap-3 rounded-bottom bg-body-secondary rounded-end p-2">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <h5 className="m-0">
                                                {commento.author}
                                              </h5>
                                              <div className="d-flex align-items-center gap-2">
                                                <p className="m-0">
                                                  {formatInputDate(
                                                    commento.createdAt
                                                  )}
                                                </p>
                                                <HiDotsHorizontal />
                                              </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                              {editMode &&
                                              checkDelete(
                                                myProfile.username,
                                                commento.author
                                              ) ? (
                                                <Form
                                                  onSubmit={(e) => {
                                                    editComment(
                                                      e,
                                                      commento._id,
                                                      commento.elementId
                                                    );

                                                    e.target[0].value = "";
                                                    setEditMode(false);
                                                  }}
                                                >
                                                  <Form.Control
                                                    type="text"
                                                    className="mb-1"
                                                    style={{
                                                      width: "100%",
                                                      padding: "4px",
                                                      border:
                                                        "1px solid #f0f0f0",
                                                      borderRadius: "20px",
                                                    }}
                                                  ></Form.Control>
                                                </Form>
                                              ) : (
                                                <p className="m-0">
                                                  {commento.comment}
                                                </p>
                                              )}

                                              {checkDelete(
                                                myProfile.username,
                                                commento.author
                                              ) && (
                                                <div className="d-flex gap-3">
                                                  <i
                                                    className="bi bi-pen-fill"
                                                    onClick={() => {
                                                      setEditMode(true);
                                                    }}
                                                  ></i>

                                                  <i
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    className="bi bi-x-lg"
                                                    onClick={() =>
                                                      deleteComment(
                                                        commento._id
                                                      )
                                                    }
                                                  ></i>
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </ListGroup.Item>
                                    </>
                                  );
                                })}
                            </ListGroup>
                          </>
                        )}

                        {showSpreadOptionsForCard(post._id) && (
                          <div
                            style={{
                              width: "60%",
                              position: "absolute",
                              top: "calc(100% - 15px)",
                              left: "50%",
                              transform: "translateX(-50%)",
                              zIndex: "1",
                              padding: "5px",
                              borderRadius: "15px",
                              border: "1px solid #ccc",
                              background: "#fff",
                            }}
                          >
                            <div>
                              <h6>
                                <i
                                  className="bi bi-pencil-square"
                                  style={{ marginRight: "5px" }}
                                ></i>
                                Diffondi il post con le tue idee
                              </h6>
                              <span style={{ fontSize: "14px", color: "#777" }}>
                                Crea un nuovo posto come allegato
                              </span>
                            </div>
                            <div>
                              <h6>
                                <i
                                  className="bi bi-repeat"
                                  style={{ marginRight: "5px" }}
                                ></i>
                                Diffondi il Post
                              </h6>
                              <span style={{ fontSize: "14px", color: "#777" }}>
                                Pubblica al istante questo post
                              </span>
                            </div>
                          </div>
                        )}
                      </ListGroupItem>
                    </ListGroup>
                  );
                })
              : [...Array(10).keys()].map((_, i) => <LoadingPost key={i} />)}
          </Col>
          {/*  */}

          {/*  */}
          {/* Terza Colonna */}
          <Col
            xs={12}
            className="p-0 third-column d-none d-lg-block"
            style={{ width: "300px" }}
          >
            <ListGroup>
              <ListGroup.Item variant="light">
                <h5>Linkedin notizie</h5>
                <p>Storie principali</p>
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                <h6 className="m-0 fw-semibold">
                  Medicina aereospaziale in fase di decollo
                </h6>
                <small>16 ore fa · 765 lettori</small>
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                <h6 className="m-0 fw-semibold">
                  Quali saranno le lauree più richieste?
                </h6>
                <small>16 ore fa · 154 lettori</small>
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                <h6 className="m-0 fw-semibold">
                  Dove Sventolano le bandiere Blu?
                </h6>
                <small>1 giorno fa · 300 lettori</small>
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                <h6 className="m-0 fw-semibold">
                  Dazn fa squadra con Discovery
                </h6>
                <small>1 ora fa · 63 lettori</small>
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                <h6 className="m-0 fw-semibold">
                  Come nasce un punto vendita automatizzato?
                </h6>
                <small>7 ore fa · 876 lettori</small>
              </ListGroup.Item>

              {dropdownOpen && (
                <div className="animated-content">
                  <ListGroup.Item
                    action
                    variant="light"
                    className="fadeInAnimation"
                  >
                    <h6 className="m-0 fw-semibold">
                      Alle Smart city mancano Tecnici
                    </h6>
                    <small> 3 ore fa · 163 lettori</small>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    variant="light"
                    className="fadeInAnimation"
                  >
                    <h6 className="m-0 fw-semibold">
                      Italia in vetta per congressi ospitati
                    </h6>
                    <small>17 ore fa · 1633 lettori</small>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    variant="light"
                    className="fadeInAnimation"
                  >
                    <h6 className="m-0 fw-semibold">
                      Se il paragone non aiuta
                    </h6>
                    <small>23 ore fa · 233 lettori</small>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    variant="light"
                    className="fadeInAnimation"
                  >
                    <h6 className="m-0 fw-semibold">
                      INetflix e Nuovo Imae rinnovano l&apos;accordo
                    </h6>
                    <small>7 ore fa · 683 lettori</small>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    variant="light"
                    className="fadeInAnimation"
                  >
                    <h6 className="m-0 fw-semibold">OpenAI svela GPT -4o</h6>
                    <small>19 ore fa · 730 lettori</small>
                  </ListGroup.Item>
                </div>
              )}

              <div className="dropdown-wrapper">
                <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    {dropdownOpen ? "Mostra meno" : "Vedi altro"}
                  </Dropdown.Toggle>
                </Dropdown>
              </div>
              <div className="mt-2">
                <img
                  src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                  width={"100%"}
                  className="mb-2 rounded"
                  alt=""
                />
              </div>

              <div className="d-flex flex-wrap justify-content-center column-gap-4 mt-3">
                <style>
                  {`
    a {
      text-decoration: none; 
      color: inherit; 
    }

    a:hover {
      text-decoration: underline; 
      color: blue;
    }

    .dropdown-trigger {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }

    .dropdown-trigger:hover {
      text-decoration: underline;
      color: blue;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }

    .dropdown-content a {
      color: black;
      padding: 10px 8px;
      text-decoration: none;
      display: block;
    }

    .dropdown-content a:hover {
      background-color: #ddd;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }
  `}
                </style>
                <a href="#informazioni">
                  <small>
                    <p>informazioni</p>
                  </small>
                </a>
                <a href="#accessibilità">
                  <small>
                    <p>Accessibilità</p>
                  </small>
                </a>
                <a href="#centro-assistenza">
                  <small>
                    <p>Centro assistenza</p>
                  </small>
                </a>
                <Dropdown>
                  <Dropdown.Toggle variant="link" className="dropdown-trigger">
                    <small>Privacy e condizioni</small>
                  </Dropdown.Toggle>
                  <Dropdown.Menu show={servicesDropdownOpen}>
                    <Dropdown.Item>
                      <h6>Informativa sulla privacy</h6>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <h6>Contratto di licenza</h6>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <h6>Termini e condizioni</h6>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <h6>Informativa sui cookie</h6>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <h6>Informativa sul copyright</h6>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <a href="#opzioni-annunci-pubblicitari">
                  <small>
                    <p>Opzioni per gli annunci pubblicitari</p>
                  </small>
                </a>
                <a href="#pubblicità">
                  <small>
                    <p>Pubblicità</p>
                  </small>
                </a>
                <Dropdown>
                  <Dropdown.Toggle variant="link" className="dropdown-trigger">
                    <small style={{ fontSize: "10px" }}>
                      Servizi alle aziende
                    </small>
                  </Dropdown.Toggle>
                  <Dropdown.Menu show={servicesDropdownOpen}>
                    <Dropdown.Item>
                      <h6>Assumi su linkedin</h6>
                      <small>Trova,attrai,Assumi</small>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <h6>Vendi con linkedin</h6>
                      <small>Sblocca nuove opportunità di vendita</small>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <h6>Offerta di lavoro gratuita</h6>
                      <small>Ottieni rapidamente candidati qualificati</small>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <h6>Fai pubblicità su Linkedin</h6>
                      <small>
                        Acquisisci clienti e fai crescere la tua Azienda
                      </small>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <h6>Inizia con Premium</h6>
                      <small>Assumi su Linkedin</small>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <h6>Centro Amministrazione</h6>
                      <small>
                        Gestisci i dettagli di fatturazione e account
                      </small>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <a href="#scarica-app-linkedin">
                  <small>
                    <p>Scarica l&apos;app LinkedIn</p>
                  </small>
                </a>
                <a href="#altro">
                  <small>
                    <p>Altro</p>
                  </small>
                </a>
                <small className="text-center fw-semibold">
                  <img
                    src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"
                    alt="LinkedIn Logo"
                    width="56"
                    height="14"
                  />
                  &nbsp;Linkedin Corporation &copy; 2024
                </small>
              </div>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  );
};

export default MyHome;
