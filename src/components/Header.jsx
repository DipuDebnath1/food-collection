
const Header = () => {
    return (
        <div> 
            <header className="w-11/12 mx-auto"> 
                <nav>
                    <div className="navbar flex justify-between bg-base-100">
                    <div className="">
                        <a className="btn btn-ghost normal-case text-2xl text-red-600" >FoodPoint</a>
                    </div>
                    <div className=" gap-2">
                        <div className="form-control">
                
                        <input type="text" placeholder="Search" className="input input-bordered border-red-600 text-red placeholder:text-red-600 w-24 md:w-auto" />
                        </div>
                    </div>
                    </div>
                </nav>

                {/* hero  */}
                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/premium-photo/tasty-big-burger-set_854558-1699.jpg)'}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg">
                        <h3 className="mb-5 text-3xl font-semibold">Hello there</h3>
                        <h1 className="mb-5 text-5xl font-bold">Special Offer: <span className="text-red-600">20% Off</span> All Orders!</h1>
                        <button className="btn btn-primary bg-red-800 border-none hover:bg-red-600" >Order Now</button>
                        </div>
                    </div>
                    </div>
                

            </header>
        </div>
    );
};

export default Header;