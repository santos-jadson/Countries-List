import styled from 'styled-components'

export const MainContainer = styled.div`
height: 100%;
width: 100%;
background-color: var(--color-primary-background);

.inputs {
    margin-top: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;

    .input-search {
        background-color: var(--color-primary-element);
        padding: 12px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid transparent;
        border-radius: 5px;
        width: 400px;
        box-shadow: 0px 0px 6px -5px rgba(0,0,0,0.54);

        img {
            width: 15px;
            margin-right: 10px;
        }

        input {
            border: none;
            width: 80%;
            background-color: var(--color-primary-element);;
            color: var(--color-primary-text);
        }
    }

    .select-region {
        

        > select {
            background-color: var(--color-primary-element);
            padding: 12px;
            border: 1px solid transparent;
            border-radius: 5px;
            width: 200px;
            box-shadow: 0px 0px 6px -5px rgba(0,0,0,0.54);
            color: var(--color-primary-text);
            -moz-appearance:none; /* Firefox */
            -webkit-appearance:none; /* Safari and Chrome */
            appearance:none;
            cursor: pointer;

            > option {
                background-color: var(--color-primary-element);
                color: var(--color-primary-text);
                font-size: 14px;
            }
        }

        &::after {
            content: "\f078";
            font-family: 'FontAwesome';
            color: var(--color-primary-text);
            position: relative;
            right: 30px;
            pointer-events: none;
        }
    }

    @media(max-width: 730px) {
        flex-direction: column;
        align-items: flex-start;

        > .input-search {
            margin-bottom: 30px;
        }
    }

    @media(max-width: 470px) {

        padding: 0 30px;

        > .input-search {
            width: 350px;
        }
    }

    @media(max-width: 410px) {
        
        padding: 0 20px;

        > .input-search {
            width: 300px;
        }
    }

}
`

export const CountryList = styled.ul`

padding: 50px 50px;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 80px 60px;


    li {
        display: flex;
        flex-direction: column;
        background-color: var(--color-primary-element);
        width: 270px;
        font-family: 'Nunito Sans', sans-serif;
        border-radius: 4px;
        box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.3);
        transition: ease 0.3s;
        border-radius: 4px;
        cursor: pointer;

        a {
            text-decoration: none;
        }

        img {
            width: 270px;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }

        h3 {
            padding: 10px 20px;
            color: var(--color-primary-text);
        }

        .country-info {
            padding: 0 20px 40px;

            h4 {
                font-weight: 600;
                font-size: 13px;
                color: var(--color-primary-text);
                margin-bottom: 6px;
            }

            span {
                font-weight: 300;
                color: var(--color-primary-text);
            }
        }

        &:hover {
            transform: translateY(10px);
        }
    }

@media(max-width: 1320px) {
    grid-template-columns: repeat(3, 1fr);

    li {
        width: 300px;

        img {
            width: 300px;
        }
    }

}

@media(max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    
    li {
        width: 400px;

        img {
            width: 400px;
        }
    }
}

@media(max-width: 940px) {
    gap: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    li {
        width: 500px;
        margin-bottom: 100px;

        img {
            width: 500px;
        }
    }
}

@media(max-width: 600px) {
    li {
        width: 400px;

        img {
            width: 400px;
        }
    }
}

@media(max-width: 500px) {
    li {
        width: 300px;

        img {
            width: 300px;
        }
    }
}

`