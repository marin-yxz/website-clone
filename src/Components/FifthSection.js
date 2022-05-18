import {
  ImageDiv,
  MainDiv,
  SupportDiv,
  TextDiv,
} from '../ComponentsStyled/FifthSection';
import logo from '../Video/money.gif';

function FifthSection() {
  return (
    <MainDiv>
      <SupportDiv>
        <TextDiv>
          <h2
            style={{
              fontSize: '60px',
              lineHeight: '66px',

              margin: '0',
              marginBottom: '10px',
              color: 'white ',
            }}
          >
            Unlock your biggest asset
          </h2>
          <p
            style={{
              fontSize: '30px',
              lineHeight: '39px',
              maxWidth: '1100px',
              margin: '0',
              color: '#8a8f98',
            }}
          >
            Pipe makes recurring revenue streams tradable for their annual
            value, meaning more cash flow for scaling companies. No customer
            discounts, no restrictive debt, no dilution.
          </p>
        </TextDiv>
        <ImageDiv>
          <img
            src={logo}
            alt="helo"
            style={{
              maxWidth: '1240px',
              width: '100%',
            }}
          />
        </ImageDiv>
      </SupportDiv>
    </MainDiv>
  );
}

export default FifthSection;
