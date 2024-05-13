import { Col, Image, ListGroup, Row } from 'react-bootstrap'
import img from '../assets/images.jpeg'
import { NavLink } from 'react-router-dom'

const MyHome = () => {
  return (
    <Row className="pt-4 justify-content-center">
      {/* Prima Colonna */}
      <Col xs={12} className="p-0 first-column ">
        <ListGroup className="mb-1">
          <ListGroup.Item className="text-center">
            <div className="rounded-top position-absolute start-0 top-0 overflow-hidden imgContainer">
              <Image
                src={img}
                className="imgBackground"
                alt="profile-img-background"
                // style={{ height: '56.25px', width: '100%', objectFit: 'cover' }}
              />
              {/* <Image
                src={img}
                className="rounded-top position-absolute start-0 top-0 z-0 imgBackground"
                alt="profile-img-background"
                // style={{ height: '56.25px', width: 225, objectFit: 'cover' }}
              /> */}
            </div>
            <Image
              src={img}
              className="rounded-circle z-3 border border-white mb-4"
              alt="profile-img"
              style={{ width: 72, height: 72 }}
            />
            <NavLink to="/profile_my" className="text-dark">
              <p className="fw-bold m-0">Profilo</p>
            </NavLink>
            <small className="text-body-secondary">descrizione</small>
          </ListGroup.Item>

          <ListGroup.Item action variant="light" className="d-flex justify-content-between align-items-start py-3">
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
        </ListGroup>
        {/*  */}
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
      </Col>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* Seconda colonna */}
      <Col xs={12} className="p-0 second-column mt-md-0 mt-4 ">
        <ListGroup>
          <ListGroup.Item action variant="light">
            Seconda Colonna
          </ListGroup.Item>
        </ListGroup>
      </Col>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* Terza Colonna */}
      <Col xs={12} className="p-0 third-column d-none d-lg-block" style={{ width: '300px' }}>
        <ListGroup>
          <ListGroup.Item action variant="light">
            Terza Colonna
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  )
}

export default MyHome
