import fs from 'fs'
// TODO ADD FN TYPE FOR THE CB
// https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#optional-parameters-in-callbacks
export const jsonReader = (filePath: string, cb: (err: any, data: object) => void) => {
    // Read the file asynchronously
    fs.readFile(filePath, 'utf-8', (err, fileData) => {
        if (err) return cb(err, {})
        // Parse the json string
        try {
            const dataObj = JSON.parse(fileData)
            return cb(null, dataObj)
        } catch (e) {
            cb(e, {})
        }
    })
}
