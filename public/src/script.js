const url = require("url")

console.log("External Javascript connected!")


const navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks);


let i=0;
let currentPage = url[url.length - 1];

// navLinks.forEach((link)=>{

//     link.classList.add("active");
// })

