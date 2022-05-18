import {
  ImageDiv,
  MainDiv,
  SupportDiv,
  TextDiv,
} from '../ComponentsStyled/SixthSection';
import { ReactComponent as LogoImg } from '../Images/churn-table-us.svg';

function SixthSection() {
  return (
    <MainDiv>
      <SupportDiv>
        <TextDiv>
          <h2
            style={{
              fontSize: '60px',
              lineHeight: '66px',

              marginTop: '0',
              marginBot: '0',
              color: 'white ',
            }}
          >
            What about churn?
          </h2>
          <p
            style={{
              fontSize: '25px',
              lineHeight: '30px',
              maxWidth: '650px',
              margin: '0',
              color: '#8a8f98',
            }}
          >
            Just swap churned revenue streams for active ones, and you’re good
            to go.
          </p>
        </TextDiv>
        <ImageDiv>
          <LogoImg style={{ backgroundColor: '#0F0F0F' }} />
        </ImageDiv>
      </SupportDiv>
    </MainDiv>
  );
}

export default SixthSection;
