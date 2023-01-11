import { Pizza } from './pizza.js';

window.addEventListener("DOMContentLoaded", function(){
	
	let veggie = new Pizza("Veggie", "tomate", "fromage", "légumes");
	
	let meattie = new Pizza("Meattie", "tomate", "fromage", "viande");
	
	let fishie = new Pizza("Fishie", "tomate", "fromage", "poisson");
	
	console.log(veggie);
	console.log(meattie);
	console.log(fishie);
	
});