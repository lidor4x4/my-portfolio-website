import styled from "styled-components";

export const PageNotFoundContiner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    width: 100vw;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const PageNotFoundImg = styled.img`
    width: 50%;
    height: 100%;
    object-fit:cover;
`
export const PageNotFoundTitle = styled.h1`
    color: #333333;
    font-weight: bold;
    font-size: 64px;
`

export const PageNotFoundDesc = styled.p`
    font-weight: 600;
    font-size: 24px;
    color: #8B8A8B;
`

export const TravelHomeButton = styled.button`
    border: none;
    border-radius: 10px;
    background-color: #4C3E8C;
    color: #fff;
    cursor: pointer;
    margin-top: 1rem;
    padding: 14px 42px;
`