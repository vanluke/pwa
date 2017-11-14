export const selectRoot = state => state.timeswire;
export const selectIsBussy = state => selectRoot(state).isBussy;
export const selectTimeswires = state => selectRoot(state).timeswires;
