const repo = { 
    name: "LaunchX",
    author: "sergiocortes",
    language: "JavaScript",
    numberOfCommits: 5,
    stars: 0,
    forks: 3,
    issues_open: 3,
    issues_close: 3,
    getTotalIssues: function(){
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`
    }

}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales:" + repo.getTotalIssues())
console.log(repo.getGeneralInfo())