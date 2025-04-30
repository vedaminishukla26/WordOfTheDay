import isEmpty from 'ramda/src/isEmpty'
import isNil from 'ramda/src/isNil'
import anyPass from 'ramda/src/anyPass'

export default anyPass([isNil, isEmpty])