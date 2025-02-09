import React from 'react'

export default function Moviecard({ movie, updatePrice, deleteMovie }){
  return (
        <div>
     <img src={movie.image} className="card-img-top" alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.releaseYear}</p>
                <p className="card-text">
                  <strong>Price:</strong> ${movie.price}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => updatePrice(movie.id)}
                >
                  Price Up
                </button>
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                  onClick={() => deleteMovie(movie.id)}
                >
                  Delete
                </button>
                </div>
                </div>
  )

}
