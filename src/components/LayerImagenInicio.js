import React from "react";
import ImagenInicio from "./ImagenInicio";

class LayerImagenInicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          idImagen: 1,
          titulo: "Diseño",
          url_imagen:
            "https://www.fundaciontelefonica.com/wp-content/uploads/2016/07/programacion-730x400.jpg",
          imagen_with: 300,
          imagen_height: 200,
          estilo: "rounded-pill",
        },
      ],
    };
  }

  render() {
    return (
      <div className="">
        {this.state.data.map((imagenLayer) => {
          return (
            <div className="d-inline-block px-2">
              <ImagenInicio
                key={imagenLayer.idImagen}
                titulo={imagenLayer.titulo}
                url_imagen={imagenLayer.url_imagen}
                imagen_with={imagenLayer.imagen_with}
                imagen_height={imagenLayer.imagen_height}
                estilo={imagenLayer.estilo}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default LayerImagenInicio;
