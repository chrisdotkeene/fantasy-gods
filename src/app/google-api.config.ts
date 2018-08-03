import { NgGapiClientConfig } from 'ng-gapi';

export const gapiClientConfig: NgGapiClientConfig = {
    client_id: '129007741633-8l111099ds2tou83uk45f8k5dfbh93ni.apps.googleusercontent.com',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
    scope: [
        'https://www.googleapis.com/auth/gmail.readonly'
    ].join(' ')
};

export const API_KEY = 'AIzaSyC14b9fAJ6kJQNPAyxmfJFb0_OPoLuaDqo';
