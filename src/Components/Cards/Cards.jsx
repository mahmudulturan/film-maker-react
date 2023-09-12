import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types'


const Cards = ({handlerPurchase}) => {
    const [cards, setCards] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setCards(data))
    },[])
    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    cards.map(card => <Card key={card.id} card={card} handlerPurchase={handlerPurchase}></Card>)
                }
            </div>
        </div>
    );
};

Cards.propTypes = {
    handlerPurchase: PropTypes.func.isRequired,
}

export default Cards;