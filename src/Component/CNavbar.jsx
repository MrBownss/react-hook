import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class CNavbar extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="success" expand="lg">
                    <Container className="justify-content-center">
                        <Navbar.Brand className="fs-3 fw-bold justify-content-center">
                            News <span className="text-warning fw-normal">Update</span>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default CNavbar