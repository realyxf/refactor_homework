const rankTest = require('ava');
const { voyageRisk, voyageProfitFactor } = require('../src/rank');

rankTest('foo', t => {
  t.pass();
});

rankTest('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});

rankTest('rank case 1. voyageRisk test voyage zone is west-indies and length is 4.', t => {
  const voyage = {
    zone: 'west-indies',
    length: 4,
  };
  const result = voyageRisk(voyage)

  t.is(result, 1);
})

rankTest('rank case 2. voyageRisk test voyage zone is west-indies and length is 5.', t => {
  const voyage = {
    zone: 'west-indies',
    length: 5,
  };
  const result = voyageRisk(voyage)

  t.is(result, 3);
})

rankTest('rank case 3. voyageRisk test voyage zone is west-indies and length is 9.', t => {
  const voyage = {
    zone: 'west-indies',
    length: 9,
  };
  const result = voyageRisk(voyage)

  t.is(result, 4);
})

rankTest('rank case 4. voyageRisk test voyage zone is china and length is 1.', t => {
  const voyage = {
    zone: 'china',
    length: 1,
  };
  const result = voyageRisk(voyage)

  t.is(result, 5);
})

rankTest('rank case 5. voyageRisk test voyage zone is china and length is 5.', t => {
  const voyage = {
    zone: 'china',
    length: 5,
  };
  const result = voyageRisk(voyage)

  t.is(result, 7);
})

rankTest('rank case 6. voyageRisk test voyage zone is china and length is 10.', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const result = voyageRisk(voyage)

  t.is(result, 9);
})

rankTest('rank case 7. voyageProfitFactor test voyage zone is west-indies and history length is 2', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },
  ]

  const result = voyageProfitFactor(voyage, history)

  t.is(result, 2);
})