let lol = [10, 20, 30, 40]
lol.forEach(element => {
    console.log(element)
});

for (let i = 0; i < lol.length; i++)
{
    if (lol[i] == 30)
    {
        console.log("nic")                
    }
    else
        console.log(lol[i])
}

let use = {
    name: "Pepa",
    id: 1,
};

JSON.stringify(use)

console.log(use)