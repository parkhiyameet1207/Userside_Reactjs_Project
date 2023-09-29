import React, { useEffect, useState } from 'react'
import '../Header/Header.css'
import { Badge, Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { LogoutAsync } from '../../Services/Action/auth.action';





function Header() {

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const cartproduct = useSelector(state => state.Productreducer.product);
	console.log(cartproduct, "cartttttttttttttttt");


	// const [visible, setVisible] = useState(false)

    const {isLogin} = useSelector(state => state.Authductreducer);

const logout = () => {
	// console.log("hellllllo");
	dispatch(LogoutAsync())
}



	return (

		<>

			<Navbar variant="dark" className='Nav'>
				<Container >
{/* 
				<CButton onClick={() => setVisible(true)}>Toggle offcanvas</CButton>
    <COffcanvas placement="start" visible={visible} onHide={() => setVisible(false)}>
      <COffcanvasHeader>
        <COffcanvasTitle>Offcanvas</COffcanvasTitle>
        <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
      </COffcanvasHeader>
      <COffcanvasBody>
        Content for the offcanvas goes here. You can place just about any Bootstrap React component or
        custom elements here.
      </COffcanvasBody>
    </COffcanvas> */}

					<div className="header">
						<div className="container">
							<div className="d-flex align-items-center justify-content-between">

								<div onClick={() => navigate('/')} style={{ cursor: "pointer" }} className='me-3 logo-box'>
									<img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk_header_mobile_logo-bafb3a.svg" alt="" className='logo' />

								</div>
								<div className="div text-white d-none d-md-block menu" >
									<ul className='d-flex'>
										<li className='list-unstyled px-4'><a href="" onClick={() => navigate('/')} className='text-white text-decoration-none liststyle-none '>Home</a></li>
										<li className='list-unstyled px-4'><a href="" className='text-white text-decoration-none liststyle-none '>About</a></li>
										<li className='list-unstyled px-4'><a href="" className='text-white text-decoration-none liststyle-none '>Contact</a></li>
									</ul>
								</div>

								<div className="menu d-flex justify-content-evenly align-items-center">

								{	isLogin ? 
								<div className="login">
										<button onClick={() => logout()}>Log Out</button>
									</div>
									:
								
								<div className="login">
										<button onClick={() => navigate('/SingUp')}>Login</button>
									</div>
									
									}
									<div className="cart">
										{/* <Badge bg="danger">1</Badge> */}
										<Button variant="primary" onClick={() => navigate('/viewcart')}>
											<i className="fa-solid fa-cart-shopping text-white" ></i> <Badge bg="danger">{cartproduct.length}</Badge>
											{/* <span className="visually-hidden">0</span> */}
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</Navbar>
		</>
	)
}

export default Header