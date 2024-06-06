import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6f97f9a70b4247ffb4f27a82342989ff'
    }
})