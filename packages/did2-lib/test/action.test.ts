// @ts-ignore
import { test, expect } from 'bun:test';
import { action2 } from '../src/main'

test('greet function should return the correct greeting', () => {
    const greeting = action2('Alice', 2);
  expect(greeting).toMatchSnapshot();
});

