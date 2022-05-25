/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React, { useState } from "react";

import {
  MsalProvider,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";

import { PageLayout, IdTokenClaims } from "./ui.jsx";

import Button from "react-bootstrap/Button";
import "./styles/App.css";
import "./styles/index.css";

const IdTokenContent = () => {
  /**
   * useMsal is hook that returns the PublicClientApplication instance,
   * an array of all accounts currently signed in and an inProgress value
   * that tells you what msal is currently doing. For more, visit:
   * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/hooks.md
   */
  const { accounts } = useMsal();
  const [idTokenClaims, setIdTokenClaims] = useState(null);

  function GetIdTokenClaims() {
    setIdTokenClaims(accounts[0].idTokenClaims);
    let item = {
      preferredUsername: accounts[0].idTokenClaims.preferred_username,
    };
    console.log(item);
    console.log(typeof accounts[0].idTokenClaims.preferred_username);
    console.log(accounts[0].idTokenClaims);
    fetch("http://localhost:8080/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }

  return (
    <>
      <h5 className="card-title">Welcome {accounts[0].name}</h5>
      {idTokenClaims ? (
        <IdTokenClaims idTokenClaims={idTokenClaims} />
      ) : (
        <Button variant="secondary" onClick={GetIdTokenClaims}>
          View ID Token Claims
        </Button>
      )}
    </>
  );
};

/**
 * Most applications will need to conditionally render certain components based on whether a user is signed in or not.
 * msal-react provides 2 easy ways to do this. AuthenticatedTemplate and UnauthenticatedTemplate components will
 * only render their children if a user is authenticated or unauthenticated, respectively. For more, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
 */
const MainContent = () => {
  return (
    <div className="Authentication">
      <AuthenticatedTemplate>
        <IdTokenContent />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <h5 className="title2">
          Please sign-in first to direct you to our Tech Practice's
          <h1 className="Rewards">Rewards App</h1>
        </h5>
      </UnauthenticatedTemplate>
    </div>
  );
};

/**
 * msal-react is built on the React context API and all parts of your app that require authentication must be
 * wrapped in the MsalProvider component. You will first need to initialize an instance of PublicClientApplication
 * then pass this to MsalProvider as a prop. All components underneath MsalProvider will have access to the
 * PublicClientApplication instance via context as well as all hooks and components provided by msal-react. For more, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
 */
export default function Authentication({ msalInstance }) {
  return (
    <MsalProvider instance={msalInstance}>
      <PageLayout>
        <MainContent />
      </PageLayout>
    </MsalProvider>
  );
}
