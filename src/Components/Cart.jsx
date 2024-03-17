import PropTypes from 'prop-types';
import { GrFormNext } from "react-icons/gr";
const Cart = ({ cart, handleCooking, cooking }) => {
    return (
        <div className='w-full'>
            <div className="overflow-x-auto">
                <table className='w-full'>
                    <thead className='h-[3rem] pb-3 font-medium text-[#878787]'>
                        <tr>
                            <th>SI</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    {cart.map((item, index) => (
                        <tbody className='border-b-2' key={index}>
                            <tr className="w-full bg-base-200">
                                <th className='px-2'>{index + 1}</th>
                                <td className='pl-2'>{item.recipe_name}</td>
                                <td className='pl-2'>{item.preparing_time} minutes</td>
                                <td className='pl-2'>{item.calories}cal</td>
                                <td><button className='bg-sky-300 hover:bg-sky-500 hover:text-white text-2xl my-2 p-1 rounded-full' onClick={() => handleCooking(item)}><GrFormNext /></button></td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
            <div className="overflow-x-auto my-10">
                <h3 className='text-2xl font-bold text-center border-b border-[#28282826] py-4 mx-10'>Currently Cooking: {cooking.length}</h3>
                <table className='w-full'>
                    <thead className='h-[3rem] pb-3 font-medium text-[#878787]'>
                        <tr>
                            <th>SI</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    {cooking.map((item, index) => (
                        <tbody className='border-b-2 h-[3rem]' key={index}>
                            <tr className="w-full bg-base-200">
                                <th className='px-2'>{index + 1}</th>
                                <td className='pl-2'>{item.recipe_name}</td>
                                <td className='pl-2'>{item.preparing_time}minutes</td>
                                <td className='pl-2'>{item.calories}</td>
                            </tr>
                        </tbody>
                    ))
                    }
                </table>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleCooking: PropTypes.func.isRequired,
    cooking: PropTypes.array.isRequired
};

export default Cart;