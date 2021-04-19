import React from 'react'
import IdiomaMenu from './mix/IdiomaMenu'
import LayerImagenInicio from '../components/LayerImagenInicio'
import TextoInicio from '../components/TextoInicio'


class Inicio extends React.Component{

    render(){
        return(
            <div>
                <div>
                    <IdiomaMenu/>
                    <div className="alert-secondary p-5">
                        <LayerImagenInicio/>
                    </div>
                </div>
                <div className="bg-secondary text-white mb-5">
                    <TextoInicio/>
                    <div className="fixed-bottom p-4">
                        <footer className="float-right">
                            <a ref="www.google.com">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/1200px-WhatsApp_logo-color-vertical.svg.png"
                                    alt="contacto Whatsapp"
                                    height="40"
                                    width="40">
                                </img>
                            </a>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inicio