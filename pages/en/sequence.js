import NutHead from '../../component/NutHead'
import NutFoot from '../../component/NutFoot'
import Script from 'next/script'
import NutNav from '../../component/NutNavEn'

export default function Sequence(){
    return (
<>
    <NutHead title={'NutUml Sequence'} />
    <Script src="../js/nutuml.js"></Script>
    <NutNav page="sequence" />
<div id="app" class="container">
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
        <h4>Simple Example </h4>
    <p>We use -&gt; to indicate the message transfer between participants, without explicitly declaring participants.</p>
    <p>You can also use --&gt; to indicate a dashed line.</p>
    <p>You can also use &lt;--, &lt;-; these two symbols do not affect the drawing effect, only affect the readability</p>
    <p>You can try to modify the content in the text box below, and then check the changes in the picture on the right</p>
            <textarea style={{width:'100%', height:'60px'}} placeholder="Please input content" v-model="textarea0"></textarea>
        </div>
        <div id="canvas0" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}} >
        <div class="col-md-6">
        <h4>Declare participants</h4>
    <p>You can use the following keywords to declare participants:</p>
            <li>participant</li>
            <li>actor</li>
            <li>boundary</li>
            <li>control</li>    
            <li>entity</li>  
            <li>database</li>
            <li>collections</li>
            <p>You can try to modify the content in the text box below, and then check the changes in the picture on the right</p>
            <textarea style={{width:'100%', height:270}} placeholder="Please input content" v-model="textarea1"></textarea>
        </div>
        <div id="canvas1" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{display: 'none'}}>
        <div class="col-md-6">
        <p>The keyword <b>as</b> is used to rename participants</p>
            <p>You can use RGB values or color names to modify the background color of an actor or participant.</p>
            <p>You can try to modify the content in the text box below, and then check the changes in the picture on the right</p>
            <textarea style={{width:'100%', height:'200px'}} placeholder="Please input content" v-model="textarea2"></textarea>
        </div>
        <div id="canvas2" align="center" class="col-md-6">
        </div>
    </div>
    
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
        <h4>Use non-letter symbols in participants</h4>
            <p>We can use quotation marks to define participants, and we can also use the keyword <b>as</b> to define aliases for participants.</p>
            <p>You can try to modify the content in the text box below, and then check the changes in the picture on the right</p>
            <textarea style={{width:'100%', height:100}} placeholder="Please input content" v-model="textarea3"></textarea>
        </div>
        <div id="canvas3" align="center" class="col-md-6">
        </div>
    </div>
    
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
        <h4>Message yourself</h4>
            <p>Participants can send messages to themselves</p>
            <p>You can try to modify the content in the text box below, and then check the changes in the picture on the right</p>
            <textarea style={{width:'100%', height:100}} placeholder="Please input content" v-model="textarea4"></textarea>
        </div>
        <div id="canvas4" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
        <h4>Auto number</h4>
            <p>We can user <b>autonumber</b> to auto number messages</p>
            <p>You can try to modify the content in the text box below, and then check the changes in the picture on the right</p>
            <textarea style={{width:'100%', height:100}} placeholder="Please input content" v-model="textarea5"></textarea>
        </div>
        <div id="canvas5" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
        <h4>Delimiter</h4>
            <p>We can use the <b>==</b> keyword to divide your chart into multiple steps.</p>
            <p>You can try to modify the content in the text box below, and then check the changes in the picture on the right</p>
            <textarea style={{width:'100%', height:200}} placeholder="Please input content" v-model="textarea6"></textarea>
        </div>
        <div id="canvas6" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
        <h4>Hide footbox</h4>
            <p>user <b>hide footbox</b> keyword to hide footbox.</p>
            <p>You can try to modify the content in the text box below, and then check the changes in the picture on the right</p>
            <textarea style={{width:'100%', height:100}} placeholder="Please input content" v-model="textarea7"></textarea>
        </div>
        <div id="canvas7" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>Page title, header, footer</h4>
            <p>use <b>title</b> keyword to add title<br />
                use <b>header</b> keyword to add header<br />
                use <b>footer</b> keyword to add footer</p>
            <p></p>
            <textarea style={{width:'100%', height:150}} placeholder="Please input content" v-model="textarea8"></textarea>
        </div>
        <div id="canvas8" align="center" class="col-md-6">
        </div>
    </div>

    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
        <h4>Combined message</h4>
            <p>Messages can be combined through the following keywords:</p>
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
                Followed by the content of the message<br />
                 You can add text that needs to be displayed in the header (except for group). <br />
                 The keyword <b>end</b> is used to end the grouping. <br />
                 *Note that grouping can be nested.</p>
            <textarea style={{width:'100%', height:370}} placeholder="Please input content" v-model="textarea9"></textarea>
        </div>
        <div id="canvas9" align="center" class="col-md-6">
        </div>
    </div>
   
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>Comment on the message</h4>
            <p>We can add notes to the message by adding the <b>note left</b> or <b>note right</b> keywords at the end of the message.
                 You can also add multiple lines of notes by using <b>end note</b>.
            </p>
            <textarea style={{width:'100%', height:300}} placeholder="Please input content" v-model="textarea10"></textarea>
        </div>
        <div id="canvas10" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>Other notes</h4>
            <p>You can use <b>note left of, note right of</b> or <b>note over</b> to place notes relative to the participant. <br />
                 You can also highlight the comment by changing the background color. <br />
                 And use the keyword end note to add multi-line notes.
            </p>
            <textarea v-model="textarea11" style={{width:'100%', height:350}} placeholder="Please input content"></textarea>
        </div>
        <div id="canvas11" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>Reference</h4>
            <p>We can use the <b>ref over</b> keyword in the figure to achieve reference.</p>
            <textarea v-model="textarea12" style={{width:'100%', height:280}} placeholder="Please input content"></textarea>
        </div>
        <div id="canvas12" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>Delay</h4>
            <p>We can use <b>...</b> to indicate the delay, and we can also add a comment to the delay.</p>
            <textarea v-model="textarea13" style={{width:'100%', height:'150px'}} placeholder="Please input content"></textarea>
        </div>
        <div id="canvas13" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
        <h4>Text wrap </h4>
            <p>We can manually pass \n to wrap the line. <br />
                You can also use <b>maxMessageSize</b>.
            </p>
            <textarea v-model="textarea14" style={{width:'100%', height:'150px'}} placeholder="Please input content"></textarea>
        </div>
        <div id="canvas14" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>Space</h4>
            <p>We can increase the space by using |||. You can also use numbers to specify the number of pixels added.</p>
            <textarea v-model="textarea15" style={{width:'100%', height:'250px'}} placeholder="Please input content"></textarea>
        </div>
        <div id="canvas15" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
        <h4>Activation and deactivation of lifeline </h4>
             <p>The keywords activate and deactivate are used to represent the life activities of participants. <br />
                 Once the participant is activated, its lifeline will be displayed. <br />
                 Activate and deactivate apply to the above situations. <br />
                 Destroy represents the end of a participant's lifeline.</p>
            <textarea v-model="textarea16" style={{width:'100%', height:330}} placeholder="Please input content"></textarea>
        </div>
        <div id="canvas16" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <p>You can also use nested lifelines, and run to add colors to the lifelines.
            </p>
            <textarea v-model="textarea17" style={{width:'100%', height:370}} placeholder="Please input content"></textarea>
        </div>
        <div id="canvas17" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
        <h4>Enter and send out messages</h4>
             <p>If you only want to follow some of the icons, you can use the enter and send arrows. <br />
                 Use square brackets [and] to indicate the left and right sides of the diagram.</p>
           <textarea v-model="textarea18" style={{width:'100%', height:330}} placeholder="Please input content"></textarea>
        </div>
        <div id="canvas18" align="center" class="col-md-6">
        </div>
    </div>
    <div class="row" style={{marginTop:20}}>
        <div class="col-md-6">
            <h4>Package participants </h4>
            <p>You can use box and end box to draw a box to wrap the participants. <br />
                 You can also add a title or background color after the box keyword.</p>
            <textarea v-model="textarea19" style={{width:'100%', height:'200px'}} placeholder="Please input content"></textarea>
        </div>
        <div id="canvas19" align="center" class="col-md-6">
        </div>
    </div>
    <NutFoot />    
</div>

<Script src="//unpkg.com/vue@2.6.14/dist/vue.min.js" onLoad={()=>{
    new Vue({
        data: {
            textarea0: 'Client -> Server : Request\nServer --> Client : Response',
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

