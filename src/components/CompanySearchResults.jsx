import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobsActionAsync } from "../redux/actions";
import { Spinner, Alert } from "react-bootstrap";

const CompanySearchResults = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.all.jobs);

  const applicationSpinner = useSelector((state) => state.all.isLoading);
  const errorMessage = useSelector((state) => state.all.isError);

  useEffect(() => {
    dispatch(getJobsActionAsync(params.companyName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          {applicationSpinner && (
            <Spinner animation="border" variant="success" className="mt-5" />
          )}
          {errorMessage ? (
            <Alert variant="danger" key="danger" className="mt-5">
              An Error occured
            </Alert>
          ) : (
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
