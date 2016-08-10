
# Local Playlist
A means for you and your friends on the same wifi network to share and update a temporary playlist.

Note: since the Spotify API only allows a play preview of 30 seconds, this is only meant for getting a brief taste of songs. Don't use this for a party or anything, because you and your guests will suffer a rude awakening when each song gets cut off after the first 30 seconds.


### Installation and How to Run

You need NodeJS to run this. [Don't have NodeJS?](http://lmgtfy.com/?q=install+nodejs)

Once you have node, go into the project directory and run

```Bash
$ node index.js
```
to set up a server. Open index.html in a browser and you're good to go.


### How It Works

Local Playlist is based on the idea that every single one of you and your little friends need to approve a song before it can be added to the communal playlist. You search for a song in the search bar, select the one you want, approve it, and wait for everyone else to approve. Once that happens, it will be added to the list of songs that will be played.
