# JS CSS Variables

## Description

The aim of this project is to learn how to modify CSS variables from Javascript according to the input values introduced by the user.

The interface is very simple:

* Input to change the size of the image by changing the padding
* Input to modify the blur effect value
* Input to change the background color of the site
* A series of images modified by the input values

CSS variables are declared in the :root of the CSS file. By using document.documentElement.style.setProperty('name', value) in JS, we are able to change a certain variable value by overwriting it depending on the input value. 

The input name is used as a hook to select each input type and variable name, while the data- attribute allows us to add the correct format to the each value (px or empty).

## Javascript Used

* querySelectorAll()
* data attribute
* documentElement.style
* this keyword
* addEventListener()
* CSS variables

## Credits

* [30 Day Vanilla JS Coding Challenge](https://javascript30.com/)

