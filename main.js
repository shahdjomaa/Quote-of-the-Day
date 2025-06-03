var quotes = [
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "--Mark Twain"
  },
  {
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "--Maya Angelou"
  },
  {
    quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
    author: "--Oscar Wilde, The Happy Prince and Other Stories"
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "--Marcus Tullius Cicero"
  },
  {
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "--Bernard M. Baruch"
  },
  {
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "--Dr. Seuss"
  }
];

var lastIndex = -1;

function quotefunc() {
  var newIndex;
  do {
    newIndex = Math.floor(Math.random() * quotes.length);
    console.log(newIndex);
  } while (newIndex === lastIndex);

  lastIndex = newIndex;
  document.getElementById("quote").innerHTML = quotes[newIndex].quote;
  document.getElementById("author").innerHTML = quotes[newIndex].author;
}  

