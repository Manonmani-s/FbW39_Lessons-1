// random tickets :
// function ticketGen() {
//     let result = Math.floor(Math.random() * 100 + 1);
//     let ticket = `T${result}`;
//     return ticket;
// }


function ticketGen() {
    ticket.innerHTML = `T${ Math.round(Math.random() * 100 + 1)}`;
    
}

let customers = ['Jon', 'Adam', 'Manon', 'Daniel'];

function giveTicketToCustomer(array) {
    
    // return a NEW array, every elemnt would be a customer and their Ticket
    // example of the result :['Jon T71', 'Adam T31', 'Manon T43', 'DanielT98']

    //tip : use a loop and add the ticket to each element in the array 
}


/*students = ['a','b','c', ...etc.]
projects = ['p1','p1' --]

function random group generator
1- to generate a group I need at least 3 students and one project
2- if I don't have enough students to craete a new group I will dived the rest of students to the created groups

real result :
['a','b','c','d','e','f','g','l']
['p1','p2','p3','p4']

[
{
    students:['c','e','b','l'],
    project: 'p4'
},

{
    students:['a','f','d','g'],
    project: 'p1'
}
]

*/


function groupGen(arrayS, arrayP) {
    
    if (arrayS.length < 3) return `Error : Pleae add at least three students`;
    if (arrayP.length == 0) return `Error: please add more projects !!!`;
    let index = 0;
    let groups = [];
    if (arrayS.length % 3 == 0) {
        for (let j = 0; arrayP.length != 0;) {
            groups[j] = {
                participants: [],
                project :''
            }
            do {
                index = Math.floor(Math.random() * arrayS.length);
                
                groups[j].participants.push(arrayS[index]);
    
                arrayS.splice(index, 1);
         
            } while (groups[j].participants.length < 3);
            index = Math.floor(Math.random() * arrayP.length);
            
            groups[j].project = arrayP[index];
            arrayP.splice(index, 1);
            j++;
            
        }
   }
   

    return groups;
    
}


const students = ['Safwan', 'Jon', 'Manon', 'Adam', 'Gabor', 'Matheus', 'Tareq'];
const projects = ['A', 'B', 'C', 'D'];

console.log(groupGen(students, projects));