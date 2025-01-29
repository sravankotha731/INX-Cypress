export default class Intercepts {
    public static interceptGetAPI(interceptAlias) {
        cy.get(interceptAlias).then((data) => {
            cy.intercept('GET', '/suppliers', (req) => {
                    req.reply((res) => {
                        res.send(data)
                    })
            });
        });
    };

    public static interceptGetProjectAPI(interceptAlias) {
        cy.get(interceptAlias).then((data) => {
            cy.intercept('GET', '/projects', (req) => {
                    req.reply((res) => {
                        res.send(data)
                    })
            });
        });
    };

    public static interceptGetProductAPI(interceptAlias) {
        cy.get(interceptAlias).then((data) => {
            cy.intercept('GET', '/projects/*', (req) => {
                    req.reply((res) => {
                        res.send(data)
                    })
            });
        });
    };
}