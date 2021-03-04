'use strict'
/**
 * ## Import
 */
const {Record} = require('immutable')

const {
    PRODUCT,
    ON_FORM_FIELD_CHANGE
} = require('../../constants/Product').default


const Form = Record({
  state: PRODUCT,
  error: null,
  isFetching: true,
  fields: new (Record({
    data: null,
    selectedProduct: null
  }))()
})

/**
 * ## InitialState
 * The form is set
 */
var InitialState = Record({
  form: new Form()
})
export default InitialState
