describe("Delete User",()=>
{
    it("Delete User",()=>
    {
        cy.request({
            method:'Post',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization:'Bearer 9d59b5e58de84cdfff115a78df0147e31e3e7985c6554aac9817efd8530411e8'
            },
            body:
            {
                "email":"fakeEmail@gmail.com",
                "name": "fake User",
                "gender": "female",
                "status": "active"
            }
        })
        .then((response)=>
        {
            expect(response.status).to.equal(201)
            expect(response.body).has.property("name","fake User")
            expect(response.body).has.property("gender", "female")
            expect(response.body).has.property("status","active")
            expect(response.body.id).to.not.be.null

            let userId=response.body.id


            cy.request({
                method:'Delete',
                url:'https://gorest.co.in/public/v2/users/'+ userId,
                headers:{
                    Authorization:'Bearer 9d59b5e58de84cdfff115a78df0147e31e3e7985c6554aac9817efd8530411e8'
                }
            })
            .then((response)=>
            {
                expect(response.status).to.equal(204) // No content
                
            })
            
            cy.request({
                method:'Get',
                url:'https://gorest.co.in/public/v2/users/'+ userId,
                headers:{
                    Authorization:'Bearer 9d59b5e58de84cdfff115a78df0147e31e3e7985c6554aac9817efd8530411e8'
                },
                failOnStatusCode:false
            })
            .then((response)=>
            {
                expect(response.status).to.equal(404)
                
            })
        })
    })
})