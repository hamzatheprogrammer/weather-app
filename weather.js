function getweather(){
    let cityname = document.querySelector("#cityname").value;
    let res_check = document.querySelector("#res-check");
    res_check.innerHTML = "finding data please wait";
    axios.get(`https://api.maher-zubair.tech/search/weather2?q=${cityname}`)
    .then(function (response){
        let data = response.data;
        let region_d  = data.result.location.region
        let tempc = data.result.current.temp_c
        let country_d = data.result.location.country
        let tempf = data.result.current.temp_f
        let latitude = data.result.location.lat
        let longitude = data.result.location.lon
        let hum = data.result.current.humidity
        let wd = data.result.current.wind_kph
        let uvind = data.result.current.uv
        let cond = data.result.current.condition.text
        let vis = data.result.current.vis_km
        let win_dir = data.result.current.wind_dir
        let cld = data.result.current.cloud
        let pres = data.result.current.pressure_in
        

 
        console.log(response)
        document.querySelector("#city").innerHTML = cityname;
        document.querySelector("#region").innerHTML = region_d;
        document.querySelector("#country").innerHTML = country_d;
        document.querySelector("#temp_c").innerHTML = tempc;
        document.querySelector("#temp_f").innerHTML = tempf;
        document.querySelector("#lon").innerHTML = longitude;
        document.querySelector("#lat").innerHTML = latitude;
        document.querySelector("#humidity").innerHTML = `${hum}%`;
        document.querySelector("#wind").innerHTML = `${wd} kph`;
        document.querySelector("#uv").innerHTML = uvind;
        document.querySelector("#condition").innerHTML = cond;
        document.querySelector("#vision").innerHTML = `${vis} km`;
        document.querySelector("#winddir").innerHTML = win_dir;
        document.querySelector("#cloud").innerHTML = cld;
        document.querySelector("#pressure").innerHTML = `${pres} in`;
        res_check.innerHTML = "";
    })
    .catch(function (error){
        console.log(error)

        res_check.innerHTML = "city not found";
        
    })
}
    