import { Anime } from "../model/anime";
import { Relation } from "../model/relation";
import { RelationEntry } from "../model/relation_entry";

export class Utilidades {


    static comparador(a: Anime, b: Anime): number {
        
        let fechaA = a.from;
        let fechaB = b.from;

        if (!fechaA && !fechaB) {
            return 0;
        } else if (!fechaB) {
            return -1;
        } else if (!fechaA) {
            return 1;
        }
        
        if (fechaA < fechaB) {
            return -1;
        } else if (fechaA > fechaB) {
            return 1;
        }
        return 0;
    }

    static validarRelacion(entry: RelationEntry) {
        return entry && entry.mal_id && entry.mal_id > 0;
    }
}