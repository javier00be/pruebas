"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaModule = void 0;
const common_1 = require("@nestjs/common");
const persona_controller_1 = require("./persona.controller");
const persona_service_1 = require("./persona.service");
const mongoose_1 = require("@nestjs/mongoose");
const persona_schema_1 = require("./schemas/persona.schema");
let PersonaModule = class PersonaModule {
};
exports.PersonaModule = PersonaModule;
exports.PersonaModule = PersonaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: persona_schema_1.Persona.name,
                    schema: persona_schema_1.PersonaSchema,
                },
            ]),
        ],
        controllers: [persona_controller_1.PersonaController],
        providers: [persona_service_1.PersonaService],
    })
], PersonaModule);
//# sourceMappingURL=persona.module.js.map