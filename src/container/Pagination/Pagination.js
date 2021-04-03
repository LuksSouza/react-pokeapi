import React, { Component } from 'react';
import './Pagination.css';

class Pagination extends Component {

  state = {
    pages: Math.round(this.props.data.length / this.props.dataLimit),
    currentPage: 1
  };

  goToNextPage = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        currentPage: prevState.currentPage + 1
      }
    });
  }

  goToPreviousPage = () => {
    if (this.state.currentPage === 1) return;
    this.setState(prevState => {
      return {
        ...prevState,
        currentPage: prevState.currentPage - 1
      }
    });
  }

  changePage = (event) => {
    this.setState({ currentPage: Number(event.target.textContent) });
  }

  getPaginatedData = () => {
    const startIndex = this.state.currentPage * this.props.dataLimit - this.props.dataLimit;
    const endIndex = startIndex + this.props.dataLimit;
    return this.props.data.slice(startIndex, endIndex);
  };

  getPaginationGroup = () => {
    let start = Math.floor((this.state.currentPage - 1) / this.props.pageLimit) * this.props.pageLimit;
    return new Array(this.props.pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  render() {
    return (
      <div>
        <div className="dataContainer">
          {this.getPaginatedData().map((d, idx) => (
            <this.props.RenderComponent key={idx} data={d} />
          ))}
        </div>
        <div className="pagination">
          <button
            onClick={this.goToPreviousPage}
            className={`prev ${this.state.currentPage === 1 ? 'disabled' : ''}`}>
            prev
          </button>
          {this.getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={this.changePage}
              className={`paginationItem ${this.state.currentPage === item ? 'active' : null}`}>
              <span>{item}</span>
            </button>
          ))}
          <button
            onClick={this.goToNextPage}
            className={`next ${this.state.currentPage === this.state.pages ? 'disabled' : ''}`}>
            next
          </button>
        </div>
      </div>
    );
  }
}

export default Pagination;