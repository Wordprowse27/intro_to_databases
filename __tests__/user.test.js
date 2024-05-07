// import sum from "../helper function/user.js"
import app from "../server.js"
import request from "supertest"
function sum(a, b){
    return a+b
};

test('two plus two is four',() =>{
    expect(sum(2,2)).toBe(4) 
})

// test("get all users with 200 status code", async()=>{
//     let response = await request(app).get("/users")
//     expect(response.status).toEqual(200)
// })

test("get all users with 200 status code", async () => {
    let response = await request(app).get("/users");
    expect(response.status).toEqual(200);
}, 10000);


test("get all users with response have the success being true", async()=>{
    let response = await request(app).get("/users")
    expect(response.body.success).toEqual(true)
})


test("auth header is missing", async()=>{
    let response = await request(app).get("/users")
    expect(response.status).toEqual(400)
})


test("set the authorization header", async()=>{
    let response = await request(app).get("/users").set("authorization,", "Bearer eytng;flvvvrfmvreigfn frfmve   ")
    expect(response.body.success).toEqual(true)
})