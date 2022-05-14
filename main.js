const YoutubeMp3Downloader = require('youtube-mp3-downloader');
const ffmpeg = require('ffmpeg-static');
const input = require('readline-sync');

//* Initialize Clients *//
const YD = new YoutubeMp3Downloader({
  ffmpegPath: ffmpeg,
  outputPath: './',
  youtubeVideoQuality: 'lowestaudio',
  queueParallelism: 2,
  progressTimeout: 5000,
});
let audioToTextTranscript = "";

//* Get input and instruct the user *//
console.log(`
>>> Greetings!
>>> This is a program that downloads the audio of a YouTube video.
>>> It is simple to use, and only requires a few user inputs.
>>> Let's begin!
>>> Navigate to YouTube to find the video you'd like to extract an audio transcript from.
>>> An example video is this: 
https://www.youtube.com/watch?v=0L5TQJbH1gg
>>> Now only copy the video ID, which is the query string that follows the '?v='.
>>> Our example's is:
0L5TQJbH1gg
>>> You will be using this video ID string for the first input.
`);

let videoLink = input.question(">>> Paste your video ID here: ");

//* Download Audio From YouTube *//
YD.download(videoLink) // create an input asking for a unique video id

// While downloading...
YD.on('progress', (data) => {
  console.log(data.progress.percentage + '% downloaded');
})

// If downloading error...
YD.on("error", function(error) {
  console.log(error);
});

// When download has finished...
YD.on('finished', async (err, video) => {
  const videoFileName = video.file;
  console.log(`Downloaded ${videoFileName}`);
});