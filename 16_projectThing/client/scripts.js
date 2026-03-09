const apiURL = "http://localhost:3000";

async function getData() {
    const response = await fetch(`${apiURL}/api/rooms`, {
        method: "GET",
        mode: "cors",
    });

    const data = await response.json();

    console.log(data);
}

getData();
