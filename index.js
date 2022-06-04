const Discord = require('discord.js');
var axios = require('axios');
//const https = require('https');
//const apiURL = "https://api.fakeyou.com/tts/inference";

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

//Cliente online

client.on("ready", () =>
  {
  console.log (`"Log In Successful, Client is ${client.user.tag}`);
})

client.on("message", msg => {
  if(msg.content === "=closs"){
    msg.reply("Ahora te lo grabo pa");
  }
});


//Creando POST para fakeyou




/*
const params = JSON.stringify({
"uuid_idempotency_token":"entropy",
"tts_model_token":"TM:rvzq739brpbs",
"inference_text":"Probando este bot."
  }
);


const Json = axios.post('https://api.fakeyou.com/tts/inference', params,{
  headers:{
    'Accept': 'application/json',
    "content-type": "application/json"
  },
}).then((response) => {

console.log(`El resultado es: ${response}`);

}).catch((error) => {

console.log(error);

});
*/


/*

    UTILIZANDO CURL

curl -X POST 'https://api.fakeyou.com/tts/inference' 

 -H 'Accept: application/json' \
 -H 'Content-Type: application/json' \
 --data-raw '{"uuid_idempotency_token":"entropy","tts_model_token":"TM:rvzq739brpbs","inference_text":"Testing"}'
*/










console.log("holi");











client.login(process.env.TOKEN)