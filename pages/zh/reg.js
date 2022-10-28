import React, { useState } from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import NutHead from '../../component/NutHead';
import NutNav from '../../component/NutNav';
import { Formik } from 'formik'
import {post} from '../../global/request'
import {addMessage} from '../../global/message';

export default function EditPass() {
  return (
    <>
    <NutHead title={'欢迎注册NutUml'} />
    <NutNav />
    <Container style={{marginTop:20}}>
        <Row>
            <Col>
                <Breadcrumb>
                    <Breadcrumb.Item active>欢迎注册NutUml</Breadcrumb.Item>
                </Breadcrumb>
            </Col>
        </Row>
        <Formik
        initialValues={{
            email:'',
            password:'',
            confirmPass:'',
        }}
      validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = '请输入邮箱';
         } else if(values.email.indexOf('@')<0){
            errors.email = '邮箱应包含@字符';
         }

         if (!values.password) {
            errors.password = '请输入密码';
         }else if(values.password.length<6){
            errors.password = '至少输入6位密码';
         } 
         if(values.confirmPass!=='' && values.password !== values.confirmPass){
            errors.confirmPass = '两次输入的密码不一致！'
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        var url = "/api/user/reg"
        post(url,values).then((data)=>{
            if(data?.success){
                if(confirm('注册成功，是否登录？')){
                    location.href = '/zh/login'
                }
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
    <Form noValidate onSubmit={handleSubmit}>
        <Row className='mb-12 justify-content-center'>
            <Col md="4">
            <Form.Group as={Row}>
                <Form.Label align="right" column md="3">邮箱:</Form.Label>
                <Col md="9" className='position-relative'>
                    <Form.Control required type="email" name="email" value={values.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email} />
                    <Form.Control.Feedback tooltip type="invalid">{errors.email}</Form.Control.Feedback>
                </Col>
            </Form.Group>

            <Form.Group as={Row} style={{marginTop: 35}} >
                <Form.Label align="right" column md="3">密码:</Form.Label>
                <Col md="9" className='position-relative'>
                    <Form.Control type="password" required 
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}/>
                    <Form.Control.Feedback tooltip type="invalid">
                        {errors.password}
                    </Form.Control.Feedback>
                </Col>
            </Form.Group>

            <Form.Group as={Row} style={{marginTop: 35}} >
                <Form.Label align="right" column md="3">确认密码:</Form.Label>
                <Col md="9" className='position-relative'>
                    <Form.Control type="password" required 
                    name="confirmPass"
                    value={values.confirmPass}
                    onChange={handleChange}
                    isInvalid={!!errors.confirmPass}/>
                    <Form.Control.Feedback tooltip type="invalid">
                        {errors.confirmPass}
                    </Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Row style={{marginTop: 35}} className='justify-content-center'>
                <Col md="3"></Col>
                <Col md="9"><Button type="submit" style={{width:150}} disabled={isSubmitting}>提交</Button></Col>
            </Row>
            </Col>
        </Row>
      
      
      
    </Form>
     )}
     </Formik>
    </Container>
    </>
  );
}
