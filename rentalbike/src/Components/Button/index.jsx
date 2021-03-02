import styled from 'styled-components';

const BUTTON = styled.button`
        color: #FFFFFF;
        font-weight: bold;
        background-color: var(--primary-color);
        padding: 20px 25px;
        border-radius: 25px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 175px;
        transition: 0.2s;
        
        &:hover{
            cursor: pointer;
            opacity: 75%;
        }

        @media screen and (max-width: 900px) {   
            width: 50vw;
            margin: 10px auto; 
      }

        @media screen and (max-width: 500px) {   
            width: 90vw;
            margin: 10px auto; 
      }
`

function Button(props) {
    return (
        <>
            <BUTTON>
                {props.text}
            </BUTTON>
        </>
    )
}

export default Button;