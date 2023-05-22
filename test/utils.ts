import request from "supertest";
import { httpServer } from "../src/setup-express";


export const jsonContentTypesTest = (endpoint: string) => {
    endpoint = encodeURI(endpoint) // Encode uri for rtl parameters
    test("should specify json in the content type header", async () => {
        const res = await request(httpServer).get(endpoint);
        expect(res.headers["content-type"]).toEqual(
            expect.stringContaining("json")
        );
    });
}

export const stausCode200Test = (endpoint: string) => {
    endpoint = encodeURI(endpoint) // Encode uri for rtl parameters
    test("should respond with a 200 status code", async () => {
        const res = await request(httpServer).get(endpoint);
        expect(res.statusCode).toBe(200);
    });
}

export const trueSuccessStatusTest = (endpoint: string) => {
    endpoint = encodeURI(endpoint) // Encode uri for rtl parameters
    test("should response success status to be true", async () => {
        const res = await request(httpServer).get(endpoint);
        expect(res.body.success).toBe(true);
    });
}

export const noNullDataTest = (endpoint: string) => {
    endpoint = encodeURI(endpoint) // Encode uri for rtl parameters
    test("should not the response data be null", async () => {
        const res = await request(httpServer).get(endpoint);
        expect(res.body.data).toBeDefined();
    });
}

export const basicApiTest = (endpoint: string) => {
    jsonContentTypesTest(endpoint)
    stausCode200Test(endpoint)
    trueSuccessStatusTest(endpoint)
    noNullDataTest(endpoint)
}