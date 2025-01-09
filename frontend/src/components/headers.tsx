import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect } from 'react';
import "./header.css";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function AppNavbar() {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      // Extract user details
      const userData = {
        email: user.emailAddresses[0].emailAddress,
        firstName: user.firstName,
        lastName: user.lastName,
        hash: "", // Add a hash if needed
      };

      // Send user info to the backend
      axios
        .post("http://localhost:8000/users/register", userData)
        .then((response) => {
          console.log("User registered:", response.data);
        })
        .catch((error) => {
          console.error("Error registering user:", error);
        });
    }
  }, [user]);

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
