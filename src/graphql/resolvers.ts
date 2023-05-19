import { jsonReader } from "../utils";
import { CITIES_PATH } from "../configs";

export default {
    Query: {
        cities: () => {
            let { error, data } = jsonReader(CITIES_PATH)
            if (error) console.log(error);
            else return data
        },
    },
};