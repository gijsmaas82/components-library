import React, { Component } from 'react'

export default class Header extends Component {
  state = {
    menuVisible: false,
  }

  toggleMenu = (e) => {
    e.currentTarget.classList.add('open')
  }

  render() {
    return (
      <div>
         <div className="header">
        <div className="header__homeBtn" onClick={this.toggleMenu}>
            <h1>H</h1>
          </div>
        <div className="header__menu">
          <div className="header__menu__item">
            <a href="#">Item</a>
          </div>
          <div className="header__menu__item">
            <a href="#">Item</a>
          </div>
          <div className="header__menu__item">
            <a href="#">Item</a>
          </div>
          <div className="header__menu__item">
            <a href="#">Item</a>
          </div>
          <div className="header__menu__item">
            <a href="#">Item</a>
          </div>
        </div>
        <div className="header__burger">
        </div>
      </div>
      </div>
    )
  }
}

