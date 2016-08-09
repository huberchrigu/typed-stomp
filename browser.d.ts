declare interface Stomp {
    over(socket: sockjs.SockJSClass): StompClient;
}

declare interface StompClient {
    connect(opts: any, callback: (frame: any) => void);
    subscribe(topic: string, callback: (message: string) => void);
    disconnect();
    send(endpoint: string, opts, message: string);
}

declare let Stomp: Stomp;