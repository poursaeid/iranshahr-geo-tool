import * as utils from "./utils";
import { LANGS } from "../src/configs/consts";
import { jsonReader } from "../src/utils";
import { CITIES_PATH } from "../src/configs";

const API_PATH = '/api/cities'
let endpoint: string = API_PATH

describe(`GET ${endpoint}`, () => {
  utils.basicApiTest(endpoint)
});

endpoint = `${API_PATH}/langs`;
describe(`GET ${endpoint}`, () => {
  utils.basicApiTest(endpoint)
});

endpoint = `${API_PATH}/list`
describe(`GET ${endpoint}/{lang}`, () => {

  LANGS.map((lang) => {
    describe(`GET ${endpoint}/${lang}`, () => {
      utils.basicApiTest(`${endpoint}/${lang}`)
    })
  })

})


endpoint = API_PATH
describe(`GET ${endpoint}/{city}/{lang}`, () => {
  const { error, data } = jsonReader(CITIES_PATH)
  if (error) console.error(error)
  else {
    // Only test the first object 
    const city: object = data[0]
    const cityKeys = Object.keys(city)
    LANGS.map((lang, index) => {
      // @ts-ignore
      const cityByLang = city[cityKeys[index]]
      describe(`GET ${endpoint}/${cityByLang}/${lang}`, () => {
        utils.basicApiTest(`${endpoint}/${cityByLang}/${lang}`)
      })
    })
  }

})