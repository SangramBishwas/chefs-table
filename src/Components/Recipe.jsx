import { BiAlarm } from "react-icons/bi";
import { FaFireAlt } from "react-icons/fa";
import PropTypes from 'prop-types';
const Recipe = ({ recipe, handlWantToCook }) => {
    const { recipe_name, recipe_image, description, preparing_time, calories, ingredients } = recipe;
    const [a, b, c] = ingredients;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img className='rounded-xl h-[300px]' src={recipe_image} />
                </figure>
                <div className="card-body items-center space-y-3">
                    <h2 className="text-xl text-left font-semibold w-full">{recipe_name}</h2>
                    <p className='text-[#878787]'>{description.slice(0, 50)}.....</p>
                    <div className='w-full border-y border-[#2828281A]'>
                        <ol className='list-disc p-5 space-y-2'>
                            <li>{a}</li>
                            <li>{b}</li>
                            <li>{c}</li>
                        </ol>
                    </div>
                    <div className='flex w-full justify-evenly'>
                        <div className="flex gap-1 items-center text-[#282828CC]"><BiAlarm /><span>{preparing_time}minutes</span></div>
                        <div className="flex gap-1 items-center text-[#282828CC]"><FaFireAlt /><span>{calories}calories</span></div>
                    </div>
                    <div className="card-actions w-full flex">
                        <button className="btn text-lg font-semibold bg-[#0BE58A] rounded-full" onClick={()=> handlWantToCook(recipe)}>Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handlWantToCook: PropTypes.func.isRequired
};

export default Recipe;