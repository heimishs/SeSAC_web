import logo from "./logo.svg";
import styled, { keyframes } from "styled-components";

const RootDiv = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  font-size: 2rem;
  color: white;
  background-color: #282c34;
  padding: 80px 0px;
  box-sizing: border-box;
`;

const rotate = keyframes`
    0%{
        transform: rotate(0);
    }
    50%{
        transform: rotate(180deg);
    }
    100%{
        transform: rotate(360deg);

    }
`;

const AppLogo = styled.img`
  animation: ${rotate} 8s linear infinite;
`;
const MyA = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export default function Practice1() {
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt="app" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyA>
      </AppHeader>
    </RootDiv>
  );
}
