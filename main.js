//Random Champion Variable
let randomChamp = '';

//Top Variables
const topIc = document.querySelector('.topIcon');
const topIm = document.querySelector('.topImage');
const topNa = document.querySelector('.topName');

//Jungle Variables
const jungleIc = document.querySelector('.jungleIcon');
const jungleIm = document.querySelector('.jungleImage');
const jungleNa = document.querySelector('.jungleName');

//Mid Variables
const midIc = document.querySelector('.midIcon');
const midIm = document.querySelector('.midImage');
const midNa = document.querySelector('.midName');

//ADC Variables
const adcIc = document.querySelector('.adcIcon');
const adcIm = document.querySelector('.adcImage');
const adcNa = document.querySelector('.adcName');

//Support Variables
const supportIc = document.querySelector('.suppIcon');
const supportIm = document.querySelector('.suppImage');
const supportNa = document.querySelector('.suppName');

//Champion Arrays
const randomTop = ['Garen', 'Darius', 'Gangplank', 'Sion', 'Renekton', 'Jax', 'Kled', 'Urgot', 'Yasuo', 'Irelia', 'Nasus', 'Dr. Mundo', 'Teemo', 'Yorick', 'Illaoi', 'Riven', 'Camille', 'Fiora', 'Tryndamere', 'Cho`Gath', 'Maokai', 'Malphite', 'Akali', 'Quinn', 'Vladimir', 'Singed', 'Jayce', 'Aatrox', 'Pantheon', 'Poppy', 'Rumble', 'Kennen', 'Shen', 'Gnar', 'Ornn', 'Sylas'];

const randomJungle = ['Graves', 'Evelynn', 'Lee Sin', 'Nocturne', 'Shyvana', 'Shaco', 'Jax', 'Hecarim', 'Kha\'Zix', 'Kindred', 'Rammus', 'Taliyah', 'Rengar', 'Kayn', 'Nidalee', 'Master Yi', 'Xin Zhao', 'Amumu', 'Warwick', 'Udyr', 'Camille', 'Trundle', 'Jarvan IV', 'Vi', 'Pantheon', 'Zac', 'Wukong', 'Nunu', 'Gragas', 'Sejuani', 'Elise', 'Rek\'Sai', 'Neeko', 'Sylas'];

const randomMid = ['Ahri', 'Zed', 'Yasuo', 'Karthus', 'Talon', 'Xerath', 'Fizz', 'LeBlanc', 'Irelia', 'Lux', 'Malzahar', 'Vladimir', 'Orianna', 'Twisted Fate', 'Vel\'Koz', 'Anivia', 'Veigar', 'Akali', 'Syndra', 'Kassadin', 'Ekko', 'Aurelion Sol', 'Viktor', 'Katarina', 'Swain', 'Cassiopeia', 'Zoe', 'Diana', 'Lissandra', 'Ryze', 'Azir', 'Neeko', 'Sylas'];

const randomAdc = ['Jhin', 'Kai\'Sa', 'Draven', 'Miss Fortune', 'Ezreal', 'Quinn', 'Twitch', 'Lucian', 'Jinx', 'Tristana', 'Caitlyn', 'Sivir', 'Varus', 'Ashe', 'Vayne', 'Xayah', 'Yasuo'];

const randomSupport = ['Morgana', 'Pyke', 'Nami', 'Sona', 'Soraka', 'Alistar', 'Brand', 'Zyra', 'Thresh', 'Blitzcrank', 'Lux', 'Vel\'Koz', 'Fiddlesticks', 'Zilean', 'Rakan', 'Bard', 'Leona', 'Janna', 'Karma', 'Taric', 'Braum', 'Lulu', 'Nautilus', 'Shen', 'Tahm Kench', 'Neeko', 'Sylas', 'Yuumi'];


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

//Random Generator for Top Lane
function topLane() {
	champSelect(randomTop);
    topIc.style.display = "none";
    topIm.style.display = "inline";
    topIm.src = '';
    topIm.src = 'ChampionArt/' + randomChamp + '.png';
	topNa.textContent = randomChamp; 
}


// Random Generator for Jungle
function jungle() {
    champSelect(randomJungle);
    jungleIc.style.display = "none";
    jungleIm.style.display = "inline";
    jungleIm.src = '';
    jungleIm.src = 'ChampionArt/' + randomChamp + '.png';
	jungleNa.textContent = randomChamp;   
}


//Random Generator for Mid Lane
function midLane() {
	champSelect(randomMid);
    midIc.style.display = "none";
    midIm.style.display = "inline";
    midIm.src = '';
    midIm.src = 'ChampionArt/' + randomChamp + '.png';
	midNa.textContent = randomChamp;  
}


//Random Generator for ADC
function adc() {
	champSelect(randomAdc);
    adcIc.style.display = "none";
    adcIm.style.display = "inline";
    adcIm.src = '';
    adcIm.src = 'ChampionArt/' + randomChamp + '.png';
	adcNa.textContent = randomChamp;    
}

//Random Generator for Support
function support() {
	champSelect(randomSupport);
    supportIc.style.display = "none";
    supportIm.style.display = "inline";
    supportIm.src = '';
    supportIm.src = 'ChampionArt/' + randomChamp + '.png';
	supportNa.textContent = randomChamp;
}





