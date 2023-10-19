import React from 'react'

const AnimeList = () => {
    fetch('https://api.jikan.moe/v3/user/GlorianaZelaya/animelist/watching')
  .then(response => response.json())
  .then(data => {
  })
  .catch(error => {
    console.error('Error fetching data: ', error);
  });
  return (
    <div>
      
    </div>
  )
}

export default AnimeList
