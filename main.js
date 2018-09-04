//Random Champion Variable
var randomChamp = '';

//Random Generator for Top Lane
function topLane() {
	var randomNumber = Math.floor(Math.random() * 34);
	var randomTop = ['Garen', 'Darius', 'Gangplank', 'Sion', 'Renekton', 'Jax', 'Kled', 'Urgot', 'Yasuo', 'Irelia', 'Nasus', 'Dr. Mundo', 'Teemo', 'Yorick', 'Illaoi', 'Riven', 'Camille', 'Fiora', 'Tryndamere', 'Cho`Gath', 'Malphite', 'Akali', 'Quinn', 'Vladimir', 'Singed', 'Jayce', 'Aatrox', 'Pantheon', 'Poppy', 'Rumble', 'Kennen', 'Shen', 'Gnar', 'Ornn'];
	for (i = 0; i < randomTop.length; i++) {
		switch (randomNumber){
			case randomNumber:
			randomChamp = randomTop[randomNumber];
			break;
		}
	}
	console.log(randomChamp);
};

// Random Generator for Jungle
function jungle() {
	var randomNumber = Math.floor(Math.random() * 31);
	var randomJungle = ['Graves', 'Evelynn', 'Lee Sin', 'Nocturne', 'Shyvana', 'Shaco', 'Jax', 'Hecarim', 'Kha\'Zix', 'Kindred', 'Rammus', 'Taliyah', 'Rengar', 'Kayn', 'Nidalee', 'Master Yi', 'Xin Zhao', 'Amumu', 'Warwick', 'Udyr', 'Camille', 'Trundle', 'Jarvan IV', 'Vi', 'Pantheon', 'Zac', 'Wukong', 'Nunu', 'Gragas', 'Sejuani', 'Elise'];
	for (i = 0; i < randomJungle.length; i++) {
		switch (randomNumber){
			case randomNumber:
			randomChamp = randomJungle[randomNumber];
			break;
		}
	}
	console.log(randomChamp);
};

//Random Generator for Mid Lane
function midLane() {
	var randomNumber = Math.floor(Math.random() * 31);
	var randomMid = ['Ahri', 'Zed', 'Yasuo', 'Karthus', 'Talon', 'Xerath', 'Fizz', 'LeBlanc', 'Irelia', 'Lux', 'Malzahar', 'Vladimir', 'Orianna', 'Twisted Fate', 'Vel\'Koz', 'Anivia', 'Veigar', 'Akali', 'Syndra', 'Kassadin', 'Ekko', 'Aurelion Sol', 'Viktor', 'Katarina', 'Swain', 'Cassiopeia', 'Zoe', 'Diana', 'Lissandra', 'Ryze', 'Azir']
	for (i = 0; i < randomMid.length; i++) {
		switch (randomNumber){
			case randomNumber:
			randomChamp = randomMid[randomNumber];
			break;
		}
	}
	console.log(randomChamp);
};
//Random Generator for ADC
function adc() {
	var randomNumber = Math.floor(Math.random() * 19);
	var randomAdc = ['Jhin', 'Kai\'Sa', 'Draven', 'Miss Fortune', 'Ezreal', 'Quinn', 'Twitch', 'Lucian', 'Jinx', 'Tristana', 'Caitlyn', 'Swain', 'Sivir', 'Varus', 'Ashe', 'Vayne', 'Xayah', 'Yasuo', 'Vladimir'];
	for (i = 0; i < randomAdc.length; i++) {
		switch (randomNumber){
			case randomNumber:
			randomChamp = randomAdc[randomNumber];
			break;
		}
	}
	console.log(randomChamp);
};


//Random Generator for Support
function support() {
	var randomNumber = Math.floor(Math.random() * 25);
	var randomSupport = ['Morgana', 'Pyke', 'Nami', 'Sona', 'Soraka', 'Alistar', 'Brand', 'Zyra', 'Thresh', 'Blitzcrank', 'Lux', 'Vel\'Koz', 'Fiddlesticks', 'Zilean', 'Rakan', 'Bard', 'Leona', 'Janna', 'Karma', 'Taric', 'Braum', 'Lulu', 'Nautilus', 'Shen', 'Tahm Kench'];
	for (i = 0; i < randomSupport.length; i++) {
		switch (randomNumber){
			case randomNumber:
			randomChamp = randomSupport[randomNumber];
			break;
		}
	}
	console.log(randomChamp);
};
