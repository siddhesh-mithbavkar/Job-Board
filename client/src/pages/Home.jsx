import Job_Desc from '../components/Job_Desc'
import JobCard from '../components/JobCard'
import SearchBox from '../components/SearchBox'
import TopNavbar from '../components/TopNavbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from "react";
import jobData from '../data/job_listings.json'

const Home = () => {

    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        setJobs(jobData)
    })

    return (
        <>
            <TopNavbar />
            <SearchBox />

            <Container>
                <Row>
                    <Col>
                        {jobs.map((job, idx) => {
                            return <JobCard key={idx} job={job} onJobClick={() => setSelectedJob(job)} />
                        })}
                    </Col>
                    <Col>
                        {selectedJob ? (
                            <Job_Desc job={selectedJob} />
                        ) : (
                            <p>Select a job to view details</p>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
