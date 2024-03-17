import PropTypes from 'prop-types';
import Recipe from "./Recipe";
import Cart from './Cart';
const Main = ({ recipes, handlWantToCook, cart, handleCooking, cooking, maxTime }) => {
    return (
        <div className='mx-20 mb-10'>
            <h2 className='text-4xl font-bold text-center my-5'>Our Recipes</h2>
            <p className='text-base text-[#150B2B99] text-center mb-12'>We are very happy to know you that we are making the best and comprehensive recipes in this town. <br /> Here some popular recipes have been included. So you can come and order and we will be so happy to provide this recipes.</p>
            <div className='grid lg:grid-cols-3 gap-10'>
                <div className='col-span-2'>
                    <div className='grid grid-cols-2 gap-5'>
                        {
                            recipes.map((recipe) => <Recipe
                                key={recipe.id}
                                recipe={recipe}
                                handlWantToCook={handlWantToCook}></Recipe>)
                        }
                    </div>
                </div>
                <div className='col-span-1 border-2 rounded-xl space-y-6 h-1/2'>
                    <h3 className='text-2xl font-bold text-center border-b border-[#28282826] py-4 mx-10'>Want to cook: {cart.length}</h3>
                    <Cart cart={cart}
                        handleCooking={handleCooking}
                        cooking={cooking}
                        maxTime={maxTime}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

Main.propTypes = {
    recipes: PropTypes.array.isRequired,
    handlWantToCook: PropTypes.func.isRequired,
    handleCooking: PropTypes.func.isRequired,
    cart: PropTypes.array.isRequired,
    cooking: PropTypes.array.isRequired,
    maxTime: PropTypes.number.isRequired

};


export default Main;