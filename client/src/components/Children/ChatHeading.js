import React, { Component } from 'react';
import FAVideo from 'react-icons/lib/fa/video-camera'
import FAUserPlus from 'react-icons/lib/fa/user-plus'
import MdEllipsisMenu from 'react-icons/lib/md/keyboard-control'
import Sidebar from './SideBar.js'
import MdEject from 'react-icons/lib/md/eject'

export default class ChatHeading extends Component {
	render() {
		const { logout, name, numberOfUsers, user } = this.props;
		return (
			<div className="chat-header">
				<div className="user-info">
					<div className="status">
						<div className="indicator"></div>
						<span>{numberOfUsers ? numberOfUsers : null}</span>
					</div>
				</div>
				<div className="current-user">
					<div className="user-name">{user.name}</div>
					<div onClick={()=>{logout()}} title="Logout" className="logout">
						<MdEject/>	
					</div>
				</div>
			</div>
		);
	}
}
