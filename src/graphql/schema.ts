export default `#graphql

type City {
  en: String
  fa: String
  ckb: String
  ar: String
  latitude: Float
  longitude: Float
  elevation: Float
}

type Query {
  cities: [City]
}

`;