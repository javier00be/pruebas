export declare class Persona {
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    alias: string;
}
export declare const PersonaSchema: import("mongoose").Schema<Persona, import("mongoose").Model<Persona, any, any, any, import("mongoose").Document<unknown, any, Persona> & Persona & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Persona, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Persona>> & import("mongoose").FlatRecord<Persona> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
