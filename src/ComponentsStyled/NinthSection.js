import styled from 'styled-components';

export const MainDiv = styled.div`
  height: 100%;
  max-height: 551px;
  background-color: #050505;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SupportingDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-height: 551px;
  max-width: 1240px;
  color: white;
  flex-direction: column;
  align-items: center;
  padding-bottom: 11rem;
  padding-top: 11rem;
`;
export const Paragraph = styled.p`
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #00df9a;
`;
export const ButtonDiv = styled.div`
  padding: 12px 35px 12px 35px;
  border-radius: 2px;
  cursor: pointer;

  background-color: #00df9a;
  &:hover {
    transition: linear 0.2s;
    background-color: #00b37b;
  }
`;
