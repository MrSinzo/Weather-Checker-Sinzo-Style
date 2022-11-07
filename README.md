# Weather-Checker-Sinzo-Style
A Simple little 5-day Forecast of the Weather.  

## User Story
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

## Table of contents

### What is it?
### Why did I make this?
### How did I go about building this?
### Screenshot of working application and URL link
### Credits and Licenses

## What is it?
This is a simple yet useful application that can take any city name and give a weather forecast for both the current day and 5 days out into the week. 

## Why did I make this?
I wanted to help make travel plans a little simpler to create by allowing would-be travelers to check what the weather conditions are currently like for the places they wish to travel to.

## How did I go about building this?
I needed to create and HTML page and Lots of JavaScript. It mainly uses appends and createElements to display the data to the user and a couple of Weather API's to gather relavant data. 

To display the weather data for the current day, I used:
api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
Which can be found here: https://openweathermap.org/current#one

To display the forecast up to 5 days (Not including the Current Day), I used:
api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key} // 
Which can be found here: https://openweathermap.org/forecast5

## Screenshot of working application and URL link
![ScreenShot of Deplyed Application](/W-D_LIVE.png)

Deployed Website Link [Click Here!](https://mrsinzo.github.io/Weather-Checker-Sinzo-Style/)

## Credits and Licenses
Using MIT License [Check it here!](https://opensource.org/licenses/MIT)

Creator- Kyle Feldman - [LinkedIn Profile Link](https://www.linkedin.com/in/kyle-feldman-427b5624b)