export const createGalleryCardTemplate = imgInfo => {
    return `
   <li class="gallery-card">
    <a class="gallery-card-link" href="${imgInfo.largeImageURL}">
    <img class="gallery-img" src="${imgInfo.largeImageURL}" alt="${imgInfo.tags}"
    preview="${imgInfo.webformatURL}"/> 
    <p>Likes=${imgInfo.likes} Views=${imgInfo.views} Comments=${imgInfo.comments} Downloads=${imgInfo.downloads}</p>
    </a>
  </li>
  `;
};