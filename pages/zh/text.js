import NutHead from '../../component/NutHead'
import NutFoot from '../../component/NutFoot'
import NutNav from '../../component/NutNav'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'

export default function TextTool(){
    const [text, setText] = useState('')
    const [val, setVal] = useState('')
    
    const onChange = (e)=>{
        let v = e.target.value
        let res = v.replace(/\t/g, " ");
        var lines= res.split('\n');
        let arr = [];
        let i = 1;
        lines.map((v,k)=>{
            if(v.trim().length>0){
                arr.push((i++) +')' + v)
            }
        })
        setVal(arr.join('\n'))
    }
    return (
<>
    <NutHead title={'NutUml日志文本工具'} />
    <NutNav page="text" />
    <Container id="app" style={{marginTop:20}}>
        <h4>请输入内容</h4>
        <div className="row">
            <div className="col-md-6">
                <textarea style={{width:'100%', height:'360px'}} placeholder="请输入内容" onChange={onChange} ></textarea>
            </div>
            <div className="col-md-6">
            <textarea style={{width:'100%', height:'360px'}} readOnly value={val}></textarea>
            </div>
        </div>
        <NutFoot />
    </Container>
</>)
}

