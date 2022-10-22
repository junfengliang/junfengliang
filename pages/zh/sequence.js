import NutHead from '../../component/NutHead'
import NutFoot from '../../component/NutFoot'
import Script from 'next/script'
import NutNav from '../../component/NutNav'
import style from '../../styles/sequence.module.css'

export default function Sequence(){
    return (
<>
    <NutHead title={'NutUml时序图'} />
    <Script src="../js/nutuml.js"></Script>
    <NutNav page="sequence" />
<div id="app" class="container">
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>简单示例</h4>
            <p>我们用-&gt;来表示参与者之间的消息传递， 不必显式地声明参与者。</p>
            <p>也可以用--&gt;来表示虚线。</p>
            <p>还可以用&lt;--, &lt;-; 这两个符号不影响绘制效果，只影响可读性</p>
            <p>你可以试着修改下面文本框里的内容，然后查看右边图片的变化</p>
            <textarea style={{width:'100%', height:'60px'}} placeholder="请输入内容" v-model="textarea0"></textarea>
        </div>
        <div id="canvas0" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}} >
        <div class="col-md-6">
            <h4>声明参与者</h4>
            <p>你可以使用以下关键字来声明参与者：</p>
            <li>participant</li>
            <li>actor</li>
            <li>boundary</li>
            <li>control</li>    
            <li>entity</li>  
            <li>database</li>
            <li>collections</li>
            <p>你可以试着修改下面文本框里的内容，然后查看右边图片的变化</p>
            <textarea style={{width:'100%', height:270}} placeholder="请输入内容" v-model="textarea1"></textarea>
        </div>
        <div id="canvas1" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{display: 'none'}}>
        <div class="col-md-6">
            <p>关键字 as 用于重命名参与者</p>
            <p>你可以使用RGB值或者颜色名修改 actor 或参与者的背景颜色。</p>
            <p>你可以试着修改下面文本框里的内容，然后查看右边图片的变化</p>
            <textarea style={{width:'100%', height:'200px'}} placeholder="请输入内容" v-model="textarea2"></textarea>
        </div>
        <div id="canvas2" align="center" class="col-md-6">
        </div>
    </div>
    
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>在参与者中使用非字母符号</h4>
            <p>我们可以使用引号定义参与者，还可以用关键字 as 给参与者定义别名。</p>
            <p>你可以试着修改下面文本框里的内容，然后查看右边图片的变化</p>
            <textarea style={{width:'100%', height:100}} placeholder="请输入内容" v-model="textarea3"></textarea>
        </div>
        <div id="canvas3" align="center" class="col-md-6">
        </div>
    </div>
    
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>给自己发消息</h4>
            <p>参与者可以给自己发信息</p>
            <p>你可以试着修改下面文本框里的内容，然后查看右边图片的变化</p>
            <textarea style={{width:'100%', height:100}} placeholder="请输入内容" v-model="textarea4"></textarea>
        </div>
        <div id="canvas4" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>自动编号</h4>
            <p>我们可以通过autonumber请消息自动编号</p>
            <p>你可以试着修改下面文本框里的内容，然后查看右边图片的变化</p>
            <textarea style={{width:'100%', height:100}} placeholder="请输入内容" v-model="textarea5"></textarea>
        </div>
        <div id="canvas5" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>分隔符</h4>
            <p>我们可以通过 == 关键词来将你的图表分割成多个步骤。</p>
            <p>你可以试着修改下面文本框里的内容，然后查看右边图片的变化</p>
            <textarea style={{width:'100%', height:200}} placeholder="请输入内容" v-model="textarea6"></textarea>
        </div>
        <div id="canvas6" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>移除脚注</h4>
            <p>使用hide footbox关键字移除脚注。</p>
            <p>你可以试着修改下面文本框里的内容，然后查看右边图片的变化</p>
            <textarea style={{width:'100%', height:100}} placeholder="请输入内容" v-model="textarea7"></textarea>
        </div>
        <div id="canvas7" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>页面标题,页眉,页脚</h4>
            <p>使用title关键词增加标题<br />
                使用header关键词增加页眉<br />
                使用footer关键词增加页脚</p>
            <p></p>
            <textarea style={{width:'100%', height:150}} placeholder="请输入内容" v-model="textarea8"></textarea>
        </div>
        <div id="canvas8" align="center" class="col-md-6">
        </div>
    </div>

    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>组合消息</h4>
            <p>可以通过以下关键词将组合消息：</p>
            <ul>
                <li>alt/else</li>
                <li>opt</li>
                <li>loop</li>
                <li>par</li>
                <li>break</li>
                <li>critical</li>
                <li>group</li>
            </ul>
            <p>
                后面紧跟着消息内容,可以在标头(header)添加需要显示的文字(group除外)。<br />
                关键词 end 用来结束分组。分组可以嵌套使用。
            </p>
            <textarea style={{width:'100%', height:370}} placeholder="请输入内容" v-model="textarea9"></textarea>
        </div>
        <div id="canvas9" align="center" class="col-md-6">
        </div>
    </div>
   
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>给消息添加注释</h4>
            <p>我们可以通过在消息后面添加 note left 或者 note right 关键词来给消息添加注释。
                也可以通过使用 end note 来添加多行注释。
            </p>
            <textarea style={{width:'100%', height:300}} placeholder="请输入内容" v-model="textarea10"></textarea>
        </div>
        <div id="canvas10" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>其他的注释</h4>
            <p>可以使用note left of，note right of或note over在节点(participant)的相对位置放置注释。<br />
                还可以通过修改背景色来高亮显示注释。<br />
                以及使用关键字end note来添加多行注释。
            </p>
            <textarea v-model="textarea11" style={{width:'100%', height:350}} placeholder="请输入内容"></textarea>
        </div>
        <div id="canvas11" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>引用</h4>
            <p>我们可以在图中通过使用ref over关键词来实现引用。
            </p>
            <textarea v-model="textarea12" style={{width:'100%', height:280}} placeholder="请输入内容"></textarea>
        </div>
        <div id="canvas12" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>延迟</h4>
            <p>我们可以使用...来表示延迟，并且还可以给延迟添加注释。                。
            </p>
            <textarea v-model="textarea13" style={{width:'100%', height:'150px'}} placeholder="请输入内容"></textarea>
        </div>
        <div id="canvas13" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>文本换行</h4>
            <p>我们可以手动通过 \n 来换行。<br />
                也可以使用 maxMessageSize。
            </p>
            <textarea v-model="textarea14" style={{width:'100%', height:'150px'}} placeholder="请输入内容"></textarea>
        </div>
        <div id="canvas14" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>空间</h4>
            <p>我们可以通过 使用|||来增加空间。还可以使用数字指定增加的像素的数量。
            </p>
            <textarea v-model="textarea15" style={{width:'100%', height:'250px'}} placeholder="请输入内容"></textarea>
        </div>
        <div id="canvas15" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>生命线的激活与撤销</h4>
            <p>关键字activate和deactivate用来表示参与者的生命活动。<br />
                一旦参与者被激活，它的生命线就会显示出来。<br />
                activate和deactivate适用于以上情形。<br />
                destroy表示一个参与者的生命线的终结。
            </p>
            <textarea v-model="textarea16" style={{width:'100%', height:330}} placeholder="请输入内容"></textarea>
        </div>
        <div id="canvas16" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <p>还可以使用嵌套的生命线，并且运行给生命线添加颜色。
            </p>
            <textarea v-model="textarea17" style={{width:'100%', height:370}} placeholder="请输入内容"></textarea>
        </div>
        <div id="canvas17" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>进入和发出消息</h4>
            <p>如果只想关注部分图示，你可以使用进入和发出箭头。<br />
                使用方括号[和]表示图示的左、右两侧。
            </p>
            <textarea v-model="textarea18" style={{width:'100%', height:330}} placeholder="请输入内容"></textarea>
        </div>
        <div id="canvas18" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>包裹参与者</h4>
            <p>可以使用box和end box画一个盒子将参与者包裹起来。<br />
                还可以在box关键字之后添加标题或者背景颜色。
            </p>
            <textarea v-model="textarea19" style={{width:'100%', height:'200px'}} placeholder="请输入内容"></textarea>
        </div>
        <div id="canvas19" align="center" class="col-md-6">
        </div>
    </div>
    <NutFoot />    
