import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function FavoriteFunction(props: {favorite: Boolean, changeToFavorite: () => void}) {

  return (
    <div>

      {props.favorite ? (
        <FavoriteIcon
        onClick={() => props.changeToFavorite()}
        
        />
      ) : (
        <FavoriteBorderIcon
        onClick={() => props.changeToFavorite()}
        />
      )}
      
    </div>
  );

}

export default FavoriteFunction