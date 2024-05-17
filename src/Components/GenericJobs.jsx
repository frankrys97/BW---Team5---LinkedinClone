import { useEffect, useState } from 'react'
import { Button, Card, CardBody, Col, Container, Dropdown, Row } from 'react-bootstrap'
import LoadingJobs from './LoadingJob'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getJob, selectJob } from '../redux/actions'

const GenericJobs = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const savedJob = useSelector((state) => state.job.savedJob)
  const [servicesDropdownOpen] = useState(false)

  const myKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmQ5MjE2N2U1MzAwMTVmYTY5NmYiLCJpYXQiOjE3MTU1ODQ0MDIsImV4cCI6MTcxNjc5NDAwMn0.Ok0_vafY6vDobp0aoeNBS9RlvytHX3veJb6PlPGP7nE'

  const URL = 'https://strive-benchmark.herokuapp.com/api/jobs'
  //   const shuffleArray = (array) => {
  //     return array.sort(() => Math.random() - 0.5);
  //   };
  const companyFetch = async () => {
    try {
      const response = await fetch(URL, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${myKey}`,
        },
      })
      if (response.ok) {
        const data = await response.json()

        // console.log(data);
        // const shuffle = shuffleArray(data);
        // console.log(shuffle);
        setCompany(data)
      } else {
        alert('Errore nella fetch')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const [company, setCompany] = useState(null)
  useEffect(() => {
    companyFetch()
  }, [])
  return (
    <>
      <Container style={{ paddingTop: '65px' }}>
        <Row className="justify-content-center">
          {/* Prima Colonna */}
          <Col xs={12} className="p-0 first-column ">
            <Card className=" contBody">
              <Card.Body>
                <div className="d-flex my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    className="bi bi-bookmark-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                  </svg>
                  <p className="fw-bold ms-1" style={{ fontSize: '0.8rem' }}>
                    Le mie offerte di lavoro
                  </p>
                </div>
                <div className="d-flex my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    className="bi bi-list-ul"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  </svg>
                  <p className="fw-bold ms-1" style={{ fontSize: '0.8rem' }}>
                    Preferenze
                  </p>
                </div>
                <div className="d-flex my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    className="bi bi-clipboard-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                  </svg>
                  <p className="fw-bold ms-1" style={{ fontSize: '0.8rem' }}>
                    Valutazioni delle competenze
                  </p>
                </div>
                <div className="d-flex my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    className="bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                  </svg>
                  <p className="fw-bold ms-1" style={{ fontSize: '0.8rem' }}>
                    Indicazioni per chi cerca lavoro
                  </p>
                </div>
              </Card.Body>
            </Card>
            <Button className=" d-flex p-2 my-3 rounded-pill border border-primary" variant="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-pencil-square m-2 text-primary "
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
              </svg>
              <p className="text-primary px-3 m-0">Pubblica offerta gratuita</p>
            </Button>
            <div></div>
          </Col>
          <Col xs={12} className="p-0 second-column  md-0  ">
            {savedJob.length > 0 && (
              <Card className="mb-2">
                <CardBody>
                  <Card.Title>Offerte salvate</Card.Title>
                  {savedJob.map((compagnie) => (
                    <div
                      key={compagnie._id}
                      className="px-3 border-bottom"
                      onClick={() => {
                        dispatch(selectJob(compagnie))
                        dispatch(getJob(null))
                        navigate('/searchjobs')
                      }}
                    >
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
                          <p className="my-0">{compagnie.company_name}</p>
                          <p className="my-0 text-secondary">{compagnie.candidate_required_location}</p>
                          <p className="text-secondary mt-0">
                            Solitamente le candidature vengono esaminate entro 3 giorni
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardBody>
              </Card>
            )}
            <Card>
              <Card.Body>
                <div className="d-flex justify-content-between p-2">
                  <div>
                    <Card.Title>Trova il tuo prossimo ruolo</Card.Title>
                    <p>Sulla base del tuo profilo e della tua cronologia delle ricerche</p>
                  </div>
                </div>
                {company ? (
                  company.data.slice(0, 8).map((compagnie) => {
                    return (
                      <div
                        key={compagnie._id}
                        className="px-3 border-bottom"
                        onClick={() => {
                          dispatch(selectJob(compagnie))
                          dispatch(getJob(null))
                          navigate('/searchjobs')
                        }}
                      >
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
                            <p className="my-0">{compagnie.company_name}</p>
                            <p className="my-0 text-secondary">{compagnie.candidate_required_location}</p>
                            <p className="text-secondary mt-0">
                              Solitamente le candidature vengono esaminate entro 3 giorni
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                ) : (
                  <LoadingJobs />
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} className="p-0 third-column  d-none d-lg-block" style={{ width: '300px' }}>
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
                  <small style={{ fontSize: '10px' }}>Servizi alle aziende</small>
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
                    <small>Acquisisci clienti e fai crescere la tua Azienda</small>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <h6>Inizia con Premium</h6>
                    <small>Assumi su Linkedin</small>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <h6>Centro Amministrazione</h6>
                    <small>Gestisci i dettagli di fatturazione e account</small>
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
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default GenericJobs