</div>

<Script src="//unpkg.com/vue@2.6.14/dist/vue.min.js" onLoad={()=>{
    new Vue({
        data: {
            textarea0: '客户端 -> 服务器 : 发起请求\n服务器 --> 客户端 : 响应',
            textarea1: 'actor Foo1\n' +
                       'boundary Foo2\n' +
                       'control Foo3\n' +
                       'entity Foo4\n' +
                       'database Foo5\n' +
                       'collections Foo6\n' +
                       'Foo1 -> Foo2 : To boundary\n' +
                       'Foo1 -> Foo3 : To control\n' +
                       'Foo1 -> Foo4 : To entity\n' +
                       'Foo1 -> Foo5 : To database\n' +
                       'Foo1 -> Foo6 : To collections',
            textarea2: 'actor Bob #red\n' + 
                        '\' The only difference between actor\n' +
                        '\'and participant is the drawing\n' +
                        'participant Alice\n' +
                        'participant "I have a really\\n long name" as L #99FF99\n' +
                        'Alice->Bob: Authentication Request\n'+
                        'Bob->Alice: Authentication Response\n'+
                        'Bob->L: Log transaction',
            textarea3: 'Alice -> "Bob()" : Hello\n' + 
                        '"Bob()" -> "This is very\\nlong" as Long\n' +
                        'Long --> "Bob()" : ok',
            textarea4: 'Alice->Alice: This is a signal to self.\\nIt also demonstrates\\nmultiline \\ntext',
            textarea5: 'autonumber\nBob -> Alice : Authentication Request\nBob <- Alice : Authentication Response',
            textarea6: '== Initialization ==\n'
                       + 'Alice -> Bob: Authentication Request\n'
                       + 'Bob --> Alice: Authentication Response\n'
                       + '== Repetition ==\n'
                       + 'Alice -> Bob: Another authentication Request\n'
                       + 'Alice <-- Bob: another authentication Response',
            textarea7: 'hide footbox\nAlice -> Bob: Authentication Request\nBob --> Alice: Authentication Response',
            textarea8: 'header Page Header\n'
                    +'footer Page Footer\n'
                    + 'title Example Title\n'
                    + 'Alice -> Bob : message 1\n'
                    + 'Alice -> Bob : message 2',
            textarea9:'Alice -> Bob: Authentication Request\n'
                    +'alt successful case\n'
                    +'    Bob -> Alice: Authentication Accepted\n'
                    +'else some kind of failure\n'
                    +'    Bob -> Alice: Authentication Failure\n'
                    +'    group My own label\n'
                    +'      Alice -> Log : Log attack start\n'
                    +'        loop 1000 times\n'
                    +'            Alice -> Bob: DNS Attack\n'
                    +'        end\n'
                    +'      Alice -> Log : Log attack end\n'
                    +'    end\n'
                    +'else Another type of failure\n'
                    +'Bob -> Alice: Please repeat\n'
                    +'end',
            textarea10:'Alice->Bob : hello\n'
                    +'note left: this is a first note\n\n'
    
                    +'Bob->Alice : ok\n'
                    +'note right: this is another note\n\n'
    
                    +'Bob->Bob : I am thinking\n'
                    +'note left\n'
                    +'a note\n'
                    +'can also be defined\n'
                    +'on several lines\n'
                    +'end note',
            textarea11:'participant Alice\n'
                    +'participant Bob\n'
                    +'note left of Alice aqua\n'
                    +'This is displayed\n'
                    +'left of Alice.\n'
                    +'end note\n'
    
                    +'note right of Alice: This is displayed right of Alice.\n'
    
                    +'note over Alice: This is displayed over Alice.\n'
    
                    +'note over Alice, Bob #FFAAAA: This is displayed\\n over Bob and Alice.\n'
    
                    +'note over Bob, Alice\n'
                    +'This is yet another\n'
                    +'example of\n'
                    +'a long note.\n'
                    +'end note',
            textarea12:'participant Alice\n'
                    +'actor Bob\n\n'
    
                    +'ref over Alice, Bob : init\n\n'
    
                    +'Alice -> Bob : hello\n\n'
    
                    +'ref over Bob\n'
                    +'  This can be on\n'
                    +'  several lines\n'
                    +'end ref',
            textarea13:'Alice -> Bob: Authentication Request\n'
                    +'...\n'
                    +'Bob --> Alice: Authentication Response\n'
                    +'...5 minutes latter...\n'
                    +'Bob --> Alice: Bye !',
            textarea14:'skinparam maxMessageSize 150\n'
                    +'participant a\n'
                    +'participant b\n'
                    +'a -> b :this\\nis\\nmanually\\ndone\n'
                    +'a -> b :this is a very long message on several words',
            textarea15:'Alice -> Bob: message 1\n'
                    +'Bob --> Alice: ok\n'
                    +'|||\n'
                    +'Alice -> Bob: message 2\n'
                    +'Bob --> Alice: ok\n'
                    +'||45||\n'
                    +'Alice -> Bob: message 3\n'
                    +'Bob --> Alice: ok',
            textarea16: 'participant User\n'
                    +'User -> A: DoWork\n'
                    +'activate A\n'
    
                    +'A -> B: << createRequest >>\n'
                    +'activate B\n'
    
                    +'B -> C: DoWork\n'
                    +'activate C\n'
                    +'C --> B: WorkDone\n'
                    +'destroy C\n'
    
                    +'B --> A: RequestCreated\n'
                    +'deactivate B\n'
    
                    +'A -> User: Done\n'
                    +'deactivate A',
            textarea17: 'participant User\n'
                    +'User -> A: DoWork\n\n'
                    +'activate A #FFBBBB\n'
                    +'A -> A: Internal call\n\n'
                    +'activate A #DarkSalmon\n'
                    +'A -> B: << createRequest >>\n\n'
                    +'activate B\n'
                    +'B --> A: RequestCreated\n'
                    +'deactivate B\n'
                    +'deactivate A\n'
                    +'A -> User: Done\n'
                    +'deactivate A',
           
            textarea18: '[-> A: DoWork\n\n'
                    +'activate A\n\n'
                    +'A -> A: Internal call\n'
                    +'activate A\n\n'
                    +'A ->] : << createRequest >>\n\n'
                    +'A<--] : RequestCreated\n'
                    +'deactivate A\n'
                    +'[<- A: Done\n'
                    +'deactivate A',
            textarea19: 'box "Internal Service" LightBlue\n'
                    +'participant Bob\n'
                    +'participant Alice\n'
                    +'end box\n'
                    +'participant Other\n\n'
    
                    +'Bob -> Alice : hello\n'
                    +'Alice -> Other : hello',
        },
        watch: {
            textarea0: function(){
                this.draw(document.getElementById("canvas0"),this.textarea0);
            },
            textarea1: function(){
                this.draw(document.getElementById("canvas1"),this.textarea1);
            },
            textarea2: function(){
                this.draw(document.getElementById("canvas2"),this.textarea2);
            },
            textarea3: function(){
                this.draw(document.getElementById("canvas3"),this.textarea3);
            },
            textarea4: function(){
                this.draw(document.getElementById("canvas4"),this.textarea4);
            },
            textarea5: function(){
                this.draw(document.getElementById("canvas5"),this.textarea5);
            },
            textarea6: function(){
                this.draw(document.getElementById("canvas6"),this.textarea6);
            },
            textarea7: function(){
                this.draw(document.getElementById("canvas7"),this.textarea7);
            },
            textarea8: function(){
                this.draw(document.getElementById("canvas8"),this.textarea8);
            },
            textarea9: function(){
                this.draw(document.getElementById("canvas9"),this.textarea9);
            },
            textarea10: function(){
                this.draw(document.getElementById("canvas10"),this.textarea10);
            },
            textarea11: function(){
                this.draw(document.getElementById("canvas11"),this.textarea11);
            },
            textarea12: function(){
                this.draw(document.getElementById("canvas12"),this.textarea12);
            },
            textarea13: function(){
                this.draw(document.getElementById("canvas13"),this.textarea13);
            },
            textarea14: function(){
                this.draw(document.getElementById("canvas14"),this.textarea14);
            },
            textarea15: function(){
                this.draw(document.getElementById("canvas15"),this.textarea15);
            },
            textarea16: function(){
                this.draw(document.getElementById("canvas16"),this.textarea16);
            },
            textarea17: function(){
                this.draw(document.getElementById("canvas17"),this.textarea17);
            },
            textarea18: function(){
                this.draw(document.getElementById("canvas18"),this.textarea18);
            },
            textarea19: function(){
                this.draw(document.getElementById("canvas19"),this.textarea19);
            }
        },
        mounted: function() {
            for(var i=0;i<=19;i++){
                this.draw(document.getElementById("canvas"+i),this["textarea" + i]);
            }
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

