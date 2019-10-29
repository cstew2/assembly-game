import * as defs from "../defs";
import * as error from "../emu/error";
import * as memory from "../cpu/memory";

class cpu {
    constructor() {
        //general purpose registers
        this.gen_reg = new Array(13);  
        this.gen_reg.fill(0x0);
        this.stack_pointer = 0x0; //r13
        this.link_register = 0x0; //r14
        this.program_counter = 0x0; //r15

        //special purpose registers
        this.instruction_reg = 0x0;
        this.memory_buffer_reg = 0x0;
        this.memory_address_reg =0x0;
        //Current Program Status Register
        this.negative = false;
        this.zero = false;
        this.carry = false;
        this.overflow = false;
    }

    fetch() {
        instruction_reg = get_mem();
    }

    decode() {

    }

    execture(){
         
    }

}