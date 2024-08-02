let hotPicksData = [
  { img: "./img/ring.jpg", heading: "Diamond Ring", price: "1000" },
  { img: "./img/necklace.jpg", heading: "Gold Necklace", price: "1000" },
  { img: "./img/pendant.jpg", heading: "Pentant", price: "1000" },
  { img: "./img/earring6.jpg", heading: "Earring", price: "1000" },
];
function getItemCard(ele) {
  let section = document.createElement("div");
  section.className = "item-card";
  section.innerHTML = `
        
        <div class="item-card-img-wrapper">
          <img src="${ele.img}" alt="loading..." />
        </div>
        <div class="item-card-desc-wrapper">
          <h4>${ele.heading}</h4>
          <p>$${ele.price}</p>
        </div>
      
          `;

  return section;
}

function loadHotPicksData() {
  let hotPick = document.getElementById("hotPicks");

  hotPicksData.map((ele) => {
    let card = getItemCard(ele);
    hotPick.appendChild(card);
  });
}

addEventListener("DOMContentLoaded", () => {
    loadHotPicksData();
});




