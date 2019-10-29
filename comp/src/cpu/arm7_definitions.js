"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.conditions = exports.opcodes = void 0;
var opcodes = [[0, "AND"], [1, "EOR"], [2, "SUB"], [3, "RSB"], [4, "ADD"], [5, "ADC"], [6, "SBC"], [7, "RSC"], [8, "TST"], [9, "TEQ"], [10, "CMP"], [11, "CMN"], [12, "ORR"], [13, "MOV"], [14, "BIC"], [15, "MVN"]];
exports.opcodes = opcodes;
var conditions = [[0, "EQ"], [1, "HE"], [2, "HS"], [2, "CS"], [3, "LO"], [3, "CC"], [4, "MI"], [5, "PL"], [6, "V"], [7, "VC"], [8, "HI"], [9, "LS"], [10, "GE"], [11, "LT"], [12, "GT"], [13, "LE"], [14, "AL"], [15, "NV"]];
exports.conditions = conditions;