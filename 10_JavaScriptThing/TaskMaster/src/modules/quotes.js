"use strict";

const quotes = [
    "Kód je jako vtip. Pokud ho musíš vysvětlovat, je špatný.",
    "Programátor je stroj, který přeměňuje kofein na kód.",
    "Dvakrát měř, jednou programuj.",
    "Chyba není v počítači, chyba je v tobě.",
    "Software je plyn, který se rozpíná, dokud nevyplní veškerou paměť."
];



/*
function CallSetQuote(quote) {
    qoutaEL.innerHTML = `<strong>${quote}</strong>`;
}

CallSetQuote(quotes[random]);
setQuote(quotes[0])
*/

export default function UseQotes() {
    const qoutaEL = document.getElementById("quote-display");
    function setQuote(quote) {
        qoutaEL.innerHTML = `<strong>${quote}</strong>`;
    }

    let idx =0



    function AdvancedQuote() {
        idx = ++idx % quotes.length;
        setQuote(quotes[idx]);
    }

    qoutaEL.addEventListener("click", () => {
        console.log("clicked");
        AdvancedQuote();
    })

    function setQuote(quote) {
        qoutaEL.innerHTML = `<strong>${quote}</strong>`;
    }

    setInterval(AdvancedQuote, 5000);




    return {
       AdvancedQuote,
        setQuote,
    }
}

