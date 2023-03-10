const BTN2 = document.querySelector('#btn2')
const inputValue = document.querySelector('#input-url')
function shortener(){
    let url = document.getElementById("input-url").value;
    if(!url){
        return alert('Needs URL for use URL Shortener');
    }

    //headers
    let headers = {
        "Content-Type": "application/json",
        "apiKey": "c0d55bc990644687a24acbbbca1da741"
    };

    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        let inputUrl = document.getElementById("input-url");
        inputUrl.value = json.shortUrl;
    });
}

BTN2.addEventListener('click', async() => {
    await navigator.clipboard.writeText(inputValue.value);
    await navigator.clipboard.writeText(inputValue.setSelectionRange(0,9999));
    !alert('Copied link!');
})
