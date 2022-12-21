const Contact = () => {
    return (
        <>
            <section className="container mx-auto px-16 mt-36">
                <div className="about_title">
                    <h2>Contact</h2>
                </div>

                <div className='flex justify-center items-center text-white font-poppins text-xl text-center'>
                    <h3>Sientete libre de comunicarte conmigo y charlar sobre algún trabajo freelance, o en empresa, o simplemente..¡charlar! &#128516;</h3>
                </div>

                <div className="form_container">
                    <form action="" className="form">
                        <div>
                            <input id="name" type="text"></input>
                            <label htmlFor="name">Nombre</label>
                        </div>
                        <div>
                            <input id="mail" type="email"></input>
                            <label htmlFor="mail">E-mail</label>
                        </div>
                        <div>
                            <input id="text" type="textarea"></input>
                            <label htmlFor="text">Mensaje</label>
                        </div>
                        <div>
                            <input id="submit" type="submit"></input>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;