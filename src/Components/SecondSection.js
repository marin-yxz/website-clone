import { ImageDiv, MainDiv } from '../ComponentsStyled/SecondSection';
import { ReactComponent as LogoImg } from '../Images/dash-hero-us.svg';
import { ReactComponent as Card } from '../Images/payout-card-dark.svg';

function SecondSection() {
  return (
    <MainDiv>
      <ImageDiv>
        <LogoImg />
      </ImageDiv>
      <Card
        style={{
          position: 'absolute',
          maxHeight: '432px',
          maxWidth: '269px',
          marginLeft: '577px',
          marginTop: '50px',
        }}
      />
    </MainDiv>
  );
}

export default SecondSection;
