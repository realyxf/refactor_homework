const rankTest = require('ava');
const { voyageRisk, voyageProfitFactor, captainHistoryRisk, rating } = require('../src/rank');

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

rankTest('rank case 7. voyageProfitFactor test voyage zone is west-indies and history length is 2 and voyage length is 10.', t => {
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

rankTest('rank case 8. voyageProfitFactor test voyage zone is west-indies and history length is 2 and voyage length is 15.', t => {
  const voyage = {
    zone: 'west-indies',
    length: 15,
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

  t.is(result, 1);
})

rankTest('rank case 9. voyageProfitFactor test voyage zone is west-indies and history length is 9 and voyage length is 15.', t => {
  const voyage = {
    zone: 'west-indies',
    length: 15,
  };
  const history = [
    {
      zone: 'east-indies1',
      profit: 5,
    },
    {
      zone: 'east-indies2',
      profit: 5,
    },
    {
      zone: 'east-indies3',
      profit: 5,
    },
    {
      zone: 'east-indies4',
      profit: 5,
    },
    {
      zone: 'east-indies5',
      profit: 5,
    },
    {
      zone: 'east-indies6',
      profit: 5,
    },
    {
      zone: 'east-indies7',
      profit: 5,
    },
    {
      zone: 'east-indies8',
      profit: 5,
    },
    {
      zone: 'east-indies9',
      profit: 5,
    },
  ]

  const result = voyageProfitFactor(voyage, history)

  t.is(result, 2);
})

rankTest('rank case 10. voyageProfitFactor test voyage zone is china and history no hasChina and history length is 1 and voyage length is 10.', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies1',
      profit: 5,
    },
  ]

  const result = voyageProfitFactor(voyage, history)

  t.is(result, 3);
})

rankTest('rank case 11. voyageProfitFactor test voyage zone is china and history hasChina and history length is 11 and voyage length is 19.', t => {
  const voyage = {
    zone: 'china',
    length: 19,
  };
  const history = [
    {
      zone: 'east-indies1',
      profit: 5,
    },
    {
      zone: 'china',
      profit: 5,
    },
    {
      zone: 'east-indies2',
      profit: 5,
    },
    {
      zone: 'east-indies3',
      profit: 5,
    },
    {
      zone: 'east-indies4',
      profit: 5,
    },
    {
      zone: 'east-indies5',
      profit: 5,
    },
    {
      zone: 'east-indies6',
      profit: 5,
    },
    {
      zone: 'east-indies7',
      profit: 5,
    },
    {
      zone: 'east-indies8',
      profit: 5,
    },
    {
      zone: 'east-indies9',
      profit: 5,
    },
    {
      zone: 'east-indies10',
      profit: 5,
    },


  ]

  const result = voyageProfitFactor(voyage, history)

  t.is(result, 7);
})

rankTest('rank case 12. voyageProfitFactor test voyage zone is east-indies and history no hasChina and history length is 1 and voyage length is 10.', t => {
  const voyage = {
    zone: 'east-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },
  ]

  const result = voyageProfitFactor(voyage, history)

  t.is(result, 3);
})

rankTest('rank case 13. captainHistoryRisk test history length is 3 and history profit < 0 is 1 and voyage zone is china and history hasChina.', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: -1,
    },{
      zone: 'china',
      profit: 2,
    },
  ];

  const result = captainHistoryRisk(voyage, history)

  t.is(result, 4);
})

rankTest('rank case 14. captainHistoryRisk test history length is 5 and history profit < 0 is 0 and voyage zone is china and history no hasChina.', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 1,
    },{
      zone: 'west-indies1',
      profit: 2,
    },
    {
      zone: 'west-indies2',
      profit: 2,
    },
    {
      zone: 'west-indies3',
      profit: 2,
    },
  ];

  const result = captainHistoryRisk(voyage, history)

  t.is(result, 1);
})

rankTest('rank case 15. rating test return A', t => {
  const voyage = {
    zone: 'china',
    length: 13,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },
    {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'east-indies1',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-indies1',
      profit: 15,
    },
    {
      zone: 'china',
      profit: 7,
    },
    {
      zone: 'west-indies2',
      profit: 15,
    },
    {
      zone: 'west-africa2',
      profit: 7,
    },
    {
      zone: 'west-africa3',
      profit: 7,
    },
    {
      zone: 'west-africa4',
      profit: 7,
    },
    {
      zone: 'west-africa5',
      profit: 7,
    }
  ];

  const result = rating(voyage, history)

  t.is(result, 'A');
})
