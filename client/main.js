import CustomError from './CustomError.js';
import throwError from './throwError.js';






function main () {

    console.log('load!');
    throwError(Error)
    throwError(TypeError)
    throwError(ReferenceError)
    throwError(SyntaxError)
    throwError(RangeError)
    throwError(URIError)
    throwError(EvalError) // X
    // throwError(InternalError) // X
    throwError(CustomError)
}





main()







console.log('main.js loaded!');