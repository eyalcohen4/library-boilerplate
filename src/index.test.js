import { expect } from 'chai';
import { describe, it } from 'mocha';
import add from './index';

describe('add', () => {
  it('should add 1 to 2', () => {
    expect(add(1, 2)).to.equal(3);
  });
  it('should add 929 to 1', () => {
    expect(add(929, 1)).to.equal(930);
  });
});
