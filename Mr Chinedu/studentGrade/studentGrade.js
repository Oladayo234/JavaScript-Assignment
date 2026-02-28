// const input = require('prompt-sync')();

const enterScores = (numberOfSubject, numberOfStudent) => {
    let scoreBoard = [];
    
    for(let count = 0; count < numberOfStudent; count++) {
        console.log(`\nEntering score for student ${count + 1}`);
        let student = { id: count + 1, scores: [] };

        for(let index = 0; index < numberOfSubject; index++) {
            console.log(`Enter score for subject ${index + 1}\n`);
            let score = parseInt(input(""));
            if(score >= 0 && score <= 100) {
                student.scores.push(score);
                console.log("Saving >>>>>>>>>>>>>>>>>>>>> ");
                console.log("Saved successfully ");
            } else {
                console.log("Invalid entry. Score must be between 0 and 100.");
                index--;
            }
        }

        scoreBoard.push(student);
        
        if(count < numberOfStudent - 1) {
            console.log("\nSaving >>>>>>>>>>>>>>>>>>>>> ");
            console.log("Saved successfully ");
        }
    }
    
    return scoreBoard;
}

const subjectAverages = (scoreBoard, numberOfStudent) => {
    let length = scoreBoard[0].scores.length;
    let subjectAverage = [];
    
    for(let count = 0; count < length; count++) {
        let sum = 0;
        for(let index = 0; index < numberOfStudent; index++) {
            sum += scoreBoard[index].scores[count];
        }
        subjectAverage.push(sum / numberOfStudent);
    }
    
    return subjectAverage;
}

const studentAverages = (scoreBoard, numberOfSubject) => {
    let studentAverage = [];
    
    for(let count = 0; count < scoreBoard.length; count++) {
        let sum = 0;
        for(let index = 0; index < numberOfSubject; index++) {
            sum += scoreBoard[count].scores[index];
        }
        studentAverage.push(sum / numberOfSubject);
    }
    
    return studentAverage;
}

const studentSumFunc = (scoreBoard, numberOfSubject) => {
    let studentSum = [];
    
    for(let count = 0; count < scoreBoard.length; count++) {
        let sum = 0;
        for(let index = 0; index < numberOfSubject; index++) {
            sum += scoreBoard[count].scores[index];
        }
        studentSum.push(sum);
    }
    
    return studentSum;
}

const subjectSumFunc = (scoreBoard, numberOfStudent) => {
    let length = scoreBoard[0].scores.length;
    let subjectSum = [];
    
    for(let count = 0; count < length; count++) {
        let sum = 0;
        for(let index = 0; index < numberOfStudent; index++) {
            sum += scoreBoard[index].scores[count];
        }
        subjectSum.push(sum);
    }
    
    return subjectSum;
}

const calculatePositions = (studentAverage) => {
    let positions = [];
    
    for(let count = 0; count < studentAverage.length; count++) {
        let position = 1;
        for(let index = 0; index < studentAverage.length; index++) {
            if(studentAverage[index] > studentAverage[count]) {
                position++;
            }
        }
        positions.push(position);
    }
    
    return positions;
}

const printTable = (scoreBoard, studentSum, studentAverage, positions, numberOfSubject) => {
    let numberOfStudent = scoreBoard.length;
    
    console.log("=".repeat(60));
    let header = "STUDENT\t\t";
    for(let count = 0; count < numberOfSubject; count++) {
        header += `SUB${count + 1}\t`;
    }
    header += "TOT\tAVE\tPOS";
    console.log(header);
    console.log("=".repeat(60));
    
    for(let count = 0; count < numberOfStudent; count++) {
        let row = `Student ${count + 1}\t`;
        for(let index = 0; index < numberOfSubject; index++) {
            row += `${scoreBoard[count].scores[index]}\t`;
        }
        row += `${studentSum[count]}\t`;
        row += `${studentAverage[count].toFixed(2)}\t`;
        row += positions[count];
        console.log(row);
    }
    
    console.log("=".repeat(60));
    console.log("=".repeat(60));
}

const printSubjectSummary = (scoreBoard, subjectAverage, subjectSum, numberOfStudent, numberOfSubject) => {
    console.log("\nSUBJECT SUMMARY");
    
    for(let count = 0; count < numberOfSubject; count++) {
        console.log(`Subject ${count + 1}`);
        
        let highestScore = scoreBoard[0].scores[count];
        let highestStudent = 0;
        let lowestScore = scoreBoard[0].scores[count];
        let lowestStudent = 0;
        let passes = 0;
        
        for(let index = 0; index < numberOfStudent; index++) {
            let score = scoreBoard[index].scores[count];
            if(score > highestScore) {
                highestScore = score;
                highestStudent = index;
            }
            if(score < lowestScore) {
                lowestScore = score;
                lowestStudent = index;
            }
            if(score >= 50) {
                passes++;
            }
        }
        
        console.log(`Highest scoring student is: Student ${highestStudent + 1} scoring ${highestScore}`);
        console.log(`Lowest Scoring student is: Student ${lowestStudent + 1} scoring ${lowestScore}`);
        console.log(`Total Score is: ${subjectSum[count]}`);
        console.log(`Average score is: ${subjectAverage[count].toFixed(2)}`);
        console.log(`Number of passes: ${passes}`);
        console.log(`Number of Fails: ${numberOfStudent - passes}`);
        console.log();
    }
}

