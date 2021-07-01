import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
            <div className='nav-journals'>
                <div className='logo'><img  src="//resources.bmj.com/repository/journals-network-project/images/wordpress/logo-bmj-journals.svg"  alt="journal logo"/></div>
                <div className="right-head">

                    <ul>
                        <li>Subscribe</li>
                        <li>Log In</li>
                        <li><form className="form" id="addItemForm">
        <input
          type="text"
          className="input"
          id="addInput"
          placeholder="Search"
        />
        <button className="button is-info" onClick={this.addItem}>
          Serch
        </button>
      </form></li>
                    </ul>
                </div>
                 </div>
                 </div>
        )
    }
}

export default Header
