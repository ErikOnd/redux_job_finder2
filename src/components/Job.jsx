import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Star, StarFill } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import { addToFavouriteAction, removeFromFavouriteAction } from '../redux/actions'
import { Spinner, Alert } from 'react-bootstrap'


const Job = ({ data }) => {
  const favourites = useSelector((state) => state.favourite.list)
  const dispatch = useDispatch()
  const isFav = favourites.includes(data.company_name)
  const applicationSpinner = useSelector((state) => state.all.isLoading)
  const errorMessage = useSelector((state) => state.all.isError)

  return (

    <>
      <div className='d-flex justify-content-center'>
        {applicationSpinner && <Spinner animation="border" variant="success" className="mt-5" />}
        {errorMessage && <Alert variant='danger'>
          An Error occured
        </Alert>}
      </div>
      <Row
        className="mx-0 mt-3 p-3"
        style={{ border: '1px solid #00000033', borderRadius: 4 }}
      >
        <Col xs={3}>
          {isFav ? (
            <StarFill
              color="gold"
              size={16}
              className="mr-2 my-auto"
              onClick={() =>
                dispatch(removeFromFavouriteAction(data.company_name))
              }
            />
          ) : (
            <Star
              color="gold"
              size={16}
              className="mr-2 my-auto"
              onClick={() =>
                dispatch(addToFavouriteAction(data.company_name))
              }
            />
          )}
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={9}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
      </Row>

    </>

  )
}

export default Job
