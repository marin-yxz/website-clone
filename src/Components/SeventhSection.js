import {
  AutomatedDiv,
  ContractsDiv,
  DateDiv,
  GridDiv,
  HelpingDiv,
  MainDiv,
  SupportDiv,
  SyncsDiv,
  TextDiv,
} from '../ComponentsStyled/SeventhSection';
import img2 from '../Images/accounting-logos.webp';
import adobeimg from '../Images/adobe.png';
import adobeimg2 from '../Images/adobe2.png';
import img from '../Images/logos.webp';

function FifthSection() {
  return (
    <MainDiv>
      <SupportDiv>
        <TextDiv>
          <h2
            style={{
              fontSize: '60px',
              lineHeight: '66px',

              marginTop: '0',
              marginBot: '0px',
              color: 'white ',
            }}
          >
            Seamless integration
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
            Pipe works effortlessly with your existing tools.
          </p>
        </TextDiv>
        <GridDiv>
          <SyncsDiv>
            <HelpingDiv>
              <h3
                style={{
                  fontSize: '25px',
                  lineHeight: '28px',
                  maxWidth: '300px',
                  marginTop: '0',
                  marginBot: '0px',
                  color: 'white ',
                }}
              >
                Syncs with your payment system
              </h3>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '27px',
                  maxWidth: '300px',
                  marginBot: '1rem',
                  marginTop: '0',
                  color: '#8a8f98',
                }}
              >
                Secure live data connections update your revenue streams and
                trading limits as you go.
              </p>
              <img
                src={img}
                alt="yo"
                style={{ maxWidth: '345px', width: '100%' }}
              />
            </HelpingDiv>
          </SyncsDiv>
          <ContractsDiv>
            <img src={adobeimg} alt="adobe" height="300px" />
          </ContractsDiv>
          <AutomatedDiv>
            <HelpingDiv>
              <h3
                style={{
                  fontSize: '25px',
                  lineHeight: '28px',
                  maxWidth: '300px',
                  marginTop: '0',
                  marginBot: '0px',
                  color: 'white ',
                }}
              >
                Automated monthly statements
              </h3>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '27px',
                  maxWidth: '345px',
                  marginTop: '0',
                  color: '#8a8f98',
                  marginBot: '1rem',
                }}
              >
                Keep your accounting team in the know without lifting a finger.
              </p>
              <img
                src={img2}
                alt="yo"
                style={{ maxWidth: '345px', width: '100%' }}
              />
            </HelpingDiv>
          </AutomatedDiv>
          <DateDiv>
            <img src={adobeimg2} alt="adobe" height="249.583px" />
          </DateDiv>
        </GridDiv>
      </SupportDiv>
    </MainDiv>
  );
}

export default FifthSection;
