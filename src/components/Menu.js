import React from "react";
import OpcionMenu from "./OpcionMenu";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          idMenu: 1,
          titulo: "Inicio",
          separador: "||",
          url_imagen: "https://image.flaticon.com/icons/svg/326/326003.svg",
          imagen_with: 28,
          imagen_height: 28,
          enlaceWeb: "inicio",
        },
        {
          idMenu: 2,
          titulo: "CV",
          separador: "||",
          url_imagen: "https://image.flaticon.com/icons/svg/201/201565.svg",
          imagen_with: 28,
          imagen_height: 28,
          enlaceWeb: "cv",
        },
        {
          idMenu: 3,
          titulo: "Proyectos",
          separador: "||",
          url_imagen: "https://image.flaticon.com/icons/svg/344/344389.svg",
          imagen_with: 28,
          imagen_height: 28,
          enlaceWeb: "proyectos",
        },
        {
          idMenu: 4,
          titulo: "Contacto",
          separador: "",
          url_imagen: "https://image.flaticon.com/icons/svg/326/326057.svg",
          imagen_with: 28,
          imagen_height: 28,
          enlaceWeb: "contacto",
        },
      ],
    };
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <link rel="apple-touch-icon" href="logo" />
          <img src="%PUBLIC_URL%/inicio/051-strategy.png"></img>
          <a href="#" className="navbar-brand">
            acertijo.dev
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            date-target="#firstNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="firstNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CV
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Proyecto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
            <form className="form-inline">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar"
              ></input>
              <button type="button" className="btn btn-dark">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;

/*

<React.Fragment>
                <div>
                    {   this.state.data.map((menubarra) => {
                            return (
                                <OpcionMenu
                                    key={menubarra.idMenu}
                                    titulo={menubarra.titulo}
                                    separador={menubarra.separador}
                                    url_imagen={menubarra.url_imagen}
                                    imagen_with={menubarra.imagen_with}
                                    imagen_height={menubarra.imagen_height}
                                    enlaceWeb={menubarra.enlaceWeb}
                                />
                            )
                        })
                    }
                </div>
            </React.Fragment>

*/
