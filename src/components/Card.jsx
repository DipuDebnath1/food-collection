
import PropTypes from 'prop-types';

function Card({card,handleOrder}) {
   const {name,about,image,price} = card
    return (
        <div>
          <figure>
            <img className="h-52 object-cover w-full" src={image} alt={name} />
            <h2 className="card-title text-2xl py-3">{name}</h2>
            <p className="text-lg">{about}</p>
            <div className="flex pb-3 pr-3 justify-between">
                <span className="card-title">${price}</span>
                <button className="btn btn-primary bg-red-700 text-white border-none hover:bg-red-600" onClick={()=>handleOrder(card)}>Add Order</button>
            </div>
          </figure>
        </div>
    );
}

Card.propTypes ={
  card : PropTypes.object,
  handleOrder : PropTypes.func,

}
export default Card;