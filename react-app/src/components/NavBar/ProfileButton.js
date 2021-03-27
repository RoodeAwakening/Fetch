import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import LogoutButton from '../auth/LogoutButton'

import './ProfileButton.css'

function ProfileButton() {
	const user = useSelector(state => state.session.user)

	const [showMenu, setShowmenu] = useState(false)

	const openMenu = () => {
		if (showMenu) return
		setShowmenu(true)
	}

	useEffect(() => {
		if (!showMenu) return

		const closeMenu = () => {
			setShowmenu(false)
		}

		document.addEventListener('click', closeMenu)

		return () => document.removeEventListener('click', closeMenu)
	}, [showMenu])

	return (
		<div id="profile_button">
			<input type="image" alt="profile" src={user.profilePhoto} onClick={openMenu} className="user-profile-picture-nav"></input>
			{/* <button onClick={openMenu}>
        <img className="user-profile-picture-nav" src={user.profilePhoto} />
      </button> */}
			{showMenu && (
				<ul className="profile-dropdown">
					<li>
						<i className="far fa-user-circle">
							<a href="/comingsoon">Profile</a>
						</i>
					</li>
					<li>
						<i className="far fa-bookmark">
							<a href="/comingsoon">Saved</a>
						</i>
					</li>
					<li>
						<i className="fal fa-cog">
							<a href="/comingsoon">Settings</a>
						</i>
					</li>
					<li>
						<i className="far fa-repeat-alt">
							<a href="/comingsoon">Switch Accounts</a>
						</i>
					</li>
					<hr></hr>
					<li>
						<LogoutButton />
					</li>
				</ul>
			)}
		</div>
	)
}

export default ProfileButton
