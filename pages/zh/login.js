import React, { useState } from 'react';
import { Container, Row, FloatingLabel,Form,Button,Col } from 'react-bootstrap';
import NutHead from '../../component/NutHead';
import NutNav from '../../component/NutNav';
import { Formik } from 'formik'
import {post} from '../../global/request'
import {addMessage} from '../../global/message';
import '../../styles/signin.module.css';

export default function Login() {
  return (
    <>
    <NutHead title={'登录Nutuml'} />
    <Container>
      <Row className='justify-content-center align-items-center' style={{height: '80vh'}}>
      <Col style={{maxWidth: 300}}>
        <Formik
        initialValues={{
            email:'',
            password:'',
        }}
       onSubmit={(values, { setSubmitting }) => {
        var url = "/api/user/login"
        var name = values.email;
        var off = name.indexOf('@');
        if(off>0){
          name = name.substr(0,off);
        }

        post(url,values).then((data)=>{
            if(data?.success){
              var token = data.data.token;
              window.localStorage.setItem('token',token);
              window.sessionStorage.setItem('name',name);
              location.href = "/zh/my-diagram"
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
    <Form onSubmit={handleSubmit}  className='justify-content-center'>

    <Row className="mb-12 justify-content-center ">
      <h1 className="h3 mb-3 fw-normal text-center">请登录</h1>
      
      <Row className="mb-12">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>邮箱地址</Form.Label>
          <Form.Control required type="email" name="email" value={values.email}
                onChange={handleChange} />
        </Form.Group>
      </Row>
      
      <Row className="mb-12">
        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label>密码</Form.Label>
          <Form.Control required type="password" name="password" value={values.password}
                onChange={handleChange} />
        </Form.Group>
      </Row>
      <Row className="mb-12 justify-content-center">
        <Button style={{marginTop:20, width:250}} type="submit" disabled={isSubmitting}>提交</Button>
      </Row>
      <Row className="mb-12" style={{marginTop: 20}}>
        <Col className="text-start">
            <a href="reg">注册</a>
        </Col>
        <Col className="text-end">
            
        </Col>
      </Row>
    </Row>
    </Form>
     )}
     </Formik>
     </Col>
     </Row>
    </Container>
    </>
  );
}
