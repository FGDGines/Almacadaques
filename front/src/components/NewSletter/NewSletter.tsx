import './NewSletter.css'
const NewSletter = ()=>{
    console.log(1)
    return <div className="NewSletter">
        <div className='ctForm'>
            <input type="email" placeholder='Introduce tu correo electrónico' required/> <button>Subscribe</button>
        </div>
    </div>
}


export default NewSletter