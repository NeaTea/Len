const Discord = require('Discord.js');

const movieInfo = require('movie-info')

module.exports = {
    name: 'movie-info',
    description: 'Get info on your favorite movie',

    execute(message,args) {
    let movies = args.join(" ");
    if(!movies)return message.channel.send("Oh no, please list a movie")
 
 
 
     
     movieInfo(`${movies}`).then(
         function (res) {
             // success
 
 var voteEmoji = ":shrug:"
 
 if(res.vote_average < 5){
 var voteEmoji = ":thumbsdown:"
 }else if(res.vote_average > 5){
     var voteEmoji = ":thumbsup: "
 }
 
          
              
            
 
             let movieE = new Discord.RichEmbed()
             .addField("***Title***", res.title, true)
             .addField("***Original Title***", res.original_title,true)
             .addField("***Votes***", res.vote_count, true)
             .addField("***Id***", res.id,true)
             .addField("***Popularity***", res.popularity, true)
             .addField("***Video***", `${res.video}.` ,true)
             .addField("***Vote Average***", voteEmoji + res.vote_average,true)
             .addField("***Original Language***", res.original_language, true)
             .addField("***Genre Id's***", res.genre_ids,true)
             .addField("***Adult***", res.adult, true)
             .addField("***Overview***", res.overview, true)
             .addField("***Release Date***", res.release_date, true)
             .setThumbnail(res.imageBase + res.poster_path)
             .setColor("#FFFFFF")
           
             message.channel.send(movieE);
             
             //=> { ... }
         },
         function (err) {
             // failed
         })

        }
}
