export declare const Roles: (...roles: string[]) => import("@nestjs/common").CustomDecorator<string>;
export declare class ShuttleController {
    getSchedule(req: any): {
        message: string;
        routes: {
            id: number;
            name: string;
            status: string;
        }[];
    };
    manageShuttle(req: any): {
        message: string;
        operated_by_core_user: any;
    };
}
