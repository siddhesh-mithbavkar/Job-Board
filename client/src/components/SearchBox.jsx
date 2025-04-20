import React from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
    return (
        <>
            <Form className="d-flex justify-content-center px-3 my-4">
                <div className="d-flex flex-column flex-lg-row w-100 shadow rounded-4 p-2 gap-2 align-items-stretch" style={{ maxWidth: '900px' }}>

                    {/* Job Title Input */}
                    <InputGroup className="flex-fill">
                        <InputGroup.Text className="bg-white border-0">
                            <FontAwesomeIcon icon={faSearch} />
                        </InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Job title, keywords, or company"
                            className="border-0"
                        />
                    </InputGroup>

                    {/* Location Input */}
                    <InputGroup className="flex-fill">
                        <InputGroup.Text className="bg-white border-0">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder='City, state, zip code, or "remote"'
                            className="border-0"
                        />
                    </InputGroup>

                    {/* Search Button */}
                    <Button
                        variant="primary"
                        className="job-btn px-4 w-100 rounded-3"
                    >
                        Find jobs
                    </Button>
                </div>
            </Form>
            <hr />
        </>
    )
}

export default SearchBox
