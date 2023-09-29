import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { base_api } from '../../../Base_API/Base_API'

import { useDispatch, useSelector } from 'react-redux';
import { parsedata } from '../product'
import "../Electronic/Electronic.css"
import { Container, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { addcart, getAllAsyncData } from '../../Services/Action/ProductAction/ProductAction';



function Electronic() {
    const prosuctss = useSelector(state => state.Productreducer.products);
    const { isLogin } = useSelector(state => state.Authductreducer);

    // console.log(isLogin,"Login");


    let electronic_data = prosuctss.filter((ed) => {
        // console.log("ed",ed.category);
        if (ed.type == 'Electronic') {
            return ed;
        }
    })


    const [proData, setProData] = useState(electronic_data);
    const [option, setOption] = useState([]);

    const [sercgData, setSearchData] = useState({
        search: ''
    });


    const navigate = useNavigate();

    const handlefilter = (e) => {

        let value = e.target.value;
        // let ndata = product;
        const product = electronic_data;

        console.log(product, "electronic");

        // let ndata = getData();
        if (value != -1) {
            const filterdata = product.filter((pro) => {
                return pro.category == value
            })
            console.log(filterdata, "filterdata");
            setProData(filterdata);
        }
        else {
            setProData(electronic_data);

        }
    }


    const handleSearch = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        setSearchData({ [name]: val })

        // let mydata = getData();

        const prosuctss = electronic_data;

        console.log(sercgData, "serach");

        let serchdata = prosuctss.filter((data) => {
            return data.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
        })
        setProData(serchdata);
    }


    const dispatch = useDispatch()

    const handleproduct = (id,data) => {

        console.log(data, "handle Product");

        dispatch(addcart(id,data))

    }

    const getdata = () => {
        dispatch(getAllAsyncData());
    }

    useEffect(() => {
        getdata();
    })

    useEffect(() => {
        // let alldata = getData()
        const product = electronic_data;

        const allData = [...new Set(product.map(data => data.category))]
        setOption(allData);
    }, [])


    return (
        <>

            <Navbar variant="dark" className='Nav bg-light'>
                <Container >

                    <div className="header bg-light">
                        <div className="container">
                            <div className="d-flex align-items-center">



                                <div className="search">
                                    <div className="input-group">
                                        <form className="d-flex">
                                            <input className="form-control me-1" type="search" placeholder="Search For Product Brand & More.." aria-label="Search" onChange={(e) => handleSearch(e)} />
                                            <button className="btn btn-primary bg-light text-dark" type="submit"><i className="fa-solid fa-magnifying-glass"></i> </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="menu d-flex justify-content-evenly align-items-center">
                                    <div className="span">
                                        <select onChange={(e) => handlefilter(e)}>
                                            <option value={"-1"}>All</option>
                                            {
                                                option.map((opt) => {
                                                    return (
                                                        <>
                                                            <option value={opt}>{opt}</option>
                                                        </>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>

            {/* <h1>{electronic[0].brand}</h1> */}
            <Container>

                <div className="d-flex justify-content-evenly row mt-2 productcard">

                    {
                        proData.map((val) => {
                            return (

                                <div class="product-card col-sm-4">
                                    <div class="badge">{val.rating}</div>
                                    <div class="product-tumb">
                                        <img src={val.image} alt="" />
                                    </div>
                                    <div class="product-details">
                                        <span class="product-catagory">{val.brand}</span>
                                        <h4><a href="">{val.title}</a></h4>
                                        <p>{val.description}</p>
                                        <div class="product-bottom-details">
                                            <div class="product-price">{val.price}₹</div>
                                            <div class="product-links">
                                                {

                                                    isLogin ?
                                                    <button className='button1' onClick={() => handleproduct(val.id,val)}>ADD TO CART</button>
                                                    :
                                                    <>
                                                    <button className='button2' onClick={() => handleproduct(val.id ,val)} disabled type='button'>ADD TO CART</button>
                                                    <p className='text-danger'><b>Please Log in</b></p>
                                                    </>
                                                    
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Container>

        </>
    )
}

export default Electronic