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
        hash: "",
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
      <Navbar data-bs-theme="dark">
        <img src="/icon.png" alt="icon image" height="50px" />
        <Container className='toplink' id="cont">
          <Link style={{color: 'black', textDecoration: 'none'}} to="/">Home</Link>
          <Link style={{color: 'black', textDecoration: 'none'}} to="/culture">Culture</Link>
          <Link style={{color: 'black', textDecoration: 'none'}} to="/about">About devs </Link>
          <div id="sign-av" className="user-avatar" >
            <SignedOut>
              <SignInButton />
            </SignedOut>

            <SignedIn>

              <UserButton showName appearance={{
                elements: {
                  userButtonOuterIdentifier: {
                    color: "black",
                  },
                },
              }} />



            </SignedIn>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
