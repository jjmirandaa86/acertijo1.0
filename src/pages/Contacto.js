import React from 'react'
import IdiomaMenu from './mix/IdiomaMenu'

class Contacto extends React.Component{

    state = {}

    handleClickEnviar = () => {
        console.log("Se ha presionado el Boton Enviar")
    }

    handleChangeContacto = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(`${e.target.name}:${e.target.value}`)
    }

    handleEnviarContacto = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <div className="bg-dark">
                    <IdiomaMenu/>
                </div>
                <form onSubmit={this.handleEnviarContacto}>
                Contactanos
                    <table className="contacto">
                        <thead>
                            <tr>
                                <th>Nombre:</th>
                                <td><input type="text" 
                                            name="contacto_nombre" 
                                            onChange={this.handleChangeContacto}
                                            value={this.state.nombre}>
                                    </input></td>
                            </tr>
                            <tr>
                                <th>Correo:</th>
                                <td><input type="text" 
                                            name="contacto_correo" 
                                            onChange={this.handleChangeContacto}
                                            value={this.state.correo}>
                                    </input></td>
                            </tr>
                            <tr>
                                <th>Telefono:</th>
                                <td><input type="text" 
                                            name="contacto_telefono" 
                                            onChange={this.handleChangeContacto}
                                            value={this.state.telefono}>
                                    </input></td>
                            </tr>
                        </thead>
                    </table>
                    <button onClick={this.handleClickEnviar}
                            className="btn btn-dark"
                            type='submit'>
                        <img src="https://image.flaticon.com/icons/svg/1063/1063723.svg" 
                                alt="imagen"
                                height="30" 
                                width="30">
                        </img>
                        Enviar
                    </button>
                </form>
                <hr/>
            </div>
        )
    }
}

export default Contacto