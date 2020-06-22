let stations = [
    {
        name: "Alternative R&B",
        songs: [
                {
                    title: "Aristocrats",
                    artist: "Raleigh Ritchie",
                    albumArt: "/assets/images/aristocrats.png",
                    audio: "/assets/audio/Raleigh Ritchie - Aristocrats.mp3",
                    backgroundColor: "#0D0D0D",
                    radioDiv:"#D98292",
                    text: "#F2E9D8",
                    buttonText: "#A62424",
                    buttonBorder: "#1b1919 solid 5px",
                    albumColor: "#BF364F",
                },
                {
                    title: "Blue Lights",
                    artist: "Jorja Smith",
                    albumArt: "/assets/images/bluelights.png",
                    audio:"/assets/audio/Jorja Smith - Blue Lights.mp3",
                    backgroundColor: "#0D0D0D",
                    radioDiv:"#022859",
                    text: "#6D96A6",
                    buttonText: "#A66832",
                    buttonBorder: "#1b1919 solid",
                    albumColor: "#8C2727",
                    
                },
                {
                    title: "Sukidakara",
                    artist: "UMI",
                    albumArt: "/assets/images/sukidakara.jpg",
                    audio:"/assets/audio/sukidakara.mp3",
                    backgroundColor: "#262626",
                    radioDiv:"#BF7C63",
                    text: "#D9D7D7",
                    buttonText: "#D9C24E",
                    buttonBorder: "#262626 solid",
                    albumColor: "#D9C24E",
                },
        ],      
    },   
    {
        name: "Classic Rock",
        songs: [
                {
                    title: "Shambala",
                    artist: "Three Dog Night",
                    albumArt:"/assets/images/shambala.jpg",
                    audio:"/assets/audio/Three Dog Nights-Shambala.mp3",
                    backgroundColor: "#3C4973",
                    radioDiv:"#45578C",
                    text: "#F2CD13",
                    buttonText: "#F2BB13",
                    buttonBorder: "#3C4973 solid",
                    albumColor: "#594E14",
                },
                {
                    title: "Don't Stop Believin'",
                    artist: "Journey",
                    albumArt:"/assets/images/dontstopbelievin.png",
                    audio:"/assets/audio/Journey - Don't Stop Believin'.mp3",
                    backgroundColor: "#591D2D",
                    radioDiv:"#661b29",
                    text:  "#4489ff",
                    buttonText: "#D9814E",
                    buttonBorder: "#591D2D solid",
                    albumColor: "#A63333",
                },
                {
                    title: "Hold the Line",
                    artist: "TOTO",
                    albumArt:"/assets/images/holdtheline.jpg",
                    audio:"/assets/audio/Toto - Hold the line.mp3",
                    backgroundColor: "#202326",
                    radioDiv:"#394D59",
                    text: "#B9B4BF",
                    buttonText: "#D9BFA9",
                    buttonBorder: "#1b1919, solid",
                    albumColor: "#685D73",
                },
        ],      
    },   
    {
        name: "K-R&B",
        songs: [
                {
                    title: "none",
                    artist: "Crush",
                    albumArt:"/assets/images/none.jpg",
                    audio:"/assets/audio/Crush - 넌 (none).mp3",
                    backgroundColor: "#090D0C",
                    radioDiv:"#101616",
                    text: "#3A403F",
                    buttonText: "#1E2625",
                    buttonBorder: "#090D0C solid",
                    albumColor: "#101616",
                },
                {
                    title: "Instagram",
                    artist: "Dean",
                    albumArt:"/assets/images/dean.jpg",
                    audio:"/assets/audio/DEAN (딘) - instagram.mp3",
                    backgroundColor: "#D9D9D9",
                    radioDiv:"#262625",
                    text: "#F2F2F2",
                    buttonText: "#8C6F5E",
                    buttonBorder: "#1b1919, solid",
                    albumColor: "#8C6F5E",
                },
                {
                    title: "She's a baby",
                    artist: "Zico",
                    albumArt:"/assets/images/shesababy.png",
                    audio:"/assets/audio/She's A Baby - Zico.mp3",
                    backgroundColor: "#2E402E",
                    radioDiv:"#81A64B",
                    text: "#BF5656",
                    buttonText: "#D4D9B4",
                    buttonBorder: "#1b1919, solid",
                    albumColor: "#B7BF78",
                },
        ],      
    },   
    {
        name: "20s",
        songs: [
                {
                    title: "Johnny Guitar",
                    artist: "Peggy Lee",
                    albumArt:"/assets/images/johnnyguitar.jpg",
                    audio:"/assets/audio/Johnny Guitar.mp3",
                    backgroundColor: "#F2F2F2",
                    radioDiv:"#BFBFBF",
                    text: "#0A0C0D",
                    buttonText: "#242625",
                    buttonBorder: "#1b1919, solid",
                    albumColor: "#BF364F",
                },
                {
                    title: "The End of the World",
                    artist: "Skeeter Davis",
                    albumArt:"/assets/images/endoftheworld.jpg",
                    audio:"/assets/audio/Skeeter Davis The End of The World.mp3",
                    backgroundColor: "#F2DF80",
                    radioDiv:"#D9AF62",
                    text: "#40312F",
                    buttonText: "#A68358",
                    buttonBorder: "#1b1919, solid",
                    albumColor: "#BF364F",
                },
                {
                    title: "Orange Colored Sky",
                    artist: "Nat King Cole",
                    albumArt:"/assets/images/orangesky.png",
                    audio:"/assets/audio/Nat King Cole - Orange Colored Sky.mp3",
                    backgroundColor: "#D9B68B",
                    radioDiv:"#BF9445",
                    text: "#141C26",
                    buttonText: "#59442A",
                    buttonBorder: "#1b1919, solid",
                    albumColor: "#BF364F",
                },
        ],     
    },   
]  


