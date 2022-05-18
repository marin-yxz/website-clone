import {
  Image,
  MainDiv,
  SupportDiv2,
  SupportingDiv,
  TextDiv,
} from '../ComponentsStyled/FourthSection';
import logo from '../Video/bank.gif';

function FourthSection() {
  return (
    <MainDiv>
      <SupportDiv2>
        <SupportingDiv>
          <Image alt="alt" src={logo} />
          <TextDiv>
            <h2
              style={{
                fontSize: '60px',
                lineHeight: '66px',
                maxWidth: '450px',
                margin: '0',
                marginBottom: '10px',
                color: 'white ',
              }}
            >
              Frictionless financing
            </h2>
            <p
              style={{
                fontSize: '30px',
                lineHeight: '39px',
                maxWidth: '450px',
                margin: '0',
                color: '#8a8f98',
              }}
            >
              Get the capital you need, when you need it without offering
              discounts or disrupting your customers' experience.
            </p>
          </TextDiv>
        </SupportingDiv>
      </SupportDiv2>
    </MainDiv>
  );
}

export default FourthSection;
