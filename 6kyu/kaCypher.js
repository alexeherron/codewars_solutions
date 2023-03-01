//KA CYPHER
// Introduction

// Ka ka ka cypher is a cypher used by small children in some country. When a girl wants to pass something to the other girls and there are some boys nearby, she can use Ka cypher. So only the other girls are able to understand her.
// She speaks using KA, ie.:
// ka thi ka s ka bo ka y ka i ka s ka u ka gly what simply means this boy is ugly.
// Task

// Write a function that accepts a string word and returns encoded message using ka cypher.

// Our rules:
//     The encoded word should start from ka.
//     The ka goes after vowel (a,e,i,o,u)
//     When there is multiple vowels together, the ka goes only after the last vowel
//     When the word is finished by a vowel, do not add the ka after

// Input/Output
// The word string consists of only lowercase and uppercase characters. There is only 1 word to convert - no white spaces.
// Example

// "a" => "kaa"
// "ka" => "kaka"
// "aa" => "kaaa"  
// "Abbaa" => "kaAkabbaa"
// "maintenance" => "kamaikantekanakance"
// "Woodie" => "kaWookadie"
// "Incomprehensibilities" => "kaIkancokamprekahekansikabikalikatiekas"

// Remark
// Ka cypher's country residents, please don't hate me for simplifying the way how we divide the words into "syllables" in the Kata. I don't want to make it too hard for other nations ;-P

//MY SOLUTION
function kaCypher(string){
    for(i = string.length-2; i >= 0 ; i--){
        if(/[aeiouAEIOU]/.test(string[i]) && !(/[aeiouAEIOU]/.test(string[i+1]))){
            string = string.substring(0,i+1) + 'ka' + string.substring((i+1))
        }
    }
    string = 'ka' + string;
    return string;
}

//OTHER CLEVER SOLUTION
kaCokadekaMe=w=>'ka'+w.match(/([^aeiou]*[aeiou]+|[^aeiou]+$)/gi).join('ka');