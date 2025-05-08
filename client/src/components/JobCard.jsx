import React from 'react'
import Card from 'react-bootstrap/Card';


const JobCard = () => {
    return (
        <>
            <Card className='w-50'>
                <Card.Body>
                    <Card.Title className='job-title mb-3'><h4>Job Title</h4></Card.Title>
                    <Card.Subtitle className="text-muted company-name">
                        <p className='mb-1'>Company name</p>
                        <p>Company Location</p>
                    </Card.Subtitle>
                    <Card.Text>
                        <ul>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem nesciunt sequi laudantiu.</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem nesciunt sequi laudantium.</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem nesciunt sequi laudantium.</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default JobCard
