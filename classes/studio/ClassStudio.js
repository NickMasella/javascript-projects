//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate{
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        if (typeof scores !== typeof []){
            throw Error("Invalid data type passed into scores parameter");
        }
        this.scores = scores;
    }

    addScore(newScore){
        this.scores.push(newScore);
    }

    average(){
        let total = 0;
        for (let i = 0; i < this.scores.length; i++){
            total += this.scores[i];
        }
        return Math.round(total/this.scores.length* 10) / 10;
    }

    status(){
        if (this.average() >= 90){
            return 'Accepted';
        } else if (this.average() >= 80){
            return 'Reserve';
        } else if (this.average() >= 70){
            return 'Probationary';
        } else {
            return 'Rejected';
        }
    }

    statusCall(){
        return `${this.name} earned an average test score of ${this.average()}% and has a status of ${this.status()}`;
    }
}

let bear = new CrewCandidate('Bubba Bear', '135 kg', [88, 85, 90]);
let bird = new CrewCandidate('Merry Maltese', '1.5 kg', [93, 88, 97]);
let alligator = new CrewCandidate('Glad Gator', '225 kg', [75, 78, 62]);

console.log(bear);
console.log(bird);
console.log(alligator);

bear.addScore(83);
console.log(bear.scores);
console.log(bird.average());

console.log(bear.statusCall());
console.log(bird.statusCall());
console.log(alligator.statusCall());
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

function boostScore(candidate){
    let additionalScores = 0;
    while(candidate.average() < 90){
    candidate.addScore(100);
    additionalScores++;
    if (candidate.average() >= 90){
        return additionalScores
    }   
    }
}
console.log(boostScore(alligator));
