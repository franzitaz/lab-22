import axios from 'axios';

// o método de axios.create() retorna um cliente customizado, que pode ser usado para criar requisições.
const axiosApiInstance = axios.create();

// aqui, estamos dizendo ao axios que nossa API se comunica com este 
// endereço de base. A partir de agora, toda chamada a nossa API receberá este 
// endereço base. Agora, somente precisamos chamar a rota específica  que estamos operando.
axiosApiInstance.defaults.baseURL = 'http://localhost:3001';

axiosApiInstance.interceptors.request.use(
    // Aqui estamos dizendo aqui ao axios
    // para interceptar toda requisição que fazemos. Este método é bem
    // util para adicionarmos configurações especiais às requisições.
    async (config: any) => {
        // aqui, injetamos nosso endereço base.
        //Quem é config.url?
        config.url = `${axiosApiInstance.defaults.baseURL}${config.url}`
        
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

export default axiosApiInstance;