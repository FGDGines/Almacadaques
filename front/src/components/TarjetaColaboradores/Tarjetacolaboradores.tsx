import "./Tarjetacolaboradores.css"

function Tarjetacolaboradores() {
    return (
        <>
        <div className="ctcolaboradores">
            
        </div>
            <div className="card">
                <div className="head">
                    <div className="circle"></div>
                    <div className="img">
                        <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                            alt="" />
                    </div>
                </div>

                <div className="description">
                    <h3>María Polo</h3>
                    <h4>System Engineer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, eligendi!</p>
                </div>

                <div className="contact">
                    <a href="#">Contact</a>
                </div>
            </div>


        </>

    )
}

export { Tarjetacolaboradores }