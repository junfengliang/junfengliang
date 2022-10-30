import NutHead from '../../component/NutHead'
import NutFoot from '../../component/NutFoot'
import Script from 'next/script'
import NutNav from '../../component/NutNav'
import { useState, useEffect } from 'react'
import { Container,Row,Col,InputGroup,Form,Breadcrumb,Button } from 'react-bootstrap'
import {get,post} from '../../global/request'
import { addMessage } from '../../global/message'
import Loading from '../../component/Loading'
import {Formik} from 'formik'

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
    const [loading,setLoading] = useState(false);

    async function loadData(){
      var pts = getUrlParams('ts');
      if(!pts){
        if(ts==0){
          setTs(new Date().getTime());
        }
          return;
      }
      setTs(pts)
      setLoading(true)
      var url =  "/api/nutuml/detail?ts=" + pts;
      var res = await get(url);
      if(res?.success){
          setTitle(res.data?.title)
          setContent(res.data?.content)
      }
      setLoading(false)
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

      {loading? <Loading /> : 
        <Formik
        initialValues={{
            title:title,
            content:content,
            ts:ts,
        }}
        onSubmit={(values, { setSubmitting }) => {
          var url = '/api/nutuml/save';
          console.log(' do submit ')
            
          post(url,values).then((data)=>{
              if(data?.success){
                addMessage('保存成功','操作成功')
              }
          }).finally(()=>{
              setSubmitting(false)
          });
        }}
        >
        {({
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
        isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
          <Row>
            <Col md="6">
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">标题</InputGroup.Text>
                <Form.Control type="input" name="title" value={values.title} onChange={handleChange} 
                  placeholder="请输入标题"
                />
              </InputGroup>
              <textarea name="content" value={values.content} onChange={handleChange} style={{marginTop:'10px', width:'100%', height:'400px'}} placeholder="请输入内容"></textarea>
              <Button disabled={isSubmitting} style={{width: '40%'}} className="w-100 btn btn-lg btn-primary" type="submit">保存</Button>
            </Col>
            <Col md="6" align="center" dangerouslySetInnerHTML={{
                    __html: (values.content && nutuml)?  nutuml.render(values.content):''
              }}>
            </Col>
          </Row>
        </Form>
         )}
         </Formik>
      }
      <NutFoot />
    </Container>
</>)
}
