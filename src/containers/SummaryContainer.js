import { connect } from "react-redux";
import { Summary } from "../components/Summary";
import { selectSubtotal, selectTipAmount, selectTotal } from "../store/selectors";

const mapStateToProps = (state) => {
    // const subtotal = state.items.reduce((total, item) => {
    //     total+= item.price * item.quantity
    //     return total
    // }, 0);

    // const tipPercentage = state.tipPercentage
    // const tipAmount = Math.floor((tipPercentage * subtotal) / 100)

    // const total = subtotal + tipAmount

    // New solution with reselect:
    const subtotal = selectSubtotal(state)
    const tipAmount = selectTipAmount(state)
    const total = selectTotal(state)

    return {
        subtotal,
        total,
        tipAmount
    }
}

export const SummaryContainer = connect(mapStateToProps)(Summary)