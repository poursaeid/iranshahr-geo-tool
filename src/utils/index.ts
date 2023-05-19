import fs from 'fs'

export const jsonReader = (filePath: string) => {
    // Return data and error as an object
    let data, error
    // Read the file synchronously
    try { 
        data = fs.readFileSync(filePath, { encoding: "utf-8" }) 
        data = JSON.parse(data)
    }

    catch (err) { error = err }

    finally {
        return { error, data }
    }
}
