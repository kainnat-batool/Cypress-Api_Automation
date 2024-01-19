describe('E2E Flow',()=>
{
    it('e2e using commands File',()=>
    {
       let payload={
            "email":"random55555@gamil.com",
            "name": "fake User",
            "gender": "female",
            "status": "active"
        }

        cy.PostCall(payload).then((response)=>
        {
            expect(response.status).to.be.equal(201)
           let userId=response.body.id
            cy.PutCall(userId,payload).then((response)=>
            {
                expect(response.status).to.be.equal(200)
            })

            cy.GetCall(userId).then((response)=>
            {
                expect(response.status).to.be.equal(200)
            })
            cy.DeleteCall(userId).then((response)=>
            {
                expect(response.status).to.be.equal(204)
            })
        })

       

        
    })
})