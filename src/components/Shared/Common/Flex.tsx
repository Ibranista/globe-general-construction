import styled from "styled-components";
import { FlexProps } from "../types";

const Flex = styled.div<FlexProps>`
    display: ${({ display }) => display || "flex"};
    flex-direction:${({ flexDirection }) => flexDirection || 'row'} ;
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
    `;

export default Flex;

