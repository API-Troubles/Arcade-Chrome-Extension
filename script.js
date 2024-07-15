function httpGet(Url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", Url, true );
    xmlHttp.setRequestHeader("Authorization", localStorage.getItem('apiKey'));
    xmlHttp.setRequestHeader("User-Agent", "Test Chrome Extension")
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
    const obj = JSON.parse(xmlHttp.responseText);
    return obj;
}

function httpSendPost(theUrl)
{
    fetch("", {
      method: "POST",
      body: JSON.stringify({
        userId: 1,
        title: "Fix my bugs",
        completed: false
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
}

function saveKey()
{
    key = document.getElementById('keyInput').value;
    localStorage.setItem('apiKey', key); 
    console.log("saved following apiKey: " + key);
    httpGet("https://hackhour.hackclub.com/api/session/U07BU2HS17Z");
}