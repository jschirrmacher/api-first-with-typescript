declare namespace Get {
    namespace Responses {
        export type $200 = Greeting;
    }
}
/**
 * The data structure used by the hello world route
 */
export interface Greeting {
    greeting?: string;
}
