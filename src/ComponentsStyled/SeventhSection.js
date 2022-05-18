import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 100%;
  max-height: 1392px;
  width: 100%;
  background-color: #050505;
  padding-top: 6rem;
  padding-bottom: 7rem;
  //#0f0f0f
`;
export const ImageDiv = styled.div`
  height: 100%;
  max-height: 599px;
  background-color: #050505;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextDiv = styled.div`
  max-height: 680px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  padding-bottom: 5rem;
`;
export const SupportDiv = styled.div`
  max-height: 1500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1240px;
  width: 100%;
`;

export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 4fr 4fr;
  grid-row-gap: 5rem;
  grid-column-gap: 0.5px;
  height: 100%;
  width: 100%;
  max-width: 1070px;
  max-height: 1000px;
  margin-left: 80px;

  justify-content: space-between;
`;
export const AutomatedDiv = styled.div`
  background-color: #1c1d21;
  height: 100%;
  width: 100%;
  max-width: 532px;
  max-height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 0 0 15px;
`;
export const DateDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c1d21;
  height: 100%;
  width: 100%;
  max-width: 532px;
  max-height: 420px;
  border-radius: 0 15px 15px 0;
`;
export const SyncsDiv = styled.div`
  background-color: #1c1d21;
  height: 100%;
  width: 100%;
  max-width: 532px;
  max-height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 0 0 15px;

  border-right: 1px solid black;
  border-bottom: var(--chakra-borders-none);
`;
export const ContractsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c1d21;
  height: 100%;
  width: 100%;
  max-width: 532px;
  max-height: 420px;

  border-radius: 0 15px 15px 0;
`;

export const HelpingDiv = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;
`;
