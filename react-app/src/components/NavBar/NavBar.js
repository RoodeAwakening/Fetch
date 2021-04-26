import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import ProfileButton from './ProfileButton'
// import Webcam from 'webcam-easy'
import logo from '../../images/splash/splash_title.png'
import ModalPopUp from '../Modal/Modal'

const NavBar = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false)

	const changeModal = () => {
		setModalIsOpen(true)
	}

	return (
		<div className="NavBar">
			<nav>
				<div className="navbar-left">
					<div id="navbar-logo">
						<NavLink to="/feed" exact={true} activeClassName="active">
							<img alt="logo" src={logo} />
						</NavLink>
					</div>
				</div>
				<div className="navbar-middle">
					<input type="text" placeholder="&#xf002; Search" />
				</div>

				<div className="navbar-right">
					<div>
						<NavLink to="/feed" exact={true} activeClassName="active">
							<i className="fas fa-home"></i>
						</NavLink>
					</div>
					<div>
						{/* <NavLink to="/modal" exact={true} activeClassName="active"> */}
						<button id="add-photo" onClick={changeModal}>
							<i className="fal fa-camera-alt"></i>
						</button>
						<ModalPopUp modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
						{/* </NavLink> */}
					</div>
					<div className="mobile-hidden">
						<NavLink to="/about" exact={true} activeClassName="active">
							<i className="fal fa-paper-plane"></i>
						</NavLink>
					</div>
					{/* <div>
						<NavLink to="/comingsoon" exact={true} activeClassName="active">
							<i className="far fa-compass"></i>
						</NavLink>
					</div> */}
					{/* <div>
						<NavLink to="/comingsoon" exact={true} activeClassName="active">
							<i className="far fa-heart"></i>
						</NavLink>
					</div> */}
					<div className="nav-right-button">
						<ProfileButton />
					</div>
				</div>
			</nav>
		</div>
	)
}

export default NavBar
