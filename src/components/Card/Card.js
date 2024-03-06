import styled from "styled-components";

const Wrap = styled.div`
border-radius: var(--radii);
background-color: var(--colors-ui-base);
cursor: pointer;
overflow: hidden;
box-shadow: var(--shadow);
`;
const CardImages = styled.img`
display: block;
width: 100%;
height: 150px;
object-fit: cover;
`;
const CardBody = styled.div``;
const CardTitle = styled.h3``;
const CardList = styled.ul`
list-style: none;
margin: 0;
`;
const CardListItem = styled.li`
& > span{
    font-weight: var(--fw-bold);
}
margin: 0;
`;

export const Card = ({img, name, info = [], onClick}) => {
    return(
        <Wrap onClick={onClick}>
            <CardImages src={img} alt={name}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map(el =>(
                        <CardListItem key={el.title}>
                            <span>{el.title}</span>: {el.description}
                        </CardListItem>
                    ))}
                </CardList>
            </CardBody>
        </Wrap>

    )
}