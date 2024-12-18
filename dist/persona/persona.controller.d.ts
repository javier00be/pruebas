import { PersonaService } from './persona.service';
import { CreatePersonaDto } from './dto/persona.dto';
export declare class PersonaController {
    private personaService;
    constructor(personaService: PersonaService);
    insertarPersona(newPersona: CreatePersonaDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/persona.schema").Persona> & import("./schemas/persona.schema").Persona & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    actualizarPersona(id: string, Persona: CreatePersonaDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/persona.schema").Persona> & import("./schemas/persona.schema").Persona & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    obtenerPersonas(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/persona.schema").Persona> & import("./schemas/persona.schema").Persona & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    obtenerPersona(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/persona.schema").Persona> & import("./schemas/persona.schema").Persona & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    borrarPersona(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/persona.schema").Persona> & import("./schemas/persona.schema").Persona & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
