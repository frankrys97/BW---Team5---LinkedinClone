import { Button, ButtonGroup, ListGroup, ListGroupItem, Placeholder } from 'react-bootstrap'

const LoadingPost = () => {
  return (
    <ListGroup className="mb-2">
      <ListGroupItem>
        <div className="d-flex">
          <Placeholder animation="glow">
            <div style={{ width: 60, height: 60 }}>
              <Placeholder className="w-100 h-100" />
            </div>
          </Placeholder>
          <div className="ms-2" style={{ width: 100 }}>
            <Placeholder animation="glow">
              <p className="mb-0">
                <Placeholder xs={12} />
              </p>
              <p className="mb-0">
                <Placeholder xs={10} />
              </p>
              <small>
                <Placeholder xs={3} />
                <i className="bi bi-dot"></i> <i className="bi bi-globe2"></i>
              </small>
            </Placeholder>
          </div>
        </div>
        <Placeholder animation="glow" className="mb-0">
          <Placeholder xs={12} />
          <Placeholder xs={12} />
        </Placeholder>
      </ListGroupItem>
      <Placeholder animation="glow">
        <ListGroupItem style={{ width: '100%', height: '300px' }} className="overflow-hidden p-0">
          <Placeholder className="w-100 h-100" />
        </ListGroupItem>
      </Placeholder>
      <ListGroupItem>
        <ButtonGroup className="d-flex justify-content-between">
          <Button variant="outline-light" className="border-0 text-dark">
            <i className="bi bi-hand-thumbs-up"></i> Consiglia
          </Button>
          <Button variant="outline-light" className="border-0 text-dark">
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
          <Placeholder animation="glow">
            <div
              className="rounded-circle z-3 border border-white overflow-hidden"
              style={{ width: 48, height: 48, marginRight: '10px' }}
            >
              <Placeholder className="w-100 h-100" />
            </div>
          </Placeholder>

          <div style={{ position: 'relative', width: '100%' }}>
            <input
              type="text"
              className=""
              placeholder="Aggiungi un commento..."
              style={{ width: '100%', padding: '4px', border: '1px solid #f0f0f0', borderRadius: '20px' }}
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
}

export default LoadingPost
