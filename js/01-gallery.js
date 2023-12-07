import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();
  const imgSrc = event.target;
  console.log(imgSrc);
  const lightbox = basicLightbox.create(
    `<img src="${imgSrc.dataset.source}" >`
  );
  lightbox.show();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      lightbox.close();
    }
  });
});
const images = galleryItems.map((item) => {
  return `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>
        </div>`;
});
galleryContainer.insertAdjacentHTML("beforeend", images.join(""));

console.log(galleryItems);
