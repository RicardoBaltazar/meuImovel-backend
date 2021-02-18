import Head from 'next/head'
import styled from 'styled-components';

import Container from '../src/Components/Container';
import Menu from '../src/Components/Menu';

function About(){
    return (
        <>
        <Container>
        <Menu
          home='/'
          link1='About Us'
          link2='Bikes'
          link3='Places'
        />
        <main>
          <section>
            <h2>Rent out a bike and explore.</h2>
            <p>
              Rent a bike and take a cycling trip alone pr with
              your family and friends through city and discover its beauty!
            </p>
            
          </section>
          
        </main>
      </Container>
        </>
    )
}

export default About;