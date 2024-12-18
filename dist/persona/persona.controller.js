"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaController = void 0;
const persona_service_1 = require("./persona.service");
const common_1 = require("@nestjs/common");
const persona_dto_1 = require("./dto/persona.dto");
let PersonaController = class PersonaController {
    constructor(personaService) {
        this.personaService = personaService;
    }
    async insertarPersona(newPersona) {
        console.log(newPersona);
        return this.personaService.insertarPersona(newPersona);
    }
    async actualizarPersona(id, Persona) {
        return this.personaService.actualizarPersona(id, Persona);
    }
    async obtenerPersonas() {
        return this.personaService.obtenerPersonas();
    }
    async obtenerPersona(id) {
        return this.personaService.obtenerPersona(id);
    }
    async borrarPersona(id) {
        return this.personaService.borrarPersona(id);
    }
};
exports.PersonaController = PersonaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [persona_dto_1.CreatePersonaDto]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "insertarPersona", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, persona_dto_1.CreatePersonaDto]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "actualizarPersona", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "obtenerPersonas", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "obtenerPersona", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "borrarPersona", null);
exports.PersonaController = PersonaController = __decorate([
    (0, common_1.Controller)('persona'),
    __metadata("design:paramtypes", [persona_service_1.PersonaService])
], PersonaController);
//# sourceMappingURL=persona.controller.js.map