import PropTypes from 'prop-types'
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';


const Card = ({card, handlerPurchase}) => {
    const {image, name, age, role, country, salary, fbUrl, twitter}= card;
    return (
        <div>
            <div className='px-4 py-4 bg-gray-100 shadow-lg rounded-lg'>
                <img className='rounded-full' src={image} alt="" />
                <div>
                    <h3 className='text-3xl font-semibold'>{name}</h3>
                    <h4 className='text-base font-medium'>Age: {age}</h4>
                    <h4 className='text-lg font-medium'>Role: {role}</h4>
                    <h4 className='text-base font-medium'>Country: {country}</h4>
                    <h4 className='text-xl font-semibold'>Sallery: {salary}</h4>
                    <button className='btn btn-sm bg-slate-700 text-white font-semibold' onClick={()=>handlerPurchase(card)}>Purchase</button>
                    <div className='text-2xl flex justify-center items-center gap-4'>
                        <a href={fbUrl}><BsFacebook></BsFacebook></a>
                        <a className='text-3xl' href={twitter}><AiFillTwitterCircle></AiFillTwitterCircle></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handlerPurchase: PropTypes.func.isRequired,
}

export default Card;