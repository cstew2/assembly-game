export const opcodes = [
	[0b0000, "AND"],
	[0b0001, "EOR"],
	[0b0010, "SUB"],
	[0b0011, "RSB"],
	[0b0100, "ADD"],
	[0b0101, "ADC"],
	[0b0110, "SBC"],
	[0b0111, "RSC"],
	[0b1000, "TST"],
	[0b1001, "TEQ"],
	[0b1010, "CMP"],
	[0b1011, "CMN"],
	[0b1100, "ORR"],
	[0b1101, "MOV"],
	[0b1110, "BIC"],
	[0b1111, "MVN"],

];

export const conditions = [
	[0b0000, "EQ"],
	[0b0001, "HE"],
	[0b0010, "HS"],
	[0b0010, "CS"],
	[0b0011, "LO"],
	[0b0011, "CC"],
	[0b0100, "MI"],
	[0b0101, "PL"],
	[0b0110, "V"],
	[0b0111, "VC"],
	[0b1000, "HI"],
	[0b1001, "LS"],
	[0b1010, "GE"],
	[0b1011, "LT"],
	[0b1100, "GT"],
	[0b1101, "LE"],
	[0b1110, "AL"],
	[0b1111, "NV"]
];