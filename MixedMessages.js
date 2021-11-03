//Random Horoscope Generator

const astroSignMessage = {

 
astroSign: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capicorn', 'Aquarius', 'Pisces'],
fortune: ['You will have a good day', 'You will have a bad day', 'You will have an average day'],
message: ['Stomach problems could prevail if you have not been watching your diet. You will not be able to trust someone you work with. You need some excitement in your life, and meeting new people in exotic destinations will certainly satisfy your desires.',
'You need an outlet that will help take your mind off any troubles at work. Opportunities for romance will develop through activities with large groups. Property investments should payoff.',
'Chances are you could get stuck with a colleague\'s job unexpectedly. Make alternate plans just in case you need to make a career shift. A change in position could be better than you thought.',
'Hassles with in-laws could put a damper on your day. Children or friends may try to talk you into lending them money. You will be overly generous with children today.',
'Someone may try to damage your reputation. Any renovation or decorating to your home should include the whole family. Arguments may flare up in your home.',
'Plan to get together with someone special later in the day. Put your efforts into making changes to your domestic scene. Do something that will be stimulating and creative.',
'You\'ve been a little down and you need a lift. Your magnetic, outgoing personality will capture hearts. Concentrate on work or make changes to yourself.',
'You can enjoy short trips. Patience will be of utmost importance. You can open up to your mate and let them know what you expect out of this relationship.',
'You can clear up important legalities and sign contracts today. You can help other people with their financial problems by setting up a budget for them. You will feel tired and rundown if you have allowed yourself to get into a financial mess.',
'A second chance will result in good work. Exhaustion combined with overindulgence could result in minor health problems. There\'s a good chance that they won\'t come back.',
'Purchases will be well worth it and they will last a long time. Education may be the answer. You will be in an overly generous mood today.',
'Don\'t allow colleagues to stand in your way. Too much work and no play will not only result in fatigue and frustration but also loneliness, too. Get involved in activities that will bring you knowledge about foreign land, philosophies, or cultures.']

};

const astroSignNumberGen= (number) => {
    number = astroSignMessage.astroSign.length
    return Math.floor(Math.random()*number)
   }; 

const fortuneNumberGen= () => {
    number = astroSignMessage.fortune.length
    return Math.floor(Math.random()*number)
   }; 

const messageNumberGen= () => {
    number = astroSignMessage.message.length
    return Math.floor(Math.random()*number)
   }; 

let userMessage = []

const loggedAstroSign = () => {
    return astroSignMessage.astroSign[astroSignNumberGen()]
    
};

    userMessage.push(loggedAstroSign())

const loggedFortune = () => {
    return astroSignMessage.fortune[fortuneNumberGen()]
};

userMessage.push(loggedFortune())

const loggedMessage = () => {
        return astroSignMessage.message[messageNumberGen()]
        
};

    userMessage.push(loggedMessage())

console.log(userMessage)