import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from 'react-bootstrap'
import { HeartFill } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removeFromFavouriteAction } from '../redux/actions'
import { Spinner, Alert } from 'react-bootstrap'

const Favourites = () => {
  const favourites = useSelector((state) => state.favourite.list)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const applicationSpinner = useSelector((state) => state.all.isLoading)
  const errorMessage = useSelector((state) => state.all.isError)

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Favourites</h1>
          <Button onClick={() => navigate('/')}>Home</Button>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ListGroup className='job-row'>
            {favourites.map((fav, i) => (
              <>
                <div className='d-flex justify-content-center'>
                  {applicationSpinner && <Spinner animation="border" variant="success" className="mt-5" />}
                  {errorMessage && <Alert variant='danger'>
                    An Error occured
                  </Alert>}
                </div>
                <ListGroupItem key={i}>
                  <HeartFill
                    className="mr-2 heart-icon2"
                    size={30}
                    color="red"
                    onClick={() =>
                      dispatch(removeFromFavouriteAction(fav))
                    }
                  />
                  <Link to={'/' + fav}>{fav}</Link>
                </ListGroupItem>
              </>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Favourites
