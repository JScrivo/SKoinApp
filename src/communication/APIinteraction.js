const url = "http://skoin.duckdns.org:8080/api/";

export async function APIregister(){

    try {
        const response = await fetch(url + 'docs/all', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Hash: 'sampletext'
            })
        });
        if (!response.ok) {
            throw Error(response.status.Text);
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
