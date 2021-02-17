import React from "react";
import "./News.css"
import ImgNews from "./ImgNews.js"
import band0 from "../../img/horcas.jpg"
import band1 from "../../img/logos.jpg"
import band2 from "../../img/turilliLione.jpg"
import band3 from "../../img/Renacer.jpg"

const highlights = [
  {
    name: "Horcas",
    imgUrl: "horcas.jpg",
    imgLink: "https://open.spotify.com/artist/0R0FEEepfDr3js3lsGPykq"
  },
  {
    name: "Logos",
    imgUrl: "logos.jpg",
    imgLink: "https://open.spotify.com/artist/4aCWTRWrh5lyIaZTVCP6ja"
  },
  {
    name: "Turilli/Lione Rhapsody",
    imgUrl: "turilliLione.jpg",
    imgLink: "https://open.spotify.com/artist/4jp6jGwANHkhNr6gbJNhiy"
  },
  {
    name: "Renacer",
    imgUrl: "Renacer.jpg",
    imgLink: "https://open.spotify.com/artist/7B9pJzrDTdS1HCnuNQklaU"
  }
]


function News() {
  return (


    <div className="news-link-container">

      <div className="show-large">
      <ImgNews bandImg={band0} highlights={highlights[0]} show="large"/>
      </div>

      <div className="show-small"> 

      <ImgNews bandImg={band1} highlights={highlights[1]} show="small"/>

      <ImgNews bandImg={band2} highlights={highlights[2]} show="small"/>

      <ImgNews bandImg={band3} highlights={highlights[3]} show="small"/>

      </div>

    </div>
  )
}


export default News;