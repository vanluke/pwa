import {
  selectRoot,
  selectIsBussy,
  selectTimeswires,
} from './timeswire-selectors';

describe('Timeswire selectors', () => {
  const state = {
    timeswire: {
      isBussy: false,
      timeswires: [],
    },
  };

  it('should selectRoot select timeswire state', () => {
    const actual = selectRoot(state);

    expect({
      isBussy: false,
      timeswires: [],
    }).toEqual(actual);
  });

  it('should selectIsBussy select isBussy', () => {
    const actual = selectIsBussy(state);
    const expected = state.timeswire.isBussy;

    expect(expected).toEqual(actual);
  });

  it('should selectRoot select timeswires', () => {
    const actual = selectTimeswires(state);
    const expected = state.timeswire.timeswires;

    expect(expected).toEqual(actual);
  });
});
