
const database = {
	studentsList: {
		'xamidullo': {
			name: "xamidullo",
			age: 33,
			id: 123,
			tolov: false
		},
        'azizbek': {
			name: "azizbek",
			age: 21,
			id: 124,
			tolov: true
		},
        'shahrukh': {
			name: "shahrukh",
			age: 25,
			id: 125,
			tolov: false
		}
	},

	create(user) {
		this.studentsList[user.name] = user;
		return this.studentsList;
	},

	read(name) {
		return this.studentsList[name];
	},

	update(name, user) {
		this.studentsList[name] = { ...this.studentsList[name], ...user };
		return this.studentsList[name];
	},

	delete(name) {
		delete this.studentsList[name];
		return this.studentsList;
	}

}

database.create({
	name: "xamidullo",
	age: 33,
	id: 123,
	tolov: false // yoki true
})

database.update("xamidullo", {
	name: "azizbek",
	age: 21,
	tolov: true
})

database.delete("xamidullo")

console.log(database.studentsList)