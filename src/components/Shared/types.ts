import React from "react";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    gap?: string | number;
    background?: string;
    flexWrap?: string;
    padding?: string;
    margin?: string;
    pl?: string;
    pr?: string;
    pt?: string;
    pb?: string;
    flexDirection?: string;
}