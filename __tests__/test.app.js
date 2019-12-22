import Character from '../src/app';

test('Верные значение', () => {
  const expected = {
    name: 'player',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const received = new Character('player', 'Bowman');

  expect(received).toEqual(expected);
});

test('Некоректная запись имени', () => {
  expect(() => new Character('o', 'Bowman')).toThrow('Некорректная запись имени');
});

test('Некоректная запись типа персонажа', () => {
  expect(() => new Character('Fro', 'God')).toThrow('Некорректная запись типа персонажа');
});
