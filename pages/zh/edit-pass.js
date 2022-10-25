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
    <NutHead title={'修改密码'} />
    <NutNav />
    <Container style={{marginTop:20}}>
        <Row>
            <Col>
                <Breadcrumb>
                    <Breadcrumb.Item active>修改密码</Breadcrumb.Item>
                </Breadcrumb>
            </Col>
        </Row>
        <Formik
        initialValues={{
            oldPass:'',
            newPass:'',
            confirmPass:'',
        }}
      validate={values => {
         const errors = {};
         if (!values.oldPass) {
           errors.oldPass = '请输入密码';
         } 
         if(values.confirmPass!=='' && values.newPass !== values.confirmPass){
            errors.confirmPass = '两次输入的密码不一致！'
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        var url = "/api/user/edit-pass"
        post(url,values).then((data)=>{
            if(data?.success){
                if(confirm('密码修改成功，是否重新登录？')){
                    location.href = '/zh/login.html'
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
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>旧密码</Form.Label>
          <Form.Control required type="password" name="oldPass" value={values.oldPass}
                onChange={handleChange}
                isInvalid={!!errors.oldPass} />
          <Form.Control.Feedback type="invalid">{errors.oldPass}</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>新密码</Form.Label>
          <Form.Control type="password" required 
          name="newPass"
          value={values.newPass}
          onChange={handleChange}
          isInvalid={!!errors.newPass}/>
          <Form.Control.Feedback type="invalid">
            请输入新密码
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>确认新密码</Form.Label>
          <Form.Control type="password" required 
          name="confirmPass"
          value={values.confirmPass}
          onChange={handleChange}
          isInvalid={!!errors.confirmPass}/>
          <Form.Control.Feedback type="invalid">
            两次输入的密码不一样
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      
      <Button type="submit" disabled={isSubmitting}>提交</Button>
    </Form>
     )}
     </Formik>
    </Container>
    </>
  );
}
