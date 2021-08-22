// remove
import { removeItem } from "../store/items/actions";
import {MenuItem} from '../components/MenuItem';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const mapDispatchToProps = (dispatch, ownProps) => {
    const uuid = ownProps.uuid
    return bindActionCreators({
        remove: () => removeItem(uuid)
    }, dispatch)
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem)