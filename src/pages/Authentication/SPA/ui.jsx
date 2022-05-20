/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from "react";
import { Logo } from "./styles/AuthElements";

import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import "./styles/index.css";
import LogoImg from "../../../assets/Cap.png";

import { Navbar, Button, Dropdown, DropdownButton } from "react-bootstrap";

import { loginRequest } from "./authConfig";
import LogoHeader from "../../../components/Logo";

const NavigationBar = () => {
  /**
   * useMsal is hook that returns the PublicClientApplication instance,
   * an array of all accounts currently signed in and an inProgress value
   * that tells you what msal is currently doing. For more, visit:
   * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/hooks.md
   */
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((error) => console.log(error));
  };

  return (
    <>
      <AuthenticatedTemplate>
        <Button
          variant="warning"
          className="ml2-auto"
          drop="left"
          title="Sign Out"
          as="button"
          onClick={() =>
            instance.logoutRedirect({
              postLogoutRedirectUri: "/Nominee",
              mainWindowRedirectUri: "/",
            })
          }
        >
          Sign Out
          {/* <Dropdown.Item
            as="button"
            onClick={() =>
              instance.logoutPopup({
                postLogoutRedirectUri: "/",
                mainWindowRedirectUri: "/",
              })
            }
          >
            Sign out using Popup
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() =>
              instance.logoutRedirect({ postLogoutRedirectUri: "/" })
            }
          >
            Sign out using Redirect
          </Dropdown.Item> */}
        </Button>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Button
          variant="secondary"
          className="ml-auto"
          drop="left"
          title="Sign In"
          as="button"
          onClick={handleLogin}
        >
          Sign In
        </Button>
        {/* //   <Dropdown.Item as="button" onClick={handleLogin}>
        //     Sign in using Popup
        //   </Dropdown.Item>
        /   <Dropdown.Item
        //     as="button"
        //     onClick={() => instance.loginRedirect(loginRequest)}
        //   >
        //     Sign in using Redirect
        //   </Dropdown.Item> */}
      </UnauthenticatedTemplate>
    </>
  );
};

export const PageLayout = (props) => {
  return (
    <>
      <Navbar bg="secondary" variant="dark">
        <a className="navbar-brand" href="/">
          Capgemini Tech Practice SSO
        </a>
        <Logo src={LogoImg} />
        <NavigationBar />
      </Navbar>
      <br />
      <h5>
        <center id="title" className="title">
          Welcome to the Capgemini Rewards App Authentication Login
        </center>
      </h5>
      <br />
      {props.children}
      <br />
    </>
  );
};

export const IdTokenClaims = (props) => {
  return (
    <div id="token-div">
      <p>
        <strong>Audience: </strong> {props.idTokenClaims.aud}
      </p>
      <p>
        <strong>Issuer: </strong> {props.idTokenClaims.iss}
      </p>
      <p>
        <strong>OID: </strong> {props.idTokenClaims.oid}
      </p>
      <p>
        <strong>UPN: </strong> {props.idTokenClaims.preferred_username}
      </p>
    </div>
  );
};
