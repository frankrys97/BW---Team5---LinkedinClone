import { Card, Col, Container, Nav, Placeholder, Row, Tab } from 'react-bootstrap'

const LoadingSearch = () => {
  return (
    <Container className="bg-white rounded customRow  " style={{ maxWidth: '1128px', marginTop: '65px' }}>
      <Tab.Container className=" h-100">
        <Row className="h-100  ">
          <Col style={{ overflowY: 'auto' }} xs={12} md={5} className="p-0 h-100  ">
            <div className="d-flex justify-content-between p-2">
              <div>
                <Card.Title>Trova il tuo prossimo ruolo</Card.Title>
                <p>Sulla base del tuo profilo e della tua cronologia delle ricerche</p>
              </div>
            </div>
            <Nav variant="pills" className="flex-column">
              {[...Array(20).keys()].map((_, index) => {
                return (
                  <Nav.Item key={index} className=" border-bottom">
                    <Nav.Link className="customTabLink rounded-0" eventKey={index}>
                      <div className="d-flex">
                        <div>
                          <Placeholder animation="glow">
                            <div style={{ width: 48, height: 48 }}>
                              <Placeholder bg="secondary" className="w-100 h-100" />
                            </div>
                          </Placeholder>
                        </div>
                        <div className="w-100">
                          <Placeholder as={Card.Title} animation="glow">
                            <Placeholder bg="secondary" xs={5} className="ms-2" />
                          </Placeholder>
                          <Placeholder as={Card.Text} animation="glow">
                            <Placeholder bg="secondary" xs={8} className="ms-2" />
                            <Placeholder bg="secondary" xs={10} className="ms-2" />
                            <Placeholder bg="secondary" xs={7} className="ms-2 mb-4" />
                          </Placeholder>
                        </div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                )
              })}
            </Nav>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}
export default LoadingSearch
