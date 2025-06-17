async function getFunFact() {
  try {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");
    const data = await response.json();
    document.getElementById("fact").innerText = data.text;
  } catch (error) {
    document.getElementById("fact").innerText = "Oops! Couldn't fetch a fact. Please try again.";
  }
}
