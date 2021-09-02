const faker = require('faker');
const fs = require('fs');

function generateData(){
    let dataarray = []
    let chartData = []
    for(let id=1; id<=100;id++){
        let firstName = faker.name.firstName();
        let middlename = faker.name.middleName();
        let lastname = faker.name.lastName();
        let gender = faker.name.gender();
        let contact =  faker.phone.phoneNumber();
        let username = faker.internet.userName();
        let email = faker.internet.email();

        dataarray.push({
            "firstName":firstName,
            "middlename":middlename,
            "lastname":lastname,
            "gender":gender,
            "contact":contact,
            "username":username,
            "email":email

        });
    }
    for(let id=1; id<=50;id++){
        let department = faker.commerce.department();
        let price = faker.commerce.price();
        

        chartData.push({
            "department":department,
            "price":price,
           
        });
    }
    return {
        "data":dataarray,
        "chart":chartData
    }
}

let dataObj = generateData();

fs.writeFileSync('data.json',JSON.stringify(dataObj,null,'\t'));