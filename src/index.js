module.exports = function toReadable (number) {
    let oneTen = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    let tenTwenty = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let twentyHundred = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    let newNum = number;
    let str = '';
    let index = 0;
    if (newNum >= 100){
        index = (newNum-(newNum%100))/100;
        str = oneTen[index] + ' hundred';
        newNum = newNum%100;        
    }
    if (newNum >= 20 && newNum < 100){
        index = ((newNum-(newNum%10))/10)-2;        
        str ? str = str +' '+ twentyHundred[index] : str = str + twentyHundred[index]
        newNum = newNum%10;      
    }
    if (newNum >=10 && newNum <=19) {
        index = newNum%10;
        str ? str = str + ' ' + tenTwenty[index] : str = str + tenTwenty[index]
    }
    if (newNum > 0 && newNum < 10){
        index = newNum%10;
        str ? str = str + ' ' + oneTen[index] : str = str + oneTen[index]
    }
    if (newNum == 0 && str.length == 0){
        str = oneTen[newNum];
    } 
    return str;
}
