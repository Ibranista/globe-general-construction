import styled from "styled-components";
import { FlexProps } from "../types";

const NavWrapper = styled.div<FlexProps>`
    display: ${({ display }) => display || "flex"};
    flex-direction:row ;
    justify-content: ${({ justifyContent }) => justifyContent || "unset"};
    align-items: ${({ alignItems }) => alignItems || "center"};
    gap:${({ gap }) => gap || '40px'};
    background: ${({ background }) => background || "transparent"};
    flex-wrap: ${({ flexWrap }) => flexWrap || "unset"};
    padding: ${({ padding }) => padding || "unset"};
    padding-left:${({ pl }) => pl || 'null'};
    padding-right:${({ pr }) => pr || 'null'};
    padding-top:    ${({ pt }) => pt || 'null'};
    padding-bottom: ${({ pb }) => pb || 'null'};

    @media (max-width: 1499px) {
    flex-direction: ${({ flexDirection }) => flexDirection || "column"};
    position:fixed;
    left:0;
    top:10rem;
    padding:10px 0;
    background:linear-gradient(to bottom, #7ea9e2, #98c1d9);
  }
    
    `;

export default NavWrapper;

