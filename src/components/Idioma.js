import React from 'react'
import './styles/Idioma.css' 

class Idioma extends React.Component{

    render(){
        return (
            <section>
                <div>
                    <select>
                        <option>EN</option>
                        <option >ES</option>
                        <option>FR</option>
                        <option>CH</option>
                    </select>
                </div>
            </section>
        )
    }
}

export default Idioma