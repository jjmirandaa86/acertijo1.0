import React from "react";
import { Link } from "react-router-dom";

class OpcionMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <li className="nav-item">
          <Link>{this.props.titulo}</Link>
        </li>
      </React.Fragment>
    );
  }
}

export default OpcionMenu;

//Ciclo de vida
// constructor
// willmount
// render
// didmount

/*

<div className="d-inline-block px-2" id={this.props.idMenu}>
                    <div className="d-inline-block px-1">
                        <img src={this.props.url_imagen} 
                                width={this.props.imagen_with} 
                                height={this.props.imagen_height} 
                                alt={this.props.titulo}>    
                        </img>
                    </div>
                    <div className="d-inline-block px-1 text-white">
                        <Link to={this.props.enlaceWeb}>
                            <ins>
                                <h4>
                                    <div className="text-white">
                                        {this.props.titulo}
                                    </div>
                                </h4>
                            </ins>
                        </Link>
                    </div>
                </div>

*/
