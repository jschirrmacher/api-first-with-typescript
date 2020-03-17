/**
 * the answer
 */
export interface Answer {
    answer?: string;
}
/**
 * The data structure used by the hello world route
 */
export interface Greeting {
    greeting?: string; // Hello [A-Z]\w*!
}
declare namespace Question {
    export type Question = string;
}
declare namespace Responses {
    export type $200 = Answer;
}
declare namespace Username {
    export type Username = string;
}
