var b = 200;
const c = 400;
console.log(b - c);
const name = "emma";
console.log(`my name is ${name}`);
function Name(name) {
    console.log(`welcome mr ${name}`);
}
Name("Pat");

function Check(name, pricelist) {
    console.log(`hello ${name}, thank you for patronizing us;
    total cost of: ${pricelist}
                        bread: $50;
                        beverages: $100;
                        juice: $200.    
    `);
}
Check("Mike", "$350");
const names = () => {
    
    console.log("felix", "mark");
}
names();

const Student = {
    name: "Emma",
    level: 300,
    courses: ['ele1', 'ele3', 'ele5'],
    details() {
        this.courses.forEach(course => {
            let stud = this.name + " is doing this " + course + " course";
            console.log(stud);
        });
    }
}
Student.details();
const person = {};
const Man = {
    name: ["mike", "egwu"],
    age: 30,
    height: "4ft",
    bio: function() {
        console.log(`${this.name[0]}  ${this.name[1]} is ${this.age} years old`
        );
    },
    introduce: function() {
        console.log(`my name is ${this.name[0]}  ${this.name[1]}, thnk you for hosting me`);
    }
};

const Woman = {
    c: 3,
    d: 4,
    f() {
        console.log(`i am ${this.c}`);
    },
    y:"you"
}

const sch = {
    inst:{
        university:"unizik",
        nce:"unwana"
    },
    location: "lagos"
   
}
console.log(sch.inst.nce);

const school = {
    state: "lagos",
    side() {
        console.log(`hey i am ${this.state} in the south west`);
    }
}