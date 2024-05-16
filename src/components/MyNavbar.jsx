import { Container, Nav, NavDropdown, Navbar, Form, Button, Col, Badge } from "react-bootstrap";
import logo from "../assets/linkedIn-logo.png";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import premium from "../assets/linkedin-premium.png";
import MyOffcanvas from "./NavbarOffcanvas";
import { getMyProfile } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const MyNavbar = () => {
  // const [isOverlay, setIsOverlay] = useState(false);
  const myProfile = useSelector((state) => state.myProfile.content);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showToolbar, setShowToolbar] = useState(false);

  useEffect(() => {
    dispatch(getMyProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Imposta la visibilità della toolbar in base alla posizione dello scroll
      setShowToolbar(scrollPosition > 500); // Cambia 100 con l'altezza desiderata
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {myProfile && (
        <Container fluid className="header z-3 p-0 position-fixed w-100 mb-1 top-0">
          <section className={`toolbar ${showToolbar ? "show-toolbar" : ""}`}>
            <Container className="navbar-container mt-1">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={myProfile.image}
                    alt="profile"
                    className="rounded-circle"
                    style={{ width: 34, height: 34 }}
                  />

                  <div className="d-flex flex-column">
                    <h5 className="m-0">
                      {myProfile.name} {myProfile.surname}
                    </h5>
                    {myProfile.bio ? (
                      <p className="m-0">{myProfile.bio}</p>
                    ) : (
                      <p className="m-0">Aggiungi una descrizione</p>
                    )}
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <Button variant="outline-dark" className="rounded rounded-pill">
                    Altro
                  </Button>
                  <Button variant="outline-primary" className="rounded rounded-pill">
                    Aggiungi sezione al profilo
                  </Button>
                  <Button variant="primary" className="rounded rounded-pill">
                    Disponibile per
                  </Button>
                </div>
              </div>
            </Container>
          </section>

          <Navbar
            expand="md"
            className="bg-white border-bottom border-0 p-0

        
    "
          >
            {/* {isOverlay && (
              <div
                className="overlay"
                onClick={() => setIsOverlay(false)}
              ></div>
            )} */}

            <Container className="navbar-container d-flex gap-5">
              <div className="d-flex">
                <Navbar.Brand href="#home" className="p-0">
                  <img src={logo} alt="logo" width={34} height={34} />
                </Navbar.Brand>
                <Form className="position-relative w-100">
                  <Form.Control
                    type="search"
                    placeholder="Cerca"
                    className="px-5 rounded rounded-2 border border-0 custom-placeholder w-100 "
                    aria-label="Search"
                    // onFocus={() => setIsOverlay(true)}
                    // onBlur={() => setIsOverlay(false)}
                  />
                  <FaSearch className="position-absolute top-50 translate-middle-y ms-3" />
                </Form>
              </div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                  className="d-flex flex-column w-100 justify-content-start flex-md-row justify-content-md-between align-items-start"
                  id="navMain"
                >
                  <Link
                    to={"/"}
                    className="nav-link d-flex flex-column align-items-md-center align-items-start gap-1 gap-md-0"
                  >
                    <div className="position-relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="gray"
                        className="bi bi-house-door-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                      </svg>
                      <Badge
                        bg="danger"
                        className="position-absolute top-0 start-100 translate-middle rounded-circle mt-1"
                        style={{ fontSize: "10px" }}
                      >
                        1
                      </Badge>
                    </div>

                    <p className="mb-0" style={{ fontSize: "12px" }}>
                      Home
                    </p>
                  </Link>
                  <Link
                    to={"/"}
                    className="nav-link d-flex flex-column align-items-md-center align-items-start gap-1 gap-md-0 "
                  >
                    <div className="position-relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="gray"
                        className="bi bi-people-fill "
                        viewBox="0 0 16 16"
                      >
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                      </svg>
                      <Badge
                        bg="danger"
                        className="position-absolute top-0 start-100 translate-middle rounded-circle mt-1"
                        style={{ fontSize: "10px" }}
                      >
                        2
                      </Badge>
                    </div>

                    <p className="mb-0" style={{ fontSize: "12px" }}>
                      Rete
                    </p>
                  </Link>
                  <Link
                    to={"/genericjobs"}
                    className="nav-link d-flex flex-column align-items-md-center align-items-start gap-1 gap-md-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="gray"
                      className="bi bi-briefcase-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                      <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                    </svg>

                    <p className="mb-0" style={{ fontSize: "12px" }}>
                      Lavoro
                    </p>
                  </Link>
                  <Link
                    to={"/"}
                    className="nav-link d-flex flex-column align-items-md-center align-items-start gap-1 gap-md-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="gray"
                      className="bi bi-chat-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                    </svg>

                    <p className="mb-0" style={{ fontSize: "12px" }}>
                      Messaggistica
                    </p>
                  </Link>
                  <Link
                    to={"/"}
                    className="nav-link d-flex flex-column align-items-md-center align-items-start gap-1 gap-md-0"
                  >
                    <div className="position-relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="gray"
                        className="bi bi-bell-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                      </svg>
                      <Badge
                        bg="danger"
                        className="position-absolute top-0 start-100 translate-middle rounded-circle mt-1"
                        style={{ fontSize: "10px" }}
                      >
                        20
                      </Badge>
                    </div>

                    <p className="mb-0" style={{ fontSize: "12px" }}>
                      Notifiche
                    </p>
                  </Link>

                  <div
                    className="nav-link d-flex flex-column align-items-md-center align-items-start gap-1 gap-md-0 
               border border-bottom-0 border-top-0 border-start-0"
                  >
                    <img src={logo} alt="logo" className="rounded-circle" width={25} height={25} />

                    <NavDropdown title="Tu" id="basic-nav-dropdown" align={"end"} className="m-0">
                      <NavDropdown.Item onClick={() => navigate("/profile_my")}>
                        <div className="d-flex gap-2">
                          <Col>
                            <img src={myProfile.image} alt="  logo" width={40} height={40} className="rounded-circle" />
                          </Col>
                          <Col>
                            <div>
                              <h5>
                                {myProfile.name} {myProfile.surname}
                              </h5>
                              <p
                                className="mb-0"
                                style={{
                                  color: "gray",
                                  fontSize: "12px",
                                  maxWidth: "200px",
                                  //   textOverflow: "ellipsis",
                                  //   overflow: "hidden",
                                  whiteSpace: "initial",
                                }}
                              >
                                Junior Full-Stack Developer 💻 I Web Marketing 🚀 I Local Marketing 🗣 I Business
                                Management 📈
                              </p>
                            </div>
                          </Col>
                        </div>
                        <Button
                          variant="outline-primary"
                          className="w-100 mt-3 rounded rounded-5"
                          onClick={() => navigate("/profile_my")}
                        >
                          Visualizza profilo
                        </Button>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <h5 className="ms-3">Account</h5>
                      <NavDropdown.Item href="#action/3.4">
                        <div className="d-flex align-items-center">
                          <img src={premium} alt="" width={15} height={15} />
                          <p className="mb-0 ms-2 fw-semibold" style={{ color: "gray", fontSize: "16px" }}>
                            Passa a Premium con 0 EUR
                          </p>
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Impostazioni e privacy </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Guida </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Lingua </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <h5 className="ms-3">Gestisci</h5>
                      <NavDropdown.Item href="#action/3.4">Post e attività </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action/3.4"
                        style={{
                          maxWidth: "250px",
                          wordBreak: "break-word",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Account per la pubblicazione di contenuti ufficiali per la tua sezione profilo{" "}
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Esci </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  <MyOffcanvas />
                  <Link
                    to={"/"}
                    className="nav-link d-flex flex-column align-items-center premiumLink"
                    style={{ fontSize: "12px" }}
                  >
                    <p className="mb-0">Passa a Premium</p>
                    <span>gratis</span>
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      )}
    </>
  );
};

export default MyNavbar;
