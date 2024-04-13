class CustomError extends Error{
    constructor(message, options, ...params){
        super(...params);
        console.log(this.cause);
        console.log(this.stack);
        const {name, cause, stack} = options;
        this.name=name||'CustomError'
        this.message=message||'This is a message acustomed in CustomError class constructor'
       stack && (this.stack = stack || 'This is a custom stack')
        this.cause = cause
    }
}
export default CustomError;