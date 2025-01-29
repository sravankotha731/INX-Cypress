import { SiteList } from "../../e2e/data/siteList";

export class UrlUtility {
    public static urlBuilder(site: string) {
        let finalUrl: string;
        let env = Cypress.env("environment");
        let siteUrl = SiteList.getSiteList(site);

        switch(env) {
            case 'dev': {
                finalUrl = 'https://dev-' + siteUrl + '.com/';
                break;
            };
            case 'stage': {
                finalUrl = 'https://staging-' + siteUrl + '.com/';
                break;
            };
            case 'prod': {
                finalUrl = 'https://' + siteUrl + '.com/';
                break;
            };
            case 'local': {
                finalUrl = 'http://localhost:3000/';
                break;
            }
        }

        return finalUrl;
    }
}