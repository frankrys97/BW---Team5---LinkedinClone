import { Card, Nav, Placeholder } from 'react-bootstrap'

const LoadingSearch = () => {
  return [...Array(20).keys()].map((_, index) => {
    return (
      <Nav.Item key={index} className=" border-bottom">
        <Nav.Link className="customTabLink rounded-0" eventKey={index}>
          <div className="d-flex">
            <div>
              <Placeholder animation="glow">
                <div style={{ width: 48, height: 48 }}>
                  <Placeholder className="w-100 h-100" />
                </div>
              </Placeholder>
            </div>
            <div className="w-100">
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={5} className="ms-2" />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={8} className="ms-2" />
                <Placeholder xs={10} className="ms-2" />
                <Placeholder xs={7} className="ms-2 mb-4" />
              </Placeholder>
            </div>
          </div>
        </Nav.Link>
      </Nav.Item>
    )
  })
}
export default LoadingSearch
