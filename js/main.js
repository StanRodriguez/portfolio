const allCountryInfo =
  "This app allows you to look for any country around the world, see the location in the map and quick information about it.";
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const emptyElement = index => {
  const p = document.getElementsByClassName("project-description")[index];
  p.textContent = "";
  p.style.display = "none";
};

const type = async (e, index) => {
  const p = document.getElementsByClassName("project-description")[index];
  if (p.textContent.length === 0) {
    p.style.display = "block";
    for (let i = 0; i < allCountryInfo.length; i++) {
      await sleep(50);
      p.textContent += allCountryInfo[i];
    }
  } else {
    p.textContent = "";
  }
};
