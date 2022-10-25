import NutHead from '../../component/NutHead'
import NutFoot from '../../component/NutFoot'
import Script from 'next/script'
import NutNav from '../../component/NutNavEn'
import { Container } from 'react-bootstrap'

export default function Sequence(){
    return (
<>
    <NutHead title={'NutUml Online Tool'} />
    <Script src="../js/nutuml.js"></Script>
    <NutNav page="tool" />
    <Container id="app" style={{marginTop:20}}>
        <h4>Please input</h4>
        <div class="row">
            <div class="col-md-6">
                <textarea style={{width:'100%', height:'360px'}} placeholder="Please input content" v-model="textarea"></textarea>
            </div>
            <div id="canvas" class="col-md-6" align="center">
            </div>
        </div>
        <NutFoot />
    </Container>
<Script src="../js/vue.min.js" onLoad={()=>{
 new Vue({
    data: {
        textarea: 'Client -> Server : Send Request\nServer --> Client : Response'
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

