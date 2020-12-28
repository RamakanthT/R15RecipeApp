import React from 'react';
import style from './recipe.module.css';

const Recipe =({title,calories,image1,ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingr => (
                    <li>{ingr.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image1} alt="Recipe image" />
        </div>
    )
}

export default Recipe;