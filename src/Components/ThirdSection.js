import {
  MainDiv,
  SupportDiv2,
  SupportingDiv,
} from '../ComponentsStyled/ThirdSection';
import { ReactComponent as Card } from '../Images/payout-card-light.svg';

function ThirdSection() {
  return (
    <MainDiv>
      <Card
        style={{
          position: 'absolute',
          maxHeight: '432px',
          maxWidth: '269px',
          marginLeft: '577px',
          marginTop: '-75px',
        }}
      />
      <SupportingDiv>
        <SupportDiv2>
          <h3
            style={{
              fontSize: '60px',
              lineHeight: '66px',
              maxWidth: '450px',
              margin: '0',
              marginBottom: '10px',
              color: 'white ',
            }}
          >
            One click, instant payout
          </h3>
          <h2
            style={{
              fontSize: '30px',
              lineHeight: '39px',
              maxWidth: '500px',
              margin: '0',
              color: '#8a8f98',
            }}
          >
            Connect to Pipe and convert your revenue streams into up-front
            capital with the click of a button.
          </h2>
        </SupportDiv2>
      </SupportingDiv>
    </MainDiv>
  );
}

export default ThirdSection;
