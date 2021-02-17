import Head from 'next/head'
import styled from 'styled-components';

import img from '../public/img/undraw_Ride_a_bicycle_2yok.png'
import Container from '../src/Components/Container'
import Menu from '../src/Components/Menu'
import Button from '../src/Components/Button/'

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8%;

  section{
    
    display: flex;

    flex-direction: column;
    justify-content: space-between;
    height: 325px;

    h2 {
      font-size: 65px;
      color: var(--title-color);

      @media screen and (max-width: 500px) {   
        font-size: 50px;
      }

    }
    
    p{
      font-size: 18px;
      color: var(--secondary-color);
      max-width: 375px;
      line-height: 1.2;
      margin: 15px 0;

      @media screen and (max-width: 500px) {   
        margin:0;
      }
    }

  }

  @media screen and (max-width: 500px) {
    justify-content: center;
    align-items: center;
    text-align:left;
    height: 75vh;
    padding: 0 5%;
  }
`

const ImgHome = styled.img`
  width: 700px;
  margin-right: -30px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`

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
        <Main>
          <section>
            <h2>Rent out a bike and explore.</h2>
            <p>
              Rent a bike and take a cycling trip alone pr with
              your family and friends through city and discover its beauty!
            </p>
            <Button text='Rent a bike' />
          </section>
          <ImgHome src={img} />
        </Main>
      </Container>

    </div>
  )
}
