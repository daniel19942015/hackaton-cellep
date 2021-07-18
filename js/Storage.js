class Store {
    constructor(name) {
        this._local_storage = localStorage
        this._name_storage = name
        this.createStorage.bind(this)
        this.addToStorage.bind(this)
    }

    /**
     * @param {String} dados 
     */

    createStorage(dados) {
        if (!this._local_storage
            .getItem(this._name_storage)) {

            this._local_storage
                .setItem(this._name_storage, dados)
        }
    }

    /** 
     * @param {Object} dados 
     */

    addToStorage(dados) {
        if (typeof dados === "object" && !Array.isArray(dados)) {
            if (this._local_storage
                .getItem(this._name_storage)) {

                //Get last_data is string    
                let last_data = JSON.parse(this._local_storage
                    .getItem(this._name_storage))

                this._local_storage.clear(this._name_storage)

                last_data.push(dados)

                last_data = JSON.stringify(last_data)

                this._local_storage.setItem(this._name_storage, last_data)

            }else{
                this.createStorage(this._name_storage, dados)
            }
        } else {
            throw new Error("Param is not object")
        }
    }

    removeStore(){
        this._local_storage.removeItem(this._name_storage)
    }
}

var store = new Store("dados")

var dados = JSON.stringify([
    { nome: "Data", result: 10 }
])

store.createStorage(dados)
store.addToStorage()