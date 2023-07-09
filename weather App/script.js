

let lat, log;

let cc = 0, cname;
document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault();
    let cn = document.getElementById("city").value.trim();
    cityf(cn);


})





const cityf = (cn) => {
    cn = cn.trim();
    if (cc > 0) {
        document.getElementById(`btn${cc}`).textContent = cname;
        document.getElementById(`btn${cc}`).style.backgroundColor = "green";
    }
    let p = fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cn}&count=1&language=en&format=json`)
    p.then((r) => {
        return r.json()
    }).then((value) => {
        lat = value.results[0].latitude;
        log = value.results[0].longitude;
        let p1 = fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${log}&daily=weathercode,temperature_2m_max,windspeed_10m_max&current_weather=true&timezone=auto`)
        p1.then((r) => {
            return r.json()
        }).then((v) => {
            console.log(v)

            let days = "day"
            if (!v.current_weather.is_day)
                days = "night"


            document.body.getElementsByClassName("details").item(0).getElementsByTagName("h2")[0].textContent = `${cn} (${v.daily.time[0]})`;
            document.body.getElementsByClassName("details").item(0).getElementsByTagName("h6")[0].textContent = `Temperature: ${v.current_weather.temperature} °C`;
            document.body.getElementsByClassName("details").item(0).getElementsByTagName("h6")[1].textContent = `Wind: ${v.current_weather.windspeed} Km/Hr`;
            document.body.getElementsByClassName("details").item(0).getElementsByTagName("h6")[2].textContent = days;

            if (document.body.getElementsByClassName("icon").length)
                document.body.getElementsByClassName("icon").item(0).remove();

            document.body.getElementsByClassName("details").item(0).insertAdjacentHTML('afterend', `<div class="icon">
        <img src= "${wc[v.current_weather.weathercode][days].image}"  alt="weather-icon">
            <h6>${wc[v.current_weather.weathercode][days].description}</h6>
    </div>`
            )
            for (let i = 0; i < 5; i++) {
                document.body.getElementsByClassName("card").item(i).getElementsByTagName("h3")[0].textContent = `(${v.daily.time[i + 1]})`;
                document.body.getElementsByClassName("card").item(i).getElementsByTagName("h6")[0].textContent = `Temperature: ${v.daily.temperature_2m_max[i + 1]} °C`;
                document.body.getElementsByClassName("card").item(i).getElementsByTagName("h6")[1].textContent = `Wind: ${v.daily.windspeed_10m_max[i + 1]
                    } Km/Hr`;
                document.body.getElementsByClassName("card").item(i).getElementsByTagName("h6")[2].textContent = `Day`;

                if (document.body.getElementsByClassName("card").item(i).getElementsByClassName('icons').length)
                    document.body.getElementsByClassName("card").item(i).getElementsByClassName('icons').item(0).remove();

                document.body.getElementsByClassName("card").item(i).getElementsByTagName("h3")[0].insertAdjacentHTML("afterend", `<div class ='icons' > <img src= "${wc[v.daily.weathercode[i + 1]][days].image}"  alt="weather-icon">
            <h6>${wc[v.daily.weathercode[i + 1]][days].description}</h6>  </div>`)



            }
            if (cc == 3)
                cc = 0;

            cc++;
            cname = cn;



        })


    })
}


document.getElementById("btn1").addEventListener('click', (e) => {
    e.preventDefault();
    cityf(btn1.textContent);
});
document.getElementById("btn2").addEventListener('click', (e) => {
    e.preventDefault();
    cityf(btn2.textContent);
});
document.getElementById("btn3").addEventListener('click', (e) => {
    e.preventDefault();
    cityf(btn3.textContent);
});



