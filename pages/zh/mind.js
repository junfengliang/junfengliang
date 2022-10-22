import NutHead from '../../component/NutHead'
import NutFoot from '../../component/NutFoot'
import Script from 'next/script'
import style from '../../styles/index.module.css'
import NutNav from '../../component/NutNav'
import { Container, Alert,Row,Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
var text = `# 食品
## 主食
### 米饭
### 面条
### 馒头
### 大饼
### 小麦
这里的内容，不会显示在思维导图上
## 水果
### 香蕉
### 桔子
### 草莓
### 猕猴桃
### 桃子

## 蔬菜
### 白菜
### 小青菜
### 金针菇
### 萝卜
### 扁豆
### 土豆
`

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
    <NutNav page="mind" />
    <Container style={{marginTop:20}}>
    <Row>
        <Col md="6">
            <h4>思维导图示例</h4>
            <p>我们用 # 来表达思维导图。<br />
            # 表示一级节点。<br />
            ## 表示二级节点<br />
            ### 表示三级节点</p>
            <textarea value={content} onChange={contentChange} style={{width:'100%',height:550}} placeholder="请输入内容" ></textarea>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html
            }}>
        </Col>
    </Row>
    
    <NutFoot />
</Container>
</>)
}