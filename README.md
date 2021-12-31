[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Jsx](https://img.shields.io/badge/JSX-23159c?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/docs/introducing-jsx.html)
[![Typescript](https://img.shields.io/badge/TYPESCRIPT-3466f0?style=for-the-badge&logo=typescript&logoColor=1c1275)](https://www.typescriptlang.org/)


# TsModale

<p align="center">
  🪟 tsmodale is a typescript modale plugin, to display for a form validation on submit for example 🪟
</p>


![Mockup of the project](https://i.imgur.com/7OStcHE.png[/img])

<!-- <p align="center">
<a href="https://sportseeapp.netlify.app/">🌍 Live démo
</a>
</p> -->


## 1. Npmjs package

The npm package can be viewed by following the link: [TsModale](https://www.npmjs.com/package/tsmodale)

## 2. Author

Thomas Semeria


## 3. Languages

- Typescript tsx

## 4. Installation

```bash
# Install the package on your projet
npm install tsmodale
```	
Then import it on your app
```js
import {Modale} from "tsmodale";
```
If you use Typescript, import also the types
```js
import {Modale, ModaleProps} from "tsmodale";
```

## 5 Props

- The modale need one required props, who is the text you want to be displayed on this. Obligatorily a string.
```html
<Modale text="Congratulations, you successly created a new employee !"/>
```
- You can choose a personnal colour, just give a colour prop on a string like below. If you don't put this prop, the default color will be black. Obligatorily a string.
```html
<Modale text="Congratulations, you successly created a new employee !" colour="#8acd32"  />
```
- You can put an autoclose prop, with the time in milliseconds. In this case, the modale disapears after the parameted time. In the exemple, the modale will disapear after 2 seconds. If set, the button will not appear, the modale only appears and disappears. And no action can be setting on the button. Obligatorily a number.
```html
<Modale text="Congratulations, you successly created a new employee !" colour="#8acd32" autoclose={2000} />
```
- buttonText props is the text who need to be displayed on the button, not required if autoclose param is set, but need to be set if not. It will be the text on the button to confirm an action. Obligatorily a string.
```html
<Modale text="Congratulations, you successly created a new employee !" buttonText="OK" colour="#8acd32"  />
```
- Set a function you need to be called on the click of the button, to hide the modale and/or other actions.
```js
const [showModale, setShowModale] = useState(true);

const hideModale = () => {
	setShowModale(false);
}
```
```html
<Modale text="Congratulations, you successly created a new employee !" colour="#8acd32" buttonText="OK" hideModale={hideModale} />
```
## Why this modale plugin ?
I build this modale for the 14th project for the React front-end developer [formation](https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react#main_content) of OpenClassRooms.
It was a part of the following instructions:
- We need to transform an app build with jquery, in react. There is 4 plugins (DatePicker, modale, Employee table, Select Menu) with some issues, so we need to transform on React components, and choose one to make a npm published package, to import it on our app. So here there is a fantastic customizable modale for the React App !!

##### Technologies
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled-components](https://styled-components.com/)
