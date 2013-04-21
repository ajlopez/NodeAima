
var agents = require('..').agents;
var assert = require('assert');

assert.ok(agents);

var agent = agents.createSimpleReflexVacuumAgent();
var actions = agents.SimpleVacuumAction;
var locations = agents.SimpleVacuumLocation;
var status = agents.VacuumStatus;

var result = agent.program({ status: status.Dirty });
assert.equal(result, actions.Suck);

var result = agent.program({ status: status.Clean, location: locations.A });
assert.equal(result, actions.Right);

var result = agent.program({ status: status.Clean, location: locations.B });
assert.equal(result, actions.Left);
