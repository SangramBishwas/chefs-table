import PropTypes from 'prop-types';
import Recipe from './Recipe';

const Recipes = ({ recipes }) => {
    console.log(recipes)
    return (
        <div className='grid grid-cols-2 gap-5'>
            {
                recipes.map((recipe) => <Recipe
                key={recipe.id}
                recipe={recipe}></Recipe>)
            }
        </div>
    );
};

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired
};

export default Recipes;