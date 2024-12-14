import React from 'react'

const NewsItem = (props) => {
    let {title,description,imageUrl,newsUrl,author,date,source} =props
    // console.log(imageUrl);
    
    return (
      <>
        <div className="card my-2">
          <div style={{display:'flex',justifyContent : 'flex-end',
        right:0,position : 'absolute'}}>

        <span className="badge rounded-pill bg-danger">
            {source.name}
          </span>
          </div>
          <img src={!imageUrl?"https://www.cricbuzz.com/a/img/v1/595x396/i1/c414633/even-a-125-run-opening-stand-g.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>  
      </>
    )
  }

export default NewsItem
