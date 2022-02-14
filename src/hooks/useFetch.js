import { useEffect, useRef, useState } from "react";

const useFetch = (url) => {
    const isMounted = useRef(true);
    //LA IDEA ES QUE ESTE REF SIGA LA REFERENCIA CUANDO ESTE ESTE MONTADO
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
          
      return () => {
        isMounted.current = false;
        // console.log(isMounted);
      };
    }, []);
    

    useEffect(() => {
        setState({ data: null, loading: true, error: null });
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setTimeout(() => {
                    if (isMounted) {
                        setState({ data: json[0], loading: false, error: null });
                    }else{
                        console.log('set state no se llamo');
                    }
                    
                }, 4000);
                
            })
            .catch((error) => setState({ data: "", loading: false, error: true }));
    }, [url]);

    return state;
};

export default useFetch;
