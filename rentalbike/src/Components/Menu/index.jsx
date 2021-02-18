import styled from 'styled-components';
import Link from 'next/link';

const HEADER = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 25px 8% 25px 8%;
    transition: 0.2s;
    /* border: 1px solid blue; */
   
    div {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        /* border: 1px solid red; */
    }

    h1 {
        margin-right: 40px;
        font-size: 22px;
        color: var(--title-color);
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

        &:hover{
            opacity: 75%;
        }
    }
   
    a {
        color: var(--secondary-color);
    }

    .btn-signin {
        color: #212353;
        font-weight: bold;
        @media screen and (max-width: 900px) {
            display: none;
        }
    }

    .btn-signUp{
        color: var(--title-color);
        font-weight: bold;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 10px 25px;
        border-radius: 25px;
        display: flex;
        align-items: center;
        @media screen and (max-width: 900px) {
            display: none;
        }
    }

    span {
        font-size:22px;
        margin-left: 5px;
        color: var(--primary-color);
    }

    @media screen and (max-width: 900px) {
        /* display: none; */
        flex-direction: column;
        justify-content: center;
        align-items: center;
        

        div {
            flex-direction: column;
            width: 100%;
            align-items: center;
        }

        ul{
            display: flex;
            justify-content: space-space-between;
        }

        li{
            margin: 0 7vw;
        }

        h1{
            font-size: 32px;
            margin-right: 0;
            margin-bottom: 15px;
        }

        span {
            font-size: 32px;
        }

    }

    
`;

function Menu(props) {
    return (
        <>
            <HEADER>
                <div>
                    <h1>Bike<span>App</span></h1>
                    <ul>
                        <li><Link href='/about'>{props.link1}</Link></li>
                        <li><Link href="/bikes">{props.link2}</Link></li>
                        <li><Link href="/places">{props.link3}</Link></li>
                    </ul>
                </div>
                <ul className='ul-sign'>
                    <li><a href="#" className='btn-signin'>Sign in</a></li>
                    <li><a href="#" className='btn-signUp'>Sign Up <span>&#10132;</span></a></li>
                </ul>
            </HEADER>
        </>
    )
}

export default Menu;