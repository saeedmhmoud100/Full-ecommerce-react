import axios from "axios";

// const baseURL = axios.create({baseURL:'https://react-full-ecommerce-api.onrender.com'})
const baseURL = axios.create({baseURL:'http://localhost:8000'})



// when deploy

// const env = process.env.NODE_ENV; // current environment
//
// const baseURL = axios.create({
//     baseURL:
//         env === 'production'
//             ? 'https://react-full-ecommerce-api.onrender.com//' // production
//             : 'http://localhost:5000/api/', // development
// });


export default baseURL