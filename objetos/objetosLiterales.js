const ayudanteDeSanta = {
	ojos: 2,
	patas: 4,
	nombre:'Ayudante de Santa',
	raza: 'huskito',
	ladrar: function () {
		return 'wau'
	},
	comer: function (comida) {
		if (comida === croquetas) {
			return 'fuchi wakala fifi'
		} else{
		return 'yum'
	}	
	},
}

const snoopy = {
	ojos: 2,
	patas: 4,
	nombre:'Snoopy',
	raza: 'beagle',
	ladrar: function () {
		return 'wau'
	},
	comer: function (comida) {
		if (comida === croquetas) {
			return 'fuchi'
		} else{
		return 'yum'
	}	
	},
}

console.log(ayudanteDeSanta.raza);
console.log(snoopy.raza);