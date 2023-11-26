import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

export let HomePage=()=>
{
    return(
        <>
         <Navbar bg='info' expand='lg'>
                <NavbarBrand href="/Home1" className="fw-bold fs-4 text-light ms-5" >Home</NavbarBrand>
                <NavbarToggle aria-controls="mynavbar"></NavbarToggle>
                <NavbarCollapse id="mynavbar"> 
                    <Nav className='ms-2'>
                        <Nav.Link href="/list1" className="fw-bold fs-4 text-light ms-5">List</Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </>
    );
}