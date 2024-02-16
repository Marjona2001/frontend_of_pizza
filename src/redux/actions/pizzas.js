import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizzas = ( category) => (dispatch) => {
  dispatch({
    type: "SET_LOADED",
    payload: false,
  });


  let url = "http://127.0.0.1:8000/api/products";

  axios.get(url).then(({ data }) => {
    if (category) {      
      const filtered = data?.products?.filter(item => item.category_id === category)
      dispatch(setPizzas({...data,products:filtered}));
      return
    }
    dispatch(setPizzas(data));
  });
};


export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
