/*

FORMA CONVENCIONAL 
const element = document.createElement('h1')
element.innerHTML = 'Hola Mundo..'

const contenedor = document.getElementById('root')
contenedor.appendChild(element)
*/


/*
const user = {
  firstname: 'Jeff', 
  lastname: 'Miranda',
  avatar: 'https://i.ya-webdesign.com/images/avatar-png-1.png'
}

function getName(user){
  return `${user.firstname} ${user.lastname} `
}

function getGreeting(user){
  if(user){
    return <h1>Hola {getName(user)} Mundo</h1>
  }
  return <h1>Hola Extraño Mundo</h1>
}

const nombre = 'Jefferson'
const element = (
  <div>
    <img src={user.avatar} width='100' height='100'></img>
    <div>{getGreeting(user)}</div>
    <h1>Hola {nombre} Mundo</h1>
  </div>
)

const container = document.getElementById('root')
ReactDOM.render(element,container)

*/

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const container = document.getElementById('root')
ReactDOM.render(<App/>,container)