

let ringsData = [
  { img: "./img/ring.jpg", heading: "Diamond Ring", price:"1000"},
  { img: "./img/ring1.jpg", heading: "Standard Ring", price:"1000"},
  { img: "./img/ring5.jpg", heading: "Special Ring", price:"1000"},
  { img: "./img/ring3.jpg", heading: "Platinam Ring", price:"1000"},

  { img: "./img/ring4.jpg", heading: "Chain Ring", price:"1000"},

];


let necklaceData= [
  { img: "./img/necklace.jpg", heading: "Gold Necklace", price:"1000"},
  { img: "./img/necklace1.jpg", heading: "Ruby Necklace", price:"1000"},
  { img: "./img/necklace2.jpg", heading: "Full Necklace", price:"1000"},
  { img: "./img/necklace3.jpg", heading: "Gold Necklace", price:"1000"},
  { img: "./img/necklace4.jpg", heading: "Diamond Necklace", price:"1000"},
  { img: "./img/necklace_ring.jpg", heading: "Chain Necklace", price:"1000"},
  { img: "./img/necklace5.jpg", heading: "Diamond Necklace", price:"1000"},
  { img: "./img/necklace6.jpg", heading: "Necklace Set", price:"1000"},

]



let pendantsData = [
    { img: "./img/pendant.jpg", heading: "Pentant", price:"1000"},
    { img: "./img/pendant.jpg", heading: "Pentant", price:"1000"},
    { img: "./img/pendant.jpg", heading: "Pentant", price:"1000"},
  ];



  
let earringsData = [
  { img: "./img/earring6.jpg", heading: "Earring", price:"1000"},
  { img: "./img/earring1.jpg", heading: "Earring", price:"1000"},
  { img: "./img/earring2.jpg", heading: "Earring", price:"1000"},
  { img: "./img/earring3.png", heading: "Earring", price:"1000"},
  { img: "./img/earring4.png", heading: "Earring", price:"1000"},
  { img: "./img/earring5.jpg", heading: "Earring", price:"1000"},
];

addEventListener("DOMContentLoaded", () => {
  
  loadPendants();
  loadRings();
  loadNecklace();
  loadEarrings();


});


function getItemCard(ele){
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


function loadPendants() {
  let pendants = document.getElementById("pendants");

  pendantsData.map((ele) => {
    let card = getItemCard(ele);
    pendants.appendChild(card);
  });
}


function loadRings(){
    let rings = document.getElementById("rings");

  ringsData.map((ele) => {
    let card = getItemCard(ele);
    rings.appendChild(card);
  });
}



function loadNecklace(){
  let necklaces = document.getElementById("necklaces");
necklaceData.map((ele) => {
  let card = getItemCard(ele);
    necklaces.appendChild(card);
});
}





function loadEarrings(){
  let earrings = document.getElementById("earrings");

earringsData.map((ele) => {
  let card = getItemCard(ele);
    earrings.appendChild(card);
});
}