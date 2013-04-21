
SimpleVacuumAction = { NoOp: 0, Suck: 1, Left: 2, Right: 3 };

function RandomAgent(actions) {
    var keys = Object.keys(actions);
    var lkeys = keys.length;
        
    this.program = function(perception) {
        npos = Math.floor(Math.random() * lkeys);
        return actions[keys[npos]];
    };
}

module.exports = {
    createSimpleRandomVacuumAgent: function () { return new RandomAgent(SimpleVacuumAction); },
    SimpleVacuumAction: SimpleVacuumAction
};
