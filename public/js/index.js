const apiKey ='62401ee995cd422699c53c2208a880db'
var url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`
getData()
document.getElementById('get-ip-button').addEventListener('click', ()=>{
   getData(document.getElementById('get-ip').value)   
})

function getData(){

    console.log(arguments[0])
    if(arguments[0]){
        url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${arguments[0]}`
    }

    fetch(url)
   .then((result)=> result.json())
      .then((data) =>{

        var connectionType = data['connection_type']
        if(!connectionType){
            connectionType = "No connection type"
        }

        document.getElementById('result').innerHTML = 
        `
            <h3>Your IP is : ${data['ip']}</h3>
            <h3>Continent code : ${data['continent_code']}</h3>
            <h3>Continent name : ${data['continent_name']}</h3>
            <h3>Country code : ${data['country_code2']}</h3>
            <h3>Country name : ${data['country_name']}</h3>
            <h3>Country capital : ${data['country_capital']}</h3>
            <h3>State province  : ${data['state_prov']}</h3>
            <h3>District : ${data['district']}</h3>
            <h3>City : ${data['city']}</h3>
            <h3>Zipcode : ${data['zipcode']}</h3>
            <h3>Latitude : ${data['latitude']}, Longitude ${data['longitude']}</h3>
            <h3>Calling code : ${data['calling_code']}</h3>
            <h3>Country TLD : ${data['country_tld']}</h3>
            <h3>Languages : ${data['languages']}</h3>
            <h3>Internet Service Provider : ${data['isp']}</h3>
            <h3>Connection type : ${connectionType}</h3>
            <h3>Organization : ${data['organization']}</h3>
            <h3>Current time : ${data['time_zone']['current_time']}</h3> 
        `

        document.getElementById('get-ip').value = data['ip']
    })
}
