import styled from "styled-components";

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
`;

export const ToggleOption = styled.span`
  line-height: 40px;
  text-align: right;
  color: white;
  opacity: 0.5;
`;

export const ToggleBack = styled.div`
  position: relative;
  width: 5.6rem;
  height: 3.2rem;
  background: linear-gradient(135deg, #F6BDC0 0.06%, #DC1C13 100.06%);
  border-radius: 16px;
  margin: 0 2.4rem;
  cursor: pointer;

  &:hover {
    filter: brightness(125%);
  }
`;

export const ToggleFront = styled.div`
  position: absolute;
  left: ${(props) => (props.option === "monthly" ? "24px" : "0")};
  width: 2.4rem;
  height: 2.4rem;
  background: #fff;
  border-radius: 50%;
  margin: 0.4rem;
`;
