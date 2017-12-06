var bio = {
	"name": "Alaa Habib",
	"role": "Web Developer",
	"contacts": {
		"email": "AlaaHabib364@gmail.com",
		"github": "AlaaHabib364",
		"twitter": "@AlaaHabib13",
		"location": "Alexandria,Egypt",
		"mobile":"01114399848"
	},
	"biopic": "images/me.jpg",
	"welcomeMessage": "Strong self-learner with high level of development skills . Self-confident and can manage a team or work with agroup ."+" Have a strong basis of object oriented programming and how to implement the code and the design",
	"skills": ["C++", "Java", "Networks","Algorithms","WordPress","Web Applications","Html","CSS","Data structures", "Machine learning"]
};


var education = {
 "schools": [
  {"name": "Faculty of Science",
   "dates": "2015",
   "location": "Alexandria,Egypt",
   "degree": "Very Good",
   "majors": ["Computer Science",
    "statistic"],
   "url": "www.scialex.org"
  }  
 ],
 "onlineCourses": [
  { "school": "Udacity",
   "title": "Front-End Web Developer Nanodegree Program",
   "dates": "2017",
   "url": "www.udacity.com"
  },
  { "school": "Udacity",
   "title": "Object-Oriented Programming",
   "dates": "2016",
   "url": "www.udacity.com"
  }
 ]
};



var work = {
	"jobs": [
		{
   "employer": "Ezz ELdekhela ",
   "title": "IT",
   "location": "Alexandria, Egypt",
   "dates": "2015",
   "description":"this work is about Networks"	},
  {
   "employer": "Arab Computers ",
   "title": "Web Developer",
   "location": "Alexandria, Egypt",
   "dates": "2016,2017",
   "description":"this work is about web Developer"
  }
	]
};



var projects = {
	"projects": [
		{
			"title": "Faculty Of Science",
			"dates": "2017",
			"description": "online website for faculty of Science",
			"images": ["images/Faculty of science.jpg"],
   "url":"www.FacultOfScience.com"
			
		},
		{
			"title": "Online Portfolio",
			"dates": "2017",
			"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/portfolio.jpg"],
   "url":"www.AlaaHabibPortfolio.com"
		},
		{
			"title": "Digtal Libraries",
			"dates": "2017",
			"description": "online website for Digtal Libraries.",
			"images": ["images/DL.jpg"],
   "url":"www.DL.com"
			
		}
	]
};

 bio.display = function(){
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(var i = 0, len = bio.skills.length; i < len; i++) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for (var j = 0; j < formattedContactInfo.length; j++) {
	$("#topContacts").append(formattedContactInfo[j]);
	$("#footerContacts").append(formattedContactInfo[j]);
}};

bio.display();

work.display = function() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(var i = 0, len = work.jobs.length; i < len; i++) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);

		}

	}

};

work.display();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(var i = 0, iLen = projects.projects.length; i < iLen; i++) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(var j = 0, jLen = projects.projects[i].images.length; j < jLen; j++) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
};

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(var i = 0, iLen = education.schools.length; i < iLen; i++) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
		//	var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		//	$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(var k = 0, len = education.onlineCourses.length; k < len; k++) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
};

education.display();


$('#mapDiv').append(googleMap);



