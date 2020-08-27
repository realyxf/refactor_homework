const rankTest = require('ava');
const { voyageRisk } = require('../src/rank');

rankTest('foo', t => {
  t.pass();
});

rankTest('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});

rankTest('rank case 1. voyage zone is west-indies and length is 4.', t => {
  const voyage = {
    zone: 'west-indies',
    length: 4,
  };
  const result = voyageRisk(voyage)

  t.is(result, 1);
})

rankTest('rank case 2. voyage zone is west-indies and length is 5.', t => {
  const voyage = {
    zone: 'west-indies',
    length: 5,
  };
  const result = voyageRisk(voyage)

  t.is(result, 3);
})

rankTest('rank case 3. voyage zone is west-indies and length is 9.', t => {
  const voyage = {
    zone: 'west-indies',
    length: 9,
  };
  const result = voyageRisk(voyage)

  t.is(result, 4);
})