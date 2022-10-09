const quotes = [
    {
        quote : "Despite the forecast, live like it's spring.",
        author : "Lilly Pulitzer",
    },
    {
        quote : "Life is not a spectator sport. If you're going to spend your whole life in the grandstand just watching what goes on, in my opinion you're wasting your life.",
        author :  "Jackie Robinson",
    },
    {
        quote : "The way to get started is to quit talking and begin doing.",
        author :  "Walt Disney",
    },
    {
        quote : "Opportunities don't happen. You create them.",
        author :  "Chris Grosser",
    },
    {
        quote : "Try not to become a man of success. Rather become a man of value.",
        author :  "Albert Einstein",
    },
    {
        quote : "The ones who are crazy enough to think they can change the world, are the ones that do.",
        author :  "Anonymous",
    },
    {
        quote : "Do one thing every day that scares you.",
        author :  "Anonymous",
    },
    {
        quote : "Laughter is timeless, Imagination has no age. And dreams are forever.",
        author :  "Walt Disney",
    },
    {
        quote : "The past can hurt, but the way I see it, you can either run from it or learn from it.",
        author :  "Lion King",
    },
    {
        quote : "You must not let anyone define your limit. because of where you come from.",
        author :  "Ratatouille",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;