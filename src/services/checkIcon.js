function checkIcon(type){ 
    function checkBackground(type){
        const currentMainIcon = { 
            "drizzleApp" : 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-30-512.png',
            "rainApp" : 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-31-512.png',
            "mistApp" : 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-06-512.png',
            "cloudsApp" : 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-27-512.png',
            "clearApp" : 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-512.png',
            "thunderApp" : 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-23-512.png',
            "sandApp" : 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-19-512.png',
            "fogApp" : 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-06-512.png',
            "defaultApp" : 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-02-512.png'
          }
          return currentMainIcon[type] || currentMainIcon.default
      }

    return(
        <>
            <img src={checkBackground(type)} height="35px" width="35px"/>
        </>
    )
  }

export default checkIcon;