import { analyzeArray, caesarCipher, Calculator, capitalize, reverseString } from "./script";

test('Capitalize 1',()=>{
    expect(capitalize('test')).toBe('Test');
})

test('Capitalize 2',()=>{
    expect(capitalize('lOREM IPSUM')).toBe('Lorem ipsum');
})

test('Capitalize 3',()=>{
    expect(capitalize('AKIRAMENAIYO')).toBe('Akiramenaiyo');
})

test('reverse string 1', ()=>{
    expect(reverseString('test')).toBe('tset');
})

test('reverse string 2', ()=>{
    expect(reverseString('lorem ipsum')).toBe('muspi merol');
})

test('reverse string 3', ()=>{
    expect(reverseString('Greetings from Earth')).toBe('htraE morf sgniteerG');
})

test('Calculator add', ()=>{
    expect(Calculator.add(3,2)).toBe(5);
})

test('Calculator subtract', ()=>{
    expect(Calculator.subtract(3,2)).toBe(1);
})

test('Calculator divide 1', ()=>{
    expect(Calculator.divide(3,2)).toBeCloseTo(1.5);
})

test('Calculator divide 2', ()=>{
    expect(Calculator.divide(3,0)).toBe("ERROR");
})

test('Calculator multiply', ()=>{
    expect(Calculator.multiply(3,2)).toBe(6);
})

test('Caesar Cipher 1', ()=>{
    expect(caesarCipher('DEFENDTHEEASTWALLOFTHECASTLE',1)).toBe('EFGFOEUIFFBTUXBMMPGUIFDBTUMF');
})

test('Caesar Cipher 2', ()=>{
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz',1)).toBe('bcdefghijklmnopqrstuvwxyza');
})

test('Caesar Cipher 3', ()=>{
    expect(caesarCipher('defend the east wall of the castle',1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
})

test('Caesar Cipher 4', ()=>{
    expect(caesarCipher('defend the, east. wall... of the castle',1)).toBe('efgfoe uif, fbtu. xbmm... pg uif dbtumf');
})

test('Caesar Cipher 5', ()=>{
    expect(caesarCipher('castle',2)).toBe('ecuvng');
})

test('Caesar Cipher 6', ()=>{
    expect(caesarCipher('defend the, east. wall... of the castle',5)).toBe('ijkjsi ymj, jfxy. bfqq... tk ymj hfxyqj');
})

test('Analyze Array 1', ()=>{
    expect(analyzeArray([2,3,5,2])).toStrictEqual({ average: 3, min: 2, max: 5, length: 4 });
})

test('Analyze Array 2', ()=>{
    expect(analyzeArray([1])).toStrictEqual({ average: 1, min: 1, max: 1, length: 1 });
})

test('Analyze Array 3', ()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({ average: 4, min: 1, max: 8, length: 6})
})