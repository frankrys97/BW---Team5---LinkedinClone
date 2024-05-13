import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsFillPlayBtnFill, BsFillSignpostSplitFill } from "react-icons/bs";
import { CgInsights } from "react-icons/cg";
import { GiOnTarget } from "react-icons/gi";
import { IoMdArrowDropdown, IoMdCompass } from "react-icons/io";
import { MdCloudDone } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import { Link } from "react-router-dom";

function MyOffcanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="nav-link d-flex flex-column align-items-md-center align-items-start gap-1 gap-md-0"
        onClick={handleShow}
        id="forDropdownAzienda"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="gray"
          className="bi bi-grid-3x3-gap-fill"
          viewBox="0 0 16 16"
        >
          <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
        </svg>

        <span style={{ fontSize: "12px", color: "gray" }}>
          Per la tua azienda <IoMdArrowDropdown className="fs-5" />
        </span>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Container className="rounded rounded-3 border-2">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <h3>Per le aziende</h3>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body
            className="rounded rounded-3 border-2 overflow-auto"
            style={{ maxHeight: "90vh" }}
          >
            <Row>
              <Col>
                <Card>
                  <Card.Header className="bg-white">
                    <h4>Scopri altri prodotti LinkedIn</h4>
                  </Card.Header>
                  <Card.Body>
                    <Row className="row-cols-4 gy-3 justify-content-start">
                      <Col>
                        <Link
                          to={"/"}
                          className=" nav-link d-flex flex-column align-items-center "
                        >
                          <BsFillPlayBtnFill className="text-primary fs-1 p-1 offcanvas-link " />
                          <span
                            className="text-center"
                            style={{ color: "gray" }}
                          >
                            Learning
                          </span>
                        </Link>
                      </Col>
                      <Col>
                        <Link
                          to={"/"}
                          className=" nav-link d-flex flex-column align-items-center "
                        >
                          <CgInsights className="text-primary fs-1 p-1 offcanvas-link " />
                          <span
                            className="text-center"
                            style={{ color: "gray" }}
                          >
                            Talent Insights
                          </span>
                        </Link>
                      </Col>
                      <Col>
                        <Link
                          to={"/"}
                          className=" nav-link d-flex flex-column align-items-center "
                        >
                          <BsFillSignpostSplitFill className="text-primary fs-1 p-1 offcanvas-link " />
                          <span
                            className="text-center"
                            style={{ color: "gray" }}
                          >
                            Pubblica unofferta di lavoro
                          </span>
                        </Link>
                      </Col>
                      <Col>
                        <Link
                          to={"/"}
                          className=" nav-link d-flex flex-column align-items-center "
                        >
                          <GiOnTarget className="text-primary fs-1 p-1 offcanvas-link " />
                          <span
                            className="text-center"
                            style={{ color: "gray" }}
                          >
                            Pubblicizza
                          </span>
                        </Link>
                      </Col>
                      <Col>
                        <Link
                          to={"/"}
                          className=" nav-link d-flex flex-column align-items-center "
                        >
                          <IoMdCompass className="text-primary fs-1 p-1 offcanvas-link " />
                          <span
                            className="text-center"
                            style={{ color: "gray" }}
                          >
                            Trova nuovi clienti
                          </span>
                        </Link>
                      </Col>
                      <Col>
                        <Link
                          to={"/"}
                          className=" nav-link d-flex flex-column align-items-center "
                        >
                          <TiGroup className="text-primary fs-1 p-1 offcanvas-link " />
                          <span
                            className="text-center"
                            style={{ color: "gray" }}
                          >
                            Gruppi
                          </span>
                        </Link>
                      </Col>
                      <Col>
                        <Link
                          to={"/"}
                          className=" nav-link d-flex flex-column align-items-center "
                        >
                          <MdCloudDone className="text-primary fs-1 p-1 offcanvas-link " />
                          <span
                            className="text-center"
                            style={{ color: "gray" }}
                          >
                            Marketplace di servizi
                          </span>
                        </Link>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                <Card className="mt-3">
                  <Card.Header className="bg-white">
                    <h4>Scopri altro per il business</h4>
                  </Card.Header>
                  <Card.Body>
                    <Row
                      className=" justify-content-start row-cols-1 gy-3"
                      id="altroBusiness"
                    >
                      <Col>
                        <Link
                          to={"/"}
                          className=" nav-link d-flex flex-column align-items-start "
                        >
                          <p className="mb-0 fw-semibold">Assumi su Linkedin</p>
                          <span style={{ color: "gray" }}>
                            Trova, attrai e assumi
                          </span>
                        </Link>
                      </Col>
                      <Col>
                        <Link
                          to={"/"}
                          className=" nav-link d-flex flex-column align-items-start "
                        >
                          <p className="mb-0 fw-semibold">
                            Vendi con LinkedIn{" "}
                          </p>
                          <span style={{ color: "gray" }}>
                            Sblocca nuove opportunità di vendita{" "}
                          </span>
                        </Link>
                      </Col>
                      <Col>
                        <Link
                          to={"/"}
                          className=" nav-link d-flex flex-column align-items-start "
                        >
                          <p className="mb-0 fw-semibold">
                            Offerta di lavoro gratuita{" "}
                          </p>
                          <span style={{ color: "gray" }}>
                            Ottieni rapidamente candidati qualificati{" "}
                          </span>
                        </Link>
                      </Col>
                      <Col>
                        <Link
                          to={"/"}
                          className=" nav-link d-flex flex-column align-items-start "
                        >
                          <p className="mb-0 fw-semibold">
                            Fai pubblicità su LinkedIn{" "}
                          </p>
                          <span style={{ color: "gray" }}>
                            Acquisisci clienti e fai crescere la tua azienda{" "}
                          </span>
                        </Link>
                      </Col>
                      <Col>
                        <Link
                          to={"/"}
                          className=" nav-link d-flex flex-column align-items-start "
                        >
                          <p className="mb-0 fw-semibold">
                            Impara con LinkedIn{" "}
                          </p>
                          <span style={{ color: "gray" }}>
                            Assumi su LinkedIn
                          </span>
                        </Link>
                      </Col>
                      <Col>
                        <Link
                          to={"/"}
                          className=" nav-link d-flex flex-column align-items-start "
                        >
                          <p className="mb-0 fw-semibold">
                            Centro amministrazione{" "}
                          </p>
                          <span style={{ color: "gray" }}>
                            Gestisci i dettagli di fatturazione e account
                          </span>
                        </Link>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                <Card className="mt-3">
                  <Card.Header className="bg-white">
                    <Link to={"/"} className=" nav-link" id="paginaAziendale">
                      <p className="mb-0 fw-semibold">
                        Crea una pagina aziendale +
                      </p>
                    </Link>
                  </Card.Header>
                </Card>
              </Col>
            </Row>
          </Offcanvas.Body>
        </Container>
      </Offcanvas>
    </>
  );
}

export default MyOffcanvas;
