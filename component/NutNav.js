import Link from "next/link"

export default function NutHead({page}){
    return (
<nav class="navbar navbar-default">
    <div class="container">
        <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/zh/">NutUml</a>
        </div>
        <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
            <li className={'home'==page ? 'active':''}><a href="/zh/">主页</a></li>
            <li className={'sequence'==page ? 'active':''}><a href="/zh/sequence">时序图</a></li>
            <li className={'tool'==page ? 'active':''}><a href="/zh/tool">在线工具</a></li>
            <li className={'diagram'==page ? 'active':''} ><a href="/zh/my-diagram">我的图表</a></li>

            <li><a target="_blank" href="https://github.com/junfengliang/nutuml">Github</a></li>
            <li><a href="/zh/login.html">登录</a></li>
            <li><a href="/zh/reg.html">注册</a></li>
        </ul>
        </div>
    </div>
</nav>
    )
}