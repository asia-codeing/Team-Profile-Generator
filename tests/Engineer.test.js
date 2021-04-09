const Engineer = require('../lib/Engineer');

test("Can set GitHUb account via constructor", () => {
    const employeeGitHub = 'GitHub Username';
    const engineer = new Engineer("Adam", 1, 'adam@test', employeeGitHub);
    expect(engineer.gitHub).toBe(employeeGitHub);
  });
  
  test("Can get GitHub username via getGitHub()", () => {
    const employeeGitHub = 'GitHub Username';    
    const engineer = new Engineer("Adam", 1, 'adam@test', employeeGitHub);
    expect(engineer.getGitHub()).toBe(employeeGitHub);
  });
  test("getRole() should return Engineer", () => {
    const employee = "Engineer";
    const engineer = new Engineer("Adam", 1, 'adam@test', 'GitHub Username');
    expect(engineer.getRole()).toBe(employee);
  });


// describe('Engineer', () => {
    
//     describe('Set GitHub', () => {
//         it("Shuold set GitHub account from the constructur", () => {
//             const employeeGitHub = 'GitHub Username';
//             const employee = new Engineer('Adam', 33, 'adam@test','Engineer',employeeGitHub);
//             expect(employee.gitHub).toBe(employeeGitHub);
//         });
//      });
//     describe('getGitHub', () => {
//        it("Shuold display emplyee's GitHub account", () => {
//            const employeeGitHub = 'GitHub Username';
//            const employee = new Engineer('Adam', 33, 'adam@test','Engineer',employeeGitHub);
//            expect(employee.getGitHub()).toBe(employeeGitHub);
//        });
//     });
//     describe('getRole',() =>{
//         it("Shuold display employee's role", () => {
//             const employeeRole = 'Engineer';
//             const employee = new Engineer('Adam', 33, 'adam@test','GitHub Username');
//             expect(employee.getRole()).toBe(employeeRole);
//         });
//     });
// })