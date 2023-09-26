import PropTypes from 'prop-types';
import Ordercard from "./Ordercard";
import SpacialCards from "./SpacialCards";
import Card from "./card";

const Main = ({cards,orderCards,handleOrder,oderedPrice,spacialCards,confirmOrder}) => {

    oderedPrice = oderedPrice.toFixed(2)
    const discout = (oderedPrice*0.20).toFixed(2);
    return (
        <div className="w-11/12 mx-auto">
            <main >
              <div  className="my-8 flex flex-col-reverse md:flex-row">
                  {/* cards  */}
               <div className="md:w-9/12">
                        <div>
                            <h3 className="text-center text-3xl py-5 font-semibold ">Choice Your <span className="text-red-600">Food</span></h3>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                            {                      
                                cards.map((card,idx) => <Card key={idx} card = {card} handleOrder={handleOrder}></Card>)                    
                                }
                            </div>
                        </div>
               </div>
               



               {/* orderList */}
               <div className="md:w-3/12  pl-6 space-x-3">
                    <h3 className="text-center text-xl text-red-600 font-bold mt-20  my-5">Order List</h3>
                        
                        {/* no order message  */}
                    <div>
                        {
                           orderCards.length<1 ? <h1 className="text-red-600 text-2xl font-bold">
                            You No ordered Hare !!!
                           </h1> : ''
                        }
                    </div>
                    
                    <ol className="list-decimal py-4">
                    {
                            orderCards.map((card,idx)=><Ordercard key={idx} card={card}></Ordercard>)
                        }
                    </ol>
                    <div className="h-1 bg-red-600"></div>
                    {/* raguler parice  */}
                    <div className="flex justify-between text-xl">
                        <h4>Total Regular price :</h4>
                        <span>$ {oderedPrice}</span>
                    </div>
                    <div className="flex justify-between text-xl">
                        <h3> Discount :</h3>
                        <span className="text-red-600">$ {discout}</span>
                    </div>
                    <div className="flex justify-between text-xl">
                        <h3> Total :</h3>
                        <span className="text-red-600">$ {(oderedPrice-discout).toFixed(2)}</span>
                    </div>
                    <div className="py-5">
                      {orderCards.length>=1 ? <button onClick={()=>confirmOrder(true)} className="btn bg-red-600 hover:bg-red-700 text-white">Order Now</button> : ''}  
                    </div>

               </div>
              </div>
                {/* spacial cards section  */}
                <div className="pt-5">
                                <h3 className="text-center text-3xl py-5 font-semibold ">Our Spacial <span className="text-red-600">Food</span></h3>
                                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                                {                      
                                    spacialCards.map((card,idx) => <SpacialCards key={idx} card = {card} handleOrder={handleOrder}></SpacialCards>)   
                                                    
                                    }
                                    {/* // <SpacialCards></SpacialCards> */}
                                </div>
                            </div>
            </main>
        </div>
    );
};

Main.propTypes ={
    cards : PropTypes.array,
    orderCards : PropTypes.array,
    spacialCards : PropTypes.array,
    handleOrder : PropTypes.func,
    oderedPrice : PropTypes.func,
    confirmOrder : PropTypes.func,
}
export default Main;