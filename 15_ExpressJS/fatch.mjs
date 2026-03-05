async function getDataFromApi()  {
    try {
        const res = await fetch("http://localhost:3000/users")

        if (res.status === 200) {
            return await res.json()
        }
    }catch(err) {
        console.log(err)
    }
}

getDataFromApi().then(res => console.log(res))