const base = "https://hackhour.hackclub.com";


async function getData(Url) {
  try {
    const response = await fetch(base+Url, {
        headers: {
            "User-Agent": "Test - Chrome Extension",
            "Authorization": "Bearer " + localStorage.getItem('apiKey')
        }
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
        console.error(error.message);
  }
}


async function postData(Url, Json)
{
    try {
        const response = fetch(base+Url, {
            method: "POST",
            body: JSON.stringify(Json),
            headers: {
                "User-Agent": "Test - Chrome Extension",
                "Authorization": "Bearer " + localStorage.getItem('apiKey')
            }
        });

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        return json;
      } catch (error) {
            console.error(error.message);
      }
}


async function startSession(work)
{
    await postData("/api/start/" + localStorage.getItem('apiKey'), {work: work});
}


function saveKey()
{
    key = document.getElementById('keyInput').value;
    if (key != "") {
        localStorage.setItem('apiKey', key); 
        console.log("saved following apiKey: " + key);
    }
}