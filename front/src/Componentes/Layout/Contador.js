import { useState } from 'react'

const Contador= ()=> {
    const [contador,setContador]=useState(0);
    return(
    <div>
        <p>Hiciste clic {contador} veces </p>
        <button onClick={()=> {setContador(contador+1)}}>
        Haz clic
        </button>
    </div>
    );
}
export default Contador;