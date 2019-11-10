/**
 * Created by ever on 2019/11/9.
 */


class MUtil {
    setStorage(name, data) {
        let dataType = typeof data

        if (dataType === 'object') {
            window.localStorage.setItem(name, JSON.stringify(data))
        } else if (['number', 'string', 'bool'].includes(dataType)) {
            window.localStorage.setItem(name, data)
        } else {
            throw new Error('类型不支持')
        }
    }

    isJsonStr(str) {
        try {
            if (typeof JSON.parse(str) === 'object') {
                return true
            }
        } catch (e) {
        }
        return false
    }

    getStorage(name) {

        const str = window.localStorage.getItem(name)
        if (str) {
            return this.isJsonStr(str) ? JSON.parse(str) : str
        } else {
            return ''
        }
    }

    clearStorage() {
        window.localStorage.clear()
    }
}

export default MUtil