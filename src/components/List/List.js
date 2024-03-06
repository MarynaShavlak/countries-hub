import styled from "styled-components";
const Wrap = styled.div`
width: 100%;
padding: 15px 0;
display: grid;
grid-template-columns: 1fr;
gap: 15px;

@media (min-width: 780px){
    grid-template-columns: 1fr 1fr;
}
@media (min-width: 1024px){
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
`
export const List = ({children}) =>{
    return(
        <Wrap>
            {children}
        </Wrap>
    )
}