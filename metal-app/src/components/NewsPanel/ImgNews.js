import React from "react";
import "./ImgNews.css"


function News({ bandImg = "", highlights = {}, show = "" }) {
  return (

    <div className={`highlight ${show}`} >
      <a
        href={`${highlights.imgLink}`}
        target="_blank"
        rel="noreferrer"
      >

        <img
          alt={`banda-${highlights.name}`}
          src={bandImg}
        />
      </a>
      <div className="detail">
      <p>{highlights.name}</p>
      </div>
    </div>

  )
}


export default News;