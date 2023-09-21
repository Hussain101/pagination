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
        case "NEXT" :
          
              let pagenum = state.page + 1;
              if (pagenum>= state.nbPages) {
                pagenum = 0
              }
              return{
                ...state,
                page: pagenum
              }
              case "PREVIOUS" :
          
              let pageNum = state.page - 1;
              if (pageNum<= 0) {
                pageNum = 0
              }
              return{
                ...state,
                page: pageNum
              }
              
            
        default:
            break;
    }
}
export default reducer;