import PropTypes from 'prop-types'

const Cart = ({cart, cost, remaining, budget}) => {
    return (
        <div className="md:w-1/3">
            <div className='px-4 py-4 bg-gray-100 shadow-lg rounded-lg'>
                <div className="md:border-b-2 p-2">
                <div>
                    {
                        cart.map((item, inx)=> <h1 key={inx} className="text-2xl font-semibold text-stone-800">{item.name}</h1>)
                    }
                </div>
                </div>
                <div className="p-2">
                    <h3 className="text-2xl font-semibold text-stone-500">Total Cost: {cost}</h3>
                    <h3 className="text-2xl font-semibold text-stone-500">Remaining Balance: {remaining}</h3>
                    <h3 className="text-2xl font-semibold text-stone-500">Total Budget: {budget}</h3>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    cost: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired,
    budget: PropTypes.number.isRequired,
}

export default Cart;