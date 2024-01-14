import styled from "styled-components";

type LinkProps = {
    color?: string;
};

const Link = styled.a<LinkProps>`
    color: ${({ color }) => color || "#000"};
    text-decoration: none;
    
    font-size: 1.5rem;
    /* text-align: center; */
    /* padding: 2rem; */
    /* display: block; */
    &:hover {
        color: #000 !important;
    }
    `;

export default Link;
