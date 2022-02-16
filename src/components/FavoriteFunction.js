import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function FavoriteFunction({favorite, changeToFavorite}) {

  return (
    <div>

      {favorite ? (
        <FavoriteIcon
        onClick={() => changeToFavorite()}
        
        />
      ) : (
        <FavoriteBorderIcon
        onClick={() => changeToFavorite()}
        />
      )}
      
    </div>
  );

}

export default FavoriteFunction