import { OnModuleInit } from '@nestjs/common';
export declare class WhatsAppService implements OnModuleInit {
    private client;
    onModuleInit(): Promise<void>;
    sendMessage(to: string, message: string): Promise<void>;
}
