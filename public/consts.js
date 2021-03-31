"use strict";

var TREES_NUMBER_VALUES = [{
  trunkHeight: 5,
  trunkTaper: 0.6,
  trunkSlices: 10,
  boughs: 1,
  forks: 1,
  forkAngle: 0,
  forkRatio: 1,
  branchAngle: 1,
  bowFreq: 1,
  bowHeight: 1,
  branches: 2,
  leavesOnBranch: 2,
  leafWHRatio: 0.5
}, {
  trunkHeight: 10,
  trunkTaper: 0.6,
  trunkSlices: 5,
  boughs: 2,
  forks: 3,
  forkAngle: Math.PI / 4,
  forkRatio: 2 / (1 + Math.sqrt(5)),
  branchAngle: Math.PI / 3,
  bowFreq: 1,
  bowHeight: 1,
  branches: 4,
  leavesOnBranch: 5,
  leafWHRatio: 0.5
}, {
  trunkHeight: 15,
  trunkTaper: 0.6,
  trunkSlices: 5,
  boughs: 2,
  forks: 4,
  forkAngle: Math.PI / 4,
  forkRatio: 2 / (1 + Math.sqrt(5)),
  branchAngle: Math.PI / 3,
  bowFreq: 2,
  bowHeight: 3.5,
  branches: 10,
  leavesOnBranch: 5,
  leafWHRatio: 0.5
}, {
  trunkHeight: 20,
  trunkTaper: 0.6,
  trunkSlices: 5,
  boughs: 2,
  forks: 4,
  forkAngle: Math.PI / 4,
  forkRatio: 2 / (1 + Math.sqrt(5)),
  branchAngle: Math.PI / 3,
  bowFreq: 2,
  bowHeight: 3.5,
  branches: 10,
  leavesOnBranch: 5,
  leafWHRatio: 0.5
}, {
  trunkHeight: 20,
  trunkTaper: 0.6,
  trunkSlices: 5,
  boughs: 2,
  forks: 6,
  forkAngle: Math.PI / 4,
  forkRatio: 2 / (1 + Math.sqrt(5)),
  branchAngle: Math.PI / 3,
  bowFreq: 2,
  bowHeight: 3.5,
  branches: 10,
  leavesOnBranch: 10,
  leafWHRatio: 0.5
}, {
  trunkHeight: 20,
  trunkTaper: 0.6,
  trunkSlices: 5,
  boughs: 2,
  forks: 6,
  forkAngle: Math.PI / 4,
  forkRatio: 2 / (1 + Math.sqrt(5)),
  branchAngle: Math.PI / 3,
  bowFreq: 2,
  bowHeight: 3.5,
  branches: 10,
  leavesOnBranch: 10,
  leafWHRatio: 0.5
}];
var TOOLTIP_TEXT_BRANCHES = {
  BUILD: "I'm Build!",
  TAKEOFF: "I'm Takeoff!",
  DESIGN_COLLABORATION: "I'm Design Collaboration!",
  MODEL_COORDINATION: "I'm Model Coordination!"
};
var TOOLTIP_TEXT_BASE = {
  TREE_0: "Hello! We're Enterprise and Infrastructure COEs!",
  TREE_1: "I'm a young tree. Hover over my branches to see each team.",
  TREE_2: "I'm a growing tree. Hover over my branches to see each team.",
  TREE_3: "Oh no, I'm overwatered. I'd like to grow faster, but I need time and cannot take too many requests all at once.",
  TREE_4: "Thank you for listening. The right amount of water added soil, bug fixing all really helped. Now I just need some time to recover and keep up the growth.",
  TREE_5: "Thank you for taking care of me. Let's keep up the structured process. I'm so proud to be the strongest and most fruitful tree in the field."
};
