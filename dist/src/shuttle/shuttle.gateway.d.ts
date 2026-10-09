import { Server } from 'socket.io';
export declare class ShuttleGateway {
    server: Server;
    handleLocationUpdate(data: {
        shuttleId: string;
        lat: number;
        lng: number;
    }): {
        event: string;
        status: string;
    };
}
