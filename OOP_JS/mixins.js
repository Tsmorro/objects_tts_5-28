var Profile={
    name : "John",

    address : "201 W. Peachtree St.",

    city : "Atlanta",

    state : "GA",

    zipcode : "30308",

    avatar : "avatar.png"
}
var changes= {};
Object.assign(changes, Profile);

var getProfileUpdate = function(){
    changes.name=prompt("Name: ","John Doe");
    changes.address=prompt("Address: ","201 W. Peachtree St.");   //changes.push("Address: "+changes.address);
    changes.city=prompt("City: ","Atlanta");
    changes.state=prompt("State: ","Georgia");
    changes.zipcode=prompt("Zipcode: ","30308");
    changes.avatar=prompt("Avatar: ","avatar.png");
    return changes;
}
getProfileUpdate();

Profile=Object.assign(Profile,changes);
console.log(Profile);