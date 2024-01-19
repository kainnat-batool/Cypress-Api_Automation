describe("Get Users", ()=>
{
    it('Get Users API Call',()=>
    {
        cy.request({
            method:'Get',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization:'Bearer 9d59b5e58de84cdfff115a78df0147e31e3e7985c6554aac9817efd8530411e8'
            }
        })
        .then((response)=>
        {
            expect(response.status).to.equal(200)
            
        })
    })

    it('Get Single User API Call',()=>
    {
        cy.request({
            method:'Get',
            url:'https://gorest.co.in/public/v2/users/5975294',
            headers:{
                Authorization:'Bearer 9d59b5e58de84cdfff115a78df0147e31e3e7985c6554aac9817efd8530411e8'
            }
            
        })
        .then((response)=>
        {
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(5975294)
            
        })
    })

    it('Get Users API Call - Invalid Url ',()=>
    {
        cy.request({
            method:'Get',
            url:'https://gorest.co.in/public/v2/user',
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