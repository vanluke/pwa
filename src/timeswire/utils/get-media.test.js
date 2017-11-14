import {getImageUrl} from './get-media';

describe('Timeswire utils', () => {
  describe('getImageUrl', () => {
    it('should handle undefined', () => {
      const expected = '';
      const input = undefined;
      const actual = getImageUrl(input, 1);

      expect(expected).toEqual(actual);
    });

    it('should return specyfied media for index', () => {
      const expected = 'url';
      const input = [{
        url: 'url',
      }];

      const actual = getImageUrl(input, 0);

      expect(expected).toEqual(actual);
    });

    it('should handle bad index', () => {
      const expected = '';
      const input = [{
        url: 'url',
      }];

      const actual = getImageUrl(input, 2);

      expect(expected).toEqual(actual);
    });

    it('should handle falsy array', () => {
      const expected = '';
      const input = [];

      const actual = getImageUrl(input, 0);

      expect(expected).toEqual(actual);
    });
  });
});
