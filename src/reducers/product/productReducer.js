'use strict'

/**
 * ## Imports
 *
 * The actions supported
 */
const InitialState = require('./productInitialState').default

const {
  PRODUCT,
  ON_FORM_FIELD_CHANGE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  ADD_PRODUCT,
  CLEAR
} = require('../../constants/Product').default


const initialState = new InitialState()

/**
 * ## deviceReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function productReducer (state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.merge(state)


  switch (action.type) {

    case PRODUCT_REQUEST:
      return state.setIn(['form', 'state'], action.type)
         .setIn(['form', 'isFetching'], true)
         .setIn(['form', 'error'], null)
         .setIn(['form', 'fields', 'data'], null)


    case PRODUCT_SUCCESS:
      return state.setIn(['form', 'isFetching'], false)
      .setIn(['form', 'fields', 'data'], action.payload)


    case PRODUCT_FAILURE:
        var form = action.payload
        return state.setIn(['form', 'isFetching'], false)
         .setIn(['form', 'error'], null)


    case ON_FORM_FIELD_CHANGE:
        const {field, value} = action.payload

        return state.setIn(['form', 'fields', field], value)
              .setIn(['form', 'error'], null)

   }

  return state
}
