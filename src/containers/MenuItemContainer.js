// remove
import { removeItem, updatePriceItem, updateQuantityItem } from "../store/items/actions";
import {MenuItem} from '../components/MenuItem';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectTotalPriceItem } from "../store/selectors";

const mapStateToProps = (state, ownProps) => {
    const total = selectTotalPriceItem(state, ownProps)
    return {
        // total: ownProps.price * ownProps.quantity,
        total
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const uuid = ownProps.uuid
    return bindActionCreators({
        remove: () => removeItem(uuid),
        updatePrice: (price) => updatePriceItem(uuid, price),
        updateQuantity: (quantity) => updateQuantityItem(uuid, quantity)
    }, dispatch)
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
export const MenuItemContainer = connect(mapStateToProps, mapDispatchToProps)(MenuItem)