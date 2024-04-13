function throwError (ErrorClass, customParams){
    try{
     const error = new ErrorClass('This is an error message',{ cause:'customCause!', stack: 'customCallstack!', ...customParams});
     throw error
 }catch(error){
     const {name, fileName, cause, stack, lineNumber, message, customParams} = error;
     console.log(cause,'\n',  stack,'\n', lineNumber,'\n', message,'\n',  name,'\n',  fileName,'\n');
    addHtmlErrorElement(error)
     if (customParams){
         for (param of Array.from(customParams)){
             console.log(param)
         }
     }
    }
 }

export default throwError;

function addHtmlErrorElement(error){
    const {name, fileName, cause, stack, lineNumber, message, customParams} = error;

    const div = document.createElement('div');
    div.innerHTML ='<div class="emoji">&#128511;<div/>' + '---' + [name,'\n',  message,'\n', lineNumber,'\n', message,'\n',  name,'\n',  fileName,'\n',customParams,].join('|-------|');
    div.className= name + ' record';
    document.body.appendChild(div);

    return div
}