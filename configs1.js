let configs = (function () {
  'use strict';

  // Authentication and channels
  const channel = 'matjazh2'; // your channel
  const username = 'matjazh2'; // bot account
  const oauth = 'oauth:zpnwh6h2an2yzvkzvwkjfovxdgzy8t'; // should be oauth:xxxxxxxxxxxx from the bot account

  // Styling - required
  const height = '250px';
  const width = '250px';
  const backgroundColor = '#000000'; // hex only
  const backgroundOpacity = 0.0; // 0 to 1 (0 is transparent)
  const backgroundRoundness = '250px';
  const textColor = 'white'; //  hex or name
  const fontFamily = 'Poppins'; // From google fonts: https://fonts.google.com
  const labelFontSize = '34px';
  const timeFontSize = '64px';
  const pomoFontSize = '24px';

  // Remember to change the height and width when changing these!
  const labelSpaceAbove = '-20px';
  const labelSpaceLeft = '80px'; // negative is left; positive is right
  const timeSpaceAbove = '-10px'; // negative is up; positive is down
  const timeSpaceLeft = '-15px'; // negative is left; positive is right
  const cycleSpaceAbove = '90px'; // negative is up; positive is down
  const cycleSpaceRight = '70px'; // Diff: negative is right; positive is left

  // Remember to change the above values when changing the following one
  const direction = 'column'; // row or column

  // Time Configuration
  const workTime = 3600; // in seconds
  const breakTime = 600; // in seconds
  const longBreakTime = 900; // in seconds
  const longBreakEvery = 3; // long break every x pomos
  const defaultPomoNumber = 3;
  const workTimeRemind = 20;
  const sendWorkTimeRemind = true;
  const startingTime = 600;
  const noLastBreak = true;
  const showHours = false; // true: time in hh:mm:ss; false: time in mm:ss always
  const showHoursIf00 = false; // true: will show 00:mm:ss, false: will show mm:ss when hours is 0

  // Label Configuration
  const workLabel = 'Work';
  const breakLabel = 'Break';
  const finishLabel = 'Finished!';
  const startingLabel = 'Starting';

  // Sound Configuration
  const workSound = 'workSound.riff';
  const breakSound = 'breakSound.riff';

  // Responses
  const workMsg = "It's work time 📏 📘"; // these are 7tv emotes
  const breakMsg = 'Time for a break! 🎶 🎮'; // works with emojis
  const workRemindMsg = 'Time to get ready for focus @{channel} 💻'; // can be customized to anything
  const notMod = 'hhhhh not mod';
  const notRunning = 'The timer is not running to perform this command!';
  const streamStarting = 'Stream is starting!';
  const wrongCommand = 'Command not recognized!';
  const timerRunning = 'Timer is already started!';
  const commandSuccess = 'Done!';
  const cycleWrong = 'Cycle cannot be more than goal!';
  const goalWrong = 'Goal cannot be less than cycle!';
  const finishResponse = 'Good work today everyone 💪🏽';
  const alreadyStarting =
    'The stream is already starting or the timer is running!';

  // Slow mode
  const slowMode = false; // true or false
  const slowModeTime = 3; // in seconds

  // Please don't edit any of the lines below
  const runTests = false;

  const user = {
    channel,
    username,
    oauth,
  };

  const responses = {
    workMsg,
    breakMsg,
    notMod,
    workRemindMsg,
    notRunning,
    streamStarting,
    wrongCommand,
    timerRunning,
    commandSuccess,
    cycleWrong,
    goalWrong,
    finishResponse,
    alreadyStarting,
  };

  const settings = {
    startingLabel,
    workTime,
    breakTime,
    longBreakTime,
    defaultPomoNumber,
    longBreakEvery,
    startingTime,
    workLabel,
    breakLabel,
    finishLabel,
    slowMode,
    slowModeTime,
    sendWorkTimeRemind,
    workTimeRemind,
    workSound,
    breakSound,
    noLastBreak,
    runTests,
    showHours,
    showHoursIf00,
  };

  const styles = {
    height,
    width,
    direction,
    textColor,
    backgroundColor,
    backgroundOpacity,
    backgroundRoundness,
    fontFamily,
    labelFontSize,
    timeFontSize,
    pomoFontSize,
    labelSpaceAbove,
    labelSpaceLeft,
    timeSpaceAbove,
    timeSpaceLeft,
    cycleSpaceAbove,
    cycleSpaceRight,
  };

  let module = {};

  module.user = user;
  module.styles = styles;
  module.responses = responses;
  module.settings = settings;

  return module;
})();
