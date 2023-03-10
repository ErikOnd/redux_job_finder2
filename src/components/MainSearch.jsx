import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Job from './Job'
import { useSelector, useDispatch } from 'react-redux'
import { getCompaniesActionAsync } from '../redux/actions'
import { Spinner, Alert } from 'react-bootstrap'

const MainSearch = () => {
  const [query, setQuery] = useState('')
  const jobs = useSelector((state) => state.all.companies)

  const applicationSpinner = useSelector((state) => state.all.isLoading)
  const errorMessage = useSelector((state) => state.all.isError)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getCompaniesActionAsync(query))
  }


  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          <Button onClick={() => navigate('/favourites')}>Favourites</Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          <div className='d-flex justify-content-center'>
            {applicationSpinner && <Spinner animation="border" variant="success" className="mt-5" />}
            {errorMessage && <Alert variant='danger' key='danger' className="mt-5">
              An Error occured
            </Alert>}
            {console.log(errorMessage)}
          </div>
          {jobs !== undefined && jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
