import { Calculator, capitalize, reverseString } from "./script";

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

test('Calculator add', ()=>{
    expect(Calculator.add(3,2)).toBe(5);
})

test('Calculator subtract', ()=>{
    expect(Calculator.subtract(3,2)).toBe(1);
})

test('Calculator divide', ()=>{
    expect(Calculator.divide(3,2)).toBeCloseTo(1.5);
})

test('Calculator divide', ()=>{
    expect(Calculator.divide(3,0)).toBe("ERROR");
})

test('Calculator multiply', ()=>{
    expect(Calculator.multiply(3,2)).toBe(6);
})