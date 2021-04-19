import React from "react";

class DetExperiencia extends React.Component {
  render() {
    return (
      <div class="list-group">
        <a ref="" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-context-between">
            <h5>{this.props.titulo}</h5>
            <small>{this.props.fecha}</small>
          </div>
          <p>{this.props.descripcion}</p>
        </a>
      </div>
    );
  }
}

export default DetExperiencia;
