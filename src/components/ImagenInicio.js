import React from 'react'

class ImagenInicio extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return (
            <React.Fragment>
                <img src={this.props.url_imagen} 
                        width={this.props.imagen_with} 
                        height={this.props.imagen_height} 
                        alt={this.props.titulo}
                        className={this.props.estilo}>    
                </img>
            </React.Fragment>
        )
    }
}

export default ImagenInicio