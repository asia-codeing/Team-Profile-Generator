const Engineer = require('../lib/Engineer');
describe('Engineer', () => {
    describe('getRole',() =>{
        it("Shuold display emplyee's role", () => {
            const emplyeeRole = 'Engineer';
            const emplyee = new Engineer(emplyeeRole);
            expect(emplyee.getRole()).toBe(emplyeeRole);
        });
    });
})