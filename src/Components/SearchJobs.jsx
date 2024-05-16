import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Nav, Row, Tab } from "react-bootstrap";

const SearchJobs = () => {
  const formatInputDate = (dateString) => {
    const date = dateString.slice(0, 10);
    return date;
  };
  const myKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmQ5MjE2N2U1MzAwMTVmYTY5NmYiLCJpYXQiOjE3MTU1ODQ0MDIsImV4cCI6MTcxNjc5NDAwMn0.Ok0_vafY6vDobp0aoeNBS9RlvytHX3veJb6PlPGP7nE";

  const URL = "https://strive-benchmark.herokuapp.com/api/jobs";
  //   const shuffleArray = (array) => {
  //     return array.sort(() => Math.random() - 0.5);
  //   };
  const companyFetch = async () => {
    try {
      const response = await fetch(URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${myKey}`,
        },
      });
      if (response.ok) {
        const data = await response.json();

        setCompany(data);
      } else {
        alert("Errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [company, setCompany] = useState(null);
  useEffect(() => {
    companyFetch();
  }, []);
  console.log(company);
  return (
    <>
      <Container className="bg-white rounded customRow  " style={{ maxWidth: "1128px", marginTop: "65px" }}>
        <Tab.Container className=" h-100">
          <Row className="h-100  ">
            <Col style={{ overflowY: "auto" }} xs={12} md={5} className="p-0 h-100  ">
              <div className="d-flex justify-content-between p-2">
                <div>
                  <Card.Title>Trova il tuo prossimo ruolo</Card.Title>
                  <p>Sulla base del tuo profilo e della tua cronologia delle ricerche</p>
                </div>
              </div>
              <Nav variant="pills" className="flex-column">
                {company &&
                  company.data.slice(0, 20).map((compagnie) => {
                    return (
                      <Nav.Item key={compagnie._id} className=" border-bottom">
                        <Nav.Link className="customTabLink rounded-0" eventKey={compagnie._id}>
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
                              <p className="my-0 text-primary">{compagnie.title} </p>
                              <p className="my-0 text-dark">{compagnie.company_name}</p>
                              <p className="my-0 text-secondary">{compagnie.candidate_required_location}</p>
                              <p className="text-secondary mt-0">
                                Solitamente le candidature vengono esaminate entro 3 giorni
                              </p>
                            </div>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                    );
                  })}
              </Nav>
            </Col>
            <Col style={{ overflowY: "auto" }} xs={12} md={7} className="p-2 d-none d-md-block h-100 ">
              <Tab.Content>
                {company &&
                  company.data.slice(0, 20).map((compagnie, index) => {
                    return (
                      <Tab.Pane key={index} eventKey={compagnie._id}>
                        <div>
                          <p className="m-0 mt-1">{compagnie.company_name}</p>

                          <div className="d-flex justify-content-end gap-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              className="bi bi-arrow-90deg-right"
                              viewBox="0 0 16 16"
                            >
                              <path d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              className="bi bi-three-dots"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                          </div>
                          <div className="d-flex">
                            <p className="fs-2">{compagnie.title}</p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              className="bi bi-shield-check m-3"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                              <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-secondary"> {formatInputDate(compagnie.publication_date)}</p>
                            <p className="text-secondary">{compagnie.job_type}</p>
                          </div>
                          <div className="d-flex">
                            <Button className="rounded-pill" variant="primary">
                              Candidati
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-up-right-square"
                                viewBox="0 0 16 16"
                              >
                                <path d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                              </svg>
                            </Button>
                            <Button className="rounded-pill border-primary text-primary" variant="">
                              Salva
                            </Button>
                          </div>
                          <div dangerouslySetInnerHTML={{ __html: compagnie.description }} />
                          <div className="border p-2">
                            <p className="fw-bold">Raggiungi i tuoi obiettivi più velocemente con premium</p>
                            <p>
                              Accedi a informazioni esclusive sui candidati, scopri le offerte di lavoro per cui
                              rientreresti fra i migliori candidati, e tanto altro
                            </p>
                            <div className="d-flex ms-1">
                              <img
                                className="rounded-circle"
                                style={{ width: "25px", height: "25px" }}
                                src="https://media.licdn.com/media/AAUQAgE2AAgAAQAAAAAAAAHzAAAAJGJiZDM1MGJkLTIzOTAtNDhmMS1hZTM5LTEzZDk2NWQ4ZDhjYQ.png"
                                alt=""
                              />
                              <img
                                className="rounded-circle"
                                style={{ width: "25px", height: "25px" }}
                                src="https://media.licdn.com/media/AAUQAgE2AAgAAQAAAAAAAAdKAAAAJDQ1YjQ5MTk5LTY2ZGUtNDI2MC05YmQ1LTE3YjE4ZWNlN2ZkYg.png"
                                alt=""
                              />
                              <img
                                className="rounded-circle"
                                style={{ width: "25px", height: "25px" }}
                                src="https://media.licdn.com/media/AAUQAgE2AAgAAQAAAAAAAAhCAAAAJDBmNzFjMzUzLWFlNTAtNDRkZi1hNmZlLTljNjI0MzRlMmY4YQ.png"
                                alt=""
                              />
                              <p style={{ fontSize: "0.7rem" }} className="text-secondary p-1 ">
                                Milioni di utenti usano Premium
                              </p>
                            </div>
                            <Button className="rounded-pill ms-1" style={{ backgroundColor: "#E9A53F" }} variant="">
                              Prova Premium per 0 euro
                            </Button>
                            <p style={{ fontSize: "0.7rem" }} className="text-secondary p-1 ms-1 ">
                              Prova gratuita di 1 mese. Ti invieremo un promemoria 7 giorni prima della fine del periodo
                              di prova.
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>
                    );
                  })}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
};
export default SearchJobs;
