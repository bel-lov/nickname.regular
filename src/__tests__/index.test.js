import Validator from '../index';

test('Проверка на имя', () => {
  const name = 'ann74a';
  const validator = new Validator(name);
  expect(validator.validateUsername(name)).toBe('ann74a');
});

test('Проверка на ошибку кирилицы', () => {
  const name = 'annaврврb';
  const validator = new Validator(name);
  const result = () => validator.validateUsername(name)('annaврврb');
  expect(result).toThrow('Допустимы только латинские буквы');
});

test('Имя не должно  начинаться цифрами, символами подчёркивания или тире', () => {
  const name = '7anna';
  const validator = new Validator(name);
  const result = () => validator.validateUsername(name)('7anna');
  expect(result).toThrow('Имя не должно  начинаться цифрами, символами подчёркивания или тире');
});

test('Имя не должно заканчиваться цифрами, символами подчёркивания или тире', () => {
  const name = 'anna-';
  const validator = new Validator(name);
  const result = () => validator.validateUsername(name)('anna-');
  expect(result).toThrow('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
});

test('Имя не должно содержать подряд более трёх цифр', () => {
  const name = 'an777na';
  const validator = new Validator(name);
  const result = () => validator.validateUsername(name)('an777na');
  expect(result).toThrow('Имя не должно содержать подряд более трёх цифр');
});
