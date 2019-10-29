export class Enum {
	constructor(constantsList) {
    	for (var i in constantsList) {
        	this[constantsList[i]] = i;
    	}
		this.length = constantsList.length;
	}
}

export const TOKEN_TYPES = new Enum([
	"INSTRUCTION",     
	"LABEL",          
	"HEX_LITERAL",     
	"BINARY_LITERAL",  
	"OCTAL_LITERAL",   
	"DECIMAL_LITERAL", 
	"REGISTER",        
	"IMMEDIATE_SHIFT", 
	"SEPERATOR",       
	"WRITE_BACK",     
	"L_BRACE",        
	"R_BRACE",         
	"L_BRACKET",
	"R_BRACKET",
	"DIRECTIVE",
	"STRING_LITERAL"
]);

export const DIRECTIVES = new Enum([
	"AREA", 
	"DATA",  
	"CODE",  
	"READ",  
	"WRITE", 
	"ALIGN", 
	"DCB",   
	"DCD",   
	"DCQ",   
	"DCW",   
	"FILL",  
	"SPACE", 
	"EQU",   
	"ENTRY", 
	"END",   
]);

export const OP_CODES = new Enum([
	"ADC",
	"ADD",
	"AND",
	"B",
	"BIC",
	"BL",
	"BX",
	"CDP",
	"CMN",
	"CMP",
	"EOR",
	"LDC",
	"LDM",
	"LDR",
	"MCR",
	"MLA",
	"MOV",
	"MRC",
	"MRS",
	"MSR",
	"MUL",
	"MVN",
	"ORR",
	"RSB",
	"RSC",
	"SBC",
	"STC",
	"STM",
	"STR",
	"SUB",
	"SWI",
	"SWP",
	"TEQ",
	"TST"
]);

export const REGISTERS = new Enum([
	"r0",
	"r1",
	"r2",
	"r3",
	"r4",
	"r5",
	"r6",
	"r7",
	"r8",
	"r9",
	"r10",
	"r11",
	"r12",
	"r13",
	"r14",
	"r15",
	"sp",
	"fp",
	"pc",
]);

export class token {
    constructor(type, value) {
        this.type = type;
        this.value = value;
		
		this.get_type = this.get_type.bind(this);
		this.get_value = this.get_value.bind(this);
	}

	get_type() {
		return this.type;
	}

	get_value() {
		return this.value;
	}

}