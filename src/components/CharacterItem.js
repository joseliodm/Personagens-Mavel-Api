import React from 'react'

import Modal from './Modal'

const CharacterItem = ({item}) => {

    const [modal, setModal] = React.useState(false);

    const favorite = (item)=>{
    
      var previousData = JSON.parse(localStorage.getItem('favorites'))
      previousData.push(item)
      localStorage.setItem('favorites',JSON.stringify(previousData))
    }
    const removeFavorite = (item)=>{
      
      var previousData = JSON.parse(localStorage.getItem('favorites'))
      previousData.splice(previousData.indexOf(item),1)
      localStorage.setItem('favorites',JSON.stringify(previousData))
    }
    return (
        <div className='content'>
      <div className='content-inner'>
        <div className='content-front'>
          <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt='' />
        </div>
        <div className='content-back'>
          <h1>{item.name}</h1>
          <ul>
          <li>
            <button type="button" className='Favorito' onClick={()=>favorite(item)}>Favorito</button>
            <button type="button" className='Remove' onClick={()=>removeFavorite(item)}>Remover Favorito</button>
      
              <button type="button" className='Modal' onClick={()=>setModal(true)}>Mais Informação</button>
              {modal && ( <Modal onClose={()=>setModal(false)} item={item} /> )}
            </li>       
          </ul>
        </div>
      </div>
    </div>
    )
}

export default CharacterItem