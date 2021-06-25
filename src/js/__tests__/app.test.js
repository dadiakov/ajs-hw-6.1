import sortObj from '../app';

const testObj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('without rules, alphabet sort', () => {
  expect(sortObj(testObj))
    .toEqual([{ key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' }]);
});

test('2 rules, alphabet sort', () => {
  expect(sortObj(testObj, ['level', 'name']))
    .toEqual([{ key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 }]);
});

test('All rules', () => {
  expect(sortObj(testObj, ['level', 'defence', 'health', 'name', 'attack']))
    .toEqual([{ key: 'level', value: 2 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'name', value: 'мечник' },
      { key: 'attack', value: 80 }]);
});

test('Mistake in rules', () => {
  expect(() => sortObj(testObj, ['level', 'defen']))
    .toThrow();
});
