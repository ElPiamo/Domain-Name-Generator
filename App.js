let pronoun = ['the','our', 'her', 'your', 'my', 'their'];
let adj = ['great', 'big', 'ugly', 'main', 'huge', 'small', 'bad' ];
let noun = ['jogger','racoon', 'tigress', 'lion', 'cat', 'dinasaur'];
let extension = ['.com','.net', '.ve', '.gob', '.co', '.org'];

for(let i=0; i<pronoun.length; i++){
    for(let j=0; j<adj.length; j++){
        for(let k=0; k<noun.length; k++){
            for(let l=0; l<extension.length; l++){
            var domainName = `${pronoun[i]}${adj[j]}${noun[k]}${extension[l]}`
                 console.log(domainName)}}}}