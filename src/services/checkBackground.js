function checkBackground(type){ //OBJECT LITERAL
    const currentMainWeather = { //FOLLOWING MAIN AND ID PROVIDED IN data.weather[0]
      "Thunderstorm" : "thunderApp",
      "Drizzle" : "drizzleApp",
      "Rain" : "rainApp",
      "Mist" : "mistApp",
      "Clouds" : "cloudsApp",
      "Clear" : "clearApp",
      "Squall" : "thunderApp",
      "Tornado" : "thunderApp",
      "Ash" : "thunderApp",
      "Sand" : "sandApp",
      "Fog" : "fogApp",
      "Haze" : "fogApp",
      "Smoke" : "fogApp",
      default: "defaultApp"
    }
    return currentMainWeather[type] || currentMainWeather.default
  }

export default checkBackground;