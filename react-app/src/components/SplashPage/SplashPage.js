import React from 'react'
import './SplashPage.css'
import LoginForm from '../auth/LoginForm'
import DemoUser from '../auth/DemoUser'
import logo from '../../images/splash/splash_title.png'
import phone from '../../images/splash/spash_phone.png'
import apple from '../../images/splash/splash_appStore_icon.png'
import android from '../../images/splash/splash_playStore_icon.png'

export default function SplashPage() {
	return (
		<div className="Splash_Page-body">
			<div className="Splash_Page-body-container">
				<div className="Splash_Page-body-left">
					<img alt="Splash Phone" src={phone} />
				</div>
				<div className="Splash_Page-body-right">
					<div className="Splash_Page-body-right-top">
						<img alt="Fetch Title" id="splash_logo" src={logo}></img>
						<div className="Splash_Page-loginForm">
							<LoginForm />
						</div>
						<div className="Splash_Page-or">
							<div id="Splash_Page-left-or"></div>
							<div id="Splash_Page-middle-or">
								<h3>OR</h3>
							</div>
							<div id="Splash_Page-right-or"></div>
						</div>
						<div className="Splash_Page-demo-user">
							<div id="demo-splash">
								<h4>Log in as a Demo user</h4>
								<DemoUser />
							</div>
						</div>
					</div>
					<div className="Splash_Page-body-right-middle">
						<h1 id="splash-signup">
							dont have an account? - <a href="/signup">Sign up</a>
						</h1>
					</div>
					<div className="Splash_Page-body-right-bottom">
						<h1>Get the app.</h1>
						<div>
							<img alt="Available on the App Store" id="apple" src={apple}></img>
							<img alt="Available on the PlayStore" id="android" src={android}></img>
						</div>
					</div>
				</div>
			</div>
			<div className="Splash_Page-body-footer">
				<div>
					{/* <a href="/">Blog</a>
					<a href="/">Jobs</a>
					<a href="/">Help</a>
					<a href="/">API</a>
					<a href="/">Privacy</a>
					<a href="/">Terms</a>
					<a href="/">Top Accounts</a>
					<a href="/"> Hashtags</a>
				<a href="/">Locations</a> */}
				</div>
				<div>
				<a href="/about">About</a>
					{/* <a href="/">Beauty</a>
					<a href="/">Dance & Performance</a>
					<a href="/"> Fitness</a>
					<a href="/">Food & Drink</a>
					<a href="/">Home & Garden</a>
					<a href="/">Music</a>
					<a href="/">Visual Arts</a> */}
				</div>
				<div>
					<h6>© 2021 Fetch from DJB</h6>
				</div>
			</div>
		</div>
	)
}
