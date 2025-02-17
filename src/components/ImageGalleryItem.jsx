import React from "react";

const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li className="gallery-item" onClick={() => onImageClick(image.largeImageURL)}>
      <img src={image.webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
