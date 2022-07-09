import { useState } from "react";

function TempContainer(props){

    const [convertToCelsius, setConvertToCelsius] = useState(true);

    const celsiusConverter = (Ktemp) => { return (Ktemp - 273.15).toFixed(2) + "° C" }
    const fahrenheitConverter = (Ktemp) => { return ((Ktemp - 273.15)* (9/5) + 32).toFixed(2) + "° F" }

    function askConversion(e){
      if(e){
        return celsiusConverter(e)
      } else {
        return fahrenheitConverter(e)
      }
    }
  
    function askFalseConversion(e){
      if(e){
        return fahrenheitConverter(e)
      } else {
        return celsiusConverter(e)
      }
    }

  function conversionHandler(p, e){
    if(p){
      if(convertToCelsius){
        return askConversion(e)
      } else {
        return askFalseConversion(e)
      }
    } else {
      if(!convertToCelsius){
        return askConversion(e)
      } else {
        return askFalseConversion(e)
      }
    }
  }

  function handleConversion(e){
    e.preventDefault();
    e.stopPropagation();
    if(convertToCelsius){
      setConvertToCelsius(false);
    } else {
      setConvertToCelsius(true);
    }
  }

    return(
        <h3><span>{props.text}</span>{conversionHandler(true, props.data)} <u onClick={(e) => handleConversion(e)}> ({conversionHandler(false, props.data)}) </u></h3>
      );
  }

export default TempContainer;