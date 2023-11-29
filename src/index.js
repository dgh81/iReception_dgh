import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { PublicClientApplication, EventType } from '@azure/msal-browser';

const config = {
    auth: {
        clientId: 'c92879e8-a662-4f14-9290-f872ad0f8f45',
        authority: 'https://login.microsoftonline.com/24803583-b63e-427b-857f-ff71b1863978',
        redirectUri: '/'
    }
};

export const pca = new PublicClientApplication(config);

pca.addEventCallback(event => {
    if (event.eventType === EventType.LOGIN_SUCCESS) {
        console.log('event callback from index.js:' + event);
        pca.setActiveAccount(event.payload.account);
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    //Strict mode virker kun i dev mode - og forårsager load af func components to gange
    // <React.StrictMode>
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <App msalInstance={pca} />
        </ThemeProvider>
    </BrowserRouter>
    /* </React.StrictMode> */
);
