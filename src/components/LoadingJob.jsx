import { Card, Placeholder } from 'react-bootstrap'

const LoadingJobs = () => {
  return (
    <Card className=" contBody">
      <Card.Body>
        <div className="d-flex justify-content-between p-2">
          <div>
            <Card.Title>Trova il tuo prossimo ruolo</Card.Title>
            <p>Sulla base del tuo profilo e della tua cronologia delle ricerche</p>
          </div>
        </div>
        {[...Array(8).keys()].map((_, index) => {
          return (
            <div key={index} className="px-3 border-bottom">
              <div className="d-flex">
                <Placeholder animation="glow" className="mt-2">
                  <div style={{ width: 48, height: 48 }}>
                    <Placeholder className="w-100 h-100" />
                  </div>
                </Placeholder>
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
            </div>
          )
        })}
      </Card.Body>
    </Card>
  )
}

export default LoadingJobs
