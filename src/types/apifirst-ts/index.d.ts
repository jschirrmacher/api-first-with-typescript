/**
 * The data structure used by the hello world route
 */
export interface Greeting {
    greeting?: string; // Hello [A-Z]\w*!
}
declare namespace Responses {
    export type $200 = Greeting;
}
declare namespace Username {
    export type Username = string;
}
