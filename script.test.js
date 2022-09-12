import { capitalize } from "./script";

test('Capitalize',()=>{
    expect(capitalize('test')).toBe('Test');
})

test('Capitalize',()=>{
    expect(capitalize('lOREM IPSUM')).toBe('Lorem ipsum');
})

test('Capitalize',()=>{
    expect(capitalize('AKIRAMENAIYO')).toBe('Akiramenaiyo');
})