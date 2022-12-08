let url = 'https://restcountries.com/v3.1/all';
let infBox = document.getElementById('inf_box');
let input = document.querySelector('input');
let box_container = document.getElementById('box_container');

function getBox(){
    axios.get(url).then((res)=>{
        res.data.forEach((element) => {
            console.log(element);
            box_container.innerHTML +=`
            <div class="inf_box">
            <img src="${element.flags.svg}" alt="" />
            <p class="country">${element.name.common}</p>
            <p class="population">Population: <span class="span_population">${element.population}</span></p>
            <p class="region">Region: <span class="span_region">${element.region}</span></p>
            <p class="capital">Capital: <span class="span_capital">${element.capital}</span></p>
          </div>`
        });

    })
}

getBox();