import React, { Component } from 'react';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSearch = () => {
    if (this.state.query.trim() !== '') {
      this.props.onSearch(this.state.query);
    }
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter' && this.state.query.trim() !== '') {
      this.props.onSearch(this.state.query);
    }
  };

  render() {
    return (
      <div className="search-container">
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyPress}
          placeholder="Search images..."
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default Searchbar;
