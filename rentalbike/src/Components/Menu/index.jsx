import styled from 'styled-components';
import Link from 'next/link';

const HEADER = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 25px 8% 25px 8%;
    transition: 0.2s;
    /* border: 1px solid blue; */
   
    /* div {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        border: 1px solid green;
    } */

    h1 {
        margin-right: 40px;
        font-size: 22px;
        color: var(--title-color);
        cursor: pointer;
    }

    span{
        color: var(--primary-color);
    }

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    li {
        margin-left: 45px;
        transition: 0.1s;
        /* border: 1px solid brown; */

        &:hover{
            opacity: 75%;
        }
    }
   
    a {
        color: var(--secondary-color);
    }

    /* .btn-signin {
        color: #212353;
        font-weight: bold;
        @media screen and (max-width: 900px) {
            font-size: 0.8rem;
        }
        @media screen and (max-width: 500px) {
            display: none;
        }
    } */

    .btn-entrar{
        color: var(--primary-color);
        font-weight: bold;
        border: 2px solid var(--primary-color);
        padding: 0.8rem 1.5rem;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 900px) {
        padding: 25px 1rem;
        align-items: baseline;
        d
        

        div {
            /* flex-direction: column; */
            width: 100%;
            align-items: baseline;
            justify-content: left;
        }

        ul{
            display: none;
            width:0;
            height:0;
            justify-content: space-between;
        }

        li{
            width: 10vw;
            font-size: 0.8rem;
            margin: 0.5rem;
        }

        h1{
            font-size: 1.5rem;
            margin-right: 0;
            margin-bottom: 15px;
        }

        /* span {
            font-size: 32px;
        } */

    }

    @media screen and (max-width: 500px) {

    }

    
`;

function Menu(props) {
    return (
        <>
            <HEADER>
                
                    <Link href={props.home}><h1>BikeApp<span></span></h1></Link>
                    {/* <ul>
                        <li><Link href='/'>{props.link1}</Link></li>
                        <li><Link href="/sobre">{props.link2}</Link></li>
                        <li><Link href="/bikes">{props.link3}</Link></li>
                    </ul> */}
                
                <ul className='ul-sign'>
                    <li><Link href='/'>{props.link1}</Link></li>
                    <li><Link href="/sobre">{props.link2}</Link></li>
                    <li><Link href="/bikes">{props.link3}</Link></li>
                    <li><a href="#" >Cadastre - se</a></li>
                    <li><a href="#" className='btn-entrar'>Entrar</a></li>
                </ul>
            </HEADER>
        </>
    )
}

export default Menu;