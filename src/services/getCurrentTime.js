function printTimeAndDate(){
    let getCurrentTime = () => {
        let date = new Date();
    let minutes = date.getMinutes();
    minutes = minutes <= 9 ? '0' + minutes : minutes;
    let hours = date.getHours();
    hours = hours <= 9 ? '0' + hours : hours;
    let time = hours + " : " + minutes;
    return time
    }

    return (
        <>
            <h2>{new Date().toLocaleDateString()}</h2>
            <h2>{getCurrentTime()}</h2>
        </>
    );
  }

export default printTimeAndDate;