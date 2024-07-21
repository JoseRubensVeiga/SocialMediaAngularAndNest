"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureOpenApi = void 0;
const swagger_1 = require("@nestjs/swagger");
const configureOpenApi = (app) => {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Social Media')
        .setDescription("Social Media API's")
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
};
exports.configureOpenApi = configureOpenApi;
//# sourceMappingURL=open-api.js.map