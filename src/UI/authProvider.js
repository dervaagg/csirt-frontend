import { PublicClientApplication } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: '68583769-a0da-4093-8fed-e3890cf885b3',
    authority: 'https://login.microsoftonline.com/16acd045-1e9a-462a-836a-71977f76daad',
    redirectUri: 'https://6pjxft29-9696.asse.devtunnels.ms/admin',
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
};
export const msalInstance = new PublicClientApplication(msalConfig);
await msalInstance.initialize();
await msalInstance.handleRedirectPromise(); // This will no longer throw this error since initialize completed before this was invoked
msalInstance.acquireTokenSilent(); // This will also no longer throw this error
