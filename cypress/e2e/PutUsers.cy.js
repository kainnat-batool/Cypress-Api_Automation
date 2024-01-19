import updateUserData from '../../config/updateUserRequest.json'
describe("PUT User Call", ()=>
{
    it("PUT User ",()=>
    {

        cy.request({
            method:'PUT',
            url:'https://gorest.co.in/public/v2/users/5983722',
            headers:{
                Authorization:'Bearer 9d59b5e58de84cdfff115a78df0147e31e3e7985c6554aac9817efd8530411e8'
            },
            body:{
                "name": " User",
                "gender": "male",
            }
        })
        .then((response)=>
        {
            expect(response.status).to.equal(200)
            
        })
        
    })

    it("PUT User -- Fixture File ",()=>
    {
        cy.fixture('updateUser').then((users)=>
        {   
        cy.request({
            method:'PUT',
            url:'https://gorest.co.in/public/v2/users/5983722',
            headers:{
                Authorization:'Bearer 9d59b5e58de84cdfff115a78df0147e31e3e7985c6554aac9817efd8530411e8'
            },
            body:users
        })
        .then((response)=>
        {
            expect(response.status).to.equal(200)
            
        })
    })
        
    })

    it("PUT User --- Config File",()=>
    {

        cy.request({
            method:'PUT',
            url:'https://gorest.co.in/public/v2/users/5983722',
            headers:{
                Authorization:'Bearer 9d59b5e58de84cdfff115a78df0147e31e3e7985c6554aac9817efd8530411e8'
            },
            body:updateUserData
        })
        .then((response)=>
        {
            expect(response.status).to.equal(200)
            
        })
        
    })

    it("E2E",()=>
    {

        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization:'Bearer 9d59b5e58de84cdfff115a78df0147e31e3e7985c6554aac9817efd8530411e8'
            },
            body:
                {
                    "email":"randomized4277@gamil.com",
                    "name": "fake User",
                    "gender": "female",
                    "status": "active"
                }
            
        })
        .then((response)=>
        {
            expect(response.status).to.equal(201)
            let id = response.body.id

            cy.request({
                method:'PATCH',
                url:'https://gorest.co.in/public/v2/users/'+ id,
                headers:{
                    Authorization:'Bearer 9d59b5e58de84cdfff115a78df0147e31e3e7985c6554aac9817efd8530411e8'
                }
            })
            .then((response)=>
            {
                expect(response.status).to.equal(200)
                
            })

            cy.request({
                method:'Get',
                url:'https://gorest.co.in/public/v2/users/' + id,
                headers:{
                    Authorization:'Bearer 9d59b5e58de84cdfff115a78df0147e31e3e7985c6554aac9817efd8530411e8'
                }
            })
            .then((response)=>
            {
                expect(response.status).to.equal(200)
                
            })

        })
    })
})