
VacuumAction = { NoOp: 0, Suck: 1, Left: 2, Right: 3 };

function RandomVacuumAgent(actions) {
    if (!actions)
        actions = VacuumAction;
        
    var keys = Object.keys(actions);
    var lkeys = keys.length;
        
    this.program = function(perception) {
        npos = Math.floor(Math.random() * lkeys);
        return actions[keys[npos]];
    };
}

module.exports = {
    createRandomVacuumAgent: function () { return new RandomVacuumAgent(VacuumAction); },
    VacuumAction: VacuumAction
};