const printHardestAndEasiestSubject = (scoreBoard, numberOfStudent, numberOfSubject) => {
    let maxFails = 0;
    let hardestSubject = 0;
    let maxPasses = 0;
    let easiestSubject = 0;
    
    for(let count = 0; count < numberOfSubject; count++) {
        let passes = 0;
        for(let index = 0; index < numberOfStudent; index++) {
            if(scoreBoard[index].scores[count] >= 50) {
                passes++;
            }
        }
        let fails = numberOfStudent - passes;
        
        if(fails > maxFails) {
            maxFails = fails;
            hardestSubject = count;
        }
        if(passes > maxPasses) {
            maxPasses = passes;
            easiestSubject = count;
        }
    }
    
    console.log(`The hardest subject is Subject ${hardestSubject + 1} with ${maxFails} failures`);
    console.log(`The easiest subject is Subject ${easiestSubject + 1} with ${maxPasses} passes`);
}

const printOverallHighestAndLowest = (scoreBoard, numberOfStudent, numberOfSubject) => {
    let overallHighest = scoreBoard[0].scores[0];
    let highestStudent = 0;
    let highestSubject = 0;
    let overallLowest = scoreBoard[0].scores[0];
    let lowestStudent = 0;
    let lowestSubject = 0;
    
    for(let student = 0; student < numberOfStudent; student++) {
        for(let subject = 0; subject < numberOfSubject; subject++) {
            let score = scoreBoard[student].scores[subject];
            if(score > overallHighest) {
                overallHighest = score;
                highestStudent = student;
                highestSubject = subject;
            }
            if(score < overallLowest) {
                overallLowest = score;
                lowestStudent = student;
                lowestSubject = subject;
            }
        }
    }
    
    console.log(`The overall Highest score is scored by Student ${highestStudent + 1} in subject ${highestSubject + 1} scoring ${overallHighest}`);
    console.log(`The overall Lowest score is scored by Student ${lowestStudent + 1} in subject ${lowestSubject + 1} scoring ${overallLowest}`);
    console.log("=".repeat(60));
}

const printClassSummary = (studentSum, numberOfStudent) => {
    let highestTotal = studentSum[0];
    let bestStudent = 0;
    let lowestTotal = studentSum[0];
    let worstStudent = 0;
    let classTotal = 0;
    
    for(let student = 0; student < numberOfStudent; student++) {
        if(studentSum[student] > highestTotal) {
            highestTotal = studentSum[student];
            bestStudent = student;
        }
        if(studentSum[student] < lowestTotal) {
            lowestTotal = studentSum[student];
            worstStudent = student;
        }
        classTotal += studentSum[student];
    }
    
    let classAverage = classTotal / numberOfStudent;
    
    console.log("=".repeat(60));
    console.log("\nCLASS SUMMARY");
    console.log("=".repeat(60));
    console.log(`Best Graduating Student is: Student ${bestStudent + 1} scoring ${highestTotal}`);
    console.log("=".repeat(60));
    console.log();
    console.log("!".repeat(60));
    console.log(`Worst Graduating Student is: Student ${worstStudent + 1} scoring ${lowestTotal}`);
    console.log("!".repeat(60));
    console.log();
    console.log("=".repeat(60));
    console.log(`Class total score is: ${classTotal}`);
    console.log(`Class Average score is: ${classAverage.toFixed(1)}`);
    console.log("=".repeat(60));
}

// let numberOfStudent = 0;
// let numberOfSubject = 0;

// while (true) {
//     numberOfStudent = parseInt(input("How many students do you have? "));
//     if (numberOfStudent > 0) {
//         console.log("Saving >>>>>>>>>>>>>>>>>>>>>  ");
//         console.log("Saved successfully\n");
//         break;
//     } else {
//         console.log("invalid entry. Please enter positive number.");
//     }
// }

// while (true) {
//     numberOfSubject = parseInt(input("How many subjects do they offer? "));
//     if (numberOfSubject > 0) {
//         console.log("Saving >>>>>>>>>>>>>>>>>>>>>  ");
//         console.log("Saved successfully\n");
//         break;
//     } else {
//         console.log("invalid entry. Please enter positive number.");
//     }
// }

// let scoreBoard = enterScores(numberOfSubject, numberOfStudent);
// let subjectAverage = subjectAverages(scoreBoard, numberOfStudent);
// let studentAverage = studentAverages(scoreBoard, numberOfSubject);
// let subjectSum = subjectSumFunc(scoreBoard, numberOfStudent);
// let studentSum = studentSumFunc(scoreBoard, numberOfSubject);
// let positions = calculatePositions(studentAverage);

// printTable(scoreBoard, studentSum, studentAverage, positions, numberOfSubject);
// printSubjectSummary(scoreBoard, subjectAverage, subjectSum, numberOfStudent, numberOfSubject);
// printHardestAndEasiestSubject(scoreBoard, numberOfStudent, numberOfSubject);
// printOverallHighestAndLowest(scoreBoard, numberOfStudent, numberOfSubject);
// printClassSummary(studentSum, numberOfStudent);

module.exports = { enterScores, subjectAverages, studentAverages, studentSumFunc, subjectSumFunc, calculatePositions, printTable, printSubjectSummary, printHardestAndEasiestSubject, printOverallHighestAndLowest, printClassSummary };