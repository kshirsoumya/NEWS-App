import React, { Component } from 'react'
import PropTypes from 'prop-types'

import NewsItem from './NewsItem';


export class News extends Component {
  static defaultProps = {
    country:"in",
    pageSize:6,
    category:"general",
  }

  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1

    }
  }

  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e10167a4f61e4e9ebe11cc20a5c1c202&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log("parseData");
    this.setState({ articles: parseData.articles, totalResults:parseData.totalResults })
  }

  handlePrevClick= async ()=>{
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e10167a4f61e4e9ebe11cc20a5c1c202&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log("parseData");
    this.setState({
      page:this.state.page-1,
      articles:parseData.articles
    })
  }

  handleNextClick= async()=>{
    console.log("next");
    if(this.state.page+1>Math.ceil(this.state.totalResults/(this.props.pageSize))){
       
    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e10167a4f61e4e9ebe11cc20a5c1c202&page=${this.state.page+1}&pageSize${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log("parseData");
    this.setState({
      page:this.state.page+1,
      articles:parseData.articles
    })
  }
  }


  render() {
    console.log("render")
    return (
      <div className="container">
        <h2 className='text-center my-3'>News-Dose - Top Headlines</h2>
       
        <div className="row" >
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage}
                  newsUrl={element.url} />
              </div>
            )
          })}

          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/(this.props.pageSize))}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

          </div>
        </div>
     
      </div>
    )
  }
}

export default News;
