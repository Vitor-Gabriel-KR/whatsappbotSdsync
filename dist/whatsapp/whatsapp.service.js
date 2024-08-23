"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsAppService = void 0;
const common_1 = require("@nestjs/common");
const venom_bot_1 = require("venom-bot");
let WhatsAppService = class WhatsAppService {
    async onModuleInit() {
        this.client = await (0, venom_bot_1.create)({
            session: 'main'
        });
        console.log(`
      qr informations::

      ${JSON.stringify(await this.client.getQrCode())}
      `);
        this.client.onMessage((message) => {
            const messageReceived = `
      Message Received:
      From: ${message.sender.id}
      Name: ${message.sender.name}
      IsGroup: ${message.isGroupMsg}
      Text: ${message.body}
      `;
            console.log(messageReceived);
        });
    }
    async sendMessage(to, message) {
        await this.client.sendText(to, message);
    }
};
exports.WhatsAppService = WhatsAppService;
exports.WhatsAppService = WhatsAppService = __decorate([
    (0, common_1.Injectable)()
], WhatsAppService);
//# sourceMappingURL=whatsapp.service.js.map