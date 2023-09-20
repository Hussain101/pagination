const reducer = (state,action) =>{
    switch (action.type) {
        case 'GET_STORIES':
            return{
                ...state,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages 
            }
           
        case 'DELETE_POST':
           
            return{
                ...state,
                hits: state.hits.filter((post) => post.objectID != action.payload)
            }
        case "SEARCH":
            return{
                ...state,
                query: action.payload
            }
        default:
            break;
    }
}
export default reducer;