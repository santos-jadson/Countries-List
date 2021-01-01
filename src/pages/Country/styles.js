import styled from 'styled-components'

export const Container = styled.div `
    width: 100%;
    height: 100%;
    padding: 50px;

    display: flex;
    flex-direction: column;

    > a {
        width: 120px;
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: var(--color-primary-element);
        color: var(--color-primary-text);
        font-weight: 300;
        font-size: 14px;
        border: none;
        border-radius: 4px;
        padding: 8px;
        box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.3);
        margin-bottom: 100px;
        cursor: pointer;
        transition: ease 0.3s;

       >img {
           max-width: 20px;
           margin-right: 10px;
       }
    }

`

export const CountryInfo = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    > img {
        max-width: 500px;
        margin-right: 100px;
    }

    > .country-info {
        > h1 {
            font-weight: 800;
            color: var(--color-primary-text);
        }

        > ul {
            margin-top: 35px;
            display: grid;
            grid-template-columns: repeat(2, auto);
            grid-template-rows: repeat(5, auto);
            grid-auto-flow: column;
            column-gap: 80px;

            > li {
                list-style: none;
                font-weight: 600;
                margin-bottom: 8px;
                font-weight: 600;
                font-size: 16px;
                color: var(--color-primary-text);

                > span {
                    font-weight: 300;
                }
            }
        }

        > .border-countries {
            margin-top: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;

            > h4 {
                margin-right: 10px;
                font-weight: 600;
                font-size: 16px;
                color: var(--color-primary-text);
            }

            > a {
                margin-right: 5px;
                background-color: var(--color-primary-element);
                color: var(--color-primary-text);
                box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.3);
                border: none;
                border-radius: 4px;
                min-width: 110px;
                font-weight: 300;
                font-size: 14px;
                cursor: pointer;
                text-decoration: none;
                padding: 8px;
                text-align: center;
            }
        }
    }

    

`