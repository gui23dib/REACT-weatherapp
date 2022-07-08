import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather?lat=-23.944841&lon=-46.330376&appid=96b64657ba611c0c2fd06cfb8cb1a8ec",
});

export default api;