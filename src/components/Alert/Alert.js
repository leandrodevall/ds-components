import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  danger: {
    backgroundColor: "#f44336",
  },
  success: {
    backgroundColor: "#04AA6D",
  },
  info: {
    backgroundColor: "#2196F3",
  },
  warning: {
    backgroundColor: "#ff9800",
  },
};
const Alert = ({ showAlert, text, types, ...delegated }) => {
  const styles = STYLES[types];
  if (!styles) {
    throw new Error(`Unknow values passed to Alert Component: ${styles}`);
  }
  return (
    <Wrapper
      {...delegated}
      role="alert"
      style={{
        "--hidden": showAlert ? "flex" : "none",
        "--backgroundColor": styles.backgroundColor,
        "--color": styles.color,
      }}
    >
      <Text>{text}</Text>
      <Icon id="x" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: var(--hidden);
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  opacity: 0.83;
  background-color: var(--backgroundColor);
  color: #fff;
`;

const Text = styled.span`
  font-size: ${18 / 16}rem;
`;

export default Alert;
