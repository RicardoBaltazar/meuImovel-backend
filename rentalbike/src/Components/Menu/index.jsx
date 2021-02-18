import styled from 'styled-components';

const HEADER = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 25px 8% 25px 8%;
    transition: 0.2s;
    border: 1px solid blue;
   
    div {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        border: 1px solid red;
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
    }

    .btn-signUp{
        color: var(--title-color);
        font-weight: bold;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 10px 25px;
        border-radius: 25px;
        display: flex;
        align-items: center;
    }

    span {
        font-size:22px;
        margin-left: 5px;
        color: var(--primary-color);
    }

    @media screen and (max-width: 500px) {
        /* display: none; */
        justify-content: center;
        align-items: center;
        

        div {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        ul{
            display: none;
        }

        h1{
            font-size: 32px;
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
                        <li><a href="#">{props.link1}</a></li>
                        <li><a href="#">{props.link2}</a></li>
                        <li><a href="#">{props.link3}</a></li>
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