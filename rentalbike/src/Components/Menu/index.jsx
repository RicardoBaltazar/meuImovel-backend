import styled from 'styled-components';

const HEADER = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0px 8% 25px 8%;
    transition: 0.2s;
   
    
    div {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    h1 {
        margin-right: 40px;
        font-size: 22px;
        color: var(--title-color);
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
    display: none;

    
    }
`;

function Menu() {
    return (
        <>
            <HEADER>
                <div>
                    <h1>RentalBike</h1>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Bikes</a></li>
                        <li><a href="#">Places</a></li>
                    </ul>
                </div>
                <ul >
                    <li><a href="#" className='btn-signin'>Sign in</a></li>
                    <li><a href="#" className='btn-signUp'>Sign Up <span>&#10132;</span></a></li>
                </ul>
            </HEADER>
        </>
    )
}

export default Menu;