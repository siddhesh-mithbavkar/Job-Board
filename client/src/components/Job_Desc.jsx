import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



const Job_Desc = ({job}) => {
    return (
        <>
            <div className='border p-3 sticky-top'>
                <Row>
                    <Col md={12}>
                        <div className="job-desc-header">
                            <div className="job-desc-title">
                                <h2>{job.title}
                                </h2>
                            </div>
                            <div className="job-desc-company-name-address mb-3">
                                <span className='company-name'>{job.company}
                                </span> | <span className='company-address'>
                                    &nbsp;
                                    {job.address}</span>
                            </div>
                            <div className="apply-now-btn">
                                <Button variant="primary">Apply Now</Button>
                            </div>
                        </div>

                        <hr />

                        <div className="job-desc-content">
                            <div className="job-location">
                                <h4>Location</h4>
                                <p>{job.location}</p>
                            </div>

                            <hr />

                            <div className="job-desc-detail">
                            <h4>Full job description
                            </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ratione at dolores nisi sequi dolor, impedit doloremque perspiciatis harum nostrum nam quas a quia ut error maxime id? Rerum, non.</p>
                            </div>
                        </div>

                        
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Job_Desc
