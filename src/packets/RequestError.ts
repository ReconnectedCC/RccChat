import {Data} from "./Data";

/** 
 * Sent by the server when an error occurs.
 * 
 * @see https://docs.reconnected.cc/chatbox/websocket.html#error-packet
 */
export interface RequestError extends Data {
    id: number | undefined;

    /** The type of error that occurred. */
    error: string;

    /** A human-readable message describing the error. */
    message: string;
}
