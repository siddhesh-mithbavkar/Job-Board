import React from 'react'
import Card from 'react-bootstrap/Card';


const JobCard = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title className='job-title mb-3'><h4>Job Title</h4></Card.Title>
                    <Card.Subtitle className="text-muted company-name">
                        <p className='mb-1'>Company name</p>
                        <p>Company Location</p>
                        <div className='mb-4'>
                            <span className='bg-warning px-2 py-1 rounded me-2'>₹3,50,000 - ₹4,00,000 a year</span>
                            <span className='bg-warning px-2 py-1 rounded'>Full time</span>
                        </div>
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
