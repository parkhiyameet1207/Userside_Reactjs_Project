

const initiale = {

    products: [],
    product: []
}

const Productreducer = (state = initiale, action) => {


    switch (action.type) {

        case 'ADD_CART':

            const find = state.product.findIndex(item => item.id == action.payload.id);

            // console.log(find,"find");

            if (find >= 0) {
                return (
                    state.products[find].data
                )
            }
            else {

                return {
                    ...state,
                    product: [...state.product, action.payload.data]
                }
            }


        case 'REMOVE_CART':

            let removedata = state.product

            let allproducts = removedata.filter((delet) => {
                return delet.id != action.payload
            })
// console.log(allproducts,"alll");
            return (
                {
                    ...state,
                    product: allproducts
                }

            )

        case 'ALL_PRODUCT':
            return {
                ...state,
                products: action.payload
            }

        case 'INC':

        const id = action.payload

        // console.log(id,"iddddd");

            const inccartitem = state.products.filter((item) => {
                return item.id === id ? { ...item, qty: (item.qty || 1 ) + 1 } : item
            })

        console.log(inccartitem,"inccccccccccc");


            return {
                ...state,
                products: inccartitem
            }

            case 'DEC':

            const decid = action.payload
            
            const deccartitem = state.products.map((item) => {

                if(item.id === decid && item.qty > 1)
                {
                    return { ...item, qty: (item.qty || 1 ) - 1 }
                }
                return item

            }).filter((item) => item.qty > 0)

            return (
                {
                    ...state,
                    products: deccartitem
                }

            )
        default:
            return state

    }


}

export default Productreducer
