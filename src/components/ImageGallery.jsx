import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="gallery">
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} onImageClick={onImageClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
