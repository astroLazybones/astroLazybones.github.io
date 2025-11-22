let user = "astrolazybones"; //put your username here (please work)
let url =
  "https://lastfm-last-played.biancarosa.com.br/" + user + "/latest-song";

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    const playTitle = document.getElementById("play-state");
    playTitle.innerText = "Last Played";

    console.log(json);
    const track = json["track"];
    const t = "#text";
    const small = "0";
    const medium = "1";
    const large = "2";
    const xl = "3";

    const widget = document.getElementById("widget");
    const art = document.getElementById("track-art");
    const name = document.getElementById("track-name");
    const artist = document.getElementById("track-artist");
    const album = document.getElementById("track-album");

    //play boolean
    let playBoo = false;
    if (track["@attr"]) {
      playBoo = track["@attr"]["nowplaying"];
    }

    console.log(playBoo);
    if (playBoo) {
      //if there's something in play boolean, say 'now playing'
      playTitle.innerText = "Now Playing";
    } else {
      playTitle.innerText = "Last Played";
    }

    //Add info to elements
    art.src = track["image"][large][t];
    name.innerText = track["name"];
    artist.innerText = track["artist"][t];
    album.innerText = track["album"][t];

    // const a = document.getElementById("lastfm-user");
    // a.setAttribute("href", "https://www.last.fm/user/" + user);
  });
