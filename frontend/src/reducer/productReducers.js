

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case 'PRODUCT_LIST_REQUEST':
        return { loading: true, products: [] }
      case 'PRODUCT_LIST_SUCCESS':
        return {
          loading: false,
          products: action.payload
        }
      case 'PRODUCT_LIST_FAIL':
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }



  export const productDetailsReducer = (state = { product: {reviews:[]} }, action) => {
    switch (action.type) {
      case 'PRODUCT_DETAILS_REQUEST':
        return { loading: true, ...state}
      case 'PRODUCT_DETAILS_SUCCESS':
        return {
          loading: false,
          product: action.payload
        }
      case 'PRODUCT_DETAILS_FAIL':
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }




  
  export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case 'PRODUCT_DELETE_REQUEST':
        return { loading: true}
      case 'PRODUCT_DELETE_SUCCESS':
        return {
          loading: false,
          success:true,
        }
      case 'PRODUCT_DELETE_FAIL':
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }




  
  export const addProductReducer = (state = {}, action) => {
    switch (action.type) {
      case 'PRODUCT_ADD_REQUEST':
        return { loading: true}
      case 'PRODUCT_ADD_SUCCESS':
        return {
          loading: false,
          success:true,
        }
      case 'PRODUCT_ADD_FAIL':
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }