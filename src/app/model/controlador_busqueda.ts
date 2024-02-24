import { Anime } from "./anime";

export class ControladorBusqueda {
    public cancelar: boolean;
    public alAnadir: (anime: Anime) => void;
    public constructor() {
        this.cancelar = false;
        this.alAnadir = (anime: Anime) => { };
    }
}