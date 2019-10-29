export default class error {
    constructor() {
        this.error_log = [];
        this.error_count = 0;
    }

    add_error(err_string) {
        let timestamp = new Date();
        this.error_log[this.error_count++] = "[" + timestamp.now() + "]  " + err_string;
        console.log(this.error_log[this.error_count]);
    }

    get_error(index) {
        return error_log[index];
    }

}