import styled from 'styled-components';

export const HeaderDiv = styled.div`
  height: 160px;
  background-color: #050505;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: -40px;
  z-index: 3;
`;
export const HeaderImage = styled.img`
  height: 30px;
  width: 30px;
`;
export const DivContainingList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CarryingDiv = styled.div`
  padding-inline-start: 1.85rem;
  padding-inline-end: 1.85rem;
  max-width: 1241px;
  width: 100%;
`;
export const DivList = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 60px;
`;
export const HeaderLinks = styled.li`
  text-decoration: none;
  color: white;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 100;
  cursor: pointer;
  list-style: none;
`;
export const ButtonDiv = styled.div`
  padding: 12px 35px 12px 35px;
  border-radius: 4px;
  cursor: pointer;
  background-color: white;
  &:hover {
    transition: linear 0.2s;
    background-color: rgba(255, 255, 255, 0.64);
  }
`;
export const OccupyingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #050505;
  height: 48px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-decoration: none;
  align-items: center;
  max-width: 1240px;
`;
export const Dropdown = styled.div`
  position: absolute;
  top: 100px;
  width: 330px;
  overflow: hidden;
  border-radius: 15px;
`;
export const MenuItem = styled.div`
  height: 77px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7fafc;
  &:hover {
    background-color: #edf2f7;
  }
`;
export const DropDownParagraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: black;
  margin: 0;
`;
export const DropDownParagraph1 = styled.p`
  font-size: 14px;
  line-height: 21px;
  color: black;
  margin: 0;
`;
