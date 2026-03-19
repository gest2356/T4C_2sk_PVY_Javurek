export class Logger {
    constructor(prefix = "[log]") {
        this.prefix = prefix;
    }

    log(msg){
        console.log(`${this.prefix}${msg}`);
    }

r
}