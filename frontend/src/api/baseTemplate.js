import axios from 'axios';

const baseTemplate = async ({method, url, data}) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await axios({
        method: method,
        url: `http://localhost:8000/${url}`,
        data: data,
    });
    return response
}

export default baseTemplate;
