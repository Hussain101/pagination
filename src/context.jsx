import React,{createContext,useContext,useEffect,useReducer,useState} from "react";
import reducer from "./reducer";
import axios from "axios";

//create context
const AppContext = createContext();

// create a provider
const AppProvider = ({children}) =>{
    const [data, setdata] = useState([])
    const initialState ={
        query: "",
        page: 0,
        nbPages:0,
        hits: []
    }
    const [loading,setloading] =useState(true);
    const [states,dispatch] = useReducer(reducer,initialState)
    const fetchapi =async () =>{
        
        const res = await axios.get(`http://hn.algolia.com/api/v1/search?query=${states.query}&page=${states.page}`).then
        ((res) =>{
          if (res) {
            console.log("🚀 ~ file: Stories.jsx:14 ~ fetchapi ~ res:", res.data)
            setloading(false);
            setdata(res.data.hits);
            dispatch({
                type:"GET_STORIES",
                payload:{
                    hits: res.data.hits,
                    nbPages: res.data.nbPages
                }
            })
          }
        })
        
    }
    useEffect(() => {
      fetchapi();
    
    }, [states.query]);
    const SearchPost = (searchquery) =>{
        dispatch({
            type:"SEARCH",
            payload: searchquery
        })
    }
    const removePost = (postID) => {
    
           dispatch({
            type:"DELETE_POST",
            payload: postID
        })
    }
    const Nextpg = () =>{
        dispatch({
            type:"NEXT"
        })
    }
    const Prevpg = () =>{
        dispatch({
            type:"PREVIOUS"
        })
    }
    return(
        <AppContext.Provider value={{Prevpg,Nextpg,data,loading,...states,removePost,SearchPost}}>
            {children}
            </AppContext.Provider>
    )
};
//global context to use in any component directly
const useGlobalContext = ()=>{
    return useContext(AppContext);
}


export {useGlobalContext,AppContext,AppProvider}