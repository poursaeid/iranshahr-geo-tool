import http from 'http'
export * from "./JSONRes"

export type HTTP_SERVER = http.Server<typeof http.IncomingMessage, typeof http.ServerResponse> 