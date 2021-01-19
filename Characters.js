const neighbours = {
    character: ['Paul', 'Sheila', 'Susan', 'Toadie'],
    
    business: ['Lassiters', 'The Water Hole', 'The School', 'The Law Office'],
    
    live: ['No.22', 'No.24', 'No.28', 'No.30']  
}

const generateCharac = () => {
    
    let randomCharacter = neighbours.character[Math.floor(Math.random() * neighbours.character.length)];
    
    let randomBusiness = neighbours.business[Math.floor(Math.random() * neighbours.business.length)];
    
    
    let randomLive = neighbours.live[Math.floor(Math.random() * neighbours.live.length)];
    
    console.log(`Your character is ${randomCharacter}, you'll be working at ${randomBusiness} and you'll be living at ${randomLive}.`);
    
}

generateCharac();

