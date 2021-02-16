import Head from 'next/head'
//import styles from '../styles/Home.module.css'

import Container from '../src/Components/Container'
import Menu from '../src/Components/Menu'

export default function Home() {
  return (
    <div >
      <Head>
        <title>
          RentalBike App
        </title>
      </Head>
      <Container>
        <Menu />
        ola
      </Container>
      
    </div>
  )
}
