let  template = `    setHtml{0}(nutuml.render(content{0}));`;
for(let i=0;i<20;i++){
    let str = template.replace(/\{0\}/g,i);
    console.log(str);
}