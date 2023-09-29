import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../MyFireBase/myfirebase";

export const getData = (data) => {
 
    return{
        type : 'ALL_PRODUCT',
        payload : data
    }
}

export const addcart = (id,data) => {

  // console.log(data,"Add cart data");

 
    return{
        type : 'ADD_CART',
        payload : {id,data}
    }
    
  }
  export const productremove = (id) => {
    return{
        type : 'REMOVE_CART',
        payload : id
    }
  }


  
export const increment = (id) => {
  return{
      type : 'INC',
      payload : id
  }
}

export const decrement = (id) => {
  return{
      type : 'DEC',
      payload : id
  }
}

  

export const getAllAsyncData = () => {
    return async dispatch => {

        let alldata = [];

        let firestoredata = await getDocs(collection(db,"products"));
        firestoredata.forEach((doc) => {
           let d = {...doc.data(),id : doc.id}
           alldata = [...alldata,d]
        })

    dispatch(getData(alldata));  
     
  }
}