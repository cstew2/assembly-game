import * as defs from  "../defs";
import * as error from "../emu/error";

class memory{
    constructor() {
        //main memory, array of 32bit values
        this.mem = new Array(MAX_MEM);
    }

    get_mem(addr) {
        if(addr > MAX_MEM && addr > 0x0) {
            error.add_error("Error: Memory address out of bounds")
        }
        else {
            return this.mem[addr % 4]
        }
    }

    set_mem(addr) {
        if(addr > MAX_MEM && addr > 0x0) {
            error.add_error("Error: Memory address out of bounds")
        }
        else {
            return this.mem[addr % 4];
        }
        
    }
}

export default memory;