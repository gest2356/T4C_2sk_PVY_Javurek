const quotes = [
    "Kód je jako vtip. Pokud ho musíš vysvětlovat, je špatný.",
    "Programátor je stroj, který přeměňuje kofein na kód.",
    "Dvakrát měř, jednou programuj.",
    "Chyba není v počítači, chyba je v tobě.",
    "Software je plyn, který se rozpíná, dokud nevyplní veškerou paměť."
];


const quoteElement = document.getElementById("quote-display");

//const quoteElement = document.querySelector('header>p');
//const quoteElement = document.querySelectorAll('header>p')

function GetMyFuckingJavaScriptText(quote) {
    quoteElement.innerText = `${quote}`;
    //quoteElement.innerHTML = "<h1>" + quote + "<h2/>";
}



let number = 0;

function AdvanceQuote() {
    number = ++number % quotes.length;
    GetMyFuckingJavaScriptText(quotes[number]);
}

setInterval(AdvanceQuote, 5000);

export function initialize() {
    quoteElement.addEventListener("click", () => {
        AdvanceQuote();
    });
}

