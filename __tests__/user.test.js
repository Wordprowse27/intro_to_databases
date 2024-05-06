// import sum from "../helper function/user.js"
import app from "../server.js"
import request from "supertest"
function sum(a, b){
    return a+b
};

test('two plus two is four',() =>{
    expect(sum(2,2)).toBe(4)
})

test("get all users with 200 status code", async()=>{
    let response = await request(app).get("/users")
    expect(response.status).toEqual(200)
})

test("get all users with response ", async()=>{
    let response = await request(app).get("/users")
    expect(response.status).toEqual(200)
})