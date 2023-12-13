// const myFun = async () => {
  //     const searchBo = document.getElementById("searchbox").value;
  //     try {
  //         let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBo}&appid=740f85f5dcd4077ed0e1afaec2f82063&units=metric`)
  //         const data = await res.json()
  //         console.log(data)
  //         document.querySelector(".city").innerHTML = data.name;
  //         document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
  //         document.querySelector(".humidity").innerHTML = data.main.humidity;
  //         document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

  //     }
  //     catch (err) {
  //         console.log(err)
  //     }

  // }

  async function checkwheather() {
    let searchbox = document.getElementById("searchbox").value;
    // console.log(searchbox);
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchbox}&appid=740f85f5dcd4077ed0e1afaec2f82063&units=metric`
    );
    // console.log(res);
    let data = await res.json();
    console.log(data);
    // console.log(data.weather[0].main);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${Math.round(
      data.main.temp
    )}°C`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " meter/sec";
    ////////////////////////////////////////////////////////////////////////////
    let weathertype = document.querySelector(".typeweather");
    // console.log(weathertype);
    let weathericon = weathertype.querySelectorAll("p");
    console.log(weathericon[1]);

    if (data.weather[0].main == "Rain") {
      document.body.style.backgroundImage = "url('pic/rain2.jpg')";
      let weathertype = document.querySelector(".typeweather");
      let weathericon = weathertype.querySelectorAll("p");
      weathericon[0].innerHTML = `<i class="fa-solid fa-cloud-rain" style="color: #235ab8;"></i>`;
      weathericon[1].innerHTML = "Rain";
    } else if (data.weather[0].main == "Smoke") {
      document.body.style.backgroundImage = "url('pic/smoke.avif')";
      let weathertype = document.querySelector(".typeweather");
      let weathericon = weathertype.querySelectorAll("p");
      weathericon[0].innerHTML = `<i class="fa-solid fa-smog fa-beat" style="color: #1d52af;"></i>`;
      weathericon[1].innerHTML = "Smoke";
    } else if (data.weather[0].main == "Sunny") {
      document.body.style.backgroundImage = "url('pic/sunny.jpg')";
      let weathertype = document.querySelector(".typeweather");
      let weathericon = weathertype.querySelectorAll("p");
      weathericon[0].innerHTML = `<i class="fa-solid fa-sun fa-spin" style="color: #bfd70f;"></i>`;
      weathericon[1].innerHTML = "Sunny";
    } else if (data.weather[0].main == "Clouds") {
      document.body.style.backgroundImage = "url('pic/cloud.jpg')";
      let weathertype = document.querySelector(".typeweather");
      let weathericon = weathertype.querySelectorAll("p");
      weathericon[0].innerHTML = `<i class="fa-solid fa-cloud fa-beat" style="color: #114fbb;"></i>`;
      weathericon[1].innerHTML = "Clouds";
    } else if (data.weather[0].main == "Night") {
      document.body.style.backgroundImage = "url('night image.jpg')";
    } else if (data.weather[0].main == "Haze") {
      document.body.style.backgroundImage = "url('pic/hazesky.jpg')";
      let weathertype = document.querySelector(".typeweather");
      let weathericon = weathertype.querySelectorAll("p");
      weathericon[0].innerHTML = `<i class="fa-solid fa-cloud-sun fa-beat" style="color: #1c54b5;"></i>`;
      weathericon[1].innerHTML = "Haze";
    } else if (data.weather[0].main == "Clear") {
      document.body.style.backgroundImage = "url('pic/clear1.jpg')";
      let weathertype = document.querySelector(".typeweather");
      let weathericon = weathertype.querySelectorAll("p");
      weathericon[0].innerHTML = `<i class="fa-solid fa-sun fa-spin" style="color: #bfd70f;"></i>`;
      weathericon[1].innerHTML = "Clear";
    }
  }

  searchbtn.addEventListener("click", () => {
    checkwheather();
  });
  
  