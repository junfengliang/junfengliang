import NutHead from '../../component/NutHead'
import NutFoot from '../../component/NutFoot'
import Script from 'next/script'
import NutNav from '../../component/NutNav'

export default function Diagram(){
    return (
<>
    <NutHead title={'我的图表-详情-NutUml'} />
    <link href="//unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet" />
    <NutNav page="diagram" />

    <div id="app" class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1">标题</span>
                    <input type="text" class="form-control" placeholder="请输入标题" aria-describedby="basic-addon1"></input>
                </div>
                <textarea style={{marginTop:'10px', width:'100%', height:'400px'}} placeholder="请输入内容" v-model="textarea"></textarea>
                <button style={{width: '40%'}} class="w-100 btn btn-lg btn-primary" type="submit">保存</button>
            </div>
            <div id="canvas" class="col-md-6 text-center bottom-align-text">
            </div>
        </div>
        
        <NutFoot />
    </div>

    <Script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></Script>
    <Script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></Script>
    <Script src="../js/nutuml.js"></Script>
    <Script src="//unpkg.com/vue@2.6.14/dist/vue.min.js" onLoad={()=>{
        new Vue({
            data: {
                textarea: ''
            },
            watch: {
                textarea: function(){
                    this.draw(document.getElementById("canvas"), this.textarea);
                }
            },
            mounted: function() {
                this.readData();
            },
            methods: {
                draw: function(canvas,text){
                    var nutuml = new NutUml(canvas);
                    nutuml.drawUml(text);
                },
                readData: function(){
                    var that = this;
                    $.ajax({
                        url: "/api/nutuml/detail?ts=123",
                        headers: {
                            token: window.localStorage.getItem('token')
                        }
                      }).done(function( data ) {
                        console.log('ddd',data);
                        that.textarea = data?.data?.content;
                        
                    });
                }
            }
        }).$mount('#app')
    }}></Script>
</>)
}
