import NutHead from '../../component/NutHead'
import NutFoot from '../../component/NutFoot'
import Script from 'next/script'
import style from '../../styles/index.module.css'
import NutNav from '../../component/NutNavEn'
import { Container, Alert,Row,Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
var text = `Client -> Server : Send Request
Server --> Client : Response`

export default function Home(){
    const [content, setContent] = useState(text);
    const [html, setHtml] = useState('');
    function contentChange(event){
        var val = event.target.value;
        setContent(val);
        setHtml(nutuml.render(val));
    }
    
    return (
<>
    <NutHead title={'NutUml - a simple Uml tool'} />
    <Script src="/js/nutuml.js" onLoad={()=>{
        setHtml(nutuml.render(content));
    }}></Script>
    <NutNav page="home" />
    <Container>
    <Alert variant="success" style={{marginTop: 10}}>
        <h2>NutUml：An UML building tool base on text</h2>
        <p>
            NutUml is an opensource, free UML building tool, base on Javascript and HTML5. You can edit UML description text on the web page and view the generated UML diagram in real time.
        </p>
    </Alert>
    <Row>
        <Col md="6">
        <h4>Simple Example </h4>
            <p>We use -&gt; to indicate the message transfer between participants, without explicitly declaring participants.</p>
            <p>You can also use --&gt; to indicate a dashed line.</p>
            <p>You can try to modify the content in the text box below, and then check the changes in the picture on the right</p>
            <textarea value={content} onChange={contentChange}  className={style.area} placeholder="Please input content" ></textarea>
            <p>For more syntax descriptions and examples, please refer to <a href="sequence">Sequence</a></p>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html
            }}>
        </Col>
    </Row>
    <Row>
        <Col md="6">
            <h4>Confluence plugin</h4>
            <p>Nutuml provide confluence plugin <a href="../css/nutuml-1.1.0.jar">Download</a></p>
        </Col>
    </Row>
    <NutFoot />
</Container>
</>)
}