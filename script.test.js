import { capitalize, reverseString } from "./script";

test('Capitalize',()=>{
    expect(capitalize('test')).toBe('Test');
})

test('Capitalize',()=>{
    expect(capitalize('lOREM IPSUM')).toBe('Lorem ipsum');
})

test('Capitalize',()=>{
    expect(capitalize('AKIRAMENAIYO')).toBe('Akiramenaiyo');
})

test('reverse string', ()=>{
    expect(reverseString('test')).toBe('tset');
})

test('reverse string', ()=>{
    expect(reverseString('lorem ipsum')).toBe('muspi merol');
})

test('reverse string', ()=>{
    expect(reverseString('Greetings from Earth')).toBe('htraE morf sgniteerG');
})