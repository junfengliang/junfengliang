import NutHead from '../../component/NutHead'
import NutFoot from '../../component/NutFoot'
import Script from 'next/script'
import Link from 'next/link'
import style from '../../styles/index.module.css'
import NutNav from '../../component/NutNav'

export default function Home(){
    return (
<>
    <NutHead title={'NutUml时序图'} />
    <link href="//unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet" />
    
    <Script src="../js/nutuml.js"></Script>
    <NutNav page="home" />
    
<div id="app" class="container">
    <div class="row text-right">
        <button type="button" class="btn btn-link" onclick="location.href='../zh/'">中文</button>
        <button type="button" class="btn btn-link" onclick="location.href='../en/'">English</button>
    </div>
<div class="jumbotron">
        <h2>NutUml：基于文本的UML建模工具</h2>
        <p>
            NutUml 是一个开源，免费的UML建模工具，基于Javascript，HTML5。你可以在浏览器界面里编辑UML描述文本，然后实时查看生成的UML图。
        </p>
    </div>
    <div class="row">
        <div class="col-md-6">
            <h4>简单示例</h4>
            <p>我们用-&gt;来表示参与者之间的消息传递， 不必显式地声明参与者。</p>
            <p>也可以用--&gt;来表示虚线。</p>
            <p>你可以试着修改下面文本框里的内容，然后查看右边图片的变化</p>
            <textarea className={style.area} placeholder="请输入内容" v-model="textarea"></textarea>
            <p>更多的语法说明及示例，请参考<a href="sequence.html">时序图</a></p>
        </div>
        <div id="canvas" class="col-md-6 text-center bottom-align-text"></div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <h4>Confluence插件</h4>
            <p>Nutuml提供confluence 插件。<a href="../css/nutuml-1.1.0.jar">下载</a></p>
        </div>
    </div>
    <NutFoot />
</div>
<Script src="//unpkg.com/vue@2.6.14/dist/vue.min.js" onLoad={()=>{
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
<Script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></Script>
<Script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></Script>
</>)
}