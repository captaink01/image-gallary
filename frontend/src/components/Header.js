import React from 'react';
import {Navbar, Container} from 'react-bootstrap';


const navbarstyle ={
    backgroundColor:'lightblue '
}

const Header = ({tittle}) => {
    return(
        <Navbar style={navbarstyle}  variant="light">
         <Container>
            <Navbar.Brand href="/">{tittle}</Navbar.Brand>
         </Container>
      </Navbar>
    );
};


export default Header;