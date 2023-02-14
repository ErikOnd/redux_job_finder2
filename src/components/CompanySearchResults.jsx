import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getJobsActionAsync } from '../redux/actions'

const CompanySearchResults = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.all.jobs)

  useEffect(() => {
    dispatch(getJobsActionAsync(params.companyName))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
