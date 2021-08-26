const NumberToAzeriTranslator = require('.');

test('1', () => {
    const translator = new NumberToAzeriTranslator(1);
    expect(translator.translate().trim()).toBe('bir');
});

test('2', () => {
    const translator = new NumberToAzeriTranslator(2);
    expect(translator.translate().trim()).toBe('iki');
});

test('5', () => {
    const translator = new NumberToAzeriTranslator(5);
    expect(translator.translate().trim()).toBe('beş');
});

test('10', () => {
    const translator = new NumberToAzeriTranslator(10);
    expect(translator.translate().trim()).toBe('on');
});

test('15', () => {
    const translator = new NumberToAzeriTranslator(15);
    expect(translator.translate().trim()).toBe('on beş');
});

test('175', () => {
    const translator = new NumberToAzeriTranslator(175);
    expect(translator.translate().trim()).toBe('bir yüz yetmiş beş');
});

test('1054', () => {
    const translator = new NumberToAzeriTranslator(1054);
    expect(translator.translate().trim()).toBe('bir min əlli dörd');
});

test('10005', () => {
    const translator = new NumberToAzeriTranslator(10005);
    expect(translator.translate().trim()).toBe('on min beş');
});

test('12345', () => {
    const translator = new NumberToAzeriTranslator(12345);
    expect(translator.translate().trim()).toBe('on iki min üç yüz qırx beş');
});