class Pet{
    constructor(name,age,type,breed,gender,services,owner,contactPhone, price, color){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.gender=gender;
        this.services=services;
        this.owner=owner;
        this.contactPhone=contactPhone;
        this.price=price;
        this.color=color;
    }
}

/*class Services{
    constructor(description, prices){
        this.description=description;
        this.prices=prices;
    }
}*/


function GetServicesPrices(Services){
    var Price=0;

    if(Services==="Shower"){
        Price = 50;
    }else if(Services==="Hair cut"){
        Price = 100;
    }else if(Services==="Gold services"){
        Price = 200;    
    }else if(Services==="Full services"){
        Price = 500;
    }
    return Number(Price);
}

var ObjSalon = {
    nameSalon:"Pets",
    address: {
        street: "Km2 Carretera Tijuana Colonia Zaragoza, Mexicali BC",
        number: "49"
    },
    hours:{
        open: "8 am",
        close: "4 pm"
    },
    pets:[    ]
}

var Porfirio = new Pet("Porfirio",7,"Dog","Cruza Husky", "Male", "Shower", "Jesus", "6862540081", GetServicesPrices("Full services"),"#ff00cc");
var Mistica = new Pet("Mistica",7,"Dog","Cruza Husky", "Female", "Full services", "Jesus", "6862540081",GetServicesPrices("Full services"),"#ff0099");
var Rafael = new Pet("Rafael",2,"Turtle","Turtle ninja", "Male", "Full services", "Jesus", "6862540081",GetServicesPrices("Full services"),"#098A00");
var LaPocha = new Pet("LaPocha",4,"Dog","Pitbull", "Female", "Gold services", "Jesus", "6862540081",GetServicesPrices("Gold services"),"#aa0011");
var Godzilla = new Pet("Godzilla",4,"Lizard","Lizard", "Male", "Full services", "Jesus", "6862540081",GetServicesPrices("Full services"),"#cc00c9");
var Napo = new Pet("Napo",6,"Dog","Dog", "Male", "Shower", "Jesus", "6862540081",GetServicesPrices("Gold services"),"#A19B72");

ObjSalon.pets.push(Porfirio);
ObjSalon.pets.push(Mistica);
ObjSalon.pets.push(Rafael);
ObjSalon.pets.push(LaPocha);
ObjSalon.pets.push(Godzilla);
ObjSalon.pets.push(Napo);

//console.log(ObjSalon.pets);
//get the inputs and store them in variables
var txtName = document.getElementById("name");
var txtage = document.getElementById("age");
var txttype = document.getElementById("type");
var txtbreed = document.getElementById("breed");
var txtgender = document.getElementById("gender");
var txtservices = document.getElementById("services");
var txtowner = document.getElementById("owner");
var txtcontactphone = document.getElementById("contactphone");
var txtcolorpet = document.getElementById("colorpet");

function clearInputs(){
    txtName.value="";
    txtage.value="";
    txttype.value="";
    txtbreed.value="";
    txtgender.value="";
    txtservices.value="";
    txtowner.value="";
    txtcontactphone.value="";
    txtcolorpet.value="#000000";
}

function register(){
    //create the Pet

    var NewPet = new Pet(txtName.value,txtage.value,txttype.value,txtbreed.value,txtgender.value, txtservices.value, txtowner.value, txtcontactphone.value, GetServicesPrices(txtservices.value), txtcolorpet.value);

    //Push the new pet
    ObjSalon.pets.push(NewPet);

    clearInputs();

    //console.log(ObjSalon.pets);
    
    display(ObjSalon);
}

