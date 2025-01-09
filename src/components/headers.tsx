import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import "./header.css"
import { SignedIn, SignedOut, SignInButton, UserButton,} from "@clerk/clerk-react";

import { Routes,Route,Link} from "react-router-dom";
import App from "../App";
function AppNavbar() {
  return (
    <div className="navbar" id="navbar">
      <Navbar data-bs-theme="dark" >
      <img src="/icon.png"  alt="icon image" height="100px"/>
          <Container className='toplink' id="cont">
          <Link style={{color: 'black'}} to="/">Home</Link>
            <Link style={{color: 'black'}} to="/culture">Culture</Link>
            <Link style={{color: 'black'}} to="/about">About devs </Link>
            <div id="sign-av" className="user-avatar" > 
        <SignedOut>
        <SignInButton />
      </SignedOut>
      
      <SignedIn>
       
          <UserButton  showName appearance={{
    elements: {
      userButtonOuterIdentifier: {
        color: "white", // Change text color
      },
    },
  }}/>
          
        
       
      </SignedIn>
      </div>
        </Container>
        
      </Navbar>
      
</div>
   
  );
}

export default AppNavbar;
