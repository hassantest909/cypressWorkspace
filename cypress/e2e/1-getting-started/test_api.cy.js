// Describe the test suite
describe('API Test', () => {
    // Define the first test
    it('should return a list of users', () => {
      // Send a GET request to the endpoint
      cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          // Ensure the response status is 200 OK
          expect(response.status).to.eq(200)
          // Ensure the response body contains at least one user
          expect(response.body).to.have.lengthOf.at.least(1)
        })
    })
  
    // Define the second test
    it('should create a new user', () => {
      // Define the user object to be created
      const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '555-555-5555'
      }
  
      // Send a POST request with the user object to the endpoint
      cy.request('POST', 'https://jsonplaceholder.typicode.com/users', user)
        .then((response) => {
          // Ensure the response status is 201 Created
          expect(response.status).to.eq(201)
          // Ensure the response body matches the created user object with an ID of 11
          expect(response.body).to.deep.equal({...user, id: 11})
        })
    })
  })