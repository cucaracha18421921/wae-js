import styled from "styled-components";

export const Button = styled.button`
    font-size: 0.875rem;
    min-width: 64px;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    color: #1976d2;
    border: 1px solid rgba(25, 118, 210, 0.5);
    background-color: transparent;
`;

export const Input = styled.input`
  line-height: 1.75;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  border-radius: 4px;
  border: 1px solid rgba(25, 118, 210, 0.5);
  &:focus {
    border: 1px solid rgba(25, 118, 210, 0.5);
    box-shadow: 0 0 0 1px rgba(25, 118, 210, 0.5);
    outline: none;
    }
`;


export const Text = styled.a`
  font-size: xx-large;
`;

export const HighlightedText = styled(Text)`
  background-color: yellow;
`;
