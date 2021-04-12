const generateCards = teamInfo => {
 
    const manager = teamInfo.manager.map(function(job) {
        let managerHtml = `
        <div class="card card-column">
            <div class="card-header">
                <h2>${job.name}</h2>
                <h4 class="job-title">Manager</h4>
            </div>
            <div class="card-body">
                <p class="e-ID">ID: ${job.id}</p>
                <p class="email">Email: <a href="mailto:${job.email}">${job.email}</a></p>
                <p class="office-no">Office Number: ${job.officeNum}</p>
            </div> 
        </div>
        `
        return managerHtml
    });

    const engineer = teamInfo.engineer.map(function(job) {
        let engineerHtml = `
        <div class="card card-column">
            <div class="card-header">
                <h2>${job.name}</h2>
                <h4 class="job-title">Engineer</h4>
            </div>
        <div class="card-body">
                <p class="e-ID">ID: ${job.id}</p>
                <p class="email">Email: <a href="mailto:${job.email}">${job.email}</a></p>
                <p class="github">GitHub Username: <a href="https://github.com/${job.gitHub}" target="_blank" rel="noopener noreferrer">${job.gitHub}</a></p>
            </div> 
        </div>
        `
        return engineerHtml
    })

    const intern = teamInfo.intern.map(function(job) {
        let interHtml = `
        <div class="card card-column">
            <div class="card-header">
                <h2>${job.name}</h2>
                <h4 class="job-title">Intern</h4>
            </div>
            <div class="card-body">
                <p class="e-ID">ID: ${job.id}</p>
                <p class="email">Email: <a href="mailto:${job.email}">${job.email}</a></p>
                <p class="school">School: ${job.school}</p>
            </div> 
        </div>
        `
        return interHtml
    })
   
    let employee = [manager,engineer,intern];
    return employee.join('');

}

module.exports = templateInfo => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./styel.css">
            <title>My Team</title>
        </head>
        <body>
            <header>
                <h1 class="header-title">My Team</h1>
            </header>
            <main>
                <div id="card-row">
                  ${generateCards(templateInfo)}
                </div>
            </main>
        </body>
        </html>    
      `
}