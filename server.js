let IdentityRapped = 'APP ID';
const { Worker, isMainThread, threadId } = require('worker_threads');
const express = require('express');
const Ably = require('ably');
const envConfig = require('dotenv').config();
const serveStatic = require('serve-static');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const storage = require('node-sessionstorage');
const auth = require('./authMiddleware');

const app = express();
const { ABLY_API_KEY } = envConfig.parsed;
const globalQuizChName = 'main-quiz-thread';

const BASE_URL = 'https://dev.triviabillionia.com/api';

console.log(envConfig, ABLY_API_KEY);

// parse various different custom JSON types as JSON
app.use(bodyParser.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies

let globalQuizChannel;
const activeQuizRooms = {};
let totalPlayersThroughout = 0;

const realtime = new Ably.Realtime({
  key: ABLY_API_KEY,
  echoMessages: false
});

// app.set('views', path.join(__dirname, 'views'));

//setting view engine to ejs
app.set('view engine', 'ejs');

//route for index page
app.get('/', function (req, res) {
  res.render('pages/index');
});

//route for about page
app.get('/about', function (req, res) {
  console.log(req.headers);
  res.render('pages/about');
});

app.use(express.static(__dirname + '/dist'));
app.use('', serveStatic(path.join(__dirname, 'realtime-quiz/dist')));

//route for login page
app.get('/login', function (req, res) {
  res.render('pages/login');
});

//POST route for login page
app.post('/login', function (req, res) {
  const { countrycode, phonenumber, emailaddress } = req.body;
  console.log(countrycode, phonenumber, emailaddress);

  try {
    // Confirm and Verify Phone Number
    axios
      .get(
        `${BASE_URL}/verify?type=1&number=${phonenumber}&country=ng&language=${countrycode}`
      )
      .then((response) => {
        console.log(response.statusText);

        if (response.statusText === 'OK') {
          // Go to OTP Route
          res.redirect('/verifyotp');
        }
      });
  } catch (error) {
    console.log(error);
  }
});

// route for OTP
app.get('/verifyotp', function (req, res) {
  res.render('pages/otp');
});

// POST route for OTP
app.post('/verifyotp', function (req, res) {
  const { phonenumber, emailaddress } = req.body;
  const phone_nos = '08149055068';
  let code_phone_nos = '+234' + phone_nos.slice(1);

  // log data to console
  console.log(phonenumber, emailaddress);

  let myOTP =
    req.body['digit-1'] +
    req.body['digit-2'] +
    req.body['digit-3'] +
    req.body['digit-4'] +
    req.body['digit-5'] +
    req.body['digit-6'];

  try {
    // Write Logic to authenticate
    axios
      .post(`${BASE_URL}/login`, {
        channel_type: 'phone',
        channel_id: code_phone_nos,
        channel_email: emailaddress,
        channel_verification: myOTP
      })
      .then((response) => {
        req.user = response.data.token;
        console.log('Token: ' + response.data.token);
        console.log('Username: ' + response.data.username);
<<<<<<< HEAD
        storage.setItem('token', response.data.token);
        storage.setItem('username', response.data.username);
=======

        // Save Token to Session
        res.cookie('token', response.data.token);
        req.headers['Authorization'] = response.data.token;
>>>>>>> 237cc4b9cdf1bb1d57ce54d092f763018419c3ae

        if (response.statusText === 'OK') {
          // Push to Start Game Page
          // Check If OTP is sucessful, redirect to game Menu
          res.redirect('/game');
        }
      });
  } catch (error) {
    console.log(error);
  }
});

app.get('/auth', (request, response) => {
  const tokenParams = { clientId: uniqueId() };
  realtime.auth.createTokenRequest(tokenParams, function (err, tokenRequest) {
    if (err) {
      response
        .status(500)
        .send('Error requesting token: ' + JSON.stringify(err));
    } else {
      response.setHeader('Content-Type', 'application/json');
      response.setHeader('Access-Control-Allow-Origin', '*');
      response.send(JSON.stringify(tokenRequest));
    }
  });
});

const uniqueId = function () {
  return 'id-' + Math.random().toString(36).substr(2, 16);
};

// Change To Another Route
app.get('/game', auth.isAuthorized, function (req, res) {
  res.sendFile(path.join(__dirname, 'realtime-quiz/dist/index.html'));
});

app.get('/game/play', function (req, res) {
  let requestedRoomCode = req.query.quizCode;
  console.log(requestedRoomCode);
  if (activeQuizRooms[requestedRoomCode].didQuizStart === true) {
    res.sendFile(path.join(__dirname, 'realtime-quiz/dist/index.html'));
  } else {
    res.sendFile(path.join(__dirname, 'realtime-quiz/dist/index.html'));
  }
});

app.get('/game/checkRoomStatus', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  let requestedRoomCode = req.query.quizCode;
  res.send({
    isRoomClosed: activeQuizRooms[requestedRoomCode]
      ? activeQuizRooms[requestedRoomCode].didQuizStart
      : true
  });
});

const listener = app.listen(process.env.PORT || 8082, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

realtime.connection.once('connected', () => {
  globalQuizChannel = realtime.channels.get(globalQuizChName);
  globalQuizChannel.presence.subscribe('enter', (player) => {
    console.log('new quiz host', player.clientId);
    generateNewQuizRoom(
      player.data.nickname,
      player.data.roomCode,
      player.clientId
    );
  });
});

function generateNewQuizRoom(hostNickname, hostRoomCode, hostClientId) {
  if (isMainThread) {
    const worker = new Worker('./quiz-room-server.js', {
      workerData: {
        hostNickname: hostNickname,
        hostRoomCode: hostRoomCode,
        hostClientId: hostClientId
      }
    });
    console.log(`CREATING NEW THREAD WITH ID YYYY ${threadId}`);
    worker.on('error', (error) => {
      console.log(`WORKER EXITED DUE TO AN ERROR YYYY ${error}`);
    });
    worker.on('message', (msg) => {
      if (msg.roomCode && !msg.killWorker) {
        activeQuizRooms[msg.roomCode] = {
          roomCode: msg.roomCode,
          totalPlayers: msg.totalPlayers,
          didQuizStart: msg.didQuizStart
        };
        totalPlayersThroughout += totalPlayersThroughout;
      } else if (msg.roomCode && msg.killWorker) {
        totalPlayersThroughout -= msg.totalPlayers;
        delete activeQuizRooms[msg.roomCode];
      } else {
        activeQuizRooms[msg.roomCode].didQuizStart = msg.didQuizStart;
        console.log('Main knows started');
      }
    });

    worker.on('exit', (code) => {
      console.log(`WORKER EXITED WITH THREAD ID XXXX ${threadId}`);
      if (code !== 0) {
        console.log(`WORKER EXITED DUE TO AN ERROR WITH CODE XXXX ${code}`);
      }
    });
  }
}
