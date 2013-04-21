
SimpleVacuumAction = { NoOp: 0, Suck: 1, Left: 2, Right: 3 };
SimpleVacuumLocation = { A: 0, B: 1 };
VacuumStatus = { Clean: 0, Dirty: 1 };

function RandomAgent(actions) {
    var keys = Object.keys(actions);
    var lkeys = keys.length;
        
    this.program = function(perception) {
        npos = Math.floor(Math.random() * lkeys);
        return actions[keys[npos]];
    };
}

function SimpleReflexVacuumAgent() {
    this.program = function(perception) {
        if (perception.status === VacuumStatus.Dirty)
            return SimpleVacuumAction.Suck;
            
        if (perception.location === SimpleVacuumLocation.A)
            return SimpleVacuumAction.Right;
            
        return SimpleVacuumAction.Left;
    };
}

module.exports = {
    createSimpleRandomVacuumAgent: function () { return new RandomAgent(SimpleVacuumAction); },
    createSimpleReflexVacuumAgent: function () { return new SimpleReflexVacuumAgent(); },
    SimpleVacuumAction: SimpleVacuumAction,
    SimpleVacuumLocation: SimpleVacuumLocation,
    VacuumStatus: VacuumStatus
};
