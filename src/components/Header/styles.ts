import styled from "styled-components";

export const HeaderBar = styled.header`
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Hero = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Logo = styled.img`
  width: 125px;
  height: 58px;
  margin-top: 40px;
  margin-bottom: 80px;
`;

export const Title = styled.h1`
  line-height: 42px;
  margin-bottom: 32px;
  width: 540px;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;
