import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NutNavEn({page}){
    const [name,setName] = useState();
    useEffect(()=>{
        if(typeof(sessionStorage)!=='undefined'){
            setName(sessionStorage.getItem('name'));
        }
    },[])

    function logout(){
        sessionStorage.removeItem('name');
        localStorage.removeItem('token');
        setName(null);
    }
    
    return (
        <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">NutUml</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={'home'==page ? 'active':''} href="/en/">Home</Nav.Link>
            <Nav.Link className={'sequence'==page ? 'active':''} href="/en/sequence">Sequence</Nav.Link>
            <Nav.Link className={'mind'==page ? 'active':''} href="/en/mind">Mindmap</Nav.Link>
            <Nav.Link className={'tool'==page ? 'active':''} href="/en/tool">Online Tool</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/zh/">中文</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}