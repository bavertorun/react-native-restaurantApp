import { useEffect, useState } from "react";
import yelp from "../api/yelp";


export default () => {
    const [results,setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
    const searchApi = async (searchTerm) => {
        try {
            const res = await yelp.get('/search', {
                params: {
                    limit: 20,
                    term: searchTerm,
                    location: 'istanbul'
                },
            });
            setResults(res.data.businesses);
            setErrorMessage('')
        } catch (error) {
            setErrorMessage('Bağlantı Hatası :/');
        }
    }

    // Default
    useEffect(() => {
        searchApi('toast')
    },[]);

   return [searchApi,results,errorMessage]
}