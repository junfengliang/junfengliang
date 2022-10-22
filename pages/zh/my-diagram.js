import NutHead from '../../component/NutHead'
import NutFoot from '../../component/NutFoot'
import NutNav from '../../component/NutNav'
import {Breadcrumb, Container,Row,Col, Button,Table} from 'react-bootstrap';
import {get} from '../../global/request'
import { useEffect, useState } from 'react';

export default function Diagram(){
    const [arr,setArr] = useState([]);
    async function loadData(){
        var url = "/api/nutuml/list";
        var data = await get(url);
        if(data && data.data){
            setArr(data.data)
        }
    }
    useEffect(()=>{
        loadData();
    },[]);
    var lines = arr.map((item,index)=>
        <tr>
            <td>{index+1}</td>
            <td><a href={"detail?ts=" + item.ts}>{item.title}</a></td>
            <td>{item.ts}</td>
        </tr>
    )
    if(arr.length==0){
        lines = <tr><td align="center" colSpan={3}>暂无数据</td></tr>
    }
    return (
<>
    <NutHead title={'我的图表-NutUml'} />
    <NutNav page="diagram" />
    <Container style={{marginTop:20}}>
        <Row>
            <Col>
                <Breadcrumb>
                    <Breadcrumb.Item active>我的图表</Breadcrumb.Item>
                </Breadcrumb>
            </Col>
            <Col align="right">
                <Button variant="primary">添加图表</Button>
            </Col>
        </Row>

        <Table striped bordered hover>
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">标题</th>
                <th scope="col">创建时间</th>
            </tr>
        </thead>
        <tbody>
           {lines}
        </tbody>
        </Table>
        <NutFoot />
    </Container>
</>)
}
