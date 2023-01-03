import http from '../../../http/http';
import {useState, useEffect} from 'react';
import IContratos from '../../../Interfaces/IContratos';

const Orders = () => {

  const [contratos, setContratos] = useState<IContratos[]>([]);

  //Pegando as informações da API e guardando na state 'contratos'
  useEffect(() => {
    http.get('contratos.json?uasg=153229').then(response => setContratos(response.data._embedded.contratos))
    console.log(contratos)
  }, [])

  return(
    <h1></h1>
  )
}

export default Orders;