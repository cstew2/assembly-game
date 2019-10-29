import lexer from "./lexer";
import parser from "./parser";


class asm{
    constructor() {
        this.lexer = new lexer();
        this.parser = new parser();
    }
}

export default asm;