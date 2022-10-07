import React from 'react';
import Scenary1 from '../assets/Scenary1.jpeg'

function Card() {
    return(
        <div>
        <div className='card text-center'>
            <div className='overflow'>
                <img src = {Scenary1} alt='Scenary' />
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'> Card Title</h4>
                <p className='card-text text-secondary'>
                    Explantory paragraph
                </p>
                <a href='#' className='btn btn-outline-success'>Go Anywhere</a>
            </div>
        </div>
        <div className='card text-center'>
            <div className='overflow'>
                <img src = {Scenary1} alt='Scenary' />
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'> Card Title</h4>
                <p className='card-text text-secondary'>
                    Explantory paragraph
                </p>
                <a href='#' className='btn btn-outline-success'>Go Anywhere</a>
            </div>
        </div>
        <div className='card text-center'>
            <div className='overflow'>
                <img src = {Scenary1} alt='Scenary' />
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'> Card Title</h4>
                <p className='card-text text-secondary'>
                    Explantory paragraph
                </p>
                <a href='#' className='btn btn-outline-success'>Go Anywhere</a>
            </div>
        </div>
        <div className='card text-center'>
            <div className='overflow'>
                <img src = {Scenary1} alt='Scenary' />
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'> Card Title</h4>
                <p className='card-text text-secondary'>
                    Explantory paragraph
                </p>
                <a href='#' className='btn btn-outline-success'>Go Anywhere</a>
            </div>
        </div>
        </div>
    );
  }
  
  export default Card;