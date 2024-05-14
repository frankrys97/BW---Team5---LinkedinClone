import { useState } from "react";
import { CardText, Col, Container, Nav, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MyProfile = () => {
  //   const [profiles, setProfiles] = useState([]);
  //   const fetchAllProfiles = "https://striveschool-api.herokuapp.com/api/profile/";

  //   const getProfiles = async () => {
  //     try {
  //       const response = await fetch(fetchAllProfiles);
  //       if (response.ok) {
  //         const { data } = await response.json();
  //         setProfiles(data);
  //       } else {
  //         alert("Error fetching results");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getProfiles();
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
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} lg={9}>
            {/* CARD PROFILO */}
            <Card style={{ maxWidth: "100%" }}>
              <Card.Img
                variant="top"
                src="https://media.licdn.com/dms/image/D5616AQHhuOl8wWoGXA/profile-displaybackgroundimage-shrink_350_1400/0/1713451387419?e=1721260800&v=beta&t=-mLQ_fRWVOEQ_3eB8rO_uAqPBCggC01SvrEKXFIRiRo"
              />{" "}
              <Card.Body className="">
                <div>
                  <Card.Img
                    className="rounded-circle profileImg border border-light border-5"
                    variant="top"
                    src="https://media.licdn.com/dms/image/D4D03AQF-8iCJF6IBkw/profile-displayphoto-shrink_800_800/0/1713440802425?e=1721260800&v=beta&t=IWlWS0LVL0UJdZfY2-gkFiqH0nRvAmpli3eSWezM0_I"
                  />
                  <p className="name fs-4">data.name + data.surname</p>
                  <p className="my-0">
                    data.bio Junior Full stack Web Developer / Front End Developer with React | ✓ JavaScript | ✓ React |
                    ✓ HTML | ✓ CSS | ✓ Bootstrap
                  </p>
                  <p className="my-0">
                    <span className="text-secondary">data.area &middot;</span> <a href="">Informazioni di contatto</a>
                  </p>
                  <p style={{ fontSize: "0.8rem" }} className="text-primary ">
                    17 collegamenti
                  </p>
                </div>
                <div className="d-flex">
                  <Button className="mx-1 rounded-pill" variant="primary">
                    Disponibile per
                  </Button>
                  <Button className="mx-1 text-primary border border-primary rounded-pill" variant="ligth">
                    Aggiungi sezione del profilo
                  </Button>
                  <Button className="mx-1 border border-black rounded-pill" variant="ligth">
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
                    </svg>{" "}
                    <span>28 Visualizzazioni del profilo</span>
                    <p className="text-muted">Scopri chi ha visitato il tuo profilo</p>
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
                    <p className="text-muted">Scopri chi sta interagendo con i tuoi post</p>
                    <span className="text-secondary my-0">Ultimi 7 giorni</span>
                  </div>
                </div>
              </Card.Body>
              <CardText className="border-top fw-bold pt-2 text-center">
                <p>
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
                </p>
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
                    <p className="text-muted">Salva e gestisci i tuoi collegamenti e interessi</p>
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
                    <p className="text-muted">Monitora le tue offerte di lavoro, i corsi e gli articoli</p>
                  </div>
                </div>
              </Card.Body>
              <CardText className="border-top fw-bold pt-2 text-center">
                <p>
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
                </p>
              </CardText>
            </Card>
            {/* FINE CARD RISORSE */}
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

                <div className="px-3">qui dentro ci va la bio utente che prenderemo da data.bio</div>
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
                      <Button className="border mb-3 border-primary p-0 px-3 mx-2  rounded-pill" variant="ligth">
                        <span className="mx-1 text-primary">Post</span>
                      </Button>
                      <Button className="border mb-3 border-primary p-0 px-3 mx-2 rounded-pill" variant="ligth">
                        <span className="mx-1 text-primary">Commenti</span>
                      </Button>
                      <Button className="border mb-3 border-primary p-0 px-3 mx-2 rounded-pill" variant="ligth">
                        <span className="mx-1 text-primary">Immagini</span>
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Button className="border mb-3 border-primary p-0 px-3  rounded-pill" variant="ligth">
                      <span className="mx-1 text-primary">Crea un post</span>
                    </Button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="currentColor"
                      className="bi bi-eyedropper mx-3 mb-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708zM2 12.707l7-7L10.293 7l-7 7H2z" />
                    </svg>
                  </div>
                </div>

                <div className="px-3">
                  <div>
                    <p>data.name ha pubblicato questo post &middot; 3s</p>
                    <img
                      className="rounded"
                      src="https://www.solonotizie24.it/wp-content/uploads/2021/02/gerry-scotti-2-solonotizie24-150x92.jpg"
                      alt=""
                    />
                    <span className="mx-3">qui dentro ci va le descrizione del post</span>
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
                <div className="px-3">
                  <div>
                    <p>data.name ha pubblicato questo post &middot; 3s</p>
                    <img
                      className="rounded"
                      src="https://www.solonotizie24.it/wp-content/uploads/2021/02/gerry-scotti-2-solonotizie24-150x92.jpg"
                      alt=""
                    />
                    <span className="mx-3">qui dentro ci va le descrizione del post</span>
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
                <div className="px-3">
                  <div>
                    <p>data.name ha pubblicato questo post &middot; 3s</p>
                    <img
                      className="rounded"
                      src="https://www.solonotizie24.it/wp-content/uploads/2021/02/gerry-scotti-2-solonotizie24-150x92.jpg"
                      alt=""
                    />
                    <span className="mx-3">qui dentro ci va le descrizione del post</span>
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
                      <p className="text-secondary mt-0">feb 2024 - ago 2024</p>
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
                      className={isClicked ? "text-success border-bottom border-success" : "text-secondary"}
                      onClick={handleClick}
                      href="#aziende"
                    >
                      Aziende
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className={isClicked2 ? "text-success border-bottom border-success" : "text-secondary"}
                      onClick={handleClick2}
                      href="#gruppi"
                    >
                      Gruppi
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className={isClicked3 ? "text-success border-bottom border-success" : "text-secondary"}
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
                    <div className="my-0 text-secondary">15.000 follower </div>
                    <Button className="border mb-3 border-black p-0 px-3 py-1 rounded-pill" variant="ligth">
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
                    <div className="my-0 text-secondary">15.000 follower </div>
                    <Button className="border mb-3 border-black p-0 px-3 py-1 rounded-pill" variant="ligth">
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
            <Card className="mb-2 w-100">
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
            {/* INIZIO CARD PROFILI SIMILI */}
            <Card className="mb-2">
              <Card.Body>
                <Card.Subtitle className="mb-2 ">Altri profili simili</Card.Subtitle>
                <div className="d-flex mt-2 border-bottom">
                  <Card.Img
                    className="rounded-circle w-25 h-25 border border-light border-5"
                    variant="top"
                    src="https://media.licdn.com/dms/image/D4D03AQF-8iCJF6IBkw/profile-displayphoto-shrink_800_800/0/1713440802425?e=1721260800&v=beta&t=IWlWS0LVL0UJdZfY2-gkFiqH0nRvAmpli3eSWezM0_I"
                  />
                  <div className="d-flex mx-1">
                    <div>
                      <p className="my-0">Giovanni reder &middot; 2&deg; </p>
                      <p className="my-0">Junior full stack </p>
                      <Button className="border mb-3 border-black p-0 px-3 py-1 rounded-pill" variant="ligth">
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
                <div className="d-flex mt-2 border-bottom">
                  <Card.Img
                    className="rounded-circle w-25 h-25 border border-light border-5"
                    variant="top"
                    src="https://media.licdn.com/dms/image/D4D03AQF-8iCJF6IBkw/profile-displayphoto-shrink_800_800/0/1713440802425?e=1721260800&v=beta&t=IWlWS0LVL0UJdZfY2-gkFiqH0nRvAmpli3eSWezM0_I"
                  />
                  <div className="d-flex mx-1">
                    <div>
                      <p className="my-0">Giovanni reder &middot; 2&deg; </p>
                      <p className="my-0">Junior full stack </p>
                      <Button className="border mb-3 border-black p-0 px-3 py-1 rounded-pill" variant="ligth">
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
                <div className="d-flex mt-2 border-bottom">
                  <Card.Img
                    className="rounded-circle w-25 h-25 border border-light border-5"
                    variant="top"
                    src="https://media.licdn.com/dms/image/D4D03AQF-8iCJF6IBkw/profile-displayphoto-shrink_800_800/0/1713440802425?e=1721260800&v=beta&t=IWlWS0LVL0UJdZfY2-gkFiqH0nRvAmpli3eSWezM0_I"
                  />
                  <div className="d-flex mx-1">
                    <div>
                      <p className="my-0">Giovanni reder &middot; 2&deg; </p>
                      <p className="my-0">Junior full stack </p>
                      <Button className="border mb-3 border-black p-0 px-3 py-1 rounded-pill" variant="ligth">
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
                <div className="d-flex mt-2 border-bottom">
                  <Card.Img
                    className="rounded-circle w-25 h-25 border border-light border-5"
                    variant="top"
                    src="https://media.licdn.com/dms/image/D4D03AQF-8iCJF6IBkw/profile-displayphoto-shrink_800_800/0/1713440802425?e=1721260800&v=beta&t=IWlWS0LVL0UJdZfY2-gkFiqH0nRvAmpli3eSWezM0_I"
                  />
                  <div className="d-flex mx-1">
                    <div>
                      <p className="my-0">Giovanni reder &middot; 2&deg; </p>
                      <p className="my-0">Junior full stack </p>
                      <Button className="border mb-3 border-black p-0 px-3 py-1 rounded-pill" variant="ligth">
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
                <div className="d-flex mt-2">
                  <Card.Img
                    className="rounded-circle w-25 h-25 border border-light border-5"
                    variant="top"
                    src="https://media.licdn.com/dms/image/D4D03AQF-8iCJF6IBkw/profile-displayphoto-shrink_800_800/0/1713440802425?e=1721260800&v=beta&t=IWlWS0LVL0UJdZfY2-gkFiqH0nRvAmpli3eSWezM0_I"
                  />
                  <div className="d-flex mx-1">
                    <div>
                      <p className="my-0">Giovanni reder &middot; 2&deg; </p>
                      <p className="my-0">Junior full stack </p>
                      <Button className="border mb-3 border-black p-0 px-3 py-1 rounded-pill" variant="ligth">
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
              </Card.Body>
              <p className="border-top p-2 mb-0 text-center">Mostra tutto</p>
            </Card>
            {/* FINE CARD PROFILI SIMILI */}
            {/* INIZIO PERSONE CHE POTRESTI CONOSCERE */}
            <Card className="mb-2">
              <Card.Body>
                <Card.Subtitle className="mb-2 ">Persone che potresti conoscere</Card.Subtitle>
                <span className="text-muted">Del tuo settore</span>
                <div className="d-flex mt-2 border-bottom">
                  <Card.Img
                    className="rounded-circle w-25 h-25 border border-light border-5"
                    variant="top"
                    src="https://media.licdn.com/dms/image/D4D03AQF-8iCJF6IBkw/profile-displayphoto-shrink_800_800/0/1713440802425?e=1721260800&v=beta&t=IWlWS0LVL0UJdZfY2-gkFiqH0nRvAmpli3eSWezM0_I"
                  />
                  <div className="d-flex mx-1">
                    <div>
                      <p className="my-0">Giovanni reder &middot; 2&deg; </p>
                      <p className="my-0">Junior full stack </p>
                      <Button className="border mb-3 border-black p-0 px-3 py-1 rounded-pill" variant="ligth">
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
                <div className="d-flex mt-2 border-bottom">
                  <Card.Img
                    className="rounded-circle w-25 h-25 border border-light border-5"
                    variant="top"
                    src="https://media.licdn.com/dms/image/D4D03AQF-8iCJF6IBkw/profile-displayphoto-shrink_800_800/0/1713440802425?e=1721260800&v=beta&t=IWlWS0LVL0UJdZfY2-gkFiqH0nRvAmpli3eSWezM0_I"
                  />
                  <div className="d-flex mx-1">
                    <div>
                      <p className="my-0">Giovanni reder &middot; 2&deg; </p>
                      <p className="my-0">Junior full stack </p>
                      <Button className="border mb-3 border-black p-0 px-3 py-1 rounded-pill" variant="ligth">
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
                <div className="d-flex mt-2 border-bottom">
                  <Card.Img
                    className="rounded-circle w-25 h-25 border border-light border-5"
                    variant="top"
                    src="https://media.licdn.com/dms/image/D4D03AQF-8iCJF6IBkw/profile-displayphoto-shrink_800_800/0/1713440802425?e=1721260800&v=beta&t=IWlWS0LVL0UJdZfY2-gkFiqH0nRvAmpli3eSWezM0_I"
                  />
                  <div className="d-flex mx-1">
                    <div>
                      <p className="my-0">Giovanni reder &middot; 2&deg; </p>
                      <p className="my-0">Junior full stack </p>
                      <Button className="border mb-3 border-black p-0 px-3 py-1 rounded-pill" variant="ligth">
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
                <div className="d-flex mt-2 border-bottom">
                  <Card.Img
                    className="rounded-circle w-25 h-25 border border-light border-5"
                    variant="top"
                    src="https://media.licdn.com/dms/image/D4D03AQF-8iCJF6IBkw/profile-displayphoto-shrink_800_800/0/1713440802425?e=1721260800&v=beta&t=IWlWS0LVL0UJdZfY2-gkFiqH0nRvAmpli3eSWezM0_I"
                  />
                  <div className="d-flex mx-1">
                    <div>
                      <p className="my-0">Giovanni reder &middot; 2&deg; </p>
                      <p className="my-0">Junior full stack </p>
                      <Button className="border mb-3 border-black p-0 px-3 py-1 rounded-pill" variant="ligth">
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
                <div className="d-flex mt-2">
                  <Card.Img
                    className="rounded-circle w-25 h-25 border border-light border-5"
                    variant="top"
                    src="https://media.licdn.com/dms/image/D4D03AQF-8iCJF6IBkw/profile-displayphoto-shrink_800_800/0/1713440802425?e=1721260800&v=beta&t=IWlWS0LVL0UJdZfY2-gkFiqH0nRvAmpli3eSWezM0_I"
                  />
                  <div className="d-flex mx-1">
                    <div>
                      <p className="my-0">Giovanni reder &middot; 2&deg; </p>
                      <p className="my-0">Junior full stack </p>
                      <Button className="border mb-3 border-black p-0 px-3 py-1 rounded-pill" variant="ligth">
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
              </Card.Body>
              <p className="border-top p-2 mb-0 text-center">Mostra tutto</p>
            </Card>
            {/* FINE PERSONE CHE POTRESTI CONOSCERE */}
          </Col>
          {/* FINE SECONDA COLONNA */}
        </Row>
      </Container>
    </>
  );
};

export default MyProfile;