const Manager = require('../lib/Manager');

test("Can set office number via constructor", () => {
    const employeeOfficeNum = 111;
    const manager = new Manager("Ahmed", 1, 'ahmed@test', employeeOfficeNum);
    expect(manager.officeNum).toBe(employeeOfficeNum);
  });
  
  test("Can get office number via getOfficeNum()", () => {
    const employeeOfficeNum = 111;
    const manager = new Manager("Ahmed", 1, 'ahmed@test', employeeOfficeNum);
    expect(manager.getOfficeNum()).toBe(employeeOfficeNum);
  });
  test("getRole() should return Manager", () => {
    const employee = "Manager";
    const manager = new Manager("Ahmed", 1, 'ahmed@test', 111);
    expect(manager.getRole()).toBe(employee);
  });



// describe('Manager', () => {
//     describe('getRole',() =>{
//         it("Shuold display emplyee's role", () => {
//             const emplyeeRole = 'Manager';
//             const emplyee = new Manager(emplyeeRole);
//             expect(emplyee.getRole()).toBe(emplyeeRole);
//         });
//     });
//     describe('getOfficeNum', () => {
//        it("Shuold display emplyee's office number", () => {
//            const emplyeeOfficeNum = 1111;
//            const emplyee = new Manager(emplyeeOfficeNum);
//            expect(emplyee.getOfficeNum()).toBe(emplyeeOfficeNum);
//        });
//     });
// })