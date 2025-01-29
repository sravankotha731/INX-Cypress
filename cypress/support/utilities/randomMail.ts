export class RandomMail {
    public static getRandomText() {
        return 'Informa' + Math.random().toString(15).substring(2, 5);
    }

    public static getEmailAddress() {
        return this.getRandomText() + "@" + "yopmail.com";
    }

    public static getRandomProjectText() {
        return 'Project ' + Math.random().toString(36).substring(2, 10);
    }
}