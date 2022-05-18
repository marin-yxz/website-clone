import {
  ButtonDiv,
  MainDiv,
  Paragraph,
  SupportingDiv,
} from '../ComponentsStyled/FirstSection';

function FirstSection() {
  return (
    <MainDiv>
      <SupportingDiv>
        <Paragraph>FOR COMPANIES WITH RECURRING REVENUE</Paragraph>
        <p
          style={{
            marginTop: 0,
            fontSize: '55px',
            marginBottom: 0,
          }}
        >
          Grow on your terms.
        </p>
        <h4
          style={{
            marginTop: 0,
            fontSize: '42px',
            marginBottom: 0,
          }}
        >
          Fast, flexible financing for M&A
        </h4>
        <p
          style={{
            fontSize: '22px',
            maxWidth: 600,
            textAlign: 'center',
            marginBottom: '50px',
            marginTop: '20px',
            color: '#8a8f98',
          }}
        >
          Pipe transforms recurring revenue into up-front capital for growth
          without dilution or restrictive debt.
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

export default FirstSection;
