import React from 'react'

export default function Header(){
    return (<div className="header">
     
    <img alt='' className="mainimage" src={require('./image.png')}/>
    <p className='name'>Rohit Kumar</p>
    <p className='skill'>Full Stack Developer</p>
    <p className='website'>rohit.rew@gmail.com</p>
    <div className='buttoncontainer'>
        <a href="mailto:rohit.rew@gmail.com">
        <button  className='email'>Email</button>
        </a>

        <a href='https://www.linkedin.com/in/rohit-kumar-7a9a7b238/' rel="noreferrer" target="_blank">
        <button  className='linkedin'>LinkedIn</button>
        </a>
    </div>

</div>)
}