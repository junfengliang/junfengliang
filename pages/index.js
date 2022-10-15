import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'

export default function Home(){
  return (
    <>
    <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NutUml</title>
    </Head>
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

