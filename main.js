function randomQuote() {
  var quotes = [
    "So many books, so little time.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "A room without books is like a body without a soul.",
    "Be the change that you wish to see in the world.",
  ];
  var names = [
    "Oscar Wilde",
    "Frank Zappa",
    "Marcus Tullius Cicero",
    "Mahatma Gandhi",
  ];
  var num = Math.floor(Math.random() * quotes.length);
  let paragraph = document.getElementById("quote-par");
  paragraph.innerHTML = `"${quotes[num]}" <br><em>– ${names[num]}</em>`;
}
