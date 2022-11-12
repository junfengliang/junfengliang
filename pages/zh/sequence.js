import NutHead from '../../component/NutHead'
import NutFoot from '../../component/NutFoot'
import Script from 'next/script'
import NutNav from '../../component/NutNav'
import { useState } from 'react'
import { Col } from 'react-bootstrap'

const initData = {
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
};

export default function Sequence(){
    const [content0, setContent0] = useState(initData.textarea0);
    const [html0, setHtml0] = useState('');
    function contentChange0(event){
        var val = event.target.value;
        setContent0(val);
        setHtml0(nutuml.render(val));
    }

    const [content1, setContent1] = useState(initData.textarea1);
    const [html1, setHtml1] = useState('');
    function contentChange1(event){
        var val = event.target.value;
        setContent1(val);
        setHtml1(nutuml.render(val));
    }



    const [content2, setContent2] = useState(initData.textarea2);
    const [html2, setHtml2] = useState('');
    function contentChange2(event){
        var val = event.target.value;
        setContent2(val);
        setHtml2(nutuml.render(val));
    }

    const [content3, setContent3] = useState(initData.textarea3);
    const [html3, setHtml3] = useState('');
    function contentChange3(event){
        var val = event.target.value;
        setContent3(val);
        setHtml3(nutuml.render(val));
    }

    const [content4, setContent4] = useState(initData.textarea4);
    const [html4, setHtml4] = useState('');
    function contentChange4(event){
        var val = event.target.value;
        setContent4(val);
        setHtml4(nutuml.render(val));
    }

    const [content5, setContent5] = useState(initData.textarea5);
    const [html5, setHtml5] = useState('');
    function contentChange5(event){
        var val = event.target.value;
        setContent5(val);
        setHtml5(nutuml.render(val));
    }

    const [content6, setContent6] = useState(initData.textarea6);
    const [html6, setHtml6] = useState('');
    function contentChange6(event){
        var val = event.target.value;
        setContent6(val);
        setHtml6(nutuml.render(val));
    }

    const [content7, setContent7] = useState(initData.textarea7);
    const [html7, setHtml7] = useState('');
    function contentChange7(event){
        var val = event.target.value;
        setContent7(val);
        setHtml7(nutuml.render(val));
    }

    const [content8, setContent8] = useState(initData.textarea8);
    const [html8, setHtml8] = useState('');
    function contentChange8(event){
        var val = event.target.value;
        setContent8(val);
        setHtml8(nutuml.render(val));
    }

    const [content9, setContent9] = useState(initData.textarea9);
    const [html9, setHtml9] = useState('');
    function contentChange9(event){
        var val = event.target.value;
        setContent9(val);
        setHtml9(nutuml.render(val));
    }

    const [content10, setContent10] = useState(initData.textarea10);
    const [html10, setHtml10] = useState('');
    function contentChange10(event){
        var val = event.target.value;
        setContent10(val);
        setHtml10(nutuml.render(val));
    }

    const [content11, setContent11] = useState(initData.textarea11);
    const [html11, setHtml11] = useState('');
    function contentChange11(event){
        var val = event.target.value;
        setContent11(val);
        setHtml11(nutuml.render(val));
    }

    const [content12, setContent12] = useState(initData.textarea12);
    const [html12, setHtml12] = useState('');
    function contentChange12(event){
        var val = event.target.value;
        setContent12(val);
        setHtml12(nutuml.render(val));
    }

    const [content13, setContent13] = useState(initData.textarea13);
    const [html13, setHtml13] = useState('');
    function contentChange13(event){
        var val = event.target.value;
        setContent13(val);
        setHtml13(nutuml.render(val));
    }

    const [content14, setContent14] = useState(initData.textarea14);
    const [html14, setHtml14] = useState('');
    function contentChange14(event){
        var val = event.target.value;
        setContent14(val);
        setHtml14(nutuml.render(val));
    }

    const [content15, setContent15] = useState(initData.textarea15);
    const [html15, setHtml15] = useState('');
    function contentChange15(event){
        var val = event.target.value;
        setContent15(val);
        setHtml15(nutuml.render(val));
    }

    const [content16, setContent16] = useState(initData.textarea16);
    const [html16, setHtml16] = useState('');
    function contentChange16(event){
        var val = event.target.value;
        setContent16(val);
        setHtml16(nutuml.render(val));
    }

    const [content17, setContent17] = useState(initData.textarea17);
    const [html17, setHtml17] = useState('');
    function contentChange17(event){
        var val = event.target.value;
        setContent17(val);
        setHtml17(nutuml.render(val));
    }

    const [content18, setContent18] = useState(initData.textarea18);
    const [html18, setHtml18] = useState('');
    function contentChange18(event){
        var val = event.target.value;
        setContent18(val);
        setHtml18(nutuml.render(val));
    }

    const [content19, setContent19] = useState(initData.textarea19);
    const [html19, setHtml19] = useState('');
    function contentChange19(event){
        var val = event.target.value;
        setContent19(val);
        setHtml19(nutuml.render(val));
    }
    return (
<>
    <NutHead title={'NutUml时序图'} />
    <Script src="../js/nutuml.js" onLoad={()=>{
        setHtml0(nutuml.render(content0));
        setHtml1(nutuml.render(content1));
        setHtml2(nutuml.render(content2));
        setHtml3(nutuml.render(content3));
        setHtml4(nutuml.render(content4));
        setHtml5(nutuml.render(content5));
        setHtml6(nutuml.render(content6));
        setHtml7(nutuml.render(content7));
        setHtml8(nutuml.render(content8));
        setHtml9(nutuml.render(content9));
        setHtml10(nutuml.render(content10));
        setHtml11(nutuml.render(content11));
        setHtml12(nutuml.render(content12));
        setHtml13(nutuml.render(content13));
        setHtml14(nutuml.render(content14));
        setHtml15(nutuml.render(content15));
        setHtml16(nutuml.render(content16));
        setHtml17(nutuml.render(content17));
        setHtml18(nutuml.render(content18));
        setHtml19(nutuml.render(content19));
    }}></Script>
    <NutNav page="sequence" />
<div id="app" class="container">
    <div class="row" style={{marginTop:20}}>
        <Col md="6">
            <h4>简单示例</h4>
            <p>我们用-&gt;来表示参与者之间的消息传递， 不必显式地声明参与者。</p>
            <p>也可以用--&gt;来表示虚线。</p>
            <p>还可以用&lt;--, &lt;-; 这两个符号不影响绘制效果，只影响可读性</p>
            <p>你可以试着修改下面文本框里的内容，然后查看右边图片的变化</p>
            <textarea style={{width:'100%', height:'60px'}} placeholder="请输入内容" value={content0} onChange={contentChange0} ></textarea>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html0
            }}>
        </Col>
    </div>
    <div class="row" style={{marginTop:20}} >
        <Col md="6">
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
            <textarea style={{width:'100%', height:270}} placeholder="请输入内容" value={content1} onChange={contentChange1} ></textarea>
            </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html1
            }}>
        </Col>
    </div>
    <div class="row" style={{display: 'none'}}>
        <Col md="6">
            <p>关键字 as 用于重命名参与者</p>
            <p>你可以使用RGB值或者颜色名修改 actor 或参与者的背景颜色。</p>
            <p>你可以试着修改下面文本框里的内容，然后查看右边图片的变化</p>
            <textarea style={{width:'100%', height:'200px'}} placeholder="请输入内容"  value={content2} onChange={contentChange2} ></textarea>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html2
            }}>
        </Col>
    </div>
    
    <div class="row" style={{marginTop:20}}>
        <Col md="6">
            <h4>在参与者中使用非字母符号</h4>
            <p>我们可以使用引号定义参与者，还可以用关键字 as 给参与者定义别名。</p>
            <p>你可以试着修改下面文本框里的内容，然后查看右边图片的变化</p>
            <textarea style={{width:'100%', height:100}} placeholder="请输入内容"  value={content3} onChange={contentChange3} ></textarea>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html3
            }}>
        </Col>
    </div>
    
    <div class="row" style={{marginTop:20}}>
        <Col md="6">
            <h4>给自己发消息</h4>
            <p>参与者可以给自己发信息</p>
            <p>你可以试着修改下面文本框里的内容，然后查看右边图片的变化</p>
            <textarea style={{width:'100%', height:100}} placeholder="请输入内容"  value={content4} onChange={contentChange4} ></textarea>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html4
            }}>
        </Col>
    </div>
    <div class="row" style={{marginTop:20}}>
        <Col md="6">
            <h4>自动编号</h4>
            <p>我们可以通过autonumber请消息自动编号</p>
            <p>你可以试着修改下面文本框里的内容，然后查看右边图片的变化</p>
            <textarea style={{width:'100%', height:100}} placeholder="请输入内容"  value={content5} onChange={contentChange5} ></textarea>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html5
            }}>
        </Col>
    </div>
    <div class="row" style={{marginTop:20}}>
        <Col md="6">
            <h4>分隔符</h4>
            <p>我们可以通过 == 关键词来将你的图表分割成多个步骤。</p>
            <p>你可以试着修改下面文本框里的内容，然后查看右边图片的变化</p>
            <textarea style={{width:'100%', height:200}} placeholder="请输入内容"  value={content6} onChange={contentChange6} ></textarea>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html6
            }}>
        </Col>
    </div>
    <div class="row" style={{marginTop:20}}>
        <Col md="6">
            <h4>移除脚注</h4>
            <p>使用hide footbox关键字移除脚注。</p>
            <p>你可以试着修改下面文本框里的内容，然后查看右边图片的变化</p>
            <textarea style={{width:'100%', height:100}} placeholder="请输入内容"  value={content7} onChange={contentChange7} ></textarea>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html7
            }}>
        </Col>
    </div>
    <div class="row" style={{marginTop:20}}>
        <Col md="6">
            <h4>页面标题,页眉,页脚</h4>
            <p>使用title关键词增加标题<br />
                使用header关键词增加页眉<br />
                使用footer关键词增加页脚</p>
            <p></p>
            <textarea style={{width:'100%', height:150}} placeholder="请输入内容"  value={content8} onChange={contentChange8} ></textarea>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html8
            }}>
        </Col>
    </div>

    <div class="row" style={{marginTop:20}}>
        <Col md="6">
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
            <textarea style={{width:'100%', height:370}} placeholder="请输入内容"  value={content9} onChange={contentChange9} ></textarea>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html9
            }}>
        </Col>
    </div>
   
    <div class="row" style={{marginTop:20}}>
        <Col md="6">
            <h4>给消息添加注释</h4>
            <p>我们可以通过在消息后面添加 note left 或者 note right 关键词来给消息添加注释。
                也可以通过使用 end note 来添加多行注释。
            </p>
            <textarea style={{width:'100%', height:300}} placeholder="请输入内容"  value={content10} onChange={contentChange10} ></textarea>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html10
            }}>
        </Col>
    </div>
    <div class="row" style={{marginTop:20}}>
        <Col md="6">
            <h4>其他的注释</h4>
            <p>可以使用note left of，note right of或note over在节点(participant)的相对位置放置注释。<br />
                还可以通过修改背景色来高亮显示注释。<br />
                以及使用关键字end note来添加多行注释。
            </p>
            <textarea v-model="textarea11" style={{width:'100%', height:350}}  value={content11} onChange={contentChange11} ></textarea>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html11
            }}>
        </Col>
    </div>
    <div class="row" style={{marginTop:20}}>
        <Col md="6">
            <h4>引用</h4>
            <p>我们可以在图中通过使用ref over关键词来实现引用。
            </p>
            <textarea style={{width:'100%', height:280}} placeholder="请输入内容" value={content12} onChange={contentChange12} ></textarea>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html12
            }}>
        </Col>
    </div>
    <div class="row" style={{marginTop:20}}>
        <Col md="6">
            <h4>延迟</h4>
            <p>我们可以使用...来表示延迟，并且还可以给延迟添加注释。                。
            </p>
            <textarea style={{width:'100%', height:'150px'}} placeholder="请输入内容" value={content13} onChange={contentChange13} ></textarea>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html13
            }}>
        </Col>
    </div>
    <div class="row" style={{marginTop:20}}>
        <Col md="6">
            <h4>文本换行</h4>
            <p>我们可以手动通过 \n 来换行。<br />
                也可以使用 maxMessageSize。
            </p>
            <textarea style={{width:'100%', height:'150px'}} placeholder="请输入内容" value={content14} onChange={contentChange14} ></textarea>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html14
            }}>
        </Col>
    </div>
    <div class="row" style={{marginTop:20}}>
        <Col md="6">
            <h4>空间</h4>
            <p>我们可以通过 使用|||来增加空间。还可以使用数字指定增加的像素的数量。
            </p>
            <textarea style={{width:'100%', height:'250px'}} placeholder="请输入内容" value={content15} onChange={contentChange15} ></textarea>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html15
            }}>
        </Col>
    </div>
    <div class="row" style={{marginTop:20}}>
        <Col md="6">
            <h4>生命线的激活与撤销</h4>
            <p>关键字activate和deactivate用来表示参与者的生命活动。<br />
                一旦参与者被激活，它的生命线就会显示出来。<br />
                activate和deactivate适用于以上情形。<br />
                destroy表示一个参与者的生命线的终结。
            </p>
            <textarea style={{width:'100%', height:330}} placeholder="请输入内容" value={content16} onChange={contentChange16} ></textarea>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html16
            }}>
        </Col>
    </div>
    <div class="row">
        <Col md="6">
            <p>还可以使用嵌套的生命线，并且运行给生命线添加颜色。
            </p>
            <textarea style={{width:'100%', height:370}} placeholder="请输入内容" value={content17} onChange={contentChange17} ></textarea>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html17
            }}>
        </Col>
    </div>
    <div class="row" style={{marginTop:20}}>
        <Col md="6">
            <h4>进入和发出消息</h4>
            <p>如果只想关注部分图示，你可以使用进入和发出箭头。<br />
                使用方括号[和]表示图示的左、右两侧。
            </p>
            <textarea style={{width:'100%', height:330}} placeholder="请输入内容" value={content18} onChange={contentChange18} ></textarea>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html18
            }}>
        </Col>
    </div>
    <div class="row" style={{marginTop:20}}>
        <Col md="6">
            <h4>包裹参与者</h4>
            <p>可以使用box和end box画一个盒子将参与者包裹起来。<br />
                还可以在box关键字之后添加标题或者背景颜色。
            </p>
            <textarea style={{width:'100%', height:'200px'}} placeholder="请输入内容" value={content19} onChange={contentChange19} ></textarea>
        </Col>
        <Col md="6" align="center" dangerouslySetInnerHTML={{
                 __html: html19
            }}>
        </Col>
    </div>
    <NutFoot />    
</div>
</>)
}
