// @ts-ignore
import { test, expect } from 'bun:test';
import { add } from '../src/main'

test('2 + 3 = 5', () => {
    expect(add(2,3)).toBe(5)
});
