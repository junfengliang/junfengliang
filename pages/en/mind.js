import NutHead from '../../component/NutHead'
import NutFoot from '../../component/NutFoot'
import Script from 'next/script'
import style from '../../styles/index.module.css'
import NutNav from '../../component/NutNavEn'
import { Container, Alert,Row,Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
var text = `# Food
## Staple food
### Rice
### Noodle
### Steamed bun
### Flatbread
### Wheat
The content here will not be displayed on the mind map
## Fruit
### Banana
### Oranges
### Strawberry
### Kiwi
### Peach

## Vegetable
### Chinese cabbage
### Small vegetables
### Flammulina
### Radish
### Lentils
### Potato
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
    <NutHead title={'NutUml Mindmap'} />
    <Script src="/js/nutuml.js" onLoad={()=>{
        setHtml(nutuml.render(content));
    }}></Script>
    <NutNav page="mind" />
    <Container style={{marginTop:20}}>
    <Row>
        <Col md="6">
            <h4>Mindmap example</h4>
            <p>we use # to define mindmap<br />
            # means root node。<br />
            ## means secondary node <br />
            ### means third node</p>
            <textarea value={content} onChange={contentChange} style={{width:'100%',height:550}} placeholder="Please input content" ></textarea>
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