import Head from 'next/head'
import Header from '../components/Header'
import Services from '../components/Services'
import clientPromise from './../lib/mongodb'

export default function Home({ services }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Header />
        <Services services={services} />
      </main>
    </>
  )
}


export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("geomaus")
    const res = await db.collection('services').find()
      .toArray()
    return {
      props: { services: JSON.parse(JSON.stringify(res)) },
    }
  } catch (e) {
    return {
      props: { isConnected: false },
    }
  }
}