// weather codes
const wc = {
    "0": {
        "day": {
            "description": "Sunny",
            "image": "http://openweathermap.org/img/wn/01d@2x.png"
        },
        "night": {
            "description": "Clear",
            "image": "http://openweathermap.org/img/wn/01n@2x.png"
        }
    },
    "1": {
        "day": {
            "description": "Mainly Sunny",
            "image": "http://openweathermap.org/img/wn/01d@2x.png"
        },
        "night": {
            "description": "Mainly Clear",
            "image": "http://openweathermap.org/img/wn/01n@2x.png"
        }
    },
    "2": {
        "day": {
            "description": "Partly Cloudy",
            "image": "http://openweathermap.org/img/wn/02d@2x.png"
        },
        "night": {
            "description": "Partly Cloudy",
            "image": "http://openweathermap.org/img/wn/02n@2x.png"
        }
    },
    "3": {
        "day": {
            "description": "Cloudy",
            "image": "http://openweathermap.org/img/wn/03d@2x.png"
        },
        "night": {
            "description": "Cloudy",
            "image": "http://openweathermap.org/img/wn/03n@2x.png"
        }
    },
    "45": {
        "day": {
            "description": "Foggy",
            "image": "http://openweathermap.org/img/wn/50d@2x.png"
        },
        "night": {
            "description": "Foggy",
            "image": "http://openweathermap.org/img/wn/50n@2x.png"
        }
    },
    "48": {
        "day": {
            "description": "Rime Fog",
            "image": "http://openweathermap.org/img/wn/50d@2x.png"
        },
        "night": {
            "description": "Rime Fog",
            "image": "http://openweathermap.org/img/wn/50n@2x.png"
        }
    },
    "51": {
        "day": {
            "description": "Light Drizzle",
            "image": "http://openweathermap.org/img/wn/09d@2x.png"
        },
        "night": {
            "description": "Light Drizzle",
            "image": "http://openweathermap.org/img/wn/09n@2x.png"
        }
    },
    "53": {
        "day": {
            "description": "Drizzle",
            "image": "http://openweathermap.org/img/wn/09d@2x.png"
        },
        "night": {
            "description": "Drizzle",
            "image": "http://openweathermap.org/img/wn/09n@2x.png"
        }
    },
    "55": {
        "day": {
            "description": "Heavy Drizzle",
            "image": "http://openweathermap.org/img/wn/09d@2x.png"
        },
        "night": {
            "description": "Heavy Drizzle",
            "image": "http://openweathermap.org/img/wn/09n@2x.png"
        }
    },
    "56": {
        "day": {
            "description": "Light Freezing Drizzle",
            "image": "http://openweathermap.org/img/wn/09d@2x.png"
        },
        "night": {
            "description": "Light Freezing Drizzle",
            "image": "http://openweathermap.org/img/wn/09n@2x.png"
        }
    },
    "57": {
        "day": {
            "description": "Freezing Drizzle",
            "image": "http://openweathermap.org/img/wn/09d@2x.png"
        },
        "night": {
            "description": "Freezing Drizzle",
            "image": "http://openweathermap.org/img/wn/09n@2x.png"
        }
    },
    "61": {
        "day": {
            "description": "Light Rain",
            "image": "http://openweathermap.org/img/wn/10d@2x.png"
        },
        "night": {
            "description": "Light Rain",
            "image": "http://openweathermap.org/img/wn/10n@2x.png"
        }
    },
    "63": {
        "day": {
            "description": "Rain",
            "image": "http://openweathermap.org/img/wn/10d@2x.png"
        },
        "night": {
            "description": "Rain",
            "image": "http://openweathermap.org/img/wn/10n@2x.png"
        }
    },
    "65": {
        "day": {
            "description": "Heavy Rain",
            "image": "http://openweathermap.org/img/wn/10d@2x.png"
        },
        "night": {
            "description": "Heavy Rain",
            "image": "http://openweathermap.org/img/wn/10n@2x.png"
        }
    },
    "66": {
        "day": {
            "description": "Freezing Rain",
            "image": "http://openweathermap.org/img/wn/10d@2x.png"
        },
        "night": {
            "description": "Freezing Rain",
            "image": "http://openweathermap.org/img/wn/10n@2x.png"
        }
    },
    "67": {
        "day": {
            "description": "Freezing Rain",
            "image": "http://openweathermap.org/img/wn/10d@2x.png"
        },
        "night": {
            "description": "Freezing Rain",
            "image": "http://openweathermap.org/img/wn/10n@2x.png"
        }
    },
    "71": {
        "day": {
            "description": "Light Snow",
            "image": "http://openweathermap.org/img/wn/13d@2x.png"
        },
        "night": {
            "description": "Light Snow",
            "image": "http://openweathermap.org/img/wn/13n@2x.png"
        }
    },
    "73": {
        "day": {
            "description": "Snow",
            "image": "http://openweathermap.org/img/wn/13d@2x.png"
        },
        "night": {
            "description": "Snow",
            "image": "http://openweathermap.org/img/wn/13n@2x.png"
        }
    },
    "75": {
        "day": {
            "description": "Heavy Snow",
            "image": "http://openweathermap.org/img/wn/13d@2x.png"
        },
        "night": {
            "description": "Heavy Snow",
            "image": "http://openweathermap.org/img/wn/13n@2x.png"
        }
    },
    "77": {
        "day": {
            "description": "Snow Grains",
            "image": "http://openweathermap.org/img/wn/13d@2x.png"
        },
        "night": {
            "description": "Snow Grains",
            "image": "http://openweathermap.org/img/wn/13n@2x.png"
        }
    },
    "80": {
        "day": {
            "description": "Light Showers",
            "image": "http://openweathermap.org/img/wn/09d@2x.png"
        },
        "night": {
            "description": "Light Showers",
            "image": "http://openweathermap.org/img/wn/09n@2x.png"
        }
    },
    "81": {
        "day": {
            "description": "Showers",
            "image": "http://openweathermap.org/img/wn/09d@2x.png"
        },
        "night": {
            "description": "Showers",
            "image": "http://openweathermap.org/img/wn/09n@2x.png"
        }
    },
    "82": {
        "day": {
            "description": "Heavy Showers",
            "image": "http://openweathermap.org/img/wn/09d@2x.png"
        },
        "night": {
            "description": "Heavy Showers",
            "image": "http://openweathermap.org/img/wn/09n@2x.png"
        }
    },
    "85": {
        "day": {
            "description": "Snow Showers",
            "image": "http://openweathermap.org/img/wn/13d@2x.png"
        },
        "night": {
            "description": "Snow Showers",
            "image": "http://openweathermap.org/img/wn/13n@2x.png"
        }
    },
    "86": {
        "day": {
            "description": "Snow Showers",
            "image": "http://openweathermap.org/img/wn/13d@2x.png"
        },
        "night": {
            "description": "Snow Showers",
            "image": "http://openweathermap.org/img/wn/13n@2x.png"
        }
    },
    "95": {
        "day": {
            "description": "Thunderstorm",
            "image": "http://openweathermap.org/img/wn/11d@2x.png"
        },
        "night": {
            "description": "Thunderstorm",
            "image": "http://openweathermap.org/img/wn/11n@2x.png"
        }
    },
    "96": {
        "day": {
            "description": "Thunderstorm With Hail",
            "image": "http://openweathermap.org/img/wn/11d@2x.png"
        },
        "night": {
            "description": "Thunderstorm With Hail",
            "image": "http://openweathermap.org/img/wn/11n@2x.png"
        }
    },
    "99": {
        "day": {
            "description": "Thunderstorm With Hail",
            "image": "http://openweathermap.org/img/wn/11d@2x.png"
        },
        "night": {
            "description": "Thunderstorm With Hail",
            "image": "http://openweathermap.org/img/wn/11n@2x.png"
        }
    }
}