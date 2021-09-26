var arrayOfQuotes =
[

    {
        "author":"Jim Rohn",
        "quote":"Beware of what you become in pursuit of what you want."
    },

    {
        "author":"Epictetus",
        "quote":"it's not what happens to you, but how you react to it that matters"
    },

    {
        "author":"Atticus Finch",
        "quote":"You never really understand a person until you consider things from their poit of view...Until you climb into their skin and walk around it"
    }

]

function randomSelector(arrayLength)
{
    return Math.floor(Math.random() * arrayLength);
}

function generateQuote()
{
    var randomNumber = randomSelector(arrayOfQuotes.length);

    document.getElementById("quoteOutput").innerHTML = ' " ' + arrayOfQuotes[randomNumber].quote + ' " ';

    document.getElementById("authorOutput").innerHTML = ' " ' + arrayOfQuotes[randomNumber].author + ' " ';
}
