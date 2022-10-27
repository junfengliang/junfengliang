import {Spinner,Row,Col} from 'react-bootstrap';

function Loading() {
  return (
    <Row className="justify-content-md-center" style={{marginTop:50, marginBottom:50}}>
      <Col md="3">
        <Spinner animation="border" role="status"></Spinner>
        <span style={{marginLeft:20}}>数据努力加载中。。。</span>
      </Col>
    </Row>
  );
}

export default Loading;