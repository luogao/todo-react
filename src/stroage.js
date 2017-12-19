const storeKey = 'react-todo-1.0'
const storage = window.localStorage

const myStore = {
    fetch: function () {
        let list;
        list = JSON.parse(storage.getItem(storeKey) || '[]')
        this.uid = list.length
        return list
    },
    save: function (val) {
        if (val) {
            storage.setItem(storeKey, JSON.stringify(val))
            this.fetch()
        }
    }
}

export default myStore