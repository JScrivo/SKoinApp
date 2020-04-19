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
        console.log(json);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}

export function APIregisterBusiness(username, email, phoneNum, password, address, name){
    var userpass = username + password;

    return fetch(url + 'account/register', {

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
        })
        .then((response) => {
            if (!response.ok){
                throw Error(response.status.Text);
            }
            return response;
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            return true;
        })
        .catch((error) => {
            console.log(error);
            return false;
        });
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
        console.log(json);
        global.sessionID = json.Id;
        return json.Success;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}

export function APIgetBalance(){
    return fetch(url + 'account/info', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Hash: 'sampletext' //placeholder
        })
        })
        .then((response) => {
            if (!response.ok){
                throw Error(response.status.Text);
            }
            return response;
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            return json.Balance;
        })
        .catch((error) => {
            console.log(error);
            return -1;
        });
}

export function APIsendPoints(amount, recipient){

    return fetch(url + 'account/transfer', {
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
        })
        .then((response) => {
            if (!response.ok){
                throw Error(response.status.Text);
            }
            return response;
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            return true;
        })
        .catch((error) => {
            console.log(error);
            return false;
        });
}