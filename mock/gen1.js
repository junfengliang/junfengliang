let  template = `    const [content{0}, setContent{0}] = useState(initData.textarea{0});
    const [html{0}, setHtml{0}] = useState('');
    function contentChange{0}(event){
        var val = event.target.value;
        setContent{0}(val);
        setHtml{0}(nutuml.render(val));
    }
`;
for(let i=0;i<20;i++){
    let str = template.replace(/\{0\}/g,i);
    console.log(str);
}