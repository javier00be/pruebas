import { Persona } from './schemas/persona.schema';
import { Model } from 'mongoose';
import { CreatePersonaDto } from './dto/persona.dto';
export declare class PersonaService {
    private personaModel;
    constructor(personaModel: Model<Persona>);
    insertarPersona(Persona: CreatePersonaDto): Promise<import("mongoose").Document<unknown, {}, Persona> & Persona & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    actualizarPersona(id: string, Persona: CreatePersonaDto): Promise<import("mongoose").Document<unknown, {}, Persona> & Persona & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    obtenerPersonas(): Promise<(import("mongoose").Document<unknown, {}, Persona> & Persona & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    obtenerPersona(id: string): Promise<import("mongoose").Document<unknown, {}, Persona> & Persona & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    borrarPersona(id: string): Promise<import("mongoose").Document<unknown, {}, Persona> & Persona & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
