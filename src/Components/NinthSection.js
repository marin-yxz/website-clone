import {
  ButtonDiv,
  MainDiv,
  SupportingDiv,
} from '../ComponentsStyled/NinthSection';

function NinthSection() {
  return (
    <MainDiv>
      <SupportingDiv>
        <h4
          style={{
            marginTop: 0,
            fontSize: '60px',
            marginBottom: 0,
          }}
        >
          Never take on debt or dilution again.
        </h4>
        <p
          style={{
            fontSize: '30px',
            maxWidth: '850px',
            textAlign: 'center',
            marginBottom: '50px',
            marginTop: '20px',
            color: '#8a8f98',
          }}
        >
          With Pipe, you can turn your recurring revenue into up-front capital
          for growth. Connect your systems instantly and see how much capital
          you can access today.
        </p>
        <ButtonDiv>
          {' '}
          <a
            style={{
              marginBottom: '50px',
              color: '#1A202C',
            }}
          >
            Get Started →
          </a>
        </ButtonDiv>
      </SupportingDiv>
    </MainDiv>
  );
}

export default NinthSection;
