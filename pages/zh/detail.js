import NutHead from '../../component/NutHead'
import NutFoot from '../../component/NutFoot'
import Script from 'next/script'
import NutNav from '../../component/NutNav'
import { useState, useEffect } from 'react'
import { Container,Row,Col,InputGroup,Form,Breadcrumb } from 'react-bootstrap'
import {get,post} from '../../global/request'
import { addMessage } from '../../global/message'

function getUrlParams(key) {
    var url = window.location.search.substr(1);
    if (url == '') {
        return false;
    }
    var paramsArr = url.split('&');
    for (var i = 0; i < paramsArr.length; i++) {
        var combina = paramsArr[i].split("=");
        if (combina[0] == key) {
            return combina[1];
        }
    }
    return false;
}

export default function Diagram(){
    const [title,setTitle] = useState('');
    const [content, setContent] = useState();
    const [ts,setTs] = useState(0);
    function titleChange(event){
        setTitle(event.target.value);
    }
    function contentChange(event){
        setContent(event.target.value);
    }
    async function handleSubmit(event) {
        event.preventDefault();
        var url = '/api/nutuml/save';
        console.log(' do submit ')

        var data = {
          title: title,
          content: content,
          ts: ts,
        };
        var res = await post(url,data);
        if(res?.success){
          addMessage('保存成功','操作成功')
        }
    }
    async function loadData(){
      var pts = getUrlParams('ts');
      if(!pts){
        if(ts==0){
          setTs(new Date().getTime());
        }
          return;
      }
      setTs(pts)
      var url =  "/api/nutuml/detail?ts=" + pts;
      var res = await get(url);
      if(res?.success){
          setTitle(res.data?.title)
          setContent(res.data?.content)
      }
    }
    useEffect(() => {
        loadData();
    },[]);
    return (
<>
    <NutHead title={'我的图表-详情-NutUml'} />
    <NutNav page="diagram" />
    <Script src='/js/nutuml.js'></Script>
    <Container style={{marginTop:20}}>
      <Row>
            <Col>
                <Breadcrumb>
                  <Breadcrumb.Item href="/zh/my-diagram">我的图表</Breadcrumb.Item>
                  <Breadcrumb.Item active>图表详情</Breadcrumb.Item>
                </Breadcrumb>
            </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md="6">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">标题</InputGroup.Text>
              <Form.Control value={title} onChange={titleChange} 
                placeholder="请输入标题"
                aria-label="标题"
                aria-describedby="basic-addon1" 
              />
            </InputGroup>
            <textarea value={content} onChange={contentChange} style={{marginTop:'10px', width:'100%', height:'400px'}} placeholder="请输入内容"></textarea>
            <button style={{width: '40%'}} class="w-100 btn btn-lg btn-primary" type="submit">保存</button>
          </Col>
          <Col md="6" align="center" dangerouslySetInnerHTML={{
                  __html: (content && nutuml)?  nutuml.render(content):''
            }}>
          </Col>
        </Row>
      </Form>
      <NutFoot />
    </Container>
</>)
}
