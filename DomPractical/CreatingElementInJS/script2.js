const container = document.querySelector(".container");

// const paragraph = document.createElement("p");
// paragraph.classList.add("mypara");
// paragraph.innerText = "hello";
// paragraph.id = "hhi";

// container.append(paragraph);

// ---------1st ways and for large application

// for (let i = 1; i <= 100; i++) {
//   const imgContainer = document.createElement("div");
//   imgContainer.classList.add("img-container");

//   const newImage = document.createElement("img");
//   newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

//   const paragraph = document.createElement("p");
//   paragraph.innerText = i;

//   imgContainer.append(newImage, paragraph);
//   container.append(imgContainer);
// }

// ---------------------------2nd ways but we not use it in scalable application---------

// let myHTML = ``;

// for (let i = 1; i <= 100; i++) {
//   myHTML += `
//     <div class="img-container">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//         <p>${i}</p>
//     </div>
//     `;
// }

// container.innerHTML = myHTML
// ---------------------3rd way but for large app---------
for (let i = 1; i <= 100; i++) {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const myHtml = `
  <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png"
  <p>${i}</p>
  `;
}
imgContainer.innerHTML = myHtml;
