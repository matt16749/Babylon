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
var SKY_MATERIALS_DATA = {
  earlyMorning: {
    turbidity: 2,
    luminance: 0.2,
    rayleigh: 3,
    inclination: 0.47,
    mieCoefficient: 0.05,
    mieDirectionalG: 0.9999,
    azimuth: 0.25
  },
  morning: {
    turbidity: 2,
    luminance: 0.2,
    rayleigh: 3,
    inclination: 0.44,
    mieCoefficient: 0.05,
    mieDirectionalG: 0.9999,
    azimuth: 0.25
  },
  noon: {
    turbidity: 2,
    luminance: 0.3,
    rayleigh: 1,
    inclination: 0,
    mieCoefficient: 0.008,
    mieDirectionalG: 0.9999,
    azimuth: 0.25
  },
  earlyAfternoon: {
    turbidity: 2,
    luminance: 0.24,
    rayleigh: 1,
    inclination: 0,
    mieCoefficient: 0.008,
    mieDirectionalG: 0.9999,
    azimuth: 0.36
  },
  afternoon: {
    turbidity: 2,
    luminance: 0.24,
    rayleigh: 1,
    inclination: 0,
    mieCoefficient: 0.008,
    mieDirectionalG: 0.9999,
    azimuth: 0.464
  },
  sunset: {
    turbidity: 10,
    luminance: 0.3,
    rayleigh: 2,
    inclination: 0,
    mieCoefficient: 0.005,
    mieDirectionalG: 0.9999,
    azimuth: 0.4939
  }
};