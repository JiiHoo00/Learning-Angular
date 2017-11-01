/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { BooleanToTextPipe } from './BooleanToText.pipe';

describe('Pipe: BooleanToTextPipee', () => {
  it('create an instance', () => {
    const pipe = new BooleanToTextPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return textual Yes for true', () => {
    const pipe = new BooleanToTextPipe();
    const result = pipe.transform(true);
    expect(result).toEqual('Yes');
  });
  it('should return textual No for false', () => {
    const pipe = new BooleanToTextPipe();
    const result = pipe.transform(false);
    expect(result).toEqual('No');
  });
});
