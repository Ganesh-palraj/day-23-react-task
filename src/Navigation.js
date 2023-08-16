import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" style={{ height: "70px"}}>
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
              alt=""
              src="/images/startbootstrap-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Themes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Browse All Themes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Pro Bootstrap Themes
              </NavDropdown.Item>
              <div>
                {" "}
                <h6>Theme Categories:</h6>
              </div>
              <NavDropdown.Item href="#action/3.3">
                Admin & Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Landing Pages
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Buisness & Corporate
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Portfolio & Resume{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Blog</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Templates" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Browse All Templates
              </NavDropdown.Item>
              <div>
                {" "}
                <h6>Template Categories:</h6>
              </div>
              <NavDropdown.Item href="#action/3.2">
                Admin & Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Landing Pages & Headers
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                General Page Layouts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Navigation Layouts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Ecommerce</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Blog</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Bundles" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Pro Bootstrap HTML Bundle
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Pro Angular Bundle
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">
              Forms
              <sup>
                <Badge bg="secondary" text="danger">
                  New!
                </Badge>
              </sup>
            </Nav.Link>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Snippets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Knowledge Base
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Bootstrap Resource List
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Guides</NavDropdown.Item>
              <div>
                {" "}
                <h6>Tools & plugins</h6>
              </div>
              <NavDropdown.Item href="#action/3.5">
                SB Angular Inspector
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                SB Form Builder
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default Navigation;

// add to cart problem

// import React, { useState } from "react";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Button
// } from "reactstrap";

// function Navigation(args) {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar {...args}>
//         <NavbarBrand href="/">Start Bootstrap</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="md-auto" navbar>
//             <NavItem>
//               <NavLink href="/components/">Home</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">
//                 About
//               </NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Shop
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>All products</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>Popular Items</DropdownItem>
//                 <DropdownItem>New Arrivals</DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//           <div>
//             <Button color="dark" outline>Cart
//             <span class="badge bg-dark text-white ms-1 rounded-pill">0</span></Button>
//           </div>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

export default Navigation;
