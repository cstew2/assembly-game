import {Enum, TOKEN_TYPES, DIRECTIVES, OP_CODES, REGISTERS, token} from "./token";
import error from "../emu/error";

class lexer{
    constructor(){
        this.input_string = "";
        this.token_list = [];

        this.c = '';

        this.buffer = "";
        this.position =  0;

        this.special_chars = [
            ["!", TOKEN_TYPES.WRITEBACK],
            ["{", TOKEN_TYPES.L_BRACKET],
            ["}", TOKEN_TYPES.R_BRACKET],
            ["[", TOKEN_TYPES.L_BRACE],
            ["]", TOKEN_TYPES.R_BRACE],
            [",", TOKEN_TYPES.SEPERATOR]
        ];

        //bind class method's "this" to the class's "this"
        this.lex = this.lex.bind(this);
        this.next = this.next.bind(this);
        this.add_token = this.add_token.bind(this);
        this.add_buffer_token = this.add_buffer_token.bind(this);
        this.is_directive = this.is_directive.bind(this);
        this.is_opcode = this.is_opcode.bind(this);
        this.is_register = this.is_register.bind(this);
        this.is_not_new_line = this.is_not_new_line.bind(this);
        this.is_not_quote = this.is_not_quote.bind(this);
        this.is_special = this.is_special.bind(this);
        this.is_alpha = this.is_alpha.bind(this);
        this.is_name = this.is_name.bind(this);
	this.is_bin_literal = this.is_bin_literal.bind(this);
	this.is_oct_literal = this.is_oct_literal.bind(this);
	this.is_dec_literal = this.is_dec_literal.bind(this);
        this.is_hex_literal = this.is_hex_literal.bind(this); 
        this.is_whitespace = this.is_whitespace.bind(this);
        this.print_tokens = this.print_tokens.bind(this);

    }

    //take input string and tokenise it
    lex(raw_input) {
        this.input_string = raw_input.toUpperCase();
        this.c = this.input_string[this.position];
        while(this.position < this.input_string.length) {
            //numeric literals
            if(this.c === '#') {
                //prefixed with 0, either hex or oct
                this.next();
                if(this.c === '0') {
                    this.next();
                    //hex literal
                    if(this.c === 'X') {
                        this.add_buffer_token(this.is_hex_literal);
                        this.add_buffer_token(TOKEN_TYPES.HEX_LITERAL);
                    }
                    //octal literal
                    else {
                        this.add_buffer_token(this.is_oct_literal);
                        this.add_buffer_token(TOKEN_TYPES.OCTAL_LITERAL);
                    }
                }
                //no prefix but starts with a digit
                if(this.is_dec_literal(this.c)) {
                    //fill the buffer with any kind of number
                    this.add_buffer_token(this.is_hex_literal);
                    //binary literal
                    if(this.c === 'Y') {
                        this.add_buffer_token(TOKEN_TYPES.BINARY_LITERAL);
                    }
                    //dec literal
                    else if(this.c === 'T') {
                        this.add_buffer_token(TOKEN_TYPES.DECIMAL_LITERAL)
                    }
                    //hex literal
                    else if(this.c === 'H') {
                        this.add_buffer_token(TOKEN_TYPES.HEX_LITERAL)
                    }
                    //oct literal
                    else if (this.c === 'Q' || c === 'O') {
                        this.add_buffer_token(TOKEN_TYPES.OCTAL_LITERAL)
                    }
                    //dec literal
                    else {
                        this.add_buffer_token(TOKEN_TYPES.DECIMAL_LITERAL)
                    }
                }
            }

            //strings
            else if(this.c === '"') {
                this.next();
                this.fill_buffer(this.is_not_quote);
                this.next();
                this.add_buffer_token(TOKEN_TYPES.STRING_LITERAL);
            }

            //directives, opcodes, operands(registers), labels
            else if(this.is_alpha(this.c)) {
                this.fill_buffer(this.is_name);
                
                //check for assembler directives
                let dir = this.is_directive();
                let op = this.is_opcode();
                let reg = this.is_register();
                if(dir != "") {
                    this.add_token(TOKEN_TYPES.DIRECTIVE, dir);
                }
                //check for opcodes
                else if(op != "") {
                    this.add_token(TOKEN_TYPES.OPCODE, op)
                }
                //check for registers
                else if(reg != "") {
                    this.add_token(TOKEN_TYPES.REGISTER, reg);
                }
                //must be a label
                else {
                    this.add_buffer_token(TOKEN_TYPES.LABEL);
                }
            }

            //special symbols
            else if(this.is_special(this.c)) {
                for(let i=0; i < this.special_chars.length; i++) {
                    if(this.c === this.special_chars[i][0]) {
                        this.add_token(this.special_chars[i][1]);
			this.next();
		    }
                }
            }

            //ignore comments
            //if there is a ";" ignore all chars until a newline
            else if(this.c == ";") {
                this.next();
                this.fill_buffer(is_not_new_line);
            }

            //whitesapce
            else if(this.is_whitespace(this.c)) {
                this.next();
            }

            else {
                //error
	    }

        }
    }

    next() {
        this.c = this.input_string[++this.position];
    }

    fill_buffer(typefunc) {
        this.buffer = "";
        if(typefunc(this.c)) {
            while(typefunc(this.c)) {
                this.buffer += this.c;
                this.next();
            }
        }
        else {
            //error
        }
    }

    add_token(type) {
        let t = new token(type, "");
        this.token_list.push(t);
    }

    add_buffer_token(type) {
        let t = new token(type, this.buffer);
        this.token_list.push(t);
        this.buffer = "";
    }

    is_directive() {
        for(let i=0; i < DIRECTIVES.length; i++) {
            if(this.buffer === DIRECTIVES[i]) {
                return DIRECTIVES[i];
            }
        }
        return "";
    }

    is_opcode() {
        for(let i=0; i < OP_CODES.length; i++) {
            if(this.buffer === OP_CODES[i]) {
                return OP_CODES[i];
            }
        }
        return "";
    }

    is_register() {
        for(let i=0; i < REGISTERS.length; i++) {
            if(this.buffer === REGISTERS[i]) {
                return REGISTERS[i];
            }
        }
        return "";
    }
    
    is_not_new_line() {
        return this.c != '\n';
    }

    is_not_quote() {
        return this.c != '"'
    }

    is_special() {
        return (this.c === '!' || this.c === '{' || this.c === '}' ||
		this.c === '[' || this.c === ']' || this.c === ',');
    }

    is_alpha() {
    	return (this.c >= 'A' && this.c <= 'Z'); 
    }    
    
    is_name() {
    	return (this.is_alpha(this.c) || this.c === '_' || this.is_dec_literal(this.c));
    }

    is_bin_literal() {
        return (this.c === '1' || this.c === '0' || this.c === '-');
    }
    
    is_dec_literal() {
        return (this.c >= '0' && this.c <= '9' || this.c === '-');
    }

    is_oct_literal() {
        return (this.c >= '0' && this.c <= '7' || this.c === '-');
    }
    
    is_hex_literal() {
    	return (this.c >= '0' && this.c <= '9') || (this.c >= 'A' && this.c <= 'F' || this.c === '-');
    }
    
    is_whitespace() {
        return (this.c === ' ' || this.c === '\n' || this.c === '\t')
    }

    print_tokens() {
        for(let i=0; i < this.token_list.length; i++) {
            console.log(this.token_list[i]);
        }
    }
}

export default lexer;
