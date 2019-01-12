import { abc } from './my-file.js';
import css from './style.scss';
import jslogo from './js-logo.png';

console.log(css);

const imgElement = document.querySelector('#my-image');
const numberElement = document.querySelector('#my-number');

class MyClass{
	constructor(){
		this.x = 5;
	}
}

let a = new MyClass();


imgElement.setAttribute('src', jslogo);
imgElement.classList.add(css['img-border']);


numberElement.addEventListener('click', async function(){
	console.log(numberElement.value);
	//promise
	//import('./my-file.js')
	//	.then( module => {
	//		const { abc } = module;
	//		abc();
	//	})

	// async/await
	//const { abc } = await import('./my-file.js');
	abc();
})




if(module.hot){
	module.hot.accept('./my-file.js', function(){
		console.log('UPDATE: my-file.js');
	})
}