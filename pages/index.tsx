import Head from 'next/head'
import { Hero } from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pipedrive Masters</title>
        <meta name="description" content="Pipedrive Masters" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  )
}
