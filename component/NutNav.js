import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NutHead({page}){
    return (
        <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">NutUml</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={'home'==page ? 'active':''} href="/zh/">主页</Nav.Link>
            <Nav.Link className={'sequence'==page ? 'active':''} href="/zh/sequence">时序图</Nav.Link>
            <Nav.Link className={'tool'==page ? 'active':''} href="/zh/tool">在线工具</Nav.Link>
            <Nav.Link className={'diagram'==page ? 'active':''} href="/zh/my-diagram">我的图表</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/zh/login.html">登录</Nav.Link>
            <Nav.Link href="/zh/reg.html">注册</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}