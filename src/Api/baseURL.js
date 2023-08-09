import axios from "axios";

const baseURL = axios.create({baseURL:'http://127.0.0.1:8000'})



// when deploy

// const env = process.env.NODE_ENV; // current environment
//
// const baseURL = axios.create({
//     baseURL:
//         env === 'production'
//             ? 'http://example.com/api/' // production
//             : 'http://localhost:5000/api/', // development
// });


export default baseURL