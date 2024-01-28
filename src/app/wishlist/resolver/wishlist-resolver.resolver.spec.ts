import { TestBed } from '@angular/core/testing';

import { WishlistResolverResolver } from './wishlist-resolver.resolver';

describe('WishlistResolverResolver', () => {
  let resolver: WishlistResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(WishlistResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
