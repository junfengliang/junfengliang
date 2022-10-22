import NutHead from '../../component/NutHead'
import NutFoot from '../../component/NutFoot'
import Script from 'next/script'
import style from '../../styles/index.module.css'
import NutNav from '../../component/NutNav'
import { Container, Alert,Row,Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
var text = `客户端 -> 服务器 : 发起请求
服务器 --> 客户端 : 响应`

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
    <NutHead title={'NutUml时序图'} />
    <Script src="/js/nutuml.js" onLoad={()=>{
        setHtml(nutuml.render(content));
    }}></Script>
    <NutNav page="home" />
    <Container>
    <Alert variant="success" style={{marginTop: 10}}>
        <h2>NutUml：基于文本的UML建模工具</h2>
        <p>
            NutUml 是一个开源，免费的UML建模工具，基于Javascript，HTML5。你可以在浏览器界面里编辑UML描述文本，然后实时查看生成的UML图。
        </p>
    </Alert>
    <Row>
        <Col md="6">
            <h4>简单示例</h4>
            <p>我们用-&gt;来表示参与者之间的消息传递， 不必显式地声明参与者。</p>
            <p>也可以用--&gt;来表示虚线。</p>
            <p>你可以试着修改下面文本框里的内容，然后查看右边图片的变化</p>
            <textarea value={content} onChange={contentChange}  className={style.area} placeholder="请输入内容" ></textarea>
            <p>更多的语法说明及示例，请参考<a href="/zh/sequence">时序图</a></p>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html
            }}>
        </Col>
    </Row>
    <Row>
        <Col md="6">
            <h4>Confluence插件</h4>
            <p>Nutuml提供confluence 插件。<a href="../css/nutuml-1.1.0.jar">下载</a></p>
        </Col>
    </Row>
    <NutFoot />
</Container>
</>)
}