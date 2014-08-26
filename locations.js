//locations.js
//copyright 2014 Ingersoll Rand plc
//created by Ken Hubbell

//DO NOT EDIT THE FOLLOWING TWO LINES OF CODE
var centerofworld = [38.680632, -96.5001]		//somewhere in Kansas
var locations = [];					//initialize location array - arrays start with 0 as the first location

//This file is used with the locations.html file to display marker locations on a google map using the google map API
//Each location and the associated classes are constructed using the following format

//put a commented <name of location> here for ease of maintenance (ie. you can search on the physical city name to find in this file)
//var classes_# = [];					//add _# for each location
//classes_#[0] = ["class one", 28];			//[class name, number of students] (arrays start with 0 as the first location)
//classes_#[1] = ["class two", 20];			//[class name, number of students] 

//locations[0] = ["name of location", 45.0890497, -93.0454644, classes_1];	//format [latitude, longitude, classes_#] (arrays start with 0 as the first location)

//----------------put your locations after this comment


//St. Paul, MN
var classes_1 = [];					// add _# for each location
classes_1[0] = ["class one", 28];			//[class name, number of students]
classes_1[1] = ["class two", 20];			//[class name, number of students]

locations[0] = ["St. Paul, MN", 45.0890497, -93.0454644, classes_1];	//format [latitude, longitude, classes_#]

//Davidson, NC
var classes_2 = [];
classes_2[0] = ["class one", 17];

locations[1] = ["Davidson, NC", 35.543209, -80.852959, classes_2];