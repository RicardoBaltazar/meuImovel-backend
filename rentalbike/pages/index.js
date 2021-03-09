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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 8%;
    /* border: 1px solid red; */

  @media screen and (max-width: 900px) {
    /* justify-content: center;
    align-items: center;
    text-align:left;
    height: 80vh;
    padding: 0 1rem;
    margin-top: -10vh; */
  }

`

const SectionHome = styled.section`
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
`

const ImgHome = styled.img`
  width: 50vw;
  /* margin-right: -30px; */
  /* border: 1px solid black; */

  @media screen and (max-width: 900px) {
    display: none;
  }
`

const SectionLogin = styled.section`
    display: flex;
    /* border: 1px solid yellow; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    /* height: 50vh; */
    height: 100vh;
    width: 100vw;
    background-color: var(--primary-color);
    color: #fff;
    /* margin-top: -3rem; */

    

    form {
      display: flex;
      flex-direction: column;
      width: 25vw;
      /* border: 1px solid #fff; */
      padding: 1rem 0;

      @media screen and (max-width: 900px) {
        width: 50vw;
      }
      @media screen and (max-width: 600px) {
        width: 90vw;
      }
    }

    h2{
      margin-bottom: 0.5rem;
      font-size: 2rem;
    }

    label {
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }

    input {
      border: none;
      padding: 1rem ;
      border-radius: 25px;
    }

    button {
      padding: 1rem 2rem;
      border-radius: 25px;
      background-color: #fff;
      margin: 2rem 0 0rem 0;
      font-size: 1rem;
      color: #444;
      font-weight: bold;
      border: none;
      transition: 0.2s;
      cursor: pointer;
      opacity:80% ;
      &:hover{
        opacity:100% ;
      }
    }

    p {
      color: #fff;
      @media screen and (max-width: 900px) {
        font-size: 0.8rem;
      }
    }

    p a {
      font-weight: bold;
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
          transition={{ ease: "easeOut", duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial='hidden'
          animate='show'
        >

          <SectionHome>
            <div className='div-title-home'>
              <h2>Alugue uma bicicleta e explore a cidade.</h2>
              <p>
                Alugue uma bicicleta e faça um passeio sozinho ou com
                sua família e amigos pela cidade e descubra suas belezas!
            </p>
              <Button text='Alugue uma Bike' />
            </div>
            <ImgHome src={img} />
          </SectionHome>

          <SectionLogin>
            <h2>Faça seu login</h2>
            <p>Se ainda não possui uma conta, <a>Cadastre - se!</a></p>
            <form>
              <label>Email</label>
              <input placeholder='Digite seu email' />
              <label>Senha</label>
              <input placeholder='Digite sua senha' />
              <button>Entrar</button>
            </form>
          </SectionLogin>

        </Main>
      </Container>

    </div>
  )
}
