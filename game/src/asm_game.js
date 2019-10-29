import asm from "./asm/asm";

class asm_game {
    constructor() {
        this.assembler = new asm();
        this.input_string = "";
        document.getElementById("run_program").addEventListener("click", evt => this.run(evt));
        document.getElementById("halt_program").addEventListener("click", evt => this.halt(evt));
        document.getElementById("asm_program").addEventListener("click", evt => this.assembly(evt));
        document.getElementById("step_program").addEventListener("click", evt => this.step(evt));
        document.getElementById("cont_program").addEventListener("click", evt => this.cont(evt));
        document.getElementById("until_program").addEventListener("click", evt => this.until(evt));
    }

    run() {

    }

    halt() {

    }

    assembly() {
        this.input_string = document.getElementById("code_text").value;
        this.assembler.lexer.lex(this.input_string);
        this.assembler.lexer.print_tokens();
    }

    step() {

    }

    cont() {

    }

    until() {

    }


}

export default asm_game;