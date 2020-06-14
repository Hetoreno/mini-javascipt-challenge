var johnInfo ={
    fullName: 'John Smith',
    mass: 34,
    height: 1.95,
    calcBmi: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var markInfo ={
    fullName: 'Mark Jacob',
    mass: 78,
    height: 1.69,
    calcBmi: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

johnInfo.calcBmi();
markInfo.calcBmi();
console.log(johnInfo, markInfo);

if (johnInfo.bmi > markInfo.bmi){
    console.log(johnInfo.fullName + ' has a higher BMI, with ' + johnInfo.bmi);
} else if (johnInfo.bmi < markInfo.bmi){
    console.log(markInfo.fullName + ' actually has a higher BMI thatn John, with ' + markInfo.bmi);
} else {
    console.log('Theyre both fat');
}