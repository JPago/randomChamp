//Random Champion Variable
var randomChamp = '';

//Champion Arrays
var randomTop = ['Garen', 'Darius', 'Gangplank', 'Sion', 'Renekton', 'Jax', 'Kled', 'Urgot', 'Yasuo', 'Irelia', 'Nasus', 'Dr. Mundo', 'Teemo', 'Yorick', 'Illaoi', 'Riven', 'Camille', 'Fiora', 'Tryndamere', 'Cho`Gath', 'Maokai', 'Malphite', 'Akali', 'Quinn', 'Vladimir', 'Singed', 'Jayce', 'Aatrox', 'Pantheon', 'Poppy', 'Rumble', 'Kennen', 'Shen', 'Gnar', 'Ornn'];

var randomJungle = ['Graves', 'Evelynn', 'Lee Sin', 'Nocturne', 'Shyvana', 'Shaco', 'Jax', 'Hecarim', 'Kha\'Zix', 'Kindred', 'Rammus', 'Taliyah', 'Rengar', 'Kayn', 'Nidalee', 'Master Yi', 'Xin Zhao', 'Amumu', 'Warwick', 'Udyr', 'Camille', 'Trundle', 'Jarvan IV', 'Vi', 'Pantheon', 'Zac', 'Wukong', 'Nunu', 'Gragas', 'Sejuani', 'Elise', 'Rek\'Sai'];

var randomMid = ['Ahri', 'Zed', 'Yasuo', 'Karthus', 'Talon', 'Xerath', 'Fizz', 'LeBlanc', 'Irelia', 'Lux', 'Malzahar', 'Vladimir', 'Orianna', 'Twisted Fate', 'Vel\'Koz', 'Anivia', 'Veigar', 'Akali', 'Syndra', 'Kassadin', 'Ekko', 'Aurelion Sol', 'Viktor', 'Katarina', 'Swain', 'Cassiopeia', 'Zoe', 'Diana', 'Lissandra', 'Ryze', 'Azir']

var randomAdc = ['Jhin', 'Kai\'Sa', 'Draven', 'Miss Fortune', 'Ezreal', 'Quinn', 'Twitch', 'Lucian', 'Jinx', 'Tristana', 'Caitlyn', 'Sivir', 'Varus', 'Ashe', 'Vayne', 'Xayah', 'Yasuo'];

var randomSupport = ['Morgana', 'Pyke', 'Nami', 'Sona', 'Soraka', 'Alistar', 'Brand', 'Zyra', 'Thresh', 'Blitzcrank', 'Lux', 'Vel\'Koz', 'Fiddlesticks', 'Zilean', 'Rakan', 'Bard', 'Leona', 'Janna', 'Karma', 'Taric', 'Braum', 'Lulu', 'Nautilus', 'Shen', 'Tahm Kench'];


//Random Generator for Top Lane
function topLane() {
	champSelect(randomTop);
    document.querySelector('.topIcon').style.display = "none";
    document.querySelector('.topImage').style.display = "inline";
    document.querySelector('.topImage').src = '';
    document.querySelector('.topImage').src = 'ChampionArt/' + randomChamp + '.png';
	document.querySelector('.topName').textContent = randomChamp;
}


// Random Generator for Jungle
function jungle() {
    champSelect(randomJungle);
    document.querySelector('.jungleIcon').style.display = "none";
    document.querySelector('.jungleImage').style.display = "inline";
    document.querySelector('.jungleImage').src = '';
    document.querySelector('.jungleImage').src = 'ChampionArt/' + randomChamp + '.png';
	document.querySelector('.jungleName').textContent = randomChamp;   
}


//Random Generator for Mid Lane
function midLane() {
	champSelect(randomMid);
    document.querySelector('.midIcon').style.display = "none";
    document.querySelector('.midImage').style.display = "inline";
    document.querySelector('.midImage').src = '';
    document.querySelector('.midImage').src = 'ChampionArt/' + randomChamp + '.png';
	document.querySelector('.midName').textContent = randomChamp;  
}


//Random Generator for ADC
function adc() {
	champSelect(randomAdc);
    document.querySelector('.adcIcon').style.display = "none";
    document.querySelector('.adcImage').style.display = "inline";
    document.querySelector('.adcImage').src = '';
    document.querySelector('.adcImage').src = 'ChampionArt/' + randomChamp + '.png';
	document.querySelector('.adcName').textContent = randomChamp;    
}

//Random Generator for Support
function support() {
	champSelect(randomSupport);
    document.querySelector('.suppIcon').style.display = "none";
    document.querySelector('.suppImage').style.display = "inline";
    document.querySelector('.suppImage').src = '';
    document.querySelector('.suppImage').src = 'ChampionArt/' + randomChamp + '.png';
	document.querySelector('.suppName').textContent = randomChamp;
}

//Function to Select Random Champs
function champSelect(arr) {
    var randomNumber = Math.floor(Math.random() * arr.length);
    for (i = 0; i < arr.length; i++) {
        switch (randomNumber){
			case randomNumber:
			randomChamp = arr[randomNumber];
			break;
		}
	}
}






