import { useEffect, useState } from "react";
import {
  CardText,
  Col,
  Container,
  Dropdown,
  Form,
  Modal,
  Nav,
  Row,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MyFooter from "./MyFooter";
import { useDispatch, useSelector } from "react-redux";
import MyModalUploadImage from "./MyModalUploadImage";
import {
  setShowModalCreatePost,
  setShowModalImageUpload,
} from "../redux/actions";
import defaultImage from "../assets/default-image.png";
import MyModalCreatePost from "./MyModalCreatePost";

const MyProfile = () => {
  const myProfile = useSelector((state) => state.myProfile.content);
  const [showModal, setShowModal] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [operation, setOperation] = useState("add");

  const [newExp, setNewExp] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const [experienceImage, setExperienceImage] = useState(null);

  const handleImageChange = (event) => {
    setExperienceImage(event.target.files[0]);
  };

  const handleFieldChange = (propertyName, propertyValue) => {
    setNewExp({ ...newExp, [propertyName]: propertyValue });
  };

  const handleCloseModal = () => setShowModal(false);
  const dispatch = useDispatch();

  const handleShowModal = (operation, experience) => {
    setShowModal(true);
    setOperation(operation);
    if (operation === "edit") {
      setNewExp(experience);
    }
  };

  const handleShowModalImageUpload = () => {
    dispatch(setShowModalImageUpload(true));
  };

  const myKey2 =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmQ5MjE2N2U1MzAwMTVmYTY5NmYiLCJpYXQiOjE3MTU1ODQ0MDIsImV4cCI6MTcxNjc5NDAwMn0.Ok0_vafY6vDobp0aoeNBS9RlvytHX3veJb6PlPGP7nE";
  const myKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzFlMjE2N2U1MzAwMTVmYTY5N2EiLCJpYXQiOjE3MTU1ODU1MDYsImV4cCI6MTcxNjc5NTEwNn0.oecTaz47mECzpHB7UYiFAMc5nr_2z96dIgXr_PhM62o";
  const URL = "https://striveschool-api.herokuapp.com/api/profile/";
  const getExperinence = async (exp) => {
    try {
      const response = await fetch(URL + exp, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${myKey}`,
        },
      });
      if (response.ok) {
        const data = await response.json();

        setExp(data);
      } else {
        alert("Errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [penOfPosts, setPenOfPosts] = useState(false);

  const [exp, setExp] = useState([]);
  useEffect(() => {
    if (myProfile) {
      getExperinence(`${myProfile._id}/experiences`);
    }
  }, [myProfile]);

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const [isClicked2, setIsClicked2] = useState(false);
  const handleClick2 = () => {
    setIsClicked2(!isClicked2);
  };
  const [isClicked3, setIsClicked3] = useState(false);
  const handleClick3 = () => {
    setIsClicked3(!isClicked3);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `${URL}${myProfile._id}/experiences`;

    try {
      let resp;
      if (operation === "add") {
        resp = await fetch(url, {
          method: "POST",
          body: JSON.stringify(newExp),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${myKey2}`,
          },
        });
      } else if (operation === "edit") {
        const expId = newExp._id;
        resp = await fetch(`${url}/${expId}`, {
          method: "PUT",
          body: JSON.stringify(newExp),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${myKey2}`,
          },
        });
      }

      if (resp.ok) {
        console.log(experienceImage);
        const responseData = await resp.json();
        const experienceId = responseData._id;

        const formData = new FormData();
        formData.append("experience", experienceImage);

        const imageResp = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${myProfile._id}/experiences/${experienceId}/picture`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${myKey2}`,
            },
            body: formData,
          }
        );

        if (imageResp.ok) {
          console.log("image uploaded");
        } else {
          console.log("image not uploaded");
        }

        handleCloseModal();
        getExperinence(`${myProfile._id}/experiences`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const resp = await fetch(URL + myProfile._id + "/experiences/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${myKey2}`,
        },
      });

      if (resp.ok) {
        getExperinence(`${myProfile._id}/experiences`);
        console.log("DELETE");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "long", year: "numeric" };
    return date.toLocaleDateString("it-IT", options);
  };

  const formatInputDate = (dateString) => {
    const date = dateString.slice(0, 7);
    return date;
  };
  // INIZIO FETCH PROFILI SIMILI E AMICI CONSIGLIATI

  const URL2 = "https://striveschool-api.herokuapp.com/api/profile/";
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const similarProfiles = async () => {
    try {
      const response = await fetch(URL2, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${myKey}`,
        },
      });
      if (response.ok) {
        const data = await response.json();

        // console.log(data);
        const shuffle = shuffleArray(data);
        // console.log(shuffle);
        setProfili(shuffle);
      } else {
        alert("Errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [profili, setProfili] = useState([]);
  useEffect(() => {
    similarProfiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // FINE FETCH PROFILI SIMILI E AMICI CONSIGLIATI
  // INIZIO FETCH ATTIVITA POST PERSONALI
  const URLPost = "https://striveschool-api.herokuapp.com/api/posts/";

  const personalPost = async () => {
    try {
      const response = await fetch(URLPost, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${myKey}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        setPostPersonal(data);
      } else {
        alert("Errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [postPersonal, setPostPersonal] = useState([]);

  const postPersonalFilter = postPersonal.filter(
    (post) => post.user._id === myProfile._id
  );
  console.log(postPersonalFilter);
  useEffect(() => {
    personalPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // FINE FETCH ATTIVITA POST PERSONALI

  const handlePostDelete = (id) => {
    fetch(`https://striveschool-api.herokuapp.com/api/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${myKey2}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("post deleted");
        } else {
          console.log("post not deleted");
        }
      })
      .then((data) => {
        console.log(data);
        personalPost();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    myProfile && (
      <>
        <Container style={{ paddingTop: "65px", maxWidth: "1128px" }}>
          <Row>
            <Col xs={12} lg={9}>
              {/* CARD PROFILO */}
              <Card style={{ maxWidth: "100%" }}>
                <Card.Img
                  variant="top"
                  src="https://media.licdn.com/dms/image/D4D16AQGdLXRnSjl7bQ/profile-displaybackgroundimage-shrink_350_1400/0/1713442065268?e=1721260800&v=beta&t=t-XxVkrYJWOMbzSDmeCUsoY-SVin550O1VB7x7tBfqk"
                />
                <Card.Body className="">
                  <div>
                    {/* <Card.Img
                      className="rounded-circle profileImg border border-light border-5"
                      src={myProfile.image}
                    /> */}
                    <div
                      className="profileImg border border-light border-5 rounded-circle overflow-hidden"
                      onClick={handleShowModalImageUpload}
                    >
                      <img
                        src={myProfile.image}
                        alt="profile"
                        style={{
                          width: "100%",
                          objectFit: "cover",
                          height: "100%",
                          aspectRatio: "1 / 1",
                        }}
                      />
                    </div>

                    <MyModalUploadImage />

                    <p className="name fs-4">
                      {myProfile.name} {myProfile.surname}
                    </p>
                    {myProfile.bio ? (
                      <p className="name fs-4">{myProfile.bio}</p>
                    ) : (
                      "Junior Full-Stack Developer 💻 I Web Marketing 🚀 I Local Marketing 🗣 I Business Management 📈"
                    )}
                    <p className="my-0">
                      <span className="text-secondary">
                        {myProfile.area} &middot;
                      </span>{" "}
                      <a href="">Informazioni di contatto</a>
                    </p>
                    <p style={{ fontSize: "0.8rem" }} className="text-primary ">
                      17 collegamenti
                    </p>
                  </div>
                  <div className="d-flex">
                    <Button className="mx-1 rounded-pill" variant="primary">
                      Disponibile per
                    </Button>
                    <Button
                      className="mx-1 text-primary border border-primary rounded-pill"
                      variant="ligth"
                    >
                      Aggiungi sezione del profilo
                    </Button>
                    <Button
                      className="mx-1 border border-black rounded-pill"
                      variant="ligth"
                    >
                      Altro
                    </Button>
                  </div>
                  <div>
                    <div className="w-50 p-3 my-3 rounded  infoBox">
                      <p className="d-flex justify-content-between m-0">
                        Diponibile a lavorare
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-eyedropper"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708zM2 12.707l7-7L10.293 7l-7 7H2z" />
                        </svg>
                      </p>
                      <p className="m-0">Ruoli di sviluppatore web</p>
                      <a href="">Mostra dettagli</a>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              {/* FINE CARD PROFILO */}
              {/* INIZIO CARD ANALISI */}
              <Card className="my-3">
                <Card.Body>
                  <Card.Title>Analisi</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                    </svg>
                    <span className="ms-1">Solo per te</span>
                  </Card.Subtitle>

                  <div className="d-flex ">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        className="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                      </svg>
                      <span>28 Visualizzazioni del profilo</span>
                      <p className="text-muted">
                        Scopri chi ha visitato il tuo profilo
                      </p>
                    </div>
                    <div className="ms-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        className="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
                      </svg>
                      <span>113 Impressioni del post</span>
                      <p className="text-muted">
                        Scopri chi sta interagendo con i tuoi post
                      </p>
                      <span className="text-secondary my-0">
                        Ultimi 7 giorni
                      </span>
                    </div>
                  </div>
                </Card.Body>
                <CardText className="border-top fw-bold pt-2 text-center">
                  <span>
                    Mostra tutte le analisi
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                    </svg>
                  </span>
                </CardText>
              </Card>
              {/* FINE CARD ANALISI */}
              {/* INIZIO CARD RISORSE */}
              <Card className="my-3">
                <Card.Body>
                  <Card.Title>Risorse</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                    </svg>
                    <span className="ms-1">Solo per te</span>
                  </Card.Subtitle>

                  <div className=" ">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        className="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                      </svg>
                      <span>La mia rete</span>
                      <p className="text-muted">
                        Salva e gestisci i tuoi collegamenti e interessi
                      </p>
                    </div>
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        className="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
                      </svg>
                      <span>Elementi salvati</span>
                      <p className="text-muted">
                        Monitora le tue offerte di lavoro, i corsi e gli
                        articoli
                      </p>
                    </div>
                  </div>
                </Card.Body>
                <CardText className="border-top fw-bold pt-2 text-center">
                  <span>
                    Mostra tutte le analisi
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                    </svg>
                  </span>
                </CardText>
              </Card>
              {/* FINE CARD RISORSE */}
              {/* INIZIO CARD ESPERIENZE */}
              <Card className="my-3">
                <Card.Body>
                  <div className="d-flex justify-content-between p-2">
                    <Card.Title>Esperienza</Card.Title>

                    <div className="d-flex">
                      <Dropdown data-bs-theme="light" className="">
                        <Dropdown.Toggle
                          variant="transparent"
                          className="noToggle border-0"
                          align={"end"}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="27"
                            height="27"
                            fill="currentColor"
                            className="bi bi-plus-lg me-3"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            href="#/action-1"
                            onClick={() => {
                              setNewExp({
                                role: "",
                                company: "",
                                startDate: "",
                                endDate: "",
                                description: "",
                                area: "",
                              });
                              handleShowModal("add");
                            }}
                          >
                            <small>Aggiungi posizione lavorativa</small>
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            <small>Aggiungi pausa lavorativa</small>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                      {/* MODALE PER AGGIUNTA ESPERIENZE */}

                      <Modal
                        show={showModal}
                        onHide={handleCloseModal}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>
                            Aggiungi posizione lavorativa
                          </Modal.Title>
                        </Modal.Header>
                        <Form onSubmit={handleSubmit}>
                          <Modal.Body>
                            <Form.Group className="mb-3">
                              <Form.Label>Qualifica</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Esempio: Retail Sales Manager"
                                value={newExp.role}
                                onChange={(e) =>
                                  handleFieldChange("role", e.target.value)
                                }
                                required
                              />
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Form.Label>Nome Azienda</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Esempio: Microsoft"
                                value={newExp.company}
                                onChange={(e) =>
                                  handleFieldChange("company", e.target.value)
                                }
                                required
                              />
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Form.Label>Località</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Esempio: Milano, Italia"
                                value={newExp.area}
                                onChange={(e) =>
                                  handleFieldChange("area", e.target.value)
                                }
                                required
                              />
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Form.Label>Data inizio</Form.Label>
                              <Form.Control
                                type="month"
                                value={formatInputDate(newExp.startDate)}
                                onChange={(e) =>
                                  handleFieldChange("startDate", e.target.value)
                                }
                                required
                              />
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Form.Label>Data fine</Form.Label>
                              <Form.Control
                                type="month"
                                value={formatInputDate(newExp.endDate)}
                                onChange={(e) =>
                                  handleFieldChange("endDate", e.target.value)
                                }
                                required
                              />
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Form.Label>Descrizione</Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={4}
                                value={newExp.description}
                                onChange={(e) =>
                                  handleFieldChange(
                                    "description",
                                    e.target.value
                                  )
                                }
                                required
                              />
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Form.Label>Aggiungi un&apos;immagine</Form.Label>
                              <Form.Control
                                type="file"
                                accept="jpg, jpeg, png"
                                onChange={handleImageChange}
                              />
                            </Form.Group>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              variant={
                                operation === "edit" ? "success" : "primary"
                              }
                              type="submit"
                            >
                              {operation === "edit" ? "Modifica" : "Salva"}
                            </Button>
                          </Modal.Footer>
                        </Form>
                      </Modal>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        className="bi bi-eyedropper"
                        viewBox="0 0 16 16"
                        onClick={() => setIsDelete(!isDelete)}
                      >
                        <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708zM2 12.707l7-7L10.293 7l-7 7H2z" />
                      </svg>
                    </div>
                  </div>

                  {exp.length > 0
                    ? exp.map((experience) => (
                        <div key={experience._id} className="px-3 my-2 ">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex ">
                              <div style={{ width: "50px", height: "50px" }}>
                                <img
                                  src={experience.image || defaultImage}
                                  alt="Logo di EPICODE"
                                  id="ember1798"
                                  className="w-100 h-100"
                                />
                              </div>
                              <div className="ms-2">
                                <p className="my-0 fw-bold">
                                  {" "}
                                  {experience.role}
                                </p>
                                <p className="my-0 ">{experience.company}</p>
                                <p className="my-0 mb-1 text-secondary">
                                  <span>
                                    {formatDate(experience.startDate)}
                                  </span>{" "}
                                  /{" "}
                                  <span>{formatDate(experience.endDate)}</span>
                                  {/* {formatDate(experience.startDate)} / 
                                   {formatDate(experience.endDate)} */}
                                </p>
                              </div>
                            </div>
                            {isDelete && (
                              <div>
                                <Button
                                  variant="danger"
                                  onClick={() => handleDelete(experience._id)}
                                >
                                  <i className="bi bi-trash3-fill"></i>
                                </Button>
                                <Button
                                  variant="success"
                                  className="ms-2"
                                  onClick={() =>
                                    handleShowModal("edit", experience)
                                  }
                                >
                                  <i className="bi bi-pen"></i>
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    : "vuoto"}
                </Card.Body>
                <p className="border-top p-2 mb-0 text-center">
                  Mostra tutte le competenze (8)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                  </svg>
                </p>
              </Card>
              {/* FINE CARD ESPERIENZE */}
              {/* INIZIO CARD INFORMAZIONI */}
              <Card className="my-3">
                <Card.Body>
                  <div className="d-flex justify-content-between p-2">
                    <Card.Title>Informazioni</Card.Title>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="currentColor"
                      className="bi bi-eyedropper"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708zM2 12.707l7-7L10.293 7l-7 7H2z" />
                    </svg>
                  </div>

                  <div className="px-3">
                    {" "}
                    👋 Ciao! Sono Francesco Cristiano, 26 anni da Napoli.{" "}
                  </div>
                </Card.Body>
              </Card>

              {/* FINE CARD INFORMAZIONI */}
              {/* INIZIO CARD ATTIVITA  */}
              <Card>
                <Card.Body>
                  <div className="d-flex justify-content-between p-2">
                    <div>
                      <Card.Title>Attività</Card.Title>
                      <p className="text-primary">17 follower</p>
                      <div>
                        <Button
                          className="border mb-3 border-primary p-0 px-3 mx-2  rounded-pill"
                          variant="ligth"
                        >
                          <span className="mx-1 text-primary">Post</span>
                        </Button>
                        <Button
                          className="border mb-3 border-primary p-0 px-3 mx-2 rounded-pill"
                          variant="ligth"
                        >
                          <span className="mx-1 text-primary">Commenti</span>
                        </Button>
                        <Button
                          className="border mb-3 border-primary p-0 px-3 mx-2 rounded-pill"
                          variant="ligth"
                        >
                          <span className="mx-1 text-primary">Immagini</span>
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Button
                        className="border mb-3 border-primary p-0 px-3  rounded-pill"
                        variant="ligth"
                        onClick={() => dispatch(setShowModalCreatePost(true))}
                      >
                        <span className="mx-1 text-primary">Crea un post</span>
                      </Button>

                      <MyModalCreatePost personalPost={personalPost} />

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        className="bi bi-eyedropper mx-3 mb-4"
                        viewBox="0 0 16 16"
                        onClick={() => setPenOfPosts(!penOfPosts)}
                      >
                        <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708zM2 12.707l7-7L10.293 7l-7 7H2z" />
                      </svg>
                    </div>
                  </div>
                  {postPersonal &&
                    postPersonalFilter.map((post) => {
                      return (
                        <div key={post._id} className="px-3">
                          <p>
                            {post.username} ha pubblicato questo post &middot;
                            3s
                          </p>
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div style={{ width: "70px", height: "70px" }}>
                                <img
                                  src={post.image || defaultImage}
                                  alt=""
                                  className="w-100 h-100"
                                />
                              </div>
                              <span className="mx-3">{post.text}</span>
                            </div>
                            {penOfPosts && (
                              <div>
                                <Button
                                  variant="danger"
                                  onClick={() => handlePostDelete(post._id)}
                                >
                                  <i className="bi bi-trash3-fill"></i>
                                </Button>
                                <Button variant="success" className="ms-2">
                                  <i className="bi bi-pen"></i>
                                </Button>
                              </div>
                            )}
                          </div>
                          <img
                            className="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--0 reactions-icon__consumption--small data-test-reactions-icon-type-LIKE data-test-reactions-icon-theme-light"
                            src="https://static.licdn.com/aero-v1/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                            alt="like"
                            data-test-reactions-icon-type="LIKE"
                            data-test-reactions-icon-theme="light"
                          />
                          <span className="text-muted ms-1">5</span>
                        </div>
                      );
                    })}
                </Card.Body>
                <p className="border-top p-2 mb-0 text-center">Mostra tutto</p>
              </Card>
              {/* FINE CARD ATTIVITA */}
              {/* INIZIO CARD FORMAZIONE */}
              <Card className="my-3">
                <Card.Body>
                  <div className="d-flex justify-content-between p-2">
                    <Card.Title>Formazione</Card.Title>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        fill="currentColor"
                        className="bi bi-plus-lg me-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        className="bi bi-eyedropper"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708zM2 12.707l7-7L10.293 7l-7 7H2z" />
                      </svg>
                    </div>
                  </div>

                  <div className="px-3">
                    <div className="d-flex">
                      <div>
                        <img
                          width="48"
                          src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1723680000&amp;v=beta&amp;t=zg1tmhGtXpbPBAmTL_24SZvTaU27NltAj4R2tzePhg4"
                          loading="lazy"
                          height="48"
                          alt="Logo di EPICODE"
                          id="ember1798"
                          className="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view"
                        />
                      </div>
                      <div>
                        <p className="my-0">EPICODE</p>
                        <p className="text-secondary mt-0">
                          feb 2024 - ago 2024
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-gem mx-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z" />
                        </svg>
                        <span>HTML, CSS + 5 competenze</span>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              {/* FINE CARD FORMAZIONE */}
              {/* INIZIO CARD COMPETENZE */}
              <Card className="my-3">
                <Card.Body>
                  <div className="d-flex justify-content-between p-2">
                    <Card.Title>Competenze</Card.Title>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        fill="currentColor"
                        className="bi bi-plus-lg me-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        className="bi bi-eyedropper"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708zM2 12.707l7-7L10.293 7l-7 7H2z" />
                      </svg>
                    </div>
                  </div>

                  <div className="px-3 border-bottom">
                    <p className="my-0">HTML 5</p>
                    <div className="d-flex">
                      <div className="d-flex ">
                        <img
                          width="48"
                          src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1723680000&amp;v=beta&amp;t=zg1tmhGtXpbPBAmTL_24SZvTaU27NltAj4R2tzePhg4"
                          loading="lazy"
                          height="48"
                          alt="Logo di EPICODE"
                          id="ember1798"
                          className="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view"
                        />
                        <p className="my-2 ">EPICODE</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-3 border-bottom">
                    <p className="my-0">CSS</p>
                    <div className="d-flex">
                      <div className="d-flex ">
                        <img
                          width="48"
                          src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1723680000&amp;v=beta&amp;t=zg1tmhGtXpbPBAmTL_24SZvTaU27NltAj4R2tzePhg4"
                          loading="lazy"
                          height="48"
                          alt="Logo di EPICODE"
                          id="ember1798"
                          className="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view"
                        />
                        <p className="my-2 ">EPICODE</p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <p className="border-top p-2 mb-0 text-center">
                  Mostra tutte le competenze (8)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                  </svg>
                </p>
              </Card>
              {/* FINE CARD COMPETENZE */}
              {/* INIZIO CARD INTERESSI  */}
              <Card>
                <Card.Header>
                  <Nav defaultActiveKey="#first">
                    <Nav.Item>
                      <Nav.Link
                        className={
                          isClicked
                            ? "text-success border-bottom border-success"
                            : "text-secondary"
                        }
                        onClick={handleClick}
                        href="#aziende"
                      >
                        Aziende
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        className={
                          isClicked2
                            ? "text-success border-bottom border-success"
                            : "text-secondary"
                        }
                        onClick={handleClick2}
                        href="#gruppi"
                      >
                        Gruppi
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        className={
                          isClicked3
                            ? "text-success border-bottom border-success"
                            : "text-secondary"
                        }
                        onClick={handleClick3}
                        href="#Scuole"
                      >
                        Scuole o università
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body className="d-flex gap-5">
                  <div className="d-flex mx-1">
                    <img
                      width="48"
                      src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1723680000&amp;v=beta&amp;t=zg1tmhGtXpbPBAmTL_24SZvTaU27NltAj4R2tzePhg4"
                      loading="lazy"
                      height="48"
                      alt="Logo di EPICODE"
                      id="ember1798"
                      className="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view"
                    />
                    <div>
                      <div className="my-0 fw-bold">Epicode</div>
                      <div className="my-0 text-secondary">
                        15.000 follower{" "}
                      </div>
                      <Button
                        className="border mb-3 border-black p-0 px-3 py-1 rounded-pill"
                        variant="ligth"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-check2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                        </svg>
                        <span className="mx-1">Già segui</span>
                      </Button>
                    </div>
                  </div>
                  <div className="d-flex mx-1">
                    <img
                      width="48"
                      src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1723680000&amp;v=beta&amp;t=zg1tmhGtXpbPBAmTL_24SZvTaU27NltAj4R2tzePhg4"
                      loading="lazy"
                      height="48"
                      alt="Logo di EPICODE"
                      id="ember1798"
                      className="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view"
                    />
                    <div>
                      <div className="my-0 fw-bold">Epicode</div>
                      <div className="my-0 text-secondary">
                        15.000 follower{" "}
                      </div>
                      <Button
                        className="border mb-3 border-black p-0 px-3 py-1 rounded-pill"
                        variant="ligth"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-check2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                        </svg>
                        <span className="mx-1">Già segui</span>
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              {/* FINE CARD INTERESSI  */}
            </Col>
            {/* INIZIO SECONDA COLONNA */}
            <Col xs={12} lg={3}>
              {/* INIZIO CARD LINGUA E URL */}
              <Card className="mb-2  w-100">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <Card.Title>Lingua del profilo </Card.Title>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eyedropper"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708zM2 12.707l7-7L10.293 7l-7 7H2z" />
                    </svg>
                  </div>
                  <p>Italiano</p>
                  <div className="d-flex justify-content-between">
                    <Card.Title>Profilo pubblico e URL </Card.Title>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eyedropper"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708zM2 12.707l7-7L10.293 7l-7 7H2z" />
                    </svg>
                  </div>
                  <p>link</p>
                </Card.Body>
              </Card>
              {/* FINE CARD LINGUA E URL */}
              <img
                src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                width={"100%"}
                className="mb-2 rounded"
                alt=""
              />
              {/* INIZIO CARD PROFILI SIMILI */}
              <Card className="mb-2">
                <Card.Body>
                  <Card.Subtitle className="mb-2 ">
                    Altri profili simili
                  </Card.Subtitle>
                  {profili &&
                    profili.slice(0, 5).map((profilo) => {
                      return (
                        <div
                          key={profilo._id}
                          className="d-flex mt-2 border-bottom"
                        >
                          <div
                            style={{
                              maxWidth: "70px",
                              maxHeight: "70px",
                              aspectRatio: "1/1",
                            }}
                            className=" border border-light border-5 rounded-circle overflow-hidden"
                          >
                            <img
                              src={profilo.image}
                              alt="profile"
                              style={{
                                width: "100%",
                                objectFit: "cover",
                                height: "100%",
                                aspectRatio: "1 / 1",
                              }}
                            />
                          </div>
                          <div className="d-flex mx-1">
                            <div>
                              <p className="my-0">
                                {profilo.name} {profilo.surname}
                              </p>
                              <p className="my-0">{profilo.title} </p>
                              <Button
                                className="border mb-3 border-black p-0 px-3 py-1 rounded-pill"
                                variant="ligth"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-send-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                                </svg>
                                <span className="mx-1">Messaggio</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </Card.Body>
                <p className="border-top p-2 mb-0 text-center">Mostra tutto</p>
              </Card>
              {/* FINE CARD PROFILI SIMILI */}
              {/* INIZIO PERSONE CHE POTRESTI CONOSCERE */}
              <Card className="mb-2">
                <Card.Body>
                  <Card.Subtitle className="mb-2 ">
                    Persone che potresti conoscere
                  </Card.Subtitle>
                  <span className="text-muted">Del tuo settore</span>
                  {profili &&
                    profili.slice(6, 10).map((profilo) => {
                      return (
                        <div
                          key={profilo._id}
                          className="d-flex mt-2 border-bottom"
                        >
                          <div
                            style={{
                              maxWidth: "70px",
                              maxHeight: "70px",
                              aspectRatio: "1/1",
                            }}
                            className=" border border-light border-5 rounded-circle overflow-hidden"
                          >
                            <img
                              src={profilo.image}
                              alt="profile"
                              style={{
                                width: "100%",
                                objectFit: "cover",
                                height: "100%",
                                aspectRatio: "1 / 1",
                              }}
                            />
                          </div>
                          <div className="d-flex mx-1">
                            <div>
                              <p className="my-0">{profilo.name}</p>
                              <p className="my-0">{profilo.title} </p>
                              <Button
                                className="border mb-3 border-black p-0 px-3 py-1 rounded-pill"
                                variant="ligth"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-person-plus-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                  <path d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                                </svg>
                                <span className="mx-1">Collegati</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </Card.Body>
                <p className="border-top p-2 mb-0 text-center">Mostra tutto</p>
              </Card>
              {/* FINE PERSONE CHE POTRESTI CONOSCERE */}
              <img
                src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                width={"100%"}
                className="mb-2 rounded"
                alt=""
              />
            </Col>
            {/* FINE SECONDA COLONNA */}
          </Row>
          <MyFooter />
        </Container>
      </>
    )
  );
};

export default MyProfile;
