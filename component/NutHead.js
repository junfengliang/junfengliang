import Head from 'next/head'

export default function NutHead({title}){
  return (
    <>
    <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
    </Head>
    </>
  )
}

