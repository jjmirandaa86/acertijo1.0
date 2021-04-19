import React from 'react'
import Idioma from '../../components/Idioma'
import Menu from '../../components/Menu'

class IdiomaMenu extends React.Component{

    render(){
        return(
            <div>
                <div className="bg-dark">
                    <div className="sticky-top float-right"> 
                        <Idioma/>
                    </div>
                    <div className="sticky-top pt-5 p-5">
                        <Menu/>
                    </div>
                    <hr/>
                </div>
                
            </div>
        )
    }
}

export default IdiomaMenu