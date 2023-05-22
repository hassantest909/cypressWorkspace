
  <reference types = 'Cypress' />

import { BaseClass } from "./baseClass"

const base = new BaseClass()

describe('Test user login',()=>{
    
    it('OTP api test', () => {
        
        cy.fixture('example.json').then((fixture)=>{
            base.callAPI(fixture,'http://10.0.0.13:8080/helper/generateOtp').then((response)=>{
                expect(response).to.have.property('status',200)
                expect(response.body).to.have.property('responseCode',"00")
                expect(response.body).to.have.property('responseCode',"00")
                
            })
        }) 
            
    })

    it('basic performance sanity', () => {
        for(let i=0;i<100;i++) {
        cy.fixture('example.json').then((fixture)=>{
            base.callAPI(fixture,'http://10.0.0.13:8080/helper/generateOtp').then((response)=>{
                expect(response).to.have.property('status',200)
                // expect(response.duration).to.not.be.greaterThan(500)
                expect(response.duration).to.not.be.greaterThan(100)
            })
        }) 
        }
    })


})