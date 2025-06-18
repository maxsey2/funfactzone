// Fonction pour récupérer un fun fact
async function getFunFact() {
  try {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");
    const data = await response.json();
    document.getElementById("fact").innerText = data.text;
  } catch (error) {
    document.getElementById("fact").innerText = "Oops! Couldn't fetch a fact. Please try again.";
  }
}

// Activation du lien "open_preferences_center"
document.addEventListener('DOMContentLoaded', function () {
  const cookieLink = document.getElementById('open_preferences_center');
  if (cookieLink) {
    cookieLink.addEventListener('click', function (e) {
      e.preventDefault();
      if (typeof __cmp === 'function') {
        __cmp('showConsentTool');
      } else {
        console.warn('ConsentManager is not loaded yet.');
      }
    });
  }
});