let stationNplaying;
let songNart;



let radio = {
    randStation() {
        let randomNumber = Math.floor((Math.random()*stations.length))
         randomStation = (stations[randomNumber]);
         console.log(randomStation)
         let nowPlaying = `You're listening to: ${randomStation.name}`;
        newArray = [randomStation, nowPlaying];
        return  stationNplaying = newArray;
    }, 
}

const selectStation = document.querySelector(".stationRandomizer");

const selectSong = document.querySelector(".songRandomizer");



const randSong = (stationNumber) => {
    let randomNumber = Math.floor((Math.random()*stationNumber[0].songs.length))
    randomSong = stationNumber[0].songs[randomNumber];
    console.log(randomSong)
    let nowPlaying = (`Now playing: ${randomSong.title} by ${randomSong.artist}`);
    array = [randomSong, nowPlaying, randomNumber]
    return songNart = array;
}



//? by clicking station it will produce an index for stations and songs: 
//? stationNplaying[0] >> (randomStation = stations[randomNumber] ) 
//? and 
//? songNart[0] >> (randomSong = stationNplaying[0].songs[randomNumber])

// once station is selected make the next and back arrows appear?
// also have the controls appear when a song is available(display none on the audio tag reveal onclick)
selectStation.onclick =  () => { 
    radio.randStation();  
    document.querySelector(".stationTitles").innerHTML = stationNplaying[1];
    document.querySelector(".stationTitles").style.fontSize = "1.5em";


    randSong(stationNplaying);
    document.querySelector(".songTitles").innerHTML = songNart[1];
    document.querySelector(".songTitles").style.fontSize = "1.5em"
    document.querySelector(".songTitles").style.color = songNart[0].text;
    document.querySelector(".stationTitles").style.color = songNart[0].text;
    document.querySelector(".albumArt").src = songNart[0].albumArt;
    document.querySelector(".track").src = songNart[0].audio;
    document.querySelector(".track").autoplay;
    document.querySelector(".wrapper").style.backgroundColor = songNart[0].backgroundColor;
    document.querySelector(".radioContainer").style.backgroundColor = songNart[0].radioDiv;
    document.querySelector("picture").style.backgroundColor = songNart[0].albumColor;
    document.querySelector("button").style.borderColor = songNart[0].buttonBorder;
    document.querySelector("button").style.color = songNart[0].buttonText; 
}

selectSong.onclick = () => {
    randSong(stationNplaying);
    document.querySelector(".songTitles").innerHTML = songNart[1];
    document.querySelector(".songTitles").style.fontSize = "1.5em"
    document.querySelector(".songTitles").style.color = songNart[0].text;
    document.querySelector(".stationTitles").style.color = songNart[0].text;
    document.querySelector(".albumArt").src = songNart[0].albumArt;
    document.querySelector(".track").src = songNart[0].audio;
    document.querySelector(".track").autoplay;
    document.querySelector(".wrapper").style.backgroundColor = songNart[0].backgroundColor;
    document.querySelector(".radioContainer").style.backgroundColor = songNart[0].radioDiv;
    document.querySelector("picture").style.backgroundColor = songNart[0].albumColor;
    document.querySelector("button").style.borderColor = songNart[0].buttonBorder;
    document.querySelector("button").style.color = songNart[0].buttonText;
}


//++++++++Experimental from here+++++++++++++++
// const sidebar = document.querySelector('.sidebar');
        // document.querySelector('button').onclick = function () {
        //     sidebar.classList.toggle('sidebarShown');
        // }

