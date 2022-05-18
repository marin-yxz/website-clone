import React, { useState } from 'react';
import { items, items1, items2, items3 } from '../array.js';
import {
  ButtonDiv,
  CarryingDiv,
  DivContainingList,
  DivList,
  Dropdown,
  DropDownParagraph,
  DropDownParagraph1,
  HeaderDiv,
  HeaderLinks,
  MenuItem,
  OccupyingDiv,
} from '../ComponentsStyled/Header';
import { ReactComponent as LogoImg } from '../Images/pipe-logo.svg';

function App() {
  const [open, setOpen] = useState(0);
  function toggle(array) {
    if (open !== array[0].key) {
      setOpen(array[0].key);
    } else {
      setOpen(false);
    }
  }
  function map(array) {
    const result = array.map((dropdown, index) => {
      let element = '';
      if (dropdown.p1 !== undefined) {
        element = (
          <React.Fragment key={dropdown.key}>
            <MenuItem>
              <DropDownParagraph
                style={{ color: index === 0 ? 'red' : 'black' }}
              >
                {dropdown.p}{' '}
              </DropDownParagraph>
              <DropDownParagraph1>{dropdown.p1}</DropDownParagraph1>
            </MenuItem>
          </React.Fragment>
        );
        return element;
      } else {
        element = (
          <React.Fragment key={dropdown.key}>
            <MenuItem>
              <DropDownParagraph>{dropdown.p} </DropDownParagraph>
            </MenuItem>
          </React.Fragment>
        );
        return element;
      }
    });
    return result;
  }
  return (
    <HeaderDiv>
      <CarryingDiv>
        <OccupyingDiv>
          <div>
            {' '}
            <LogoImg href="/" style={{ cursor: 'pointer' }} />
          </div>
          <DivContainingList>
            <DivList>
              {' '}
              <HeaderLinks
                href="/"
                onClick={() => {
                  toggle(items);
                }}
              >
                Products
                {open === items[0].key && <Dropdown>{map(items)}</Dropdown>}
              </HeaderLinks>
              <HeaderLinks
                href="/"
                onClick={() => {
                  toggle(items1);
                }}
              >
                {open === items1[0].key && <Dropdown>{map(items1)}</Dropdown>}
                Use Cases
              </HeaderLinks>
              <HeaderLinks
                href="/"
                onClick={() => {
                  toggle(items2);
                }}
              >
                {open === items2[0].key && <Dropdown>{map(items2)}</Dropdown>}
                Company
              </HeaderLinks>
              <HeaderLinks
                href="/"
                onClick={() => {
                  toggle(items3);
                }}
              >
                {open === items3[0].key && <Dropdown>{map(items3)}</Dropdown>}
                Resources
              </HeaderLinks>
              <HeaderLinks href="/">Customers</HeaderLinks>
              <HeaderLinks href="/">Login</HeaderLinks>
            </DivList>
            <ButtonDiv style={{ marginLeft: '50px' }}>
              <HeaderLinks style={{ color: 'black' }} href="/">
                Get Started
              </HeaderLinks>
            </ButtonDiv>
          </DivContainingList>
        </OccupyingDiv>
      </CarryingDiv>
    </HeaderDiv>
  );
}

export default App;
