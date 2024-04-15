import '../App.css'
import '../Estilos/Contacto.css'
const Contacto = (props)=>{
    return (
        <form>
      <div class="form-group">
        <label for="in-mail">Email</label>
        <input type="email" class="form-control" id="in-mail"  placeholder="Ingresar Email"/>
      </div>
      <div class="form-group">
        <label for="in-name">Nombre</label>
        <input type="nombre" class="form-control" id="in-name" placeholder="Ingrese Nombre"/>
      </div>
      <div class="form-group">
        <label for="in-last">Apellido</label>
        <input type="apellido" class="form-control" id="in-last" placeholder="Ingrese Apellido"/>
      </div>
      <div class="form-group">
        <label for="direccion">Direccion</label>
        <input type="adress" class="form-control" id="direccion"  placeholder="Ingresar Direccion"/>
      </div>
      <div class="form-group">
        <label for="phone">Telefono</label>
        <input type="telefono" class="form-control" id="phone"  placeholder="Ingresar Telefono"/>
      </div>
      <label  for="textarea">Detalle de consulta</label>
      <textarea class="form-group" name="textarea" id="textarea"></textarea>
      <button type="envio" class="form-group">Enviar</button>
    </form>
    )
}

export default Contacto