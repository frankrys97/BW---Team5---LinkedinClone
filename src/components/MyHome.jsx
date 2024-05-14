import {
  Button,
  Col,
  Collapse,
  Container,
  Dropdown,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import img from "../assets/images.jpeg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../style/myHome.css";

const MyHome = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container style={{ paddingTop: "65px" }}>
      <Row className="justify-content-center">
        {/* Prima Colonna */}
        <Col xs={12} className="p-0 first-column ">
          <ListGroup className="mb-1">
            <ListGroup.Item className="text-center">
              <div className="rounded-top position-absolute start-0 top-0 overflow-hidden imgContainer">
                <Image
                  src={img}
                  className="imgBackground"
                  alt="profile-img-background"
                />
              </div>
              <Image
                src={img}
                className="rounded-circle border border-2 border-white mb-4 position-relative mt-2 z-1"
                alt="profile-img"
                style={{ width: 72, height: 72 }}
              />
              <NavLink to="/profile_my" className="text-dark">
                <p className="fw-bold m-0">Profilo</p>
              </NavLink>
              <small className="text-body-secondary">descrizione</small>
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
                    src={img}
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
                <Col md="auto">
                  <i className="bi bi-image text-primary"></i> Contenuti
                  multimediali
                </Col>
                <Col md="auto">
                  <i className="bi bi-calendar3 text-warning"></i> Evento
                </Col>
                <Col md="auto">
                  <i className="bi bi-layout-text-window-reverse text-warning-emphasis"></i>{" "}
                  Scrivi un articolo
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
          <div className="d-flex align-items-center">
            <div
              className="my-3 bg-dark-subtle me-2 flex-grow-1"
              style={{ height: "2px" }}
            ></div>
            <small className="d-inline-block">
              Seleziona la visualizzazione del feed:
            </small>
            <Dropdown data-bs-theme="light" className="">
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="transparent"
                className=""
              >
                <small>Dropdown Button</small>
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
              <p className="m-0 fw-semibold">prova</p>
              <small>9 ore fa · 133 lettori</small>
            </ListGroup.Item>
            <ListGroup.Item action variant="light">
              <p className="m-0 fw-semibold">prova</p>
              <small>9 ore fa · 133 lettori</small>
            </ListGroup.Item>
            <ListGroup.Item action variant="light">
              <p className="m-0 fw-semibold">prova</p>
              <small>9 ore fa · 133 lettori</small>
            </ListGroup.Item>

            <div className="d-flex flex-wrap justify-content-center column-gap-4 mt-3">
              <small>
                <p>informazioni</p>
              </small>
              <small>
                <p>Accessibilità</p>
              </small>
              <small>
                <p>Centro assistenza</p>
              </small>
              <small>
                <p>Privacy e condizioni</p>
              </small>
              <small>
                <p>Opzioni per gli annunci pubblicitari</p>
              </small>
              <small>
                <p>Pubblicità</p>
              </small>
              <small>
                <p>Servizi alle aziende</p>
              </small>
              <small>
                <p>Scarica l&apos;app LinkedIn</p>
              </small>
              <small>
                <p>Altro</p>
              </small>
            </div>
            <small className="text-center fw-semibold">
              Linkedin Corporation &copy; 2024
            </small>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MyHome;
