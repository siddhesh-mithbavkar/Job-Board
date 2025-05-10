import Job_Desc from '../components/Job_Desc'
import JobCard from '../components/JobCard'
import SearchBox from '../components/SearchBox'
import TopNavbar from '../components/TopNavbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'

const Home = () => {
    return (
        <>
            <TopNavbar />
            <SearchBox />

            <Container>
                <Row>
                    <Col>
                        <JobCard />
                    </Col>
                    <Col>
                        <Job_Desc />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
