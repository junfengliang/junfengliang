import NutHead from '../../component/NutHead'
import NutFoot from '../../component/NutFoot'
import Script from 'next/script'
import NutNav from '../../component/NutNav'
import { useState, useEffect } from 'react'
import Nutuml from '../../component/nutuml'

function getUrlParams(key) {
    var url = window.location.search.substr(1);
    if (url == '') {
        return false;
    }
    var paramsArr = url.split('&');
    for (var i = 0; i < paramsArr.length; i++) {
        var combina = paramsArr[i].split("=");
        if (combina[0] == key) {
            return combina[1];
        }
    }
    return false;
}

export default function Diagram(){
    const [title,setTitle] = useState('');
    const [content, setContent] = useState();
    const [ts,setTs] = useState();
    function titleChange(event){
        setTitle(event.target.value);
    }
    function contentChange(event){
        setContent(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        var url = '/api/nutuml/save';
        console.log(' do submit ')

        var data = {
          title: title,
          content: content,
          ts: ts,
        };
        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data),
            headers: new Headers({
              'Content-Type': 'application/json',
              token: window.localStorage.getItem('token')
            })
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => {
            console.log('result',response)
            
          });
    }
    useEffect(() => {
        var pts = getUrlParams('ts');
        if(!pts){
            return;
        }
        setTs(pts)
        var url =  "/api/nutuml/detail?ts=" + pts;
        fetch(url, {
            method: 'GET', 
            headers: new Headers({
              'Content-Type': 'application/json',
              token: window.localStorage.getItem('token')
            })
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => {
            console.log('result',response)
            if(response.success){
                setTitle(response.data?.title)
                setContent(response.data?.content)
            }
          });
    },[]);
    return (
<>
    <NutHead title={'我的图表-详情-NutUml'} />
    <link href="//unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet" />
    <NutNav page="diagram" />

    <div id="app" class="container">
        <form onSubmit={handleSubmit}>
        <div class="row">
            <div class="col-md-6">
                <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1">标题</span>
                    <input type="text" value={title} onChange={titleChange} class="form-control" placeholder="请输入标题"></input>
                </div>
                <textarea value={content} onChange={contentChange} style={{marginTop:'10px', width:'100%', height:'400px'}} placeholder="请输入内容"></textarea>
                <button style={{width: '40%'}} class="w-100 btn btn-lg btn-primary" type="submit">保存</button>
            </div>
            <div id="canvas" class="col-md-6 text-center bottom-align-text" dangerouslySetInnerHTML={{
                 __html: content? Nutuml.render(content):''
            }}>
            </div>
        </div>
        </form>
        <NutFoot />
    </div>

<div class="modal fade" id="okModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">操作成功</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <p>保存成功！</p> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">确定</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="errModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">请注意</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div id="errMsg" class="modal-body">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
      </div>
    </div>
  </div>
</div>
    <Script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></Script>
    <Script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></Script>
</>)
}
