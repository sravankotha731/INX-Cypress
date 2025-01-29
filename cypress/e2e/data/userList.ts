const userList: Record<string, string> = {}

userList['INX Buyer'] = 'inxbuyerautomation@yopmail.com';
userList['INX Supplier'] = 'inxsupplier427@yopmail.com';
userList['INX Buyer Onboarding'] = 'inxstaggingtest@yopmail.com'
userList['INX Smoke Buyer'] = 'inxsomke@yopmail.com',
userList['INX Smoke Supplier'] = 'somkeseller@yopmail.com'

export class UserList {
    public static getUserList(userName : string) {
        return userList[userName];
    }
}