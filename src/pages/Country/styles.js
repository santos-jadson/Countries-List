import styled from 'styled-components'

export const Container = styled.div `
    width: 100%;
    height: 100%;
    padding: 50px 0 50px 50px;

    display: flex;
    flex-direction: column;

    > button {
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

    @media(max-width: 470px) {
        padding: 30px;

        > a {
            margin-bottom: 60px;
        }
    }

    @media(max-width: 410px) {
        padding: 20px;
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
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            > h4 {
                margin-right: 10px;
                font-weight: 600;
                font-size: 16px;
                padding: 8px;
                color: var(--color-primary-text);
            }

            > a {
                background-color: var(--color-primary-element);
                color: var(--color-primary-text);
                box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.3);
                border: none;
                border-radius: 4px;
                margin: 0.3rem 0.3rem 0 0;
                font-weight: 300;
                font-size: 14px;
                cursor: pointer;
                text-decoration: none;
                padding: 0.5rem 1rem;
                text-align: center;
                transition: ease 0.3s;
                align-self: center;

                &:hover {
                    transform: translateY(5px);
                }
            }
        }
    }

    @media(max-width: 1240px) {
        > img {
            margin-right: 50px;
        }
    }

    @media(max-width: 1080px) {
        > img {
            width: 350px;
        }

        > .country-info {
            > h1 {
                font-size: 18px;
            }

            > ul {
                column-gap: 30px;
                margin-top: 20px;
                
                > li {
                    font-size: 13px;
                }
            }
            
            > .border-countries {
                margin-top: 30px;
            
                > h4 {
                    font-size: 13px;
                }

                > a {
                    font-size: 11px;
                }
            }
        }
    }

    @media(max-width: 900px) {
        flex-direction: column;

        > img {
            width: 500px;
            margin: auto;
        }

        > .country-info {
            margin-top: 50px;

            > h1 {
                font-size: 22px;
            }

            > ul {
                column-gap: 80px;
                margin-top: 35px;
                
                > li {
                    font-size: 16px;
                }
            }
            
            > .border-countries {
                margin-top: 40px;
            
                > h4 {
                    font-size: 16px;
                }

                > a {
                    font-size: 14px;
                }
            }
        }
    }

    @media(max-width: 610px) {
        > img {
            width: 450px;
        }

        > .country-info {

            > ul {
                display: flex;
                flex-direction: column;

                > li:nth-child(5) {
                    margin-bottom: 40px;
                }
            }
        }
    }

    @media(max-width: 550px) {

        > img {
            width: 400px;
        }

        > .country-info {
            width: 100%;

            > .border-countries {
                grid-template-columns: repeat(1,1fr);

                > a {
                    width: 70%;
                    margin: 0.2rem auto;
                }
            }
        }
    }  

    @media(max-width: 500px) {

        > img {
            width: 350px;
        }

    }

    @media(max-width: 440px) {

        > img {
            width: 300px;
        }

        > .country-info {

            > .border-countries a {
                font-size: 11px;
            }
        }
    }    

`