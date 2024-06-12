// storage access funcs

/** custom localstorage shape for this page. this shape not actually used directly */
interface LocalStorage
{
    lastPrompt:string
}

/** get the last prompt used by the user */
export function getLastPrompt():string
{
    return window.localStorage.getItem("last-prompt") || "";
}

/** set last prompt of user */
export function setLastPrompt(prompt:string):void
{
    window.localStorage.setItem("last-prompt",prompt);
}