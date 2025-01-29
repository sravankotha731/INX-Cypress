const siteList: Record<string, string> = {}

siteList['INX'] = 'inxchange.ingredientsnetwork';

export class SiteList {
    public static getSiteList(siteName : string) {
        return siteList[siteName];
    }
}