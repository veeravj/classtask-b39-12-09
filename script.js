// https://restcountries.com/v3.1/all
fetch('https://restcountries.com/v3.1/all')

// .then((data)=>console.log(data))

.then((data)=>data.json())
.then((countries)=>{
    // console.log(countries);
    // let nextLine=document.createElement('br')\
    // let flag=document.createElement('div');
    // flag.setAttribute('class', 'flag-container');


    // let flagImage=document.createElement('img');
    // flagImage.setAttribute('src',countries[0].flags.svg); 
    // let information=document.createElement('div');
    // information.setAttribute('class','information-container');
    // let countryName=document.createElement('h2');
    // let population=document.createElement('span');
    // let region=document.createElement('span');
    // let capital=document.createElement('span');
    // countryName.innerText=`${countries[0].name.common}`;
    // population.innerText=`Population:${countries[0].population}`;
    // region.innerText=`region:${countries[0].region}`;
    // capital.innerText=`Population:${countries[0].capital[0]}`;


    // information.append(countryName,population,nextLine);
    // information.append(region,nextLine,capital)
    // flag.append(flagImage);
    // card.append(flag,information);
    // document.body.append(card)

    function countryCards(country){
    let countryCard=document.createElement('div');
    countryCard.setAttribute('class','card-container');
    countryCard.innerHTML=`<img class="flag" src="${country.flags.svg}" alt="Flag image of${country.name.common}">
    <div class="information">
    <h2>${country.name.common}</h2>
    <p><span class="highlight">Population:</span>${country.population}</p>
    <p><span class="highlight">region:</span>${country.region}</p>
    <p><span class="highlight">capital:</span>${country.capital}</p>
    </div>
    `;
    document.body.append(countryCard);

    }
countries.forEach(countryCards);
    
})