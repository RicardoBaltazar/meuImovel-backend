import Head from 'next/head'
import styled from 'styled-components';
import { motion } from 'framer-motion';


import img from '../public/img/undraw_Ride_a_bicycle_2yok.png';
import Container from '../src/Components/Container';
import Menu from '../src/Components/Menu';
import Button from '../src/Components/Button/';

const Main = styled.main`
  /* display: flex;
  height: 85vh;
  
  justify-content: space-between;
  align-items: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 8%;
    /* border: 1px solid red; */

  section{
    display: flex;
    /* border: 1px solid yellow; */
    /* flex-direction: column; */
    justify-content: space-between;
    align-items: center;
    /* height: 50vh; */
    height: 84vh;
    /* margin-top: -3rem; */

    .div-title-home {
      /* background-color: red; */
      display: flex;
    /* border: 1px solid yellow; */
    flex-direction: column;
    justify-content: space-between;
    /* height: 50vh; */
    /* height: 50vh;
    margin-top: -3rem; */
    }

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

  }

  @media screen and (max-width: 900px) {
    justify-content: center;
    align-items: center;
    text-align:left;
    height: 80vh;
    padding: 0 1rem;
    margin-top: -10vh;
  }

`

const ImgHome = styled.img`
  width: 50vw;
  /* margin-right: -30px; */
  /* border: 1px solid black; */

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
          link1='Home'
          link2='sobre'
          link3='bikes'
        />
        <Main
          as={motion.section}
          // transition={{ delay: 0.2, duration: 0.3 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial='hidden'
          animate='show'
        >
          <section>
            <div className='div-title-home'>
              <h2>Alugue uma bicicleta e explore a cidade.</h2>
              <p>
                Alugue uma bicicleta e faça um passeio sozinho ou com
                sua família e amigos pela cidade e descubra suas belezas!
            </p>
              <Button text='Alugue uma Bike' />
            </div>
            {/* <div className='responsive-sign'>
              <a href="#" className='responsive-btn-signin'>Sign in</a>
              <a href="#" className='responsive-btn-signUp'><b>Sign Up</b></a>
            </div> */}
            <ImgHome src={img} />
          </section>
        </Main>
      </Container>

    </div>
  )
}
