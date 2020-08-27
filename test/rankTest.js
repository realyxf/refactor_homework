const rankTest = require('ava');
const { voyageRisk } = require('../src/rank');

rankTest('foo', t => {
  t.pass();
});

rankTest('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});

rankTest('rank case 1. voyage zone is east-indies and length is 4.', t => {
  const voyage = {
    zone: 'west-indies',
    length: 4,
  };
  const result = voyageRisk(voyage)

  t.is(result, 1);
})