import React, { Component } from 'react';

const url = "http://skoin.duckdns.org:8080/api/";

export async function APIregisterUser(username, email, phoneNum, password){
    var userpass = username + password;

    try {
        const response = await fetch(url + 'account/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Hash: userpass,
                Email: email,
                Phone: phoneNum,
                Name: username
            })
        });
        if (!response.ok) {
            throw Error(response.text());
        }
        const response_1 = response;
        const json = await response_1.json();
        console.log('Register User: ' + JSON.stringify(json));
        return json.Success;
    }
    catch (error) {
        console.log('Register User:' + error);
        return false;
    }
}

export async function APIregisterBusiness(username, email, phoneNum, password, address, name){
    var userpass = username + password;

    try {
        const response = await fetch(url + 'account/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Hash: userpass,
                Email: email,
                Phone: phoneNum,
                Address: address,
                Name: name
            })
        });
        if (!response.ok) {
            throw Error(response.status.Text);
        }
        const response_1 = response;
        const json = await response_1.json();
        console.log('Register Business: ' + JSON.stringify(json));
        return json.Success;
    }
    catch (error) {
        console.log('Register Business: ' + error);
        return false;
    }
}

export async function APIlogin(username, password){
    var userpass = username + password;

    try {
        const response = await fetch(url + 'login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Hash: userpass
            })
        });
        if (!response.ok) {
            throw Error(response.status.Text);
        }
        const response_1 = response;
        const json = await response_1.json();
        console.log('Login: ' + JSON.stringify(json));
        global.sessionID = json.Id;
        global.hash = userpass;
        return json.Success;
    }
    catch (error) {
        console.log('Login: ' + error);
        return false;
    }
}

export async function APIgetInfo(sessionID, hash){
    try {
        const response = await fetch(url + 'account/info', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: sessionID,
                Hash: hash
            })
        });
        if (!response.ok) {
            throw Error(response.status.Text);
        }
        const response_1 = response;
        const json = await response_1.json();
        console.log('Get Info: ' + JSON.stringify(json));
        if(json.Success){
            return json;
        }
        return null;
    }
    catch (error) {
        console.log('Get Info: ' + error);
        return null;
    }
}

export async function APIgetQRURI(id){
    try {
        const response = await fetch(url + 'qr', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: id
            })
        });
        if (!response.ok) {
            throw Error(response.status.Text);
        }
        const response_1 = response;
        const json = await response_1.json();
        //console.log('Get QR Code: ' + JSON.stringify(json));
        return json.Data;
    }
    catch (error) {
        console.log('Get QR Code: ' + error);
        return null;
    }
}

export async function APIsendPoints(amount, recipient){

    try {
        const response = await fetch(url + 'account/transfer', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Recipient: recipient,
                Amount: amount,
                Id: 12344,
                Hash: 'ABUIAUION' //Placeholders until the api works
            })
        });
        if (!response.ok) {
            throw Error(response.status.Text);
        }
        const response_1 = response;
        const json = await response_1.json();
        console.log('Send points: ' + JSON.stringify(json));
        return true;
    }
    catch (error) {
        console.log('Send points: ' + error);
        return false;
    }
}