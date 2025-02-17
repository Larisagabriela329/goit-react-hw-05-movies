import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Loader from "./Loader";
import Modal from "./Modal";

const API_KEY = "47390625-19a19a63281485c70e805310c";
const BASE_URL = "https://pixabay.com/api/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      query: "",
      page: 1,
      loading: false,
      selectedImage: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { query, page } = this.state;
    if (!query) return;
    
    this.setState({ loading: true });
    try {
      const response = await fetch(
        `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();
      this.setState((prevState) => ({
        images: page === 1 ? data.hits : [...prevState.images, ...data.hits],
      }));
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSearch = (newQuery) => {
    this.setState({ query: newQuery, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  handleImageClick = (imageUrl) => {
    this.setState({ selectedImage: imageUrl });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, loading, selectedImage } = this.state;
    return (
      <div>
        <Searchbar onSearch={this.handleSearch} />
        {loading && <Loader />}
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}
        {selectedImage && <Modal imageUrl={selectedImage} onClose={this.handleCloseModal} />}
      </div>
    );
  }
}

export default App;
