import { useEffect, useState } from "react";

const useFetch = ( url ) => {
    
    const [state,setState] = useState({data:null,loading:true,error:null})

    useEffect(() => {
        setState({data:null,loading:true,error:null});
        fetch(url)
        .then(response => response.json())
        .then(json => {
            setState({data:json[0], loading:false, error:null});
        })
        .catch(error=>setState({data:'', loading:false, error:true}))
    }, [url]);

    return state;
    
};

export default useFetch;
