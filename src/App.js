import './App.css';
import {
  ButtonDiv,
  CarryingDiv,
  DivContainingList,
  DivList,
  HeaderDiv,
  HeaderLinks,
} from './Components/Header';
import { ReactComponent as LogoImg } from './Images/pipe-logo.svg';

function App() {
  return (
    <HeaderDiv>
      <CarryingDiv>
        <DivContainingList>
          <div>
            {' '}
            <LogoImg />
          </div>

          <DivList>
            {' '}
            <HeaderLinks href="/">Products</HeaderLinks>
            <HeaderLinks href="/">Use Cases</HeaderLinks>
            <HeaderLinks href="/">Company</HeaderLinks>
            <HeaderLinks href="/">Resources</HeaderLinks>
            <HeaderLinks href="/">Customers</HeaderLinks>
            <HeaderLinks href="/">Login</HeaderLinks>
          </DivList>
          <ButtonDiv>
            <HeaderLinks style={{ color: 'black' }} href="/">
              Get Started
            </HeaderLinks>
          </ButtonDiv>
        </DivContainingList>
      </CarryingDiv>
    </HeaderDiv>
  );
}

export default App;
