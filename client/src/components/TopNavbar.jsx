import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

const TopNavbar = () => {
    return (
        <>
            <Navbar expand="md" className="bg-body-tertiary px-md-4">
                <Container fluid>
                    <Navbar.Brand href="#home">Job Board</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="d-flex justify-content-between w-100">
                            <Nav>
                                <div className="d-flex gap-3">
                                    <Nav.Link href="#">Home</Nav.Link>
                                    <Nav.Link href="#">Company Reviews</Nav.Link>
                                    <Nav.Link href="#">Salary Guide</Nav.Link>
                                </div>
                            </Nav>

                            <Nav className="align-items-center">
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faBell} className="me-4" />
                                    <FontAwesomeIcon icon={faMessage} className="me-4" />
                                    <FontAwesomeIcon icon={faUser} className="me-4" />
                                    <Nav.Link href="#" className="p-0">Employers / Post Job</Nav.Link>
                                </div>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default TopNavbar
