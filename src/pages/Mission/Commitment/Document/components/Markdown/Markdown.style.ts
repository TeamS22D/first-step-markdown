import styled from 'styled-components'

export const Body = styled.div`
    width: 100vh;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    display: flex;
    height: 770px;
    color: black;
    width: 820px;
    box-sizing: border-box;
    border: 1px solid;
    border-radius: 10px;
    border: 2px solid #F2F2F2;
`;

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const Textarea = styled.textarea`
    flex: 1;
    font-size: 1rem;
    outline: none;
    padding: 3rem;
    padding-top:10rem;
    border: none;
    outline: none;
    resize: none;
    color: #000000;
    background-color: #FFFFFF;
    height: 100%;      


`;

export const Preview = styled.div`
    outline: none;
    flex: 1;
    padding: 2rem;
    padding-top:8rem;
    overflow-y: auto;
    border-left: 2px solid #F2F2F2;


`;