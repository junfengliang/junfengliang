import NutHead from '../../component/NutHead'
import NutFoot from '../../component/NutFoot'
import Script from 'next/script'
import NutNav from '../../component/NutNav'

export default function Sequence(){
    return (
<>
    <NutHead title={'NutUml在线工具'} />
    <link href="//unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet" />
    <Script src="../js/nutuml.js"></Script>
    <NutNav page="tool" />
<div id="app" class="container">
    <div class="row text-right">
      <button type="button" class="btn btn-link" onclick="location.href='../zh/tool.html'">中文</button>
      <button type="button" class="btn btn-link" onclick="location.href='../en/tool.html'">English</button>
    </div>
    <h4>请输入</h4>
    <div class="row">
        <div class="col-md-6">
            <textarea style={{width:'100%', height:'360px'}} placeholder="请输入内容" v-model="textarea"></textarea>
        </div>
        <div id="canvas" class="col-md-6 text-center">
        </div>
    </div>
    <NutFoot />
</div>
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
            var nutuml = new NutUml(canvas);
            nutuml.drawUml(text);
        }
    }
}).$mount('#app')
}}></Script>   
</>)
}

