import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="header-page">
          <Link to="/home">
            {/* <img src={ logoSvg } alt="logo-Original-io" /> */ }
          </Link>
        </div>
        <div className="nav-links">
          <div>
            <Link to="/login" className="link">Entrar</Link> |
            <Link to="/login" className="link">Cadastre-se</Link>
          </div>
          <div>
            <Link to="/sapatos" className="link routers">SAPATOS</Link>
            <Link to="/bolsas" className="link routers">BOLSAS</Link>
            <Link to="/acessorios" className="link routers">ACESSÓRIOS</Link>
          </div>
          <div>
            {/* <img src={ searchIcon } alt="icon-search" width="21px" /> */ }
            <input className="search-input" type="text" placeholder="Busca" />
            <Link to="carrinho" className="link">
              {/* <img src={ cartIcon } alt="icon-bag" width="21px" /> */ }
              0
            </Link>
          </div>
        </div>
      </>
    );
  }
}
