const quote_id = document.querySelector("#quote");
const author_id = document.querySelector("#author");
const quote_btn = document.querySelector("#newQuote");
const copy_btn = document.querySelector("#copy");
const tweet_btn = document.querySelector("#tweet");
const url = "http://localhost:3000/";

function setupTweet(quote, author) {
  const tweet_text = `"${quote}" - ${author}`;
  const tweet_href = `https://twitter.com/intent/tweet?text=${tweet_text}`;
  tweet_btn.setAttribute("href", tweet_href);
}

function typeWriterEffect(element, text, i = 0) {
  if (i === 0) {
    element.textContent = " ";
  }
  element.textContent += text[i];

  if (i === text.length - 1) {
    return;
  }

  setTimeout(() => typeWriterEffect(element, text, i + 1), 50);
}

async function getQuote() {
  try {
    const response = await fetch(url);
    let data = await response.json();
    typeWriterEffect(quote_id, data[0].q);
    typeWriterEffect(author_id, data[0].a);
    setupTweet(data[0].q, data[0].a);
    document.getElementById("copy").innerHTML = "Copy";
  } catch (error) {
    console.log(error);
    quote_id.textContent = "Something's not right!";
    author_id.textContent = " ";
  }
}

getQuote();
quote_btn.addEventListener("click", getQuote);
copy_btn.addEventListener("click", () => {
  navigator.clipboard.writeText(quote_id.textContent);
  document.getElementById("copy").innerHTML = "Copied";
});
