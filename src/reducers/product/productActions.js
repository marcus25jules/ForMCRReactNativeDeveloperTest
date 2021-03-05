/**
 * # productActions.js
 *
 * All the request actions have 3 variations, the request, a success
 * and a failure. They all follow the pattern that the request will
 * set the ```isFetching``` to true and the whether it's successful or
 * fails, setting it back to false.
 *
 */

'use strict'

/**
 * ## Imports
 *
 * The actions supported
 */
 const {
   PRODUCT,
   ON_FORM_FIELD_CHANGE,
   PRODUCT_REQUEST,
   PRODUCT_SUCCESS,
   PRODUCT_FAILURE,
   ADD_PRODUCT,
   CLEAR
 } = require('../../constants/Product').default


import {api} from "@lib/Api";
import CONSTANT from "@routes/constant"

export function productState () {
  return {
    type: PRODUCT
  }
}

export function productRequest () {
  return {
    type: PRODUCT_REQUEST
  }
}

export function productSuccess (json) {
  return {
    type: PRODUCT_SUCCESS,
    payload: json
  }
}


export function productFailure (error) {
  return {
    type: PRODUCT_FAILURE,
    payload: error
  }
}

export function onProductFormFieldChange (field, value) {
  return {
    type: ON_FORM_FIELD_CHANGE,
    payload: {field: field, value: value}
  }
}


export function getProductList() {

    return dispatch  => {
        dispatch(productRequest());

        api.get(null, CONSTANT.PRODUCT).then((response) => {
          if (typeof response !== 'undefined') {
            if(response.length > 0){
                 dispatch(productSuccess(response));
            }
          }
        }).catch(err => {
            dispatch(productFailure(err));
        });
     }
     
}



export function selectProduct(data) {
  return dispatch => {
    dispatch(onProductFormFieldChange("selectedProduct",data))
  }
}
