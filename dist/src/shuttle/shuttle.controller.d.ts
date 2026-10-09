export declare class ShuttleController {
    getSchedule(): {
        status: string;
        message: string;
        data: {
            id: number;
            route: string;
            time: string;
            status: string;
        }[];
    };
}
