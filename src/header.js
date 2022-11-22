import React from 'react'


export default function Header(){
    return (<div className="header">
     
    <img className="mainimage" src={require('./image.png')}/>
    <p className='name'>Rohit Kumar</p>
    <p className='skill'>Frontend Developer</p>
    <p className='website'>pengodigital.com</p>
    <div className='buttoncontainer'>
        <button className='email'>Email</button>
        <button className='linkedin'>LinkedIn</button>
    </div>

</div>)
}