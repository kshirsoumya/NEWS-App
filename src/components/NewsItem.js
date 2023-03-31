import React, { Component } from 'react'


export class NewsItem extends Component {
   


  render() {
    let {title,description, imageUrl, newsUrl} = this.props;
   
        return (
      <div>
     <div className="card">
  <img className="card-img-top" src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/107132230-1665444692419-gettyimages-1237689867-JAPAN_STOCK.jpeg?v=1665445323&w=1920&h=1080":imageUrl} alt=" ..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description} </p>
    <a href={newsUrl} target="_blank" rel='norefferer' className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>


      </div>
    );
  }
}

export default NewsItem;
