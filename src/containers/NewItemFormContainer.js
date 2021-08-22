import { connect } from 'react-redux';
import {NewItemForm} from '../components/NewItemForm';
import {addItem} from '../store/items/actions'
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSubmit: (name, price) => dispatch(addItem(name, price))
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         onSubmit: (name, price) => addItem(name, price)
//     }, dispatch)
// }

const mapDispatchToProps = {
    onSubmit: (name, price) => addItem(name, price)
}


export const NewItemFormContainer = connect(null, mapDispatchToProps)(NewItemForm);