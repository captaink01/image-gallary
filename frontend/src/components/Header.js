import React from 'react';
import {Navbar} from 'react-bootstrap';

const Header = ({tittle}) => {
    return(
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">{tittle}</Navbar.Brand>
      </Navbar>
    )
}

export default Header;