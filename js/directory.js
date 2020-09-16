function DisplayNumberPets(Array)
{
    return("Number of pets: "+Array.length);
}


function bubbleMetothod(ArrayTMP){
		for(var i=1;i<ArrayTMP.length;i++)
		{
			for(var j=0;j<(ArrayTMP.length-i);j++)
			{
				if(ArrayTMP[j].Age>ArrayTMP[j+1].Age)
				{
					k=ArrayTMP[j+1].Age;
					ArrayTMP[j+1].Age=ArrayTMP[j].Age;
					ArrayTMP[j].Age=k;
				}
			}
        }
 
		return ArrayTMP;
}

function GetMax(Array){
    Array = bubbleMetothod(Array);
    /*var max = Math.max.apply(Math, Array.pets.map(function(objArray) { 
        return objArray.Age; 
    }));*/
    return Array[Array.length-1].age;
}

function GetMin(Array){
    Array = bubbleMetothod(Array);
    /*var min = Math.min.apply(Math, Array.pets.map(function(objArray) { 
        return objArray.Age; 
    }));*/
    return Array[0].age;
}



function  display(ArrayObj){
    //Create vars
    var pets =  ArrayObj.pets;
    var text="";
    var petSection = document.getElementById("petSection");

    //document.getElementsByTagName
    var typePet = "";

    var TotalPrice = 0;
    var TotalPriceTax = 0;
    var Prices = 0;

    //Travel the pets array
    for(var x=0;x<pets.length;x++){
            //create the HTML text
            //console.log(pets[x]);
            //Prices = GetServicesPrices(pets[x].services);
            TotalPrice = TotalPrice + Number(pets[x].price);

            typePet = GetTypePet(pets[x].type, pets[x].color);

            text+=`<div class="pet">
                    <h2>${pets[x].name} | ${typePet}</h2>
                    <p>Age:${pets[x].age}</p>
                    <p>type:${pets[x].type}</p>                    
                    <p>Breed:${pets[x].breed}</p>                    
                    <p>Price:${pets[x].price}</p>                    
                    <p>Gender:${pets[x].gender}</p>                    
                    <p>Services:${pets[x].services}</p>                    
                    <p>Contact Phone:${pets[x].contactPhone}</p>                    
                </div>` ;

    }

    TotalPriceTax = TotalPrice * .16;
    Total = TotalPriceTax+TotalPrice;

    var NumberPets = DisplayNumberPets(pets);
    
    var Max = GetMax(pets);
    var Min = GetMin(pets);

    text = `<hr>Total Price:${TotalPrice} <br>Tax: ${TotalPriceTax} <br>Total: ${Total} <br>Older: ${Max} <br> Youngest: ${Min} <br> ${NumberPets} <hr>${text}`;


    petSection.innerHTML = text;
    //console.log(text);

    //display the per on the HTML

}

function GetTypePet(TypePet, color){
    const dogImg =`<i class="fas fa-dog" style="color:${color};"></i>`;
    const LizardImg = `<i class="fas fa-dragon" style="color:${color};"></i>`;
    const TurtleImg = `<i class="fas fa-user-ninja" style="color:${color};"></i>`;
    
    if(TypePet==="Dog"){
        TypePet = dogImg;
    }else if(TypePet==="Lizard"){
        TypePet = LizardImg;
    }else if(TypePet==="Turtle"){
        TypePet = TurtleImg;
    }
   
    return TypePet;
}



display(ObjSalon);


//EXTRA CHALLENGE: Disp[aly number of pets of the registered]