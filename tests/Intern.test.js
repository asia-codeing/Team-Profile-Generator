const Intern = require('../lib/Intern');

test("Can set school via constructor", () => {
    const schoolName = 'UW';
    const intern = new Intern("Asser", 1, 'asser@test', schoolName);
    expect(intern.school).toBe(schoolName);
  });
  
  test("Can get school name via getSchool()", () => {
    const schoolName = 'UW';
    const intern = new Intern("Asser", 1, 'asser@test', schoolName);
    expect(intern.getSchool()).toBe(schoolName);
  });
  test("getRole() should return Manager", () => {
    const employee = "Intern";
    const intern = new Intern("Asser", 1, 'asser@test', 'UW');
    expect(intern.getRole()).toBe(employee);
  });
