import React from 'react'
import IdiomaMenu from './mix/IdiomaMenu'

class Perfil extends React.Component{
    render(){
        return (
            <div>
                <div className="bg-dark">
                    <IdiomaMenu/>
                </div>
                <h1>Perfil</h1>
            </div>
        )
    }
}

export default Perfil
