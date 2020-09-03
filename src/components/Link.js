import React from 'react'
import PropTypes from 'prop-types'
import {Button} from "./uiComponents";
import styled from "styled-components";

const LinkButton = styled(Button)`
  margin-left: 4px;
  &:disabled {
    background-color: rgba(0,0,0,0.1);
  }
`;

const Link = ({ active, children, onClick }) => (
    <LinkButton
       onClick={onClick}
       disabled={active}
    >
      {children}
    </LinkButton>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
