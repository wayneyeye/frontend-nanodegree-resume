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


if (bio.skills.length!=0){
	$("#header").append(HTMLskillsStart);
}
for (skill in bio.skills){
	$("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
}

var work = {
	"jobs" : [
		{
			"employer" : "Nestle",
			"title" : "Process Engineer",
			"location" : "Shanghai",
			"dates" : "2012/07 - 2012/08",
			"description" : "Summer Internship"
		},
		{
			"employer" : "Italenta, inc",
			"title" : "SQL Developer",
			"location" : "Denver, CO",
			"dates" : "2016/06-2016/12",
			"description" : "Senior Developer"
		}
	]
}

if (work.jobs.length > 0)
{
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.jobs[job].employer)+HTMLworkTitle.replace("%data%",work.jobs[job].title));
	}
}
