import PropTypes from 'prop-types';
import { GrFormNext } from "react-icons/gr";
const Cart = ({ cart }) => {
    return (
        <div className='w-full'>
            <div className="overflow-x-auto">
                <table className='w-full'>
                    <thead className='h-[3rem] pb-3'>
                        <tr>
                            <th>SI</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>                    
                    {cart.map((item, index) => (
                        <tbody className='border-b-2 mb-5' key={index}>
                            <tr className="w-full bg-base-200">
                                <th className='px-2'>{index + 1}</th>
                                <td className='pl-2'>{item.recipe_name}</td>
                                <td className='pl-2'>{item.preparing_time} minutes</td>
                                <td className='pl-2'>{item.calories}cal</td>
                                <td><button className='bg-sky-300 hover:bg-sky-500 hover:text-white text-2xl my-2 p-2 rounded-full'><GrFormNext /></button></td>
                            </tr>
                        </tbody>
                    ))}

                </table>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired
};

export default Cart;