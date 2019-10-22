/*import React from 'react';
import ReactDOM from 'react-dom';*/

/*const element = document.createElement('h1');
element.innerText = 'Bienvenido a Mapa de Adriana'

const container = document.getElementById('app');

container.appendChild(element);*/

/*const element = <h1>Bienvenido a Mapa de Adriana</h1>;*/
/*const element = React.createElement('h1', {}, 'Bienvenido a Mapa de Adriana');*/
/*const element = React.createElement('a', {href: 'https://laboratoria.la'}, 'Ir a Laboratoria');*/
/*const name = 'Tiendas de México';
const sum = () => 3 + 4;*/
/*const element = React.createElement('h1', {}, `Bienvenido a Mapa de ${name}`);*/
/*const jsx = <h1>Bienvenido a Mapas de {_expression_}</h1> dentro de las llaves van expresiones que se pueden contabilizar con una variable*/
/*si son falsos como = 0, undifined, vacio (no se van a reflejar)*/
/*const jsx = <h1>Bienvenido a Mapas de {sum()}</h1>*/
/*const jsx = <h1>Bienvenido a Mapas de {name}</h1>*/
/*--------------------------------------------
const jsx = (
	<div>
<h1>Hola, soy Adriana Sánchez</h1>
<h2>Front-End Developer</h2>
</div>
);

const element = React.createElement (
'div',
{},
React.createElement('h1', {sum}, 'Hola, soy Adriana'),
React.createElement('h2', {}, 'Soy Front-End Developer'),	
);
const container = document.getElementById('app');
---------------------------------------------*/
/*import React from 'react';
import ReactDOM from 'react-dom';


const element = (
	<div>
<h1>Hola, soy Adriana Sánchez</h1>
<h2>Front-End Developer</h2>
</div>
);

const container = document.getElementById('app');

ReactDOM.render(element, container);
----------------------------------------------- */


import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import BadgeNew from './Pages/BadgeNew';
import Map from './Components/Map';

const container = document.getElementById('app');

ReactDOM.render(<Map />, container);











