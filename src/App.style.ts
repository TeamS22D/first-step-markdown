import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    color: black;
    width: 100vw;
    box-sizing: border-box;
    @media screen and (max-width: 1024px) {
}
`;

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const Textarea = styled.textarea`
    flex: 1;
    padding: 20px;
    font-size: 2rem;
    outline: none;
    padding: 3rem;
    padding-top:10rem;
    font-size: 1rem;
    border: none;
    outline: none;
    resize: none;
    color: #000000;
    background-color: #D8D8D8;
    height: 95vh;      


    @media screen and (max-width: 1024px) {
        max-width: 95%;
        width: 100%;
        margin: 0 auto;
        height: 50vh;


}

`;

export const Preview = styled.div`
    width: 50%;
    height: 100vh;
    padding: 20px;
    outline: none;
    flex: 1;
    padding: 3rem;
    padding-top:8rem;
    overflowY: auto;
    border-left: 2px solid #444;

    @media screen and (max-width: 1024px) {
        max-width: 95%;
        width: 100%;
        margin: 0 auto;
        height: 50vh;


  }


`;