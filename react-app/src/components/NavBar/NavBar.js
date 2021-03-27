import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import LogoutButton from '../auth/LogoutButton'
import ProfileButton from './ProfileButton'
import Webcam from 'webcam-easy'
import logo from '../../images/splash/splash_title.png'

const NavBar = () => {
	const doSomething = () => {
		console.log('Do Something')
	}

	return (
		<div className="NavBar">
			<nav>
				<div className="navbar-left">
					<div id="navbar-logo">
						<NavLink to="/feed" exact={true} activeClassName="active">
							<img src={logo} />
						</NavLink>
					</div>
				</div>
				<div className="navbar-middle">
					<input type="text" placeholder="&#xf002; Search" />
				</div>

				<div className="navbar-right">
					<div>
						<NavLink to="/feed" exact={true} activeClassName="active">
							<i class="fas fa-home"></i>
						</NavLink>
					</div>
					<div>
						<NavLink to="/modal" exact={true} activeClassName="active">
							{/* <button id="add-photo" onClick={doSomething}> */}
							<i class="fal fa-camera-alt"></i>
							{/* </button> */}
						</NavLink>
					</div>
					<div className="mobile-hidden">
						<NavLink to="/comingsoon" exact={true} activeClassName="active">
							<i class="fal fa-paper-plane"></i>
						</NavLink>
					</div>
					<div>
						<NavLink to="/comingsoon" exact={true} activeClassName="active">
							<i class="far fa-compass"></i>
						</NavLink>
					</div>
					<div>
						<NavLink to="/comingsoon" exact={true} activeClassName="active">
							<i class="far fa-heart"></i>
						</NavLink>
					</div>
					<div className="nav-right-button">
						<ProfileButton />
					</div>
				</div>
			</nav>
		</div>
	)
}

export default NavBar
