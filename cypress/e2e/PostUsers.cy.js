import userData from '../../config/userRequest.json'

describe("Post Users -- Positive Scenrios", ()=>
{
// We can also use faker library for this purpose
    function generateEmail()
    {
        const random=Math.random().toString(36).substring(2,10)
        const email=random + '@gmail.com'
        return email

    }

    
    it('Post Users API Call',()=>
    {
        let randomEmail=generateEmail()
        cy.request({
            method:'Post',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization:'Bearer 9d59b5e58de84cdfff115a78df0147e31e3e7985c6554aac9817efd8530411e8'
            },
            body:
            {
                "email":randomEmail,
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

            
        })
    })


    it('Post Users API Call -- JSON',()=>
    {
        let randomEmail=generateEmail()
        let payload={
            "email":randomEmail,
            "name": "fake User",
            "gender": "female",
            "status": "active"
        }

        cy.request({
            method:'Post',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization:'Bearer 9d59b5e58de84cdfff115a78df0147e31e3e7985c6554aac9817efd8530411e8'
            },
            body:payload         
        })
        .then((response)=>
        {
            expect(response.status).to.equal(201)
            expect(response.body).has.property("name","fake User")
            expect(response.body).has.property("gender", "female")
            expect(response.body).has.property("status","active")
            expect(response.body.id).to.not.be.null

            
        })
    })


    it(' POST CALL - Fixtures', () => {
        cy.fixture('users').then((responseObject) => {
            responseObject.email = generateEmail()

            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers: {

                    Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
                },
                body: responseObject

            }).then((response) => {
                expect(response.status).to.equal(201)
                expect(response.body).has.property("name","fake User")
                expect(response.body).has.property("gender", "female")
                expect(response.body).has.property("status","active")
                expect(response.body.id).to.not.be.null
            })


        })
      
    })


    it('Post Users API Call-- Config File And Chaining',()=>
    {
        userData.email=generateEmail()
        cy.request({
            method:'Post',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization:'Bearer 9d59b5e58de84cdfff115a78df0147e31e3e7985c6554aac9817efd8530411e8'
            },
            body:userData
        })
        .then((response)=>
        {
            expect(response.status).to.equal(201)
            expect(response.body).has.property("name","fake User")
            expect(response.body).has.property("gender", "female")
            expect(response.body).has.property("status","active")
            expect(response.body.id).to.not.be.null


            let id = response.body.id
            cy.request({
                method:'Get',
                url:'https://gorest.co.in/public/v2/users/'+id,
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


describe('Post Call --- Negative Scenrios',()=>
{
    function generateEmail()
    {
        const random=Math.random().toString(36).substring(2,10)
        const email=random + '@gmail.com'
        return email

    }
    it('Post Users API Call - Invalid Token',()=>
    {
        let randomEmail=generateEmail()
        cy.request({
            method:'Post',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization:'Bearer 9d59b5e58de84cdfffe31e3e7985c6554aac9817efd8530411e8'
            },
            body:
            {
                "email":randomEmail,
                "name": "fake User",
                "gender": "female",
                "status": "active"
            },
            failOnStatusCode:false
        })
        .then((response)=>
        {
            expect(response.status).to.equal(401)     
        })
    })


    it('Post Users API Call - Duplicate Data',()=>
    {
        cy.request({
            method:'Post',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization:'Bearer 9d59b5e58de84cdfff115a78df0147e31e3e7985c6554aac9817efd8530411e8'
            },
            body:
            {
                "email":"random@gamil.com",
                "name": "fake User",
                "gender": "female",
                "status": "active"
            },
            failOnStatusCode:false
        })
        .then((response)=>
        {
            expect(response.status).to.equal(422)     
        })
    })

    it('Post Users API Call -- Missing Field',()=>
    {
        let randomEmail=""
        cy.request({
            method:'Post',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization:'Bearer 9d59b5e58de84cdfff115a78df0147e31e3e7985c6554aac9817efd8530411e8'
            },
            body:
            {
                "email":randomEmail,
                "name": "fake User",
                "gender": "female",
                "status": "active"
            },
            failOnStatusCode:false
        })
        .then((response)=>
        {
            expect(response.status).to.equal(422)     
        })
    })
})