/*
    Written by: Saleh Ibne Omar
    Date created: 18-Feb-2019
*/
window.onload = function(){

    function idTrack(e){
        return document.getElementById(e);
    }

    function loaderColorchange(minute){
        if(minute<10){
            idTrack("bar").style.background = "rgba(0, 206, 201, 0.4)";
            idTrack("barloader").style.background = "rgba(0, 206, 201,1.0)";
        }
        else if(minute<20){
            idTrack("bar").style.background = "rgba(253, 203, 110, 0.4)";
            idTrack("barloader").style.background = "rgba(253, 203, 110, 1.0)";
        }
        else if(minute<30){
            idTrack("bar").style.background = "rgba(253, 121, 168, 0.4)";
            idTrack("barloader").style.background = "rgba(253, 121, 168, 1.0)";
        }
        else if(minute<40){
            idTrack("bar").style.background = "rgba(120, 111, 166, 0.4)";
            idTrack("barloader").style.background = "rgba(120, 111, 166, 1.0)";
        }
        else if(minute<50){
            idTrack("bar").style.background = "rgba(250, 128, 114, 0.4)";
            idTrack("barloader").style.background = "rgba(250, 128, 114, 1.0)";
        }
        else if(minute<60){
            idTrack("bar").style.background = "rgba(46, 204, 113, 0.4)";
            idTrack("barloader").style.background = "rgba(46, 204, 113, 1.0)";
        }
    }

    function dynamicChange(hour){
        if(hour>=5 && hour<6){
            idTrack("bg").style.backgroundImage = "url('img/sunrise1.jpg')";
            idTrack("msg").innerHTML = "Good morning: Rise and shine";
        }
        else if(hour>=6 && hour<7){
            idTrack("bg").style.backgroundImage = "url('img/sunrise2.jpg')";
            idTrack("msg").innerHTML = "If you wake up now you'll get a long day";
        }
        else if(hour>=7 && hour<8){
            idTrack("bg").style.backgroundImage = "url('img/morning.jpg')";
            idTrack("msg").innerHTML = "You will be late get up quickly";
        }
        else if(hour>=8 && hour<12){
            idTrack("bg").style.backgroundImage = "url('img/morning2.jpg')";
            idTrack("msg").innerHTML = "Morning: Hope you are having a good day so far";
        }
        else if(hour>=12 && hour<15){
            idTrack("bg").style.backgroundImage = "url('img/noon.jpg')";
            idTrack("msg").innerHTML = "Noon: Grab your lunch quickly and you will be healthy";
        }
        else if(hour>=15 && hour<17){
            idTrack("bg").style.backgroundImage = "url('img/afternoon.jpg')";
            idTrack("msg").innerHTML = "Afternoon: Take a short break and grab some snacks";
        }
        else if(hour>=17 && hour<18){
            idTrack("bg").style.backgroundImage = "url('img/sunset.jpg')";
            idTrack("msg").innerHTML = "Sun is going to set soon";
        }
        else if(hour>=18 && hour<19){
            idTrack("bg").style.backgroundImage = "url('img/evening.jpg')";
            idTrack("msg").innerHTML = "Evening: Get back home safely";
        }
        else if(hour>=19 && hour<24){
            idTrack("bg").style.backgroundImage = "url('img/night.jpg')";
            if(hour>=19 && hour<20){
                idTrack("msg").innerHTML = "Hope you reached home safely";
            }
            else if(hour>=20 && hour<21){
                idTrack("msg").innerHTML = "Night: Do the things that you need to do";
            }
            else if(hour>=21 && hour<22){
                idTrack("msg").innerHTML = "Night: Dinner time";
            }
            else if(hour>=22 && hour<=24){
                idTrack("msg").innerHTML = "Good night: You should sleep now";
            }
        }
        else if(hour>=0 && hour<4){
            idTrack("bg").style.backgroundImage = "url('img/midnight.jpg')";
            idTrack("msg").innerHTML = "It's midnight sleep tight";
        }
        else if(hour>=4 && hour<5){
            idTrack("bg").style.backgroundImage = "url('img/beforesunrise.jpg')";
            idTrack("msg").innerHTML = "Sun is about to rise";
        }
    }

    function dateAndTime(){

        var digitalClock = new Date();
        var hr = digitalClock.getHours(), 
            min = digitalClock.getMinutes(),
            day = digitalClock.getDay(),
            date = digitalClock.getDate(),
            month = digitalClock.getMonth(),
            year = digitalClock.getFullYear(),
            timeFormat = "";

        dynamicChange(hr);
        loaderColorchange(min);

        timeFormat = (hr<12)? "AM": "PM";

        if(hr == 0){
            hr = 12;
        }
        else if(hr>12){
            hr -= 12;
        }
    
        hr = (hr<10)? "0"+hr: hr;
        min = (min<10)? "0"+min: min;

    
        var dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        for(var i=0; i<=6; i++){
            if(day == i){
                day = dayArr[i];
                break;
            }
        }
    
        var monthArr = ["Januray", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];
                        
        for(var i=0; i<=11; i++){
            if(month == i){
                month = monthArr[i];
                break;
            }
        }

        document.getElementById("digitalclock").innerHTML = hr+":"+min;
        document.getElementById("ampm").innerHTML = timeFormat;
        document.getElementById("fulldate").innerHTML = day+", "+date+" "+month+" "+year;

    }

    setInterval(dateAndTime, 1000);

    idTrack("devinfo").addEventListener("click", function(){
        swal({
            icon: "info",
            text: "Developer: Saleh Ibne Omar"+"\n"+
            "Dhaka-1212, Bangladesh"+"\n"+
            "Email: salehibneomar@gmail.com"+"\n"+
            "(C) 2019 All rights reserved"
        });
    });

}