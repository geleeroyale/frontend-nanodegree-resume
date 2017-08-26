/*
-SECTION 1- This section defines resume data as objects that gets appended to
index.html in the next section
 */
var bio = {
    'name': 'Gelee Royale',
    'role': 'Frontend development for the hive',
    contacts: {
        'mobile': '888-666',
        'email': 'em@il.com',
        'github': 'BBBB',
        'twitter': 'Hexagonia',
        'location': 'Queens Hive'
    },
    'welcomeMessage': 'Hi, I am a viscous liquid, produced by bees to feed the queen bee of their hive.',
    'biopic': '/images/lubitsch.png',
    skills: [
        'nourishing',
        'non-perishable',
        'delicious'
    ],

    display: function() {
        var userName = HTMLheaderName.replace('%data%', bio.name);
        var userRole = HTMLheaderRole.replace('%data%', bio.role);
        var contacts = HTMLcontactGeneric.replace('%data%', bio.contacts);
        var contactsMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        var contactsEmail = HTMLemail.replace('%data%', bio.contacts.email);
        var contactsGithub = HTMLgithub.replace('%data%', bio.contacts.github);
        var contactsTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
        var contactsLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        var welcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        var bioPic = HTMLbioPic.replace('%data%', bio.biopic);
        $('#header').prepend(userRole);
        $('#header').prepend(userName);
        $('#topContacts, #footerContacts').append(contactsMobile);
        $('#topContacts, #footerContacts').append(contactsEmail);
        $('#topContacts, #footerContacts').append(contactsGithub);
        $('#topContacts, #footerContacts').append(contactsTwitter);
        $('#topContacts, #footerContacts').append(contactsLocation);
        $('#header').append(welcomeMessage);
        $('#header').append(bioPic);
        $('#header').append(HTMLskillsStart);
        var skillsList = [];
        bio.skills.forEach(function(skill) {
            formattedSkills = HTMLskills.replace('%data%', skill);
            skillsList.push(formattedSkills);
        });
        $('#skills').append(skillsList);
    }
};

var work = {
    jobs: [{
            'employer': 'The Queenbee',
            'title': 'Frontend development for the hive',
            'location': 'Droneobia',
            'dates': '1971-1988',
            'description': 'The Queenbee relied heavily upon me.'
        },

        {
            'employer': 'Ambrosia',
            'title': 'Nectar of the Gods',
            'location': 'Olymp',
            'dates': '1990-1998',
            'description': 'I was chosen to be the sole food of the gods.'
        }
    ],

    display: function() {
        var jobList = [];
        work.jobs.forEach(function(job) {
            var formattedEmployer = HTMLworkEmployer.replace('%data%', (job).employer);
            var formattedTitle = HTMLworkTitle.replace('%data%', (job).title);
            var formattedLocation = HTMLworkLocation.replace('%data%', (job).location);
            var formattedWorkDates = HTMLworkDates.replace('%data%', (job).dates);
            var formattedDescription = HTMLworkDescription.replace('%data%', (job).description);
            jobList.push(formattedEmployer, formattedTitle, formattedLocation, formattedWorkDates, formattedDescription);
        });
        $('#workExperience').append(HTMLworkStart);
        $('.work-entry').append(jobList);
    }
};

var projects = {
    projects: [{
            'title': 'Teaching the drones',
            'dates': '1999-2000',
            'description': 'It was a jolly time!',
            'images': ['images/project01.jpg', 'images/project02.jpg']
        },

        {
            'title': 'Building a better hive',
            'dates': '2001-2008',
            'description': 'Here we learned the true meaning of one-for-all!',
            'images': ['images/project03.jpg', 'images/project04.jpg']
        }
    ],

    display: function() {
        var projectList = [];
        var formattedImages = [];
        projects.projects.forEach(function(project) {
            var formattedTitle = HTMLprojectTitle.replace('%data%', (project).title);
            var formattedDates = HTMLprojectDates.replace('%data%', (project).dates);
            var formattedDescription = HTMLprojectDescription.replace('%data%', (project).description);
            projectList.push(formattedTitle, formattedDates, formattedDescription);
            (project).images.forEach(function(image) {
                formattedImages = HTMLprojectImage.replace('%data%', image);
                projectList.push(formattedImages);
            });
        });
        $('#projects').append(HTMLprojectStart);
        $('.project-entry').append(projectList);
    }
};

var education = {
    schools: [{
            'name': 'Beeschool',
            'location': 'Beenopia',
            'degree': 'Bachelor',
            'majors': ['Viscosity', 'Taste'],
            'dates': '1917-1925'
        },

        {
            'name': 'Beeniversity',
            'location': 'Hivesville',
            'degree': 'Master of Honey',
            'majors': ['Nourishment', 'Quality'],
            'dates': '1927-1932'
        }
    ],

    onlineCourses: [{
            'title': 'Beedasity',
            'school': 'Beenopia',
            'dates': '1935-1940',
            'url': 'http://udacity.com'
        },

        {
            'title': 'Beedasity',
            'school': 'Hivesville',
            'dates': '1942-1956',
            'url': 'http://udacity.com'
        }
    ],

    display: function() {
        var schoolList = [];
        var coursesList = [];

        education.schools.forEach(function(school) {
            var formattedName = HTMLschoolName.replace('%data%', (school).name);
            var formattedLocation = HTMLschoolLocation.replace('%data%', (school).location);
            var formattedDegree = HTMLschoolDegree.replace('%data%', (school).degree);
            var formattedMajors = HTMLschoolMajor.replace('%data%', (school).majors);
            var formattedDates = HTMLschoolDates.replace('%data%', (school).dates);
            schoolList.push(formattedName, formattedLocation, formattedDegree, formattedMajors, formattedDates);
        });
        $('#education').append(HTMLschoolStart);
        $('.education-entry').append(schoolList);

        education.onlineCourses.forEach(function(course) {
            var formattedTitle = HTMLonlineTitle.replace('%data%', (course).title);
            var formattedSchool = HTMLonlineSchool.replace('%data%', (course).school);
            var formattedDates = HTMLonlineDates.replace('%data%', (course).dates);
            var formattedURL = HTMLonlineURL.replace('%data%', (course).url);
            coursesList.push(formattedTitle, formattedSchool, formattedDates, formattedURL);
        });
        $('.education-entry').append(HTMLonlineClasses);
        $('.education-entry').append(coursesList);
    }
};

var displayMap = function() {
    $('#mapDiv').append(googleMap);
};

/*
-SECTION 2- This section calls the display functions on the individual resume objects
*/
bio.display();
work.display();
projects.display();
education.display();
displayMap();
