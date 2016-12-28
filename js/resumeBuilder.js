/*
This is empty on purpose! Your code to build the resume will go here.
 */

 $("#main").append("Wayne Ye");
 var awesomeThoughts = "I am Wayne and I am AWESOME!";
 console.log(awesomeThoughts);

funThoughts=awesomeThoughts.replace("AWESOME","FUN");

 $("#main").append(funThoughts);

 var formattedName = "Wayne Ye";

 var formattedRole = "Web Developer";

 formattedName = HTMLheaderName.replace("%data%", formattedName);
 formattedRole = HTMLheaderRole.replace("%data%", formattedRole);


 var array_length = ["hello", "world"];
 console.log(array_length.length);

 var bio = {
 	"name" : "Wayne Ye",
 	"role" : "Web Developer",
 	"contact" : "yewenhe0904@gmail.com",
 	"picURL" : "images/fry.jpg",
 	"welcome message" : "Hello welcome to my profile page!",
 	"skills" : ["JS", "SQL", "VBA"]
 }

 $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
 $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));



