import Head from 'next/head'
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Container from '../src/Components/Container';
import img from '../public/img/undraw_Ride_a_bicycle_2yok.png';
import Menu from '../src/Components/Menu';

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8%;
  border: 1px solid red;


  section{
    display: flex;
    border: 1px solid yellow;
    flex-direction: column;
    justify-content: space-between;
    height: 50vh;
    margin-top: -3rem;

    /* h2 {
      font-size: 55px;
      color: var(--title-color);

      @media screen and (max-width: 900px) {   
        font-size: 50px;
      }
    } */
    
    p{
      font-size: 1.4rem;
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
  `

  const ImgHome = styled.img`
  width: 50vw;
  margin-right: -30px;

  @media screen and (max-width: 900px) {
    display: none;
  }
  `

function About() {
  return (
    <>
      <Container>
        <Menu
          home='/'
          link1='About Us'
          link2='Bikes'
          link3='Places'
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
            {/* <h2>Rent out a bike and explore.</h2> */}
            <p>
              Rent a bike and take a cycling trip alone pr with
              your family and friends through city and discover its beauty!

              loren ipsun lorem ipsum lorem iupsom
              loren ipsun lorem ipsum lorem iupsom
              loren ipsun lorem ipsum lorem iupsom
              loren ipsun lorem ipsum lorem iupsom
              loren ipsun lorem ipsum lorem iupsom
              loren ipsun lorem ipsum lorem iupsom
            </p>

          </section>
          <ImgHome src={img} />
        </Main>
      </Container>
    </>
  )
}

export default About;