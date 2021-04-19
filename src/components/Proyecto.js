import React from 'react'

class Proyecto extends React.Component{
    render(){
        return(
            <div id={this.props.idProyecto}>
                <div>
                    <img src={this.props.url_imagen}
                         alt={this.props.titulo}
                         width={this.props.imagen_with} 
                         height={this.props.imagen_height}>
                    </img>
                </div>
                <div>
                    {this.props.titulo}
                </div>
                <div>
                    {this.props.descripcion}
                </div>
            </div>
        )
    }
}

export default Proyecto