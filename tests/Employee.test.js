const Employee = require('../lib/Employee');

describe('Employee',() =>{
    describe('getName',()=> {
        it("Shuold display emplyee's name",()=> {
            const emplyeeName = 'Asia';
            const emplyee = new Employee(emplyeeName);
            expect(emplyee.getName()).toBe(emplyeeName); 
        });
    });
    describe('getId', ()=> {
        it("Should display  emplyee's ID", () => {
            const emplyeeId = 22;
            const emplyee = new Employee('Asia', emplyeeId);
            expect(emplyee.getId()).toBe(emplyeeId );
        });
    });
    describe('getEmail',() =>{
        it("Shuold display emplyee's Email address", () => {
            const emplyeeEmail = 'test.test@example';
            const emplyee = new Employee('Asia', 22, emplyeeEmail);
            expect(emplyee.getEmail()).toBe(emplyeeEmail);
        });
    });
    describe('getRole',() =>{
        it("Shuold display emplyee's role", () => {
            const emplyeeRole = 'Employee';
            const emplyee = new Employee('Asia', 22,'test.test@example',emplyeeRole);
            expect(emplyee.getRole()).toBe(emplyeeRole);
        });
    });
})