import {
  Image,
  MainDiv,
  SupportDiv2,
  SupportingDiv,
  TextDiv,
} from '../ComponentsStyled/EightSection';
import logo from '../Images/graph.png';

function EightSection() {
  return (
    <MainDiv>
      <SupportDiv2>
        <SupportingDiv>
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
              Insights streamline your workflows
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
              See results in real-time while you focus on growth.
            </p>
          </TextDiv>
          <Image alt="alt" src={logo} />
        </SupportingDiv>
      </SupportDiv2>
    </MainDiv>
  );
}

export default EightSection;
