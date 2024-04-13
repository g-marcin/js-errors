(function () {
    'use strict';

    class CustomError extends Error{
        constructor(message, options, ...params){
            super(...params);
            console.log(this.cause);
            console.log(this.stack);
            const {name, cause, stack} = options;
            this.name=name||'CustomError';
            this.message=message||'This is a message acustomed in CustomError class constructor';
           stack && (this.stack = stack || 'This is a custom stack');
            this.cause = cause;
        }
    }

    function throwError (ErrorClass, customParams){
        try{
         const error = new ErrorClass('This is an error message',{ cause:'customCause!', stack: 'customCallstack!', ...customParams});
         throw error
     }catch(error){
         const {name, fileName, cause, stack, lineNumber, message, customParams} = error;
         console.log(cause,'\n',  stack,'\n', lineNumber,'\n', message,'\n',  name,'\n',  fileName,'\n');
        addHtmlErrorElement(error);
         if (customParams){
             for (param of Array.from(customParams)){
                 console.log(param);
             }
         }
        }
     }

    function addHtmlErrorElement(error){
        const {name, fileName, cause, stack, lineNumber, message, customParams} = error;

        const div = document.createElement('div');
        div.innerHTML ='<div class="emoji">&#128511;<div/>' + '---' + [name,'\n',  message,'\n', lineNumber,'\n', message,'\n',  name,'\n',  fileName,'\n',customParams,].join('|-------|');
        div.className= name + ' record';
        document.body.appendChild(div);

        return div
    }

    function main () {

        console.log('load!');
        throwError(Error);
        throwError(TypeError);
        throwError(ReferenceError);
        throwError(SyntaxError);
        throwError(RangeError);
        throwError(URIError);
        throwError(EvalError); // X
        // throwError(InternalError) // X
        throwError(CustomError);
    }





    main();







    console.log('main.js loaded!');

})();
