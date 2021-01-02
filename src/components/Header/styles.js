import styled from 'styled-components'

export const Container = styled.ul`

width: 100%;
height: 100px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

padding: 20px 50px;
background-color: var(--color-primary-element);
box-shadow: 0px 0px 6px -3px rgba(0,0,0,0.54);


    li {
        list-style: none;
        font-family: 'Nunito Sans', sans-serif;
        color: var(--color-primary-text);

        > a {
            text-decoration: none;
            color: var(--color-primary-text);
        }
    }

    .logo {
            font-weight: 800;
            font-size: 24px;
    }

    .theme-switcher {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor:pointer;
        
        span {
            margin-left: 7px;
            font-weight: 600;
            color: var(--color-primary-text);
        }
    }

    img {
        width: 18px;
    }

    @media(max-width: 470px) {

        padding: 20px 30px;

        .logo {
            font-size: 18px;
        }

        .theme-switcher span {
            font-size: 15px;
        }

        .theme-switcher img {
            width: 15px;
        }
    }

    @media(max-width: 410px) {
        padding: 20px 20px;
    }

`