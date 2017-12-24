import { TypeKeys } from './../../constants';
import counter from '../counter';

describe('Counter reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    expect(counter(undefined, {})).toEqual({
      count: 0
    });
  });

  it('should handle ON_INCREMENT', () => {
    expect(
      counter(undefined, {
        type: TypeKeys.ON_INCREMENT
      })
    ).toEqual({
      count: 1
    });
  });

  it('should handle ON_DECREMENT', () => {
    expect(
      counter(undefined, {
        type: TypeKeys.ON_DECREMENT
      })
    ).toEqual({
      count: -1
    });
  });
});
