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
                Name: name,
                Enterprise: true
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
        const response = await fetch(url + 'account/login', {
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
        global.business = json.Enterprise;
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

export async function APIgetPromotions(maxResults){
    try {
        const response = await fetch(url + 'promotions', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                MaximumResults: maxResults
            })
        });
        if (!response.ok) {
            throw Error(response.status.Text);
        }
        const response_1 = response;
        const json = await response_1.json();
        console.log('Get Promotions: ' + JSON.stringify(json));
        return json;
    }
    catch (error) {
        console.log('Get Promotions: ' + error);
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

export async function APIsendPoints(recipient, amount, id, hash){

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
                Id: id,
                Hash: hash
            })
        });
        if (!response.ok) {
            throw Error(response.status.Text);
        }
        const response_1 = response;
        const json = await response_1.json();
        console.log('Send points: ' + JSON.stringify(json));
        return json.Success;
    }
    catch (error) {
        console.log('Send points: ' + error);
        return false;
    }
}