import axios from 'axios';

//Definindo um base para deixar o codigo mais limpo na hora de chama-lo.
const http = axios.create({
  baseURL: 'https://compras.dados.gov.br/contratos/v1/'
})

export default http;