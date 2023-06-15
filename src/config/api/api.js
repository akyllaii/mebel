import ky from 'ky'


const api = ky.create(
    {prefixUrl: 'https://mebeldb-2mwn.onrender.com/'}
)
export default api
