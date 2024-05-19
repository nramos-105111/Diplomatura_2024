import '../App.css'
import '../Estilos/Contacto.css';
import {useState} from 'react';
import axios from 'axios';



const Contacto = (props)=>{

  const initialForm = {
    nombre:'',
    apellido:'',
    direccion:'',
    email:'',
    telefono:'',
    mensaje:''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e =>{
    const {name,value} = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  }


const handleSubmit = async e => {
  e.preventDefault();
  setMsg('');
  setSending(true)
  const response = await axios.post('http://localhost:3000/api/contacto', formData);
  setSending(false);
  setMsg(response.data.message);
  if(response.data.error === false) {
    setFormData(initialForm)
  }
}  


    return (
        <form action="/contacto" method='post' onSubmit={handleSubmit} className='formulario'>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control"  name='email'  placeholder="Ingresar Email" value={formData.email} onChange={handleChange}/>
      </div>
      <div class="form-group">
        <label for="in-name">Nombre</label>
        <input type="nombre" class="form-control" name='nombre' placeholder="Ingrese Nombre" value={formData.nombre} onChange={handleChange}/>
      </div>
      <div class="form-group">
        <label for="in-last">Apellido</label>
        <input type="apellido" class="form-control" name='apellido' placeholder="Ingrese Apellido" value={formData.apellido} onChange={handleChange}/>
      </div>
      <div class="form-group">
        <label for="direccion">Direccion</label>
        <input type="adress" class="form-control" name='direccion' placeholder="Ingresar Direccion" value={formData.direccion} onChange={handleChange}/>
      </div>
      <div class="form-group">
        <label for="phone">Telefono</label>
        <input type="telefono" class="form-control" name='telefono' placeholder="Ingresar Telefono" value={formData.telefono} onChange={handleChange}/>
      </div>
      <label  for="textarea">Detalle de consulta</label>
      <textarea class="form-group" name="mensaje"  value={formData.mensaje} onChange={handleChange}></textarea>
      {sending ? <p>Enviando...</p>:null}
    {msg ? <p>{msg}</p>:null}
      <button type="envio" class="form-group">Enviar</button>
    </form>
    
    )
}

export default Contacto