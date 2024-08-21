import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '830b8fea1dea4093a7bf7726e0c5611a',
    }
})