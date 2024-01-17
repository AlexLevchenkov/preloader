document.addEventListener("DOMContentLoaded", () => {
  const textBlock = document.querySelector(".preloader h2");
  const wordArr = textBlock.textContent.split(" ");
  const letterArr = wordArr.map(word => 
    `<span class="word">${word.split("").map(letter => `<span class="letter">${letter}</span>`).join("")}</span>`
  )
  textBlock.innerHTML = letterArr.join(" ");

  document.querySelector("button").addEventListener("click", ()=>{console.log("CLICK")})
})

