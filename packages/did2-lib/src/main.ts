export function greet(name: string): string {
  return `Hello, ${name}! Welcome to my micromodule!`;
}

export function add(a: number, b: number): number {
  return a + b;
}

export const action2 = (name: string, times: number) => {
    let greeting = ''
    for (let i = 0; i < times; i++) {
       greeting = greeting + `Hi ${name}\n` 
    }
    return greeting
  }

console.log(action2('Alice', {times: 2}))
