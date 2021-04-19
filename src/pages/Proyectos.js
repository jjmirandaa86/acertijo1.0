import React from 'react'
import IdiomaMenu from './mix/IdiomaMenu'
import Proyecto from '../components/Proyecto'

class Proyectos extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            data: 
            [{
                "idProyecto": 1,
                "titulo": "Despliegue SAP R3",
                "descripcion": "Se implemento SAP R3 en 25 agencias en varias provincias de Ecuador",
                "url_imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSd2SYHet8y2v5moZEp-_KSC799f0BEG5mGbwVpQ9LC8BqHm4Pi&usqp=CAUps://image.flaticon.com/icons/svg/326/326003.svg",
                "imagen_with": 300,
                "imagen_height": 200,
                "enlaceWeb": "proyecto/sapr3"
            },{
                "idProyecto": 2,
                "titulo": "Robot consulta datos SRI",
                "descripcion": "Se implemento Robot para validaión de Identificacón en Web",
                "url_imagen": "https://universoabiertoblog.files.wordpress.com/2017/01/aco_bot.jpg?w=625",
                "imagen_with": 300,
                "imagen_height": 200,
                "enlaceWeb": "proyecto/robot"
            },{
                "idProyecto": 3,
                "titulo": "Soluciones Moviles (Power Street)",
                "descripcion": "Se implementa Power Street en 27 agencias de Tesalia Cbc",
                "url_imagen": "https://ii.ct-stc.com/2/microsites/1CB8754A9E02EDE4/collage4.jpg",
                "imagen_with": 300,
                "imagen_height": 200,
                "enlaceWeb": "proyecto/powerstreet"
            }]            
        }
    }

    render(){
        return(
            <div>
                <div className="bg-dark">
                    <IdiomaMenu/>
                </div>
                {
                    this.state.data.map((datosProyectos) => {
                        return (
                            <Proyecto
                                key={datosProyectos.idProyecto}
                                titulo={datosProyectos.titulo}
                                descripcion={datosProyectos.descripcion}
                                url_imagen={datosProyectos.url_imagen}
                                imagen_with={datosProyectos.imagen_with}
                                imagen_height={datosProyectos.imagen_height}
                                enlaceWeb={datosProyectos.enlaceWeb}
                            />
                        )
                    })
                }   
            </div>
        )
    }

}

export default Proyectos
