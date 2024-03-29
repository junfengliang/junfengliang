import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NutNav({page}){
    const [name,setName] = useState();
    useEffect(()=>{
        if(typeof(sessionStorage)!=='undefined'){
            setName(sessionStorage.getItem('name'));
        }
    },[])

    function logout(){
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('token');
        setName(null);
        location.href = '/zh/login'
    }
    
    return (
      <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">NutUml</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={'home'==page ? 'active':''} href="/zh/">主页</Nav.Link>
            <Nav.Link className={'sequence'==page ? 'active':''} href="/zh/sequence">时序图</Nav.Link>
            <Nav.Link className={'mind'==page ? 'active':''} href="/zh/mind">思维导图</Nav.Link>
            <Nav.Link className={'tool'==page ? 'active':''} href="/zh/tool">在线工具</Nav.Link>
            <Nav.Link className={'text'==page ? 'active':''} href="/zh/text">文本工具</Nav.Link>
            <Nav.Link className={'diagram'==page ? 'active':''} href="/zh/my-diagram">我的图表</Nav.Link>
          </Nav>
      {
          name ? (
          <Nav>
            <Nav.Link href="/en/">English</Nav.Link>
            <NavDropdown title={name} id="basic-nav-dropdown">
                <NavDropdown.Item href="/zh/edit-pass">修改密码</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>退出登录</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          ) : 
          <Nav>
              <Nav.Link href="/en/">English</Nav.Link>
              <Nav.Link href="/zh/login">登录</Nav.Link>
              <Nav.Link href="/zh/reg">注册</Nav.Link>
          </Nav>
      }
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}