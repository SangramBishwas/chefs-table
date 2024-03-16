import PropTypes from 'prop-types';
import Recipes from "./Recipes";
const Main = ({recipes}) => {
    return (
        <div className='mx-20 mb-10'>
            <h2 className='text-4xl font-bold text-center my-5'>Our Recipes</h2>
            <p className='text-base text-[#150B2B99] text-center mb-12'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. <br /> Eget urna volutpat curabitur elementum mauris aenean neque.</p>
            <div className='grid lg:grid-cols-3 gap-10'>
                <div className='col-span-2'>
                    <Recipes recipes={recipes}></Recipes>       
                </div>
                <div className='col-span-1 p-8 border-2 rounded-xl'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non modi ipsum. Aut earum corrupti ut expedita? Maiores similique dolorem deleniti suscipit earum voluptates dolores, autem soluta culpa fuga maxime cumque nemo quasi error inventore alias perspiciatis illum fugit quis quia iste, officia reiciendis. Accusamus, placeat possimus dolore reiciendis beatae neque nobis animi labore quas! Quis natus quisquam tempora in eius esse debitis autem quam est fugit molestias suscipit commodi cupiditate a iusto numquam doloremque, exercitationem officia nihil consequuntur ex, quibusdam totam asperiores? Commodi sed enim saepe accusantium assumenda nobis! Dicta numquam maiores, dolores eum eveniet quod inventore libero qui.</p>
                </div>
            </div>
        </div>
    );
};

Main.propTypes = {
    recipes: PropTypes.array.isRequired
};


export default Main;