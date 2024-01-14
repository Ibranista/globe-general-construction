import styled from "styled-components";

type ListProps = {
    color?: string;
};

const List = styled.li<ListProps>`
    color: ${({ color }) => color || "#000"};
    text-decoration: none;
    /* background:orange; */
    list-style-type: none;
    text-align:center;
    `;

export default List;
