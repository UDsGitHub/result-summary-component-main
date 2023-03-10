const summaryList = document.getElementById("summaryList");

async function getSummaryData() {
  let response = await fetch("./data.json");
  return response.json();
}

async function displaySummaryEls() {
  let summaryData = await getSummaryData();
  let total = 0;
  summaryData.forEach((item) => {
    let summaryEl = `
            <div class="summary-item ${item.category.toLowerCase()}">
              <div>
                <img src="${item.icon}" alt="${item.category}" />
                <p>${item.category}</p>
              </div>
              <p>${item.score}<span> / 100</span></p>
            </div>`;
    summaryList.innerHTML += summaryEl;
    total += parseFloat(item.score);
  });
  document.getElementById("score-val").innerText = Math.round(total/summaryData.length)
  document.querySelectorAll(".skeleton").forEach((item) => item.remove());
}

displaySummaryEls();
