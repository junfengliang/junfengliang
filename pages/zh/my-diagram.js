import NutHead from '../../component/NutHead'
import NutFoot from '../../component/NutFoot'
import NutNav from '../../component/NutNav'
import {Breadcrumb, Container,Row,Col, Button,Table} from 'react-bootstrap';
import {get,post} from '../../global/request'
import { useEffect, useState } from 'react';
import { formatDateTime, isLogin } from '../../global/util';
import { addMessage } from '../../global/message';
import Loading from '../../component/Loading';

export default function Diagram(){
    const [arr,setArr] = useState([]);
    const [loading, setLoading] = useState(true);
    const [login,setLogin] = useState(false);

    async function loadData(){
        
        var url = "/api/nutuml/list";
        var data = await get(url);
        if(data){
            setLogin(true)
        }
        if(data && data.data){
            setArr(data.data)
        }
        setLoading(false);
    }
    async function remove(ts){
        var msg = "确定要删除图表吗？"
        if(!confirm(msg)){
            return;
        }
        var url = "/api/nutuml/delete?ts=" + ts;
        var data = await post(url);
        if(data?.success){
            addMessage('删除成功','消息');
            var newArr = [];
            arr.forEach((item)=>{
                if(item.ts !== ts){
                    newArr.push(item);
                }
            })
            setArr(newArr);
        }
    }
    useEffect(()=>{
        if(!isLogin()){
            console.log('not login')
            location.href = "/zh/login"
        }else{
            console.log('login ok')
        }
        loadData();
    },[]);
    var lines = arr.map((item,index)=>
        <tr key={index}>
            <td>{index+1}</td>
            <td><a href={"detail?ts=" + item.ts}>{item.title}</a></td>
            <td>{formatDateTime(item.ts)}</td>
            <td><Button onClick={()=>remove(item.ts)} variant="link">删除</Button></td>
        </tr>
    )
    if(arr.length==0){
        lines = <tr><td align="center" colSpan={4}>暂无数据</td></tr>
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
                { login ? 
                    <Button variant="primary" onClick={()=>location.href='/zh/detail'}>添加图表</Button>
                : ''
                }
            </Col>
        </Row>

        {loading? <Loading />:
        <Table striped bordered hover>
        <thead>
            <tr>
                <th scope="col" width="50">#</th>
                <th scope="col">标题</th>
                <th scope="col" width="200">创建时间</th>
                <th scope="col" width="80">操作</th>
            </tr>
        </thead>
        <tbody>
           {lines}
        </tbody>
        </Table>
        }
        <NutFoot />
    </Container>
</>)
}
