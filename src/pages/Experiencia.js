import React from 'react'
import IdiomaMenu from './mix/IdiomaMenu'
import DetExperiencia from '../components/DetExperiencia'

class Experiencia extends React.Component{
    render(){
        return (
            <div>
                <div className="bg-dark">
                    <IdiomaMenu/>
                </div>
                <h1>Experiencia</h1>
                <DetExperiencia
                    titulo="ReactJS"
                    fecha="02/02/2020"
                    descripcion="Aprendizaje constante, me llevan a conocer nuevas tecnologias, ahora estuve aprendiendo REACTJS"
                    url_imagen="https://image.flaticon.com/icons/svg/919/919851.svg"
                    imagen_with="60"
                    imagen_height="60"
                />
                <DetExperiencia
                    titulo="Bootstrap"
                    fecha="13/04/2020"
                    descripcion="Ahora estamos revisando el diseño responsivo con Bootstrap, herramienta potente para CSS y JS"
                    url_imagen="https://www.4webs.es/blog/wp-content/uploads/2017/09/nueva-beta-de-bootstrap-4.jpg"
                    imagen_with="60"
                    imagen_height="60"
                />

            </div>
            
        )
    }
}

export default Experiencia
