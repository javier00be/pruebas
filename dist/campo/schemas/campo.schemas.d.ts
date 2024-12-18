export declare class Campo {
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    alias: string;
}
export declare const CampoSchema: import("mongoose").Schema<Campo, import("mongoose").Model<Campo, any, any, any, import("mongoose").Document<unknown, any, Campo> & Campo & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Campo, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Campo>> & import("mongoose").FlatRecord<Campo> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
