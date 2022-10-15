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
        <Link href="/zh/"><a class="navbar-brand">NutUml</a></Link>
        </div>
        <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
            <li className={'home'==page ? 'active':''}><Link href="/zh/"><a>主页</a></Link></li>
            <li className={'sequence'==page ? 'active':''}><Link href="/zh/sequence"><a>时序图</a></Link></li>
            <li className={'tool'==page ? 'active':''}><Link href="/zh/tool"><a>在线工具</a></Link></li>
            <li><a target="_blank" href="https://github.com/junfengliang/nutuml">Github</a></li>
            <li><a href="my-diagram.html">我的图表</a></li>
            <li><a href="login.html">登录</a></li>
            <li><a href="reg.html">注册</a></li>
        </ul>
        </div>
    </div>
</nav>
    )
}