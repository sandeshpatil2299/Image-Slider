const leftEl= document.querySelector(".left");
const rightEl= document.querySelector(".right");
const imageContainerEl= document.querySelector(".imageContainer");
const imagesEl= document.querySelectorAll("img");

let counter= 1;
let timeOut;

const updateImage= () =>
{
   if(counter > imagesEl.length)
   {
      counter= 1;
   }
   else if(counter < 1)
   {
      counter= imagesEl.length;
   }
   imageContainerEl.style.transform= `translateX(${-(counter-1) * 650}px)`;
   
   timeOut= setTimeout(() =>
   {
      counter++;
      updateImage();
   }, 3000);
}

updateImage();

rightEl.addEventListener("click", () =>
{
   counter++;
   clearTimeout(timeOut);
   updateImage();
})

leftEl.addEventListener("click", () =>
{
   counter--;
   clearTimeout(timeOut);
   updateImage();
})

