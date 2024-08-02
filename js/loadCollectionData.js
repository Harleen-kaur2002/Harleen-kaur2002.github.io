let collectionData = [
    {
      img: "./img/pendant.jpg",
      heading: "Pentants",
      link: "./collections.html#pendantsCollectionLink",
    },
    { img: "./img/ring.jpg", heading: "Rings", link: "/collections.html#ringsCollectionLink" },
    { img: "./img/necklace.jpg", heading: "Necklace", link: "/collections.html#necklacesCollectionLink" },
    { img: "./img/earring1.jpg", heading: "Earrings", link: "/collections.html#earringsCollectionLink" },
    //   { img: "/img/ring.jpg", heading: "Bracelets", link: "bracelets" },
  ];


  addEventListener("DOMContentLoaded", () => {
    loadCollections();
  });



  function loadCollections() {
    let collections = document.getElementById("collection");
  
    collectionData.map((ele) => {
      let section = document.createElement("div");
      section.className = "category-card";
      section.innerHTML = `
          <div class="category-card-img-wrapper">
            <img
              src="${ele.img}"
              alt="loading..."
            />
          </div>
          <div class="category-card-desc-wrapper">
            <h4>${ele.heading}</h4>
            <p><a href="${ele.link}">Explore <i class="fa-solid fa-chevron-right"></i></a></p>
          </div> 
        `;
      collections.appendChild(section);
    });
  }