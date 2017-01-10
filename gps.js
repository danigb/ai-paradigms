const { every, includes, each, filter, map, curry } = require('lodash')

// General Problem Solver: achieve all goals using *ops*
module.exports = function gps (state, goals, ops) {
  return every(map(goals, achieve(state, ops)))
}

// A goal is achieved if it already holds,
// or if there is an appropriate op for it that is applicable.
const achieve = curry((state, ops, goal) => {
  return includes(state, goal) || each(filter(ops, isAppropriateOp(goal)), applyOp(state))
})

// An op is appropriate to a goal if it is in its add list.
const isAppropriateOp = curry((goal, op) => {
  return includes(op.add, goal)
})

// Print a message and update *state* if op is applicable
const applyOp = curry((state, op) => {
  console.log('APPLY', op, state)
})
