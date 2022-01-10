import React, { Component } from "react";
import "./footer.css";
import logoSvg from "../elementsPage/icons/footer/Vectorlogowhite.svg";
import facebookIcon from "../elementsPage/icons/footer/facebook.svg";
import instaIcon from "../elementsPage/icons/footer/instagram.svg";
import pinterestIcon from "../elementsPage/icons/footer/pinterest.svg";
import seloEBit from "../elementsPage/icons/footer/selo-ebit.svg";
import vtexIcon from "../elementsPage/icons/footer/vtex-pci-200.svg";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="info-content">
          <div className="icon-content">
            <div>
              <img src={ facebookIcon } />
              <img src={ instaIcon } />
              <img src={ pinterestIcon } />
            </div>
            <div>
              <img src={ vtexIcon } />
              <img src={ seloEBit } />
            </div>
          </div>
          <div className="institutional">
            <h4>INSTITUCIONAL</h4>
            <ul>
              <li>
                <Link to="/" >A Marca</Link>
              </li>
              <li>
              <Link to="/" >Lojas</Link>
              </li>
              <li>
              <Link to="/" >Contato</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>INFORMAÇÕES</h4>
            <ul>
              <li>
                <Link to="/" >Formas de Pagamento</Link>
              </li>
              <li>
              <Link to="/" >Trocas e Devoluções</Link>
              </li>
              <li>
              <Link to="/" >Cuidados Com o Produto</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>CONHEÇA</h4>
            <ul>
              <li>
                <Link to="/" >Franquias e Multimarcas</Link>
              </li>
              <li>
              <Link to="/" >Trabalhe com a gente</Link>
              </li>
              <li>
              <Link to="/" >Procon-RJ</Link>
              </li>
            </ul>
          </div>
          <div>
            <span>ASSINE NOSSA NEWS</span>
            <input type="text" placeholder="Seu nome..."/>
            <input type="email" placeholder="E-mail"/>
            <button type="button">ENVIAR</button>
          </div>
        </div>
        <div className="footer-page">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, ex, quidem unde dolorem aut voluptatum sequi ad eveniet omnis exercitationem ipsum nulla odio molestias. Laudantium ipsam animi laboriosam neque repudiandae.
          </p>
          { <img className="logo-footer" src={ logoSvg } alt="logo-original" /> }
        </div >
      </>
    );
  }
}
