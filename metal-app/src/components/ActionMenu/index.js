import React from 'react';
import Search from "../Search";
import "./ActionMenu.css";

function ActionMenu({
  changeModal = ()=> {}, 
  manageSearchInput = ()=>{},
  showSearch=()=>{},
  title,
}) {
  return (
    <div className="action-menu">
      <div className="actions-menu-content">
      <button 
      type="button" 
      className="btn btn-primary" 
      data-toggle="modal" 
      data-target="#exampleModalCenter"
      onClick= {changeModal}
      >
      Agregar {title==="Artistas" ? "artista" : "banda"}
      </button>
      <Search manageSearchInput={manageSearchInput} showSearch={showSearch}/>


      </div>

    </div>
   
  )
}

export default ActionMenu;