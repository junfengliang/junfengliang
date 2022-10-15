import NutHead from '../component/NutHead'
import Script from 'next/script'
import Link from 'next/link'

export default function Home(){
  return (
    <>
    <NutHead title="欢迎使用Nutuml" />
    <div id="app">
      <ul>
        <li><Link href="/zh"><a>中文</a></Link></li>
        <li><Link href="/zh"><a>English</a></Link></li>
      </ul>
    </div>
    <Script>
    {   ` var JsSrc =(navigator.language || navigator.browserLanguage).toLowerCase();
          if(JsSrc.indexOf('zh')>=0)
          {
             location.href='zh/' 
          }
          else if(JsSrc.indexOf('en')>=0)
          {
             location.href='en/'
          }
          else
          {
             // 假如浏览器语言是其它语言
             location.href='en/'
          }`
      }
    </Script>
    </>
  )
}

