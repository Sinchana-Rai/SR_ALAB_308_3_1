// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);


const strg_data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// const strg_data = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"


let cell_data1 =""
let cell_data2= ""
let cell_data3= ""
let cell_data4 =""



let non_slash_string = strg_data.split("\n")   // split rows at \n
let entirerow = non_slash_string.toString()    //convert to string

// console.log(entirerow)
let non_comma_string = entirerow.split(",")   //split at commas
// console.log(non_comma_string)

for(let i=0;i<non_comma_string.length;i++)
{
    cell_data1 = non_comma_string[i]  
    cell_data2 = non_comma_string[i+1]
    cell_data3 = non_comma_string[i+2]
    cell_data4 = non_comma_string[i+3]

    console.log(`${cell_data1}  ${cell_data2} ${cell_data3} ${cell_data4}`)  
    i+=3
}

