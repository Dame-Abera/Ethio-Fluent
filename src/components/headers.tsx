import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import "./header.css"
import { SignedIn, SignedOut, SignInButton, UserButton,} from "@clerk/clerk-react";

import { Routes,Route,Link} from "react-router-dom";
import App from "../App";
function AppNavbar() {
  return (
    <div className="navbar" id="navbar">
      <Navbar bg="dark" data-bs-theme="dark" fixed ="top" >
      <img src="/icon.png"  alt="icon image" height="100px"/>
          <Container  className='toplink' id="cont">
          <Link to="/">Home</Link>
            <Link to="/culture">Culture</Link>
            <Link to="/about">About devs </Link>
            <div id="sign-av" className="user-avatar" > 
        <SignedOut>
        <SignInButton />
      </SignedOut>
      
      <SignedIn>
       
          <UserButton   />
        
       
      </SignedIn>
      </div>
        </Container>
        
      </Navbar>
      
</div>
   
  );
}

export default AppNavbar;
