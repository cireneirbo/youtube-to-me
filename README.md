# youtube-to-me
A CLI that downloads specified YouTube videos to my computer. All videos will be Creative Commons and give permission.

## Getting started
1. Clone or fork the project.
2. Navigate to the project's directory in the terminal / open the project in your IDE.
3. Have `Node` installed on your computer. It's quick and not intrusive. Download it here: [https://nodejs.org/en/](https://nodejs.org/en/).
4. Install dependants with `npm install`.
5. Run the command `node main.js` to start the program
6. When prompted, add the YouTube video's link ID to the terminal input.
   * The video ID can be found by examining the video's url e.g.:
   * Complete video link: `https://www.youtube.com/watch?v=daEB_50JyLM`
   * Video ID from the above link: `daEB_50JyLM` 
   * The video ID should be short like above. If you are trying to download a video with a really long link, it will usually have an `&` at the end of the video ID. Take the video ID between the `?v=` and `&` and it should work. An example of this is `https://www.youtube.com/watch?v=HJgdp4uhSbs&t=2770s`. With the video ID being `HJgdp4uhSbs`.


## Help With Using Command Line Interface 
Command Line Interfaces are terminals like Command Prompt and Bash.

### Command Prompt
* Open Command Prompt and check where you are with `dir` (which means 'directory'). This will list the contents of the currect directory your session is in.
* Now you need to navigate to the place you have `youtube-to-me` cloned/downloaded/saved. To get there, type `cd Documents` (substitute out Documents for whichever forlder you can see listed that will bring you closer to where `youtube-to-me` is located. Keep navigating towards it until you `cd` (change directory) into its top-level folder. 
* Now when you type `dir` you should see all of the files that are listed above in the project repo that you're probably reading this from. Good, we're ready to run it.
* Proceed to Step 3 in the Getting started section above.

### Bash
* Open Bash and check where you are with `ls` (which means 'list'). This will list the contents of the currect directory your session is in.
* Now you need to navigate to the place you have `youtube-to-me` cloned/downloaded/saved. To get there, type `cd Documents` (substitute out Documents for whichever forlder you can see listed that will bring you closer to where `youtube-to-me` is located. Keep navigating towards it until you `cd` (change directory) into its top-level folder. 
* Now when you type `ls` you should see all of the files that are listed above in the project repo that you're probably reading this from. Good, we're ready to run it.
* Proceed to Step 3 in the Getting started section above.
