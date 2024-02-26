export class UtilBD {
    static async getBaseDeDatos() {

        return new Promise<any>((resolve, reject) => {
            try {
                let peticion = indexedDB.open("magallanes", 2);
                peticion.onsuccess = () => {
                    resolve(peticion.result);
                };
                peticion.onerror = (error) => {
                    reject(error);
                }
                peticion.onupgradeneeded = () => {
                    let baseDeDatos = peticion.result;
                    if (!baseDeDatos.objectStoreNames.contains('animes')) {
                      baseDeDatos.createObjectStore('animes', {keyPath: 'id'});
                    } else {
                        resolve(baseDeDatos);
                    }
                  };
            } catch (error) {
                reject(error);
            }
        });
    }

    static borrarCache(callback: () => void) {
        UtilBD.getBaseDeDatos().then(db => {
            db.transaction(["animes"], "readwrite")
            .objectStore("animes")
            .clear().onsuccess = (() => {
              callback();
            });
          });
    }
    
}