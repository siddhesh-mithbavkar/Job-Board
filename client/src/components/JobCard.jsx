import React from 'react'
import Card from 'react-bootstrap/Card';


const JobCard = ({ job, onJobClick }) => {
    return (
        <>
            <Card className='mb-4' onClick={onJobClick}>
                <Card.Body>
                    <Card.Title className='job-title mb-3'><h4>{job.title}</h4></Card.Title>
                    <Card.Subtitle className="text-muted company-name">
                        <p className='mb-1'>{job.company}</p>
                        <p>{job.location}</p>
                        <div className='mb-4'>
                            <span className='bg-warning px-2 py-1 rounded me-2'>{job.salary}</span>
                            <span className='bg-warning px-2 py-1 rounded'>{job.type}</span>
                        </div>
                    </Card.Subtitle>
                    <Card.Text>
                        <ul>
                            {job.description.map((desc, idx) => {
                                return <li key={idx} >{desc}</li>
                            })}
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default JobCard
