"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierCaveDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
const Highlighter = ({ children }) => {

    return (
        <SyntaxHighlighter language="tsx" style={atelierCaveDark}>
            {children}
        </SyntaxHighlighter>
    )
}

export default Highlighter