//
// ─── MAKING THE NEXT AND PREVIOUS FUNCITONS ─────────────────────────────────────

//* ─── pseudo-code ─────────────────────────────────────────────────────────────────────────
//* if they don't want shuffle for songs on, I need my songs to start at 0. Which means I need another variable that holds the song n art for a linear click. 



// * I need something that changes the shuffle sorting and the linear sorting. But the previous button will always go back to the previous song that was shuffled...


const nextButton = document.querySelector(".next")

const prevButton = document.querySelector(".previous")


//! when these functions run I need to return a new array of stuff like the random functions do.

const nextSong = (index) => {
    songIndex = index;
    if (songIndex >= stationNplaying[0].songs.length - 1){
        songIndex = -1; // feeding in songNart[2] which has a value of randomnumber. Replace that with -1
        songIndex++;
        console.log(`nextSongIndex is now negative one`);
    } else {
        songIndex++;
        console.log(`this is next index`,songIndex)
    }
    let nextSong = stationNplaying[0].songs[songIndex];
    let nowPlaying = (`Now playing: ${nextSong.title} by ${nextSong.artist}`);
    let array = [nextSong, nowPlaying, songIndex];
    return songNart = array;
}
  
  
  //this works fine.
  const previousSong = (songsInput) => {
    songIndex = songsInput;
    let startOverIndex = stationNplaying[0].songs.length-1; //which should be current;y two
    if (songIndex <= 0){
        songIndex = startOverIndex;
    console.log(`prevSongIndex is less than 0`,songIndex)
    } else {
        songIndex--;
        console.log(`prevSongIndex had been decremented`,songIndex)

    }
    let prevSong = stationNplaying[0].songs[songIndex];
    let nowPlaying = (`Now playing: ${prevSong.title} by ${prevSong.artist}`);
    let array = [prevSong, nowPlaying, songIndex];
    return songNart = array;
  }
  
  prevButton.onclick = () => {
    previousSong(songNart[2])
    document.querySelector(".songTitles").innerHTML = songNart[1];
    document.querySelector(".songTitles").style.fontSize = "1.5em"
    document.querySelector(".songTitles").style.color = songNart[0].text;
    document.querySelector(".stationTitles").style.color = songNart[0].text;
    document.querySelector(".albumArt").src = songNart[0].albumArt;
    document.querySelector(".track").src = songNart[0].audio;
    document.querySelector(".track").autoplay;
    document.querySelector(".wrapper").style.backgroundColor = songNart[0].backgroundColor;
    document.querySelector(".radioContainer").style.backgroundColor = songNart[0].radioDiv;
    document.querySelector("picture").style.backgroundColor = songNart[0].albumColor;
    document.querySelector("button").style.borderColor = songNart[0].buttonBorder;
    document.querySelector("button").style.color = songNart[0].buttonText;
  }
  
  nextButton.onclick = () => {
    nextSong(songNart[2]);
    document.querySelector(".songTitles").innerHTML = songNart[1];
    document.querySelector(".songTitles").style.fontSize = "1.5em"
    document.querySelector(".songTitles").style.color = songNart[0].text;
    document.querySelector(".stationTitles").style.color = songNart[0].text;
    document.querySelector(".albumArt").src = songNart[0].albumArt;
    document.querySelector(".track").src = songNart[0].audio;
    document.querySelector(".track").autoplay;
    document.querySelector(".wrapper").style.backgroundColor = songNart[0].backgroundColor;
    document.querySelector(".radioContainer").style.backgroundColor = songNart[0].radioDiv;
    document.querySelector("picture").style.backgroundColor = songNart[0].albumColor;
    document.querySelector("button").style.borderColor = songNart[0].buttonBorder;
    document.querySelector("button").style.color = songNart[0].buttonText;
  }
  
  let audio = document.querySelector(".track");

  audio.onended = () => {
    nextSong(songNart[2]);
    document.querySelector(".songTitles").innerHTML = songNart[1];
    document.querySelector(".songTitles").style.fontSize = "1.5em"
    document.querySelector(".songTitles").style.color = songNart[0].text;
    document.querySelector(".stationTitles").style.color = songNart[0].text;
    document.querySelector(".albumArt").src = songNart[0].albumArt;
    document.querySelector(".track").src = songNart[0].audio;
    document.querySelector(".track").autoplay;
    document.querySelector(".wrapper").style.backgroundColor = songNart[0].backgroundColor;
    document.querySelector(".radioContainer").style.backgroundColor = songNart[0].radioDiv;
    document.querySelector("picture").style.backgroundColor = songNart[0].albumColor;
    document.querySelector("button").style.borderColor = songNart[0].buttonBorder;
    document.querySelector("button").style.color = songNart[0].buttonText; 
    
}
