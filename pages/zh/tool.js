import NutHead from '../../component/NutHead'
import NutFoot from '../../component/NutFoot'
import Script from 'next/script'
import NutNav from '../../component/NutNav'
import { Container } from 'react-bootstrap'

export default function Sequence(){
    return (
<>
    <NutHead title={'NutUml在线工具'} />
    <Script src="../js/nutuml.js"></Script>
    <NutNav page="tool" />
    <Container id="app" style={{marginTop:20}}>
        <h4>请输入</h4>
        <div class="row">
            <div class="col-md-6">
                <textarea style={{width:'100%', height:'360px'}} placeholder="请输入内容" v-model="textarea"></textarea>
            </div>
            <div id="canvas" class="col-md-6" align="center">
            </div>
        </div>
        <NutFoot />
    </Container>
<Script src="../js/vue.min.js" onLoad={()=>{
 new Vue({
    data: {
        textarea: '客户端 -> 服务器 : 发起请求\n服务器 --> 客户端 : 响应'
    },
    watch: {
        textarea: function(){
            this.draw(document.getElementById("canvas"),this.textarea);
        }
    },
    mounted: function() {
        this.draw(document.getElementById("canvas"),this.textarea);
    },
    methods: {
        draw: function(canvas,text){
            canvas.innerHTML = nutuml.render(text);
        }
    }
}).$mount('#app')
}}></Script>   
</>)
}

