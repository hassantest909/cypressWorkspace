export class BaseClass{
    callAPI(json,url){
        return cy.request({
            method:'POST',
            url:url,
            headers:{
                'Authorization':'Bearer oBMLUgzWWOl5xl4K0KZRZpxpVUTj9Wd8jlxjJEY+q3Ga1rBKVisip76IKq52cnKp/qRyecP4NIzs+zETO7izpvqN7pRIex/CMDLco63aVdMYNpe+E31KQTBeZ00uiCdCcWgE0CPRRupo6+BJhWiQKQ=='
            },
            body:json,
        }).then((response)=>{
            return response
        })
    }
}