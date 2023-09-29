import React from 'react'
import '../Home/Home.css'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux';
import { getAllAsyncData } from '../../Services/Action/ProductAction/ProductAction';
// import { addProductasync } from '../../Services/Action/action';

function Home() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const Electronic = () => {
        dispatch(getAllAsyncData());
        navigate('/Electronic')
    }

    const Homedecore = () => {
        dispatch(getAllAsyncData());
        navigate('/HomeDecore')
    }


    const Beuty = () => {
        dispatch(getAllAsyncData());
        navigate('/Beuty')
    }


    return (
        <>
            <section className='my-5'>
                <div className="container">
                    <div className="row">
                        <div className="main d-flex">
                            <div className="card col-3  align-items-center">
                                <h3 className=' my-2'>Electronic Item</h3>
                                <button className='btn btn-primary' onClick={Electronic}>View All</button>
                            </div>
                            <div className="card1 col-3 d-none d-sm-block" >
                                <img src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" alt="" />
                            </div>
                            <div className="card1 col-3 d-none d-sm-block">
                                <img src="https://i.dummyjson.com/data/products/7/thumbnail.jpg" alt="" />
                            </div>
                            <div className="card1 col-3 d-none d-sm-block">
                                <img src="https://i.dummyjson.com/data/products/6/1.png" alt="" />
                            </div>
                            {/* <div className="card1">
                                <img src="https://i.dummyjson.com/data/products/10/1.jpg" alt="" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-5'>
                <div className="container">
                    <div className="row">
                        <div className="main d-flex">
                            <div className="card col-3 align-items-center" >
                                <h3 className=' my-2'>Beuty Item</h3>
                                <button className='btn btn-primary' onClick={Beuty}>View All</button>
                            </div>
                            <div className="card1 col-3 d-none d-sm-block">
                                <img src="https://i.dummyjson.com/data/products/14/thumbnail.jpg" alt="" />
                            </div>
                            <div className="card1 col-3 d-none d-sm-block">
                                <img src="https://i.dummyjson.com/data/products/15/thumbnail.jpg" alt="" />
                            </div>
                            <div className="card1 col-3 d-none d-sm-block">
                                <img src="https://i.dummyjson.com/data/products/16/thumbnail.jpg" alt="" />
                            </div>
                            {/* <div className="card1">
                                <img src="https://i.dummyjson.com/data/products/10/1.jpg" alt="" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-5'>
                <div className="container">
                    <div className="row">
                        <div className="main d-flex">
                            <div className="card col-3 align-items-center">
                                <h3 className='my-2'>Home Decore Item</h3>
                                <button className='btn btn-primary Elebtn' onClick={Homedecore}>View All</button>
                            </div>
                            <div className="card1 col-3 d-none d-sm-block">
                                <img src="https://i.dummyjson.com/data/products/28/thumbnail.jpg" alt="" />
                            </div>
                            <div className="card1 col-3 d-none d-sm-block">
                                <img src="https://i.dummyjson.com/data/products/30/thumbnail.jpg" alt="" />
                            </div>
                            <div className="card1 col-3 d-none d-sm-block">
                                <img src="https://i.dummyjson.com/data/products/26/thumbnail.jpg" alt="" />
                            </div>
                            {/* <div className="card1">
                                <img src="https://i.dummyjson.com/data/products/10/1.jpg" alt="" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home