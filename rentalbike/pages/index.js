import Head from 'next/head'
import styled from 'styled-components';


import img from '../public/img/undraw_Ride_a_bicycle_2yok.png';
import Container from '../src/Components/Container';
import Menu from '../src/Components/Menu';
import Button from '../src/Components/Button/';

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8%;

  section{
    display: flex;
    /* border: 1px solid yellow; */
    flex-direction: column;
    justify-content: space-between;
    height: 60vh;

    h2 {
      font-size: 55px;
      color: var(--title-color);

      @media screen and (max-width: 900px) {   
        font-size: 50px;
      }
    }
    
    p{
      font-size: 18px;
      color: var(--secondary-color);
      max-width: 375px;
      line-height: 1.2;
      margin: 15px 0;
    }

    .responsive-sign {
      display: none;

      @media screen and (max-width: 900px) {
        display: block;
        display: flex;
        /* flex-direction: column; */
        justify-content: space-around;
        align-items: center;
        /* border: 1px solid black; */
        padding: 10px 0;

        a{
        color: #111827;
        margin-bottom: 5px;
        font-size: 18px;
        }

        
      }
    } 

  }

  @media screen and (max-width: 900px) {
    justify-content: center;
    align-items: center;
    text-align:left;
    height: 80vh;
    padding: 0 5%;
    margin-top: -10vh;
  }

`

const ImgHome = styled.img`
  width: 700px;
  margin-right: -30px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

export default function Home() {
  return (
    <div >
      <Head>
        <title>
          BikeApp - Aluguel de Bicicletas
        </title>
      </Head>
      <Container>
        <Menu
          home='#'
          link1='About Us'
          link2='Bikes'
          link3='Places'
        />
        <Main>
          <section>
            <h2>Alugue uma bicicleta e explore a cidade.</h2>
            <p>
            Alugue uma bicicleta e faça um passeio sozinho ou com
            sua família e amigos pela cidade e descubra suas belezas!
            </p>
            <Button text='Alugue uma Bike' />
            <div className='responsive-sign'>
              <a href="#" className='responsive-btn-signin'>Sign in</a>
              <a href="#" className='responsive-btn-signUp'><b>Sign Up</b></a>
            </div>
          </section>
          <ImgHome src={img} />
        </Main>
      </Container>

    </div>
  )
}
