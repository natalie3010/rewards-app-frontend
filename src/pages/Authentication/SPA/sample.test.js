import React from 'react';
import ReactDOM from 'react-dom';
import { act } from "react-dom/test-utils";

import App from './Authentication';
import { PublicClientApplication } from "@azure/msal-browser";

describe('Sanitize configuration object', () => {
    beforeAll(() => {
        global.msalConfig = require('./authConfig.js').msalConfig;
    });

    it('should define the config object', () => {
        expect(msalConfig).toBeDefined();
    });

    it('should not contain credentials', () => {
        const regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        expect(regexGuid.test(msalConfig.auth.clientId)).toBe(false);
    });

    it('should contain authority uri', () => {
        const regexUri = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        expect(regexUri.test(msalConfig.auth.authority)).toBe(true);
    });

    it('should not contain tenant id', () => {
        const regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        expect(regexGuid.test(msalConfig.auth.authority.split(".com/")[1])).toBe(false);
    });

    it('should define a redirect uri', () => {
        expect(msalConfig.auth.redirectUri).toBeDefined();
    });
});

describe('Ensure that the app starts', () => {
    beforeAll(() => {
        global.crypto = require('crypto');
        global.msalConfig = require('./authConfig.js').msalConfig;
        global.msalInstance = new PublicClientApplication(msalConfig);
    
        expect(msalInstance).toBeDefined();
        expect(msalInstance).toBeInstanceOf(PublicClientApplication);
    });

    it('should render the app without crashing', () => {
        const div = document.createElement('div');

        act(() => {
            ReactDOM.render(<App msalInstance={msalInstance} />, div);
        });
        expect(div.textContent).toBe("Microsoft identity platformWelcome to the Microsoft Authentication Library For React Tutorial");
    });
});