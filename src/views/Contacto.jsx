const Contacto = () => {
    return(
        <section className="contacto">
            <div className="wrapper">

                <h1>¿En qué te podemos ayudar?</h1>

                <form>
                    <label htmlFor="correo">Correo</label>
                    <input type="text" name="correo" placeholder="ejemplo@correo.com"/>

                    <label htmlFor="descripcion">Descripción</label>
                    <textarea name="descripcion" cols="30" rows="10"></textarea>

                    <button>Enviar</button>
                </form>
           
            </div>
        </section>

    )
}

export default Contacto