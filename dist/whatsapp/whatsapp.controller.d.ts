import { WhatsAppService } from './whatsapp.service';
export declare class WhatsAppController {
    private readonly whatsappService;
    constructor(whatsappService: WhatsAppService);
    sendMessage(body: {
        to: string;
        message: string;
    }): Promise<{
        status: string;
    }>;
}
