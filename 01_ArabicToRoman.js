
const convertToRoman = (number) => {
    if (number > 3999) { return "De momento solo se puede convertir numeros menores a 3999"; }
    const numbers = {
        1: "I",
        4: "iV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M",
        4000: "IV"
    }
    
    let response = "";
    while(number > 0){
        let index = 0;
        for( const val in numbers){
            if(number < val){
                response += numbers[index];
                number= number - index;
                break;
            }
            index = val;
        }
    }
    return response;
}

const input = 3999;
console.log(convertToRoman(input));