import { BrandNamePipe } from './brand-name.pipe';

describe('BrandNamePipe', () => {
  it('create an instance', () => {
    const pipe = new BrandNamePipe();
    expect(pipe).toBeTruthy();
  });
});
