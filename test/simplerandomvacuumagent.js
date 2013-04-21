
var agents = require('..').agents;
var assert = require('assert');

assert.ok(agents);

var agent = agents.createSimpleRandomVacuumAgent();
var actions = agents.SimpleVacuumAction;

var result = agent.program({});

assert.ok(result === actions.NoOp || result === actions.Suck || result === actions.Left || result == actions.Right);

var results = [];

for (var k = 0; k < 100; k++)
    results.push(agent.program({}));
    
assert.ok(results.indexOf(actions.NoOp) >= 0);
assert.ok(results.indexOf(actions.Suck) >= 0);
assert.ok(results.indexOf(actions.Left) >= 0);
assert.ok(results.indexOf(actions.Right) >= 0);