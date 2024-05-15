import {
  Button,
  ButtonGroup,
  Col,
  Collapse,
  Container,
  Dropdown,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../style/myHome.css'
import { useSelector } from 'react-redux'
import LoadingPost from './LoadingPost'

const MyHome = () => {
  const myProfile = useSelector((state) => state.myProfile.content)
  const [consigliaClicked, setConsigliaClicked] = useState({})
  const [open, setOpen] = useState(false)
  const [posts, setPosts] = useState([])

  const handleConsigliaClick = (postId) => {
    setConsigliaClicked((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }))
  }
  const focusCommentInput = (inputId) => {
    document.getElementById(inputId).focus()
  }

  const myKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzFlMjE2N2U1MzAwMTVmYTY5N2EiLCJpYXQiOjE3MTU1ODU1MDYsImV4cCI6MTcxNjc5NTEwNn0.oecTaz47mECzpHB7UYiFAMc5nr_2z96dIgXr_PhM62o'
  const URL = 'https://striveschool-api.herokuapp.com/api/posts'
  const getPosts = async () => {
    try {
      const response = await fetch(URL, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${myKey}`,
        },
      })
      if (response.ok) {
        const data = await response.json()
        const result = data.slice(4, 14)
        setPosts(result)
      } else {
        alert('Errore nella fetch')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  function subDate(dataString) {
    const dataPost = new Date(dataString)
    const today = new Date()
    const diffMill = today - dataPost
    const millDay = 1000 * 60 * 60 * 24
    const days = Math.floor(diffMill / millDay)
    const weeks = Math.floor(days / 7)
    const months = Math.floor(days / 30)

    if (days <= 6) {
      return days === 1 ? '1 giorno' : `${days} giorni`
    } else if (days <= 28) {
      return weeks === 1 ? '1 settimana' : `${weeks} settimane`
    } else {
      return months === 1 ? '1 mese' : `${months} mesi`
    }
  }

  return (
    myProfile && (
      <Container style={{ paddingTop: '65px' }}>
        <Row className="justify-content-center">
          {/* Prima Colonna */}
          <Col xs={12} className="p-0 first-column ">
            <ListGroup className="mb-1">
              <ListGroup.Item className="text-center">
                <div className="rounded-top position-absolute end-0 start-0 top-0 overflow-hidden imgContainer">
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
                  <small className="text-body-secondary">Junior Full-Stack</small>
                )}
              </ListGroup.Item>

              <Collapse in={open}>
                <div id="example-collapse-text" className="d-md-block" style={{ marginBlockStart: -1 }}>
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
                  <ListGroup.Item action variant="light" className="text-center fw-semibold">
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
                    <Button variant="outline-light" className="border-0 text-dark">
                      <i className="bi bi-image text-primary"></i> Contenuti multimediali
                    </Button>
                    <Button variant="outline-light" className="border-0 text-dark">
                      <i className="bi bi-calendar3 text-warning"></i> Evento
                    </Button>
                    <Button variant="outline-light" className="border-0 text-dark">
                      <i className="bi bi-layout-text-window-reverse text-warning-emphasis"></i> Scrivi un articolo
                    </Button>
                  </ButtonGroup>
                </Row>
              </ListGroupItem>
            </ListGroup>
            <div className="d-flex align-items-center">
              <div className="my-3 bg-dark-subtle me-2 flex-grow-1" style={{ height: '2px' }}></div>
              <small className="d-inline-block">Seleziona la visualizzazione del feed:</small>
              <Dropdown data-bs-theme="light" className="">
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="transparent" className="">
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

            {/* Post */}
            {posts.length > 0
              ? posts.map((post) => {
                  const isConsigliaClicked = consigliaClicked[post._id]

                  return (
                    <ListGroup className="mb-2" key={post._id}>
                      <ListGroupItem>
                        <div className="d-flex">
                          <Image src={post.user.image} className="rounded-circle " style={{ width: 60, height: 60 }} />
                          <div className="ms-2">
                            <p className="mb-0">
                              {post.user.name} {post.user.surname}
                            </p>
                            <p className="mb-0">{post.user.username}</p>
                            <small>
                              {subDate(post.createdAt)} <i className="bi bi-dot"></i> <i className="bi bi-globe2"></i>
                            </small>
                          </div>
                        </div>
                        <p className="mb-0">{post.text}</p>
                      </ListGroupItem>
                      <ListGroupItem style={{ width: '100%', height: '300px' }} className="overflow-hidden p-0">
                        <Image
                          fluid
                          src="https://images.unsplash.com/photo-1715596828741-3e2aa6bc3aff?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                      </ListGroupItem>
                      <ListGroupItem>
                        <ButtonGroup className="d-flex justify-content-between">
                          <Button
                            variant={isConsigliaClicked ? 'primary' : 'outline-light'}
                            className={`border-0 text-${isConsigliaClicked ? 'light' : 'dark'}`}
                            onClick={() => handleConsigliaClick(post._id)}
                          >
                            <i className={`bi bi-hand-thumbs-up${isConsigliaClicked ? '-fill' : ''}`}></i> Consiglia
                          </Button>
                          <Button
                            variant="outline-light"
                            className="border-0 text-dark"
                            onClick={() => focusCommentInput(`commentInput-${post._id}`)}
                          >
                            <i className="bi bi-chat-dots"></i> Commenta
                          </Button>
                          <Button variant="outline-light" className="border-0 text-dark">
                            <i className="bi bi-repeat"></i> Diffondi il post
                          </Button>
                          <Button variant="outline-light" className="border-0 text-dark">
                            <i className="bi bi-send-fill "></i> Invia
                          </Button>
                        </ButtonGroup>
                        <div className="mt-2" style={{ display: 'flex', alignItems: 'center' }}>
                          <Image
                            src={myProfile.image}
                            className="rounded-circle z-3 border border-white"
                            alt="profile-img"
                            style={{ width: 48, height: 48, marginRight: '10px' }}
                          />
                          <div style={{ position: 'relative', width: '100%' }}>
                            <input
                              id={`commentInput-${post._id}`}
                              type="text"
                              className=""
                              placeholder="Aggiungi un commento..."
                              style={{
                                width: '100%',
                                padding: '4px',
                                border: '1px solid #f0f0f0',
                                borderRadius: '20px',
                              }}
                            />
                            <div
                              style={{
                                position: 'absolute',
                                right: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              <i className="bi bi-emoji-smile" style={{ marginRight: '7px', fontSize: '20px' }}></i>
                              <i className="bi bi-card-image" style={{ marginRight: '7px', fontSize: '20px' }}></i>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                  )
                })
              : [...Array(10).keys()].map((_, i) => <LoadingPost key={i} />)}
          </Col>
          {/*  */}

          {/*  */}
          {/* Terza Colonna */}
          <Col xs={12} className="p-0 third-column d-none d-lg-block" style={{ width: '300px' }}>
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
              <small className="text-center fw-semibold">Linkedin Corporation &copy; 2024</small>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  )
}

export default MyHome
