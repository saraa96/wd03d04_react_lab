import React from 'react'
import FilmRow from './FilmRow'

const FilmListing = (props) => {
    var filmRow = props.films.map(item =>{ 
        return <FilmRow  item={item.title} poster={item.backdrop_path} date ={item.release_date}  />
    })
    return (             
    <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {filmRow}  
    </div>
    )
}

export default FilmListing

