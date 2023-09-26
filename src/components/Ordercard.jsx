import PropTypes from 'prop-types';

const Ordercard = ({card}) => {
    const {name,price} = card
    
    return (
        <li className="flex justify-between text-xl">
          <p>{name}</p>
          <span >${price}</span>

        </li>

    );
};

Ordercard.propTypes ={
  card : PropTypes.object

}
export default Ordercard;