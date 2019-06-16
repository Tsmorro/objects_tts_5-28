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

    //.changes.push("Name: "+changes.name);
    changes.address=prompt("Address: ","201 W. Peachtree St.");   //changes.push("Address: "+changes.address);
    changes.city=prompt("City: ","Atlanta");
       //changes.push("City: "+changes.city);
    changes.state=prompt("State: ","Georgia");
       //changes.push("State: "+changes.state);
    changes.zipcode=prompt("Zipcode: ","30308");
   //changes.push("Zipcode :"+changes.zipcode);
    changes.avatar=prompt("Avatar: ","avatar.png");
        //changes.push("Avatar :"+changes.avatar); */
    return changes;
}
getProfileUpdate();

Profile=Object.assign(Profile,changes);
console.log(Profile);