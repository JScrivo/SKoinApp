const url = "http://skoin.duckdns.org:8080/api/";

export function APIregister(){

    return fetch(url + 'docs/all', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Hash: 'sampletext'
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