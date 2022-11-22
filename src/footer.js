import react from 'react'

export default function Footer(){
    return   (
    <footer>
        <img className='icons' src={require('./fb.png')} />
        <img className='icons' src={require('./insta.png')} />
        <img className='icons' src={require('./git.png')} />
        <img className='icons' src={require('./twiter.png')} />
    </footer>
    )
}