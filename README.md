# _PickUp_

#### _Capstone Project for Epicodus, October 2017_

#### By _**Julian Flood**_

## Description

This is a website I made for people who want to come together to play basketball games in the Portland area. It allows you to create a profile, find and create games at parks in Portland, and also will track the players that play the most at the different parks!

https://github.com/julianflood1/pickup

## Images

### _Character Select Screen_
![character-select](https://user-images.githubusercontent.com/24885660/28997172-f80f79b8-79c2-11e7-813b-75b7422a160a.png)

### _Gameboard Screen_
![gameboard-attack](https://user-images.githubusercontent.com/24885660/28997171-f5073206-79c2-11e7-9a0b-3a2416bbe7da.png)
### _Welcome Screen_
![Splash](https://user-images.githubusercontent.com/24885660/31411401-65fddf8c-adc6-11e7-96af-0887b584f09d.png)
### _Gameplay Screen_
![Gameplay](https://user-images.githubusercontent.com/24885660/31411410-6a1935e4-adc6-11e7-8222-b51e01877bc7.png)
### _Select Game Screen_
![Select](https://user-images.githubusercontent.com/24885660/31411416-6ffc3574-adc6-11e7-9cf6-cb53979f2c04.png)



## Specifications

+ Player can sign up.
+ Player can sign in.
+ Player can create a profile.
+ Player can update their profile.
+ Player can create a new game event.
+ Player can join an existing game event.
+ Top five players will be tracked based on plays per park.
+ Player can sign out.


## Future features

+ API to allow user to input their own park.
+ Allow up to five players to be on each team.
+ Animations for aesthetics.
+ Sound effects on actions.
+ Ability to auto-delete games after event happens.
+ More elaborate leaderboard implemented.
+ Hosted Live.

## Setup/Installation Requirements

+ Use Terminal (on Mac) or Windows PowerShell (on Windows), enter the following to clone the repository:
<br>
<code> git clone </code> https://github.com/julianflood1/pickup

+ Make account with firebase to obtain API credentials.
+ Create a file called api-keys.ts in src/app.
+ Insert your personal Firebase API credentials in api-keys.ts
<pre>
export const masterFirebaseConfig= {
  apiKey: xxx,
  authDomain: xxx,
  databaseURL: xxx,
  projectId: xxx,
  storageBucket: xxx,
  messagingSenderId: xxx
}
</pre>
+ Run npm install
+ Run ng serve
+ In a web browser, navigate to localhost:4200.



## Known Bugs

+ _Editing profile currently is buggy on database side._
+ _Player can join same game multiple times._



## Support and contact details

_Email me at

julianflood@gmail.com

if you run into any issues_

## Technologies Used

_HTML, CSS, TypeScript, Angular 4, Angular 2 CLI, Firebase_

# AngularProject

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.


### License

*MIT*

Copyright (c) 2017 **_Julian Flood_**
