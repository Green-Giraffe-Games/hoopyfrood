// SOUNDS

let sounds = {
    castOff: new Audio('cast-off.wav'),
    startQTE: new Audio('qte-start.wav'),
    progressQTE: new Audio('qte-progress.wav'),
    failQTE: new Audio('qte-fail.wav'),
    successQTE: new Audio('qte-success.wav'),
    craft: new Audio('craft.wav'),
    delete: new Audio('craft-delete.wav'),
    castOn: new Audio('cast-on.wav'),
    blip: new Audio('inventory-blip.wav'),
    bloop: new Audio('inventory-bloop.wav'),
    deletereally: new Audio('craft-delete-really.wav'),
    tomWaits: new Audio('tom-waits.mp3')
}

function setSoundVolume(volume) {
    for (let sound in sounds) {
        sounds[sound].volume = volume;
    }
}

// LOCATION LOCATION LOCATION

let locations = [
    {
        name: "House",
        locked: false,
        description: "Your house. There are no fish here.",
        flavourtext: [
            "the plant on the windowsill is in a perpetual state of almost-dead. but it hangs in there, you know, like a metaphor",
            "a single shoe hides under your bed. it's been lonely since the other one left",
            "a spider's spun a little castle in the corner",
            "something has been spilt on the carpet and never cleaned. it's OK. we all spill things",
            "there's a crack in the wall. a crack in everything. that's how the light gets in, and the fish too",
            "those plastic chairs weren't born to be indoor furniture, but who am i to judge",
            "the cracks in the ceiling are just the house learning new ways to smile, i guess",
            "the telly flickers with static, a pixel sea where there are no fish to catch. switch the channel. let the white noise wash over you",
            "the broken sofa sits, a monument to comfier times. it's less a seat, more an understanding between friends",
            "the dented tin of baked beans in the cupboard is waiting for the day the world ends, or you forget to shop, whichever comes first",
            "a single shoe lies in the middle of the room. where's the other one gone? was there ever another one?",
            "there's that one corner of the room where the wallpaper has started to peel. it's like the house is trying to undress itself, slowly",
            "the cold fridge hums a slow serenade to the leftover pasta, there's a sort of nobility in its electricity"
        ],
        fish: ["Dumb secret fish"],
        backgroundColor: "#f2f2f2",
        titleColor: "#000",
        h2Color: "#000",
        buttonColor: "#008080"
    },
    {
        name: "Lake",
        locked: false,
        description: "A peaceful lake full of a variety of fish.",
        flavourtext: [
            "across the water the reeds shift, saying so long friend, try another cast",
            "a dragonfly gets hopes up, flirts close, kisses the edge of your reflection",
            "alright, enough of the quietude ― more toss and plunk",
            "the sun heaps itself onto the top of the water and you realise its just showing off", 
            "a chorus of crickets fills the air, their bodies composing a symphony, this place refusing to ever shut up",
            "an elephantine cloud manages to look busy doing nothing",
            "the fish take your bait like a deal, like a handshake between a cowboy and a spaceman, no one really knowing what the other's about",
            "geese overhead argue about formation",
            "the forest at your back. it isn't asking anything of you but you feel it, don't you? the trees aren't putting on all this green for nothing.",
            "a twig looks like it's pointing somewhere. if you follow, maybe you'll find seven people you'd otherwise never meet",
            "a beetle trundles through the grass behind you on some one-beetle quest you'll never really understand",
            "a duck lowers itself into the water, like it's winning ‘world's best duck'",
            "if counted correctly, somewhere along the shoreline would be the 301st pebble",
            "a heron wades watching, plagiarising, learning to make her own rod next",
            "the pine trees do nothing for free",
            "almost nowhere smells this good",
            "behind you, a fern bends towards another fern. you sigh because plants",
            "there are frogs on the lake's edge. you like them because they're just as damp as you are",
            "rumour has it the secret boss level is this same lake, but at night", 
            "the old picnic table has a general aura of haven't-i-done-well. i guess so. nobody's objecting",
            "beyond: hills, doing their best to keep it together",
            "the water has learnt to live beneath the sky, just like you right?",
            "time is everywhere else being bad at being time",
            "does anyone know where things go when things go missing? anyway, feel free to fish",
            "the moss on the rocks at your feet, it feels like home but weird",
            "the bees out here are wild and full of pollen doing god knows what",
            "your lure shines in the water like the deviant it is",
            "remember at some point your worn-out chair had a life outside this",
            "the sun goes into your mouth and stays there. this is a day for framing",
            "underneath you are just worms and in the sky are just branches having a silent staring contest",
            "you spot some duck tracks and squint at them because footprints are like jokes and maybe you can get the punchline",
            "spottail ducks and mourning doves skim the surface of the water. They fly between the trees; they do not infringe", 
            "a bird flies from one tree to another. it sings in a low voice and everything listens and answers",  
            ],
        fish: ["Trout", "Catfish", "Bass", "Arowana", "Golden trout"],
        backgroundColor: "#94C9A9",
        titleColor: "#074F57",
        h2Color: "#5F464B",
        buttonColor: "#E6AF2E"
    },
    {
        name: "River",
        locked: false,
        description: "A fast-flowing meltwater river.",
        flavourtext: [
            "when you catch a fish here, it's not a victory. more like making a friend who doesn't really want to be friends", 
            "snow and fish don't converse but you do think they understand each other; at least as much as you understand either of them", 
            "fishing is lonely but so can be the river, so can be the fish", 
            "hello, it's your fingertips reminding you they're still there, numbed by the hurried mountain river, how about slipping on some mittens next time?", 
            "being alone up here isn't so bad. surround yourself with mountains, dive into your own mind, send a worm beneath the frigid waters",
            "obviously, miss a fish once shame on the fish, miss twice that's on you. remember that poems are love letters to fish. mountains are old but probably not wise. chop wood easy as chopping open a can of something for dinner alone and remember logic isn't even a real thing",
            "the river flows, it does its thing", 
            "having a bad fishing time? discover how many fish are still in the river, quite a lot probably. life's all pointy and complicated but when you fish here you're kinda all legs too",
            "above you, the cold sun, below the stubborn river; you, a dot with a fishing rod. everywhere else, pixels",
            "casting a line here is like texting your ex. sometimes, it's what you've got to do. not often, it feels good.",
            "look at that fish. you don't know its name. who's gonna tell you. it might be a salmon maybe, or maybe it's too small. they chill a lot though, nobody can take that away from them", 
            "mountain cascades offscreen - don't think about it too hard. the river won't make sense if you scrutinize it either", 
            "there are more stars than there are words to describe the cold. and maybe even more fish if you can hold on long enough.", 
            "don't consider the symmetry of fish faces right now. just keep your line in the water and your hopes afloat.", 
            "this moment is yours, all yours, so flood it with patience, make it rich",
            "here, forests watch you fish",
            "don't call it loneliness just because the echoes of your casting line never return back 'hey'. the sibilant whispers of pine sizzle in the cold, the river is your hello.",
            "you feel fresh air baptising your cheeks, replacing the city with alpine wild. suddenly, perhaps, you ache for post-its with lists.",
            "the water looks at itself and knows it can never leave the mountains behind",
            "the cold is very cold, sometimes; and at others, it is more than that",
            "mountains in your periphery, like god giving side-eye",
            "the fish here are thick and weird and confused by hunger",
            "in defence of the cold; aren't we all just fishing for a warm touch, even if it's paradoxically from cold fish",
            "there's something to not knowing the time, with a cold line and silent arm; liberation? purgatory?",
            "never think they're pixels on a string; they swim amidst the game of the river and the stones, they're keeping secrets even from the frost",
            "mountains cast shadows even at noon, even in clear skies, and there's a chill in the shadowzones that bounces off the river. but, surprisingly, you only notice the cold when you've caught something. maybe hypothermia is a small price to pay",
            "no one else is going to sit frozen in a mountain river and try to flirt with fish through telepathy but it's okay if that's what you're about, that's kind of moving",
            "if a fish takes the bait, that's good. if it doesn't, that's good too. it's probably just a bit shy",
            "the sound of your line peeling away is the quietest type of 'yes'", 
            "dace, salmon, all lined up in their digital array, waiting in the icy river flow,", 
            "when it's really quiet, you wonder if a yeti's gonna whoop you at poker or something for the last granola bar in the pack. imagine the air as blue crystal, the snow-dusted trees wrapping you in whispers taller than houses",
            "isn't it wild how an echo is just your bellowed 'HEY' playing a lazy game of tag with the mountain's belly", 
            "do you ever feel like the bobber, just floating, waiting to be pulled under?", 
            "it's cold here, very cold. you feel it in the air. you feel it in the slight numbing of your fingertips. the fish feel it too, though perhaps in a different way.", 
            "when the pixels dance, that's just the fish, don't worry too much",],
        fish: ["Arowana", "Dace", "Salmon", "Carp", "Stick", "Golden trout"],
        backgroundColor: "#4E6E5D",
        titleColor: "#CFCFCF",
        h2Color: "#4DA167",
        buttonColor: "#4d5057"
    },
    {
        name: "Ocean",
        locked: false,
        description: "The wide, open ocean.",
        flavourtext: [
            "seagulls wheel and call", 
            "zoom in, okay now zoom out. hi ocean", 
            "you lose the sandwich contest to the seagulls, again. But really everyone's winning",
            "from here the city's noise is just a rumour, maybe a child's nickname",
            "the air smells salty", 
            "tiny ocean waves slide themselves up your shins, let's imagine they're saying hel-lo, if a wave could do a thing like speech. knock knock, says the shoreline, remember that time you were a child and almost ate the sand?", 
            "the sea continues to exist, big time",
            "that boat in horizon could belong to anyone, lets pretend it belongs to a historian sadly allergic to pages. let's pretend it's you after six correct lotto numbers if, for example, they didn't pay out in cash but in boats?", 
            "as you cast your line, the horizon shifts its weight, being all shiftless",
            "pay attention to the rhythm – cast, that heart-feel, return. good, isn't it?",
            "each sprayed bubbly hiss says welcome stranger, stay",
            "you whisper your secrets to the bait, but can fish even appreciate confessions?",
            "there are ghosts under this water. but who cares they're fish ghosts",
            "your bobber wobbles, nervous, like a hipster sipping in a sports bar",
            "a wave forms and dissolves and nobody clapped",
            "if the ocean were invisible, you'd actually be lost",
            "a glimmer in the blue, more like a reminder of a sunken k-mart than treasure",
            "gently does it, catch the wave gossiping against your fishing line",
            "are the swells the oean's own way to shrug?",
            "somewhere past the waves, something important is about to be swallowed up by a beautiful whale",
            "the ocean: just a vast, empty nothing",
            "did you bring enough sunblock?",
            "you kneel to touch the sand, imagine wishing a shark into existence",
            "that cloud never seems to move, kinda smug everytime you look",
            "a foghorn sounds, a distant 'i love you' from a cargo ship maybe",
            "tomorrow seems close from here. like you could reach over and pat it",
            "o this folded majesty, where shoe and tide converse in murmurings. they keep no secrets. tune in",
            "if you see a jellyfish, remember: each tentacle performs its own longing",
            "a seagull passes and you hope it's on its way to do antiseagull stuff",
            "the waves do the wave. they understand irony after all",
            "maybe fish aren't caught, maybe they want the stories about the big hooks in the sky",
            "there's a street corner down there where once, i'm sure, there was a sweet shop, a bakery, a place where you could buy balloons. now it's just fish and quiet." ,
            "see that lonely buoy bobbing? even ocean got his nose in things it cannot control",
            "the ocean does the breath in breath out with her surges",
            "can you hear the kraken? passively combing his teeth in the dark, wanting nothing", 
            "close your eyes again, that noise in the distance could really be a mermaid's call if you try not to laugh",
            "a buoy cries out faraway. the response of the sea is nondescript enthusiasm.",
            "the ocean is stirring the sand, scraping shells, being characteristically wet",
            "whispering winds talk, tiny shells in the sand try to listen.",
            "a wave comes to introduce itself",
            "somewhere, a squid is indignantly inking"],
        fish: ["Sea bass", "Shark", "Bottled message", "Seaweed", "Mystic Gildeep"],
        backgroundColor: "#2176AE",
        titleColor: "#FBFEF9",
        h2Color: "#191923",
        buttonColor: "#32936F"
    },
    {
        name: "Hidden Lake",
        locked: true,
        description: "A hidden lake in a hidden cave full of mysterious fish...",
        flavourtext: [
            "... in amethyst caverns we drink in scintalces of breath...", 
            "... null perspinitation, our wants ascending...", 
            "... for balance and hints of refuge propitiously congregate and forgive...",  
            "... beyond with long ridged blade like spines might gather a catch of chemspickel...", 
            "... eventide purity, spent in secretive aire...", 
            "... we bob amidst lustrous gaits and feel fate transrete the day...", 
            "... as above predominate awe with smiling expectation on place...", 
            "... endnu et fangst, fed til skraberen...",
            "... through murky pall bring guided rituals release heartlier bearing underground...", 
            "... certain hopes trembles with naked tremors resigns, while gloams make annamnesis blanket fleet's own", 
            "... in undulated chasms infinite we dream divine philicity supreme...", 
            "... imperiled islands situated vice suspelligence, oppugned swallows nilly...", 
            "... empt of logic, yet rich of feel will rest the warmth of water on skin...", 
            "... steadfast voices nest O spzzedane divine bokuo exrets lipos...",  
        ],
        fish: ["Slooker", "Flouridge", "Bronscut", "Golden trout"],
        backgroundColor: "#63264A",
        titleColor: "#F8F1FF",
        h2Color: "#3D0B37",
        buttonColor: "#FF5A5F"
    },
    {
        name: "Sunken City",
        locked: true,
        description: "In the biggest buildings, there are pockets of stale air.",
        flavourtext: [
            "the ruins are more here than there. it's like they have never been above water",
            "the kelp sway, a syrupy applause from an audience of none",
            "don't look too closely at the city. your eyes might start making faces out of the ruins",
            "remember: if you catch anything down here, don't eat it",
            "something about the pressure at this depth feels unhinged. does your fishing line feel heavier?",
            "i heard there's one anglerfish around here that can remember being human",
            "submerged pavement, lichen-laced stone, your own private aquarium",
            "do you feel that? the faint pressure around your temple. it's like the city is shyly trying to knock on your door. remember, you don't have to answer.",
            "you know how deep down, it's colder? this is deep down, but it's not colder, it's... listen, you got a jacket, yes?",
            "sometimes, the shadows move, even when you stay still",
            "just because you can go deeper, doesn't mean you should",
            "have you considered just not being here? maybe you already aren't",
            "you ought to go home at some point, right?",
            "as you reel in, i can almost hear the silent whispers of the city. stories of people, now fish food. we're all fish food, in the end." ,
            "the fish here know about doorways and windows. the fish here have seen too many rooms",
            "look at you, fishing in the ruined city, pretending that catching fish here comes without consequence",
            "the old city, she sings: go fish elsewhere", 
            "fair sane minds might wonder why anyone would fish here, but here you are",
            "you know, there's a saying about fishing in derelict cities: don't",
            "ever cast a line so deep you're scared you might come back up with something other than a fish?",
            "sometimes. you know. it's okay to go home.",
            "you can't remember how long you've been fishing. you don't want to remember. i'm also trying to forget.",
            "does it make sense to fish the depths of an ancient city?",
            "the lure of the old, of the lost, of the underwater - i get it. maybe just don't get lost. or old",
            "you know, if you stay here long enough, you might forget how to human",
            "if you need to talk, i'm here. i mean, i'm not here, but you know",
            "the city looks like a pile of legos after a tantrum. or like a love letter shredded into confetti. or maybe it just looks like a city underwater. who am i to put words in your mouth?",
            "the sunken city makes for a strange fishing spot. maybe you should reconsider",
            "the fish here bite out of anger, not hunger, or maybe they just pity the worm",
            "the game developer would tell you it's all created. all make-believe. but you, buddy, know a real shiver from a scripted one. you feel it too, right?",
        ],
        fish: ["Bigfin squid", "Lanternmouth", "Smiling ghoulfin", "Curse-fish"],
        backgroundColor: "#291711",
        titleColor: "#BEE3DB",
        h2Color: "#89B0AE",
        buttonColor: "#89B0AE" 
    }
    // more locations...
]

let currentLocation = locations[0];

function checkItemInInventory(itemName) {
    return inventory.some(item => item.name === itemName);
}

function selectLocation(index) {
    selectedLocation = locations[index];
    if(selectedLocation.name === 'Sunken City' && !checkItemInInventory('Sundown Sphere')) {
        let descriptionDiv = document.getElementById('location-description');
        descriptionDiv.innerHTML = "You can only get to the sunken city by night.";
        return;
    } else {
    currentLocation = locations[index];
    updateLocation();
    }
}

function updateLocation() {
    
    let select = document.getElementById('location-select');
    select.innerHTML = locations
        .filter(loc => !loc.locked)
        .map((loc, index) => `<option value="${index}" ${currentLocation === loc ? "selected" : ""}>${loc.name}</option>`)
        .join("");
    
    let descriptionDiv = document.getElementById('location-description');
    descriptionDiv.innerHTML = currentLocation.description;
    select.onchange = function() {
        selectLocation(this.value);
        document.body.style.backgroundColor = currentLocation.backgroundColor;
        let h1Elements = document.querySelectorAll("h1");
        h1Elements.forEach(element => {
            element.style.color = currentLocation.titleColor;
        });
        let h2Elements = document.querySelectorAll("h2");
        h2Elements.forEach(element => {
            element.style.color = currentLocation.h2Color;
        });
        // Select all buttons on the page
        var buttons = document.getElementsByTagName('button');
        // Iterate over the buttons
        for(var i = 0; i < buttons.length; i++) {
            // Change the background color of each button
            buttons[i].style.backgroundColor = currentLocation.buttonColor;
        }
    }

    document.getElementById('cast-off').textContent = "Cast off";
    fishing = false;
    fishingStatusDiv.textContent = "You're ready to cast.";

    if (currentLocation.name === "Lake" 
        && inventory.find(item => item.name === "Sundown Sphere") 
        && inventory.find(item => item.name === "The location of the final boss, revealed")) {
        showModal();
    }
}

let flavourTextDiv = document.getElementById('flavour-text');

function displayFlavourText() {
    let flavourTexts = currentLocation.flavourtext;
    let text = flavourTexts[Math.floor(Math.random() * flavourTexts.length)];
    flavourTextDiv.innerText = text;
    flavourTextDiv.style.display = "block";

    // hide the flavour text after 9 seconds
    setTimeout(function() {
        flavourTextDiv.style.display = "none";
    }, 9000);
}

// try to display a flavour text every 20 seconds
setInterval(function() {
    if (Math.random() < 0.75) { // 45% chance to display a flavour text
        displayFlavourText();
    }
}, 20000);
   
function unlockLocation(locationName) {
    let location = locations.find(loc => loc.name === locationName);
    if (!location) {
        console.error("Invalid location name");
        return;
    }
    location.locked = false;
    updateLocation();  // Update the location dropdown
}


// FISHING FISHING FISHING

let fishingStatusDiv = document.getElementById('fishing-status');
let fishing = false;

document.getElementById('cast-off').onclick = function() {
    if (fishing) {
        fishing = false;
        clearTimeout(hookTimeoutId);  // cancel the hookFish timeout
        clearTimeout(fishTimeoutId);  // cancel the QTE timeout if it's ongoing
        if (currentFish) failFishingQTE();  // end the QTE if it's ongoing
        fishingStatusDiv.textContent = "You reeled in your line.";
        sounds.castOn.currentTime = 0;
        sounds.castOn.play();
        document.getElementById('cast-off').textContent = "Cast off";
    } else {
        fishing = true;
        sounds.castOff.currentTime = 0;
        sounds.castOff.play();
        fishingStatusDiv.textContent = "You cast off your line...";
        document.getElementById('cast-off').textContent = "Reel in";
        updateCrafting();
        let [fish, fishTimeout] = getRandomFish();
        hookTimeoutId = setTimeout(() => {
            if (fishing) hookFish(fish);
        }, fishTimeout);
    }
}

function reelInLine() {
    fishing = false;
    clearTimeout(hookTimeoutId); // cancel the hookFish timeout
    clearTimeout(fishTimeoutId); // cancel the QTE timeout if it's ongoing
    if (currentFish) {
        failFishingQTE(); // end the QTE if it's ongoing
    }
    fishingStatusDiv.textContent = "You reeled in your line.";
    sounds.castOn.currentTime = 0;
    sounds.castOn.play();
    document.getElementById('cast-off').textContent = "Cast off";
}

window.onkeydown = function(e) {
    // Check that the pressed key was the spacebar and the target is not an input or textarea
    if (e.keyCode === 32 && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault(); // prevent the default action (scroll / move caret)
        document.getElementById('cast-off').click();
    }
};

function hookFish(fish) {
    if (fish) {
        startFishingQTE(fish);
    } 
}

let keys = ['f', 'i', 's', 'h', 'i', 'n', 'g'];
let rarityModifier = 0; //Adjust to make rare fish more or less common
let nibbleTimeModifier = 1; //Affects time to nibble globally
let QTESlower = 1; // QTE duration multiplier. Increase to give more time on quicktime events.
let keypressModifier = 0; // Adds or subtracts the number of key presses that need to be performed (but cannot be less than 1)
let doubleChance = 0; // 
let cursed = 0; //
let cursedByFish = 0;
let instantChance = 0;

function instantHookChance(instantChance) {
    return 100 * (1 - Math.exp(-0.01 * instantChance))/2;
}

function getArticle(name, capitalize = false) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let article = vowels.includes(name[0].toLowerCase()) ? "an" : "a";

    if (capitalize) {
        return article.charAt(0).toUpperCase() + article.slice(1);
    }
    return article;
}

let difficultyModifier = 1;

function getRandomFish() {
    let pool = [];
    for (let locFish of currentLocation.fish) {
        let fish = fishTypes.find(f => f.name === locFish);
        console.log(fish); // add this line
        for (let i = 0; i < (1 / fish.rarity) * 100 + rarityModifier; i++) {
            pool.push(fish);
        }
    }
    if (pool.length === 0) return [null, null];
    let chosenFish = pool[Math.floor(Math.random() * pool.length)];
    let timeToNibble = (Math.random() * 3.5 + 3) * 1000 * (chosenFish.timeToNibble || 1) * nibbleTimeModifier;
    if (Math.random() < instantHookChance(instantChance) / 100) {
        timeToNibble = 100
    }
    return [chosenFish, timeToNibble];
}

let currentFish = null;
let currentKeypress = null;
let fishTimeoutId = null;

function startFishingQTE(fish) {
    if (fishing = true) {
        sounds.startQTE.play();
        currentFish = JSON.parse(JSON.stringify(fish));  // Clone the fish object so we don't modify the original
        if (Array.isArray(currentFish.keypresses)) {
            currentFish.keypresses = currentFish.keypresses[Math.floor(Math.random() * currentFish.keypresses.length)];
        }
        // Apply keypressModifier, but ensure it doesn't go below 1
        currentFish.keypresses = Math.max(1, currentFish.keypresses + keypressModifier);
        let article = getArticle(currentFish.name, true);    
        fishingStatusDiv.textContent = `${article} ${fish.name} has bit! Press:`;
        nextKeypress();
    }
}

function nextKeypress() {
    sounds.progressQTE.play();
    currentKeypress = getRandomKeypress();
    fishingStatusDiv.textContent += ` ${currentKeypress.toUpperCase()}`
    clearTimeout(fishTimeoutId);
    fishTimeoutId = setTimeout(failFishingQTE, currentFish.timePerKeypress * QTESlower);
}

function failFishingQTE() {
    sounds.failQTE.play();
    fishingStatusDiv.textContent = `The ${currentFish.name} got away...`;
    if (currentFish.curseGiver) {
        cursedByFish += currentFish.curseGiver;
        document.getElementById('fishing-status').textContent += `Not just that, but it cursed you with ${currentFish.curseGiver} units of curse.`;
    }

    // Activate Petersonian mode
    if (inventory.some(item => item.name === "A copy of '12 Rules for Life'")) {
        let response = petersonianFailText[Math.floor(Math.random() * petersonianFailText.length)];
        document.getElementById('fishing-status').textContent += ` ${response}`;
    }

    currentFish = null;
    fishing = false;
    endFishing();
}

function getRandomKeypress() {
    return keys[Math.floor(Math.random() * keys.length)];
}

window.addEventListener('keypress', function(event) {
    if (currentFish && event.key.toLowerCase() === currentKeypress) {
        currentFish.keypresses--;
        if (currentFish.keypresses > 0) {
            nextKeypress();
        } else {
            succeedFishingQTE();
        }
    } else if (currentFish) {
        failFishingQTE();
    }
});

function endFishing() {
    clearTimeout(fishTimeoutId);
    document.getElementById('cast-off').textContent = "Cast off";
}


updateLocation();  // update location at the start

// YOUR CATCH CATCH CATCH

let catches = {Trout: 0};
let catchPage = 1;
let catchCount = 1;

let genericResponses = [
    "It put up a good fight!", 
    "What a catch!", 
    "It looks like a fish!", 
    "Woohoo!",
    "Congratulations, you've landed a fish! Now what?",
    "You're making fishing look easy!",
    "Fish on!",
    "The fish are helpless and drawn to your ability to reel again and again!", 
    "Catch of the day!",
    "Look at the size of it!",
    "That's one fiesty fellow!",
    "Respect!",
    "Wow, you're fishing like a pro!",
    "Holy mackeral, you caught a big one!",
    "Great catch! Keep it up!",
    "This will make a great story!", 
    "You're supposed to release them.",
    "Good fishing prowess, old chap!",
    "The fish breathes once more in your hand - ERUDAPH - then quietly dies.", 
    "It is a mighty fine catch!", 
    "The fish looks different from all angles",
    "That fish put up a lovely fight!",
    "This fish was no match for you!",
    "The fish flips in your hands!",
    "Everyone who sees this fish will want to touch it",
    "The fish looks just like you - that's no coincidence!",
    "The fish wriggles and in your hands, the fish is lifeless",
    "The fish wriggles and in your hands, the fish was nothing but skin and bones",
    "Way to reel 'em in, fisher friend!",
    "Mission accomplished.",
    "Nobody can snatch that catch away from you!",
    "You do that with sophistication, no doubts!",
    "Afterwards, what will you say to the empty river?",
    "Let's see if you can perform the same feat again!", 
    "Aren't you awesome for such a neat hooked fish!", 
    "Well done, reel warrior!", 
    "Indeed, you have captured the very essence of persuasion, charming that fish right onto your hook!",
    "What an angler of sense and sensibility you are!",
    "You really think YOU'RE the one who caught THAT?",
    "You've measured out your life with fishing lines, and this catch is your cup of triumph.",
    "You had us worried there, buddy, but you got the job done!",
    "Hail the fisherman!", 
    "You and the fish, an endless dance of cunning and will. Today, you led.",
    "You pulled a live one! Dang, your fishing skills got more groove than disco.",
    "Sky's the limit of fishing!", 
    "Nothing fishy about that catch!", 
    "Things just keep scaling bigger!",
    "Cock-a-doodle Reel!", 
    "Bravo, fisherman.",
    "Calling you a noodler would be an understatement.",
    "Determino meter about to burst!",
    "Here + Now = Fish. The equation settles.",
    "You're pretty darn good at this!",
    "You can't unfish it now!",
    "Nice. You're like an astronaut, but for catching fish.",
    "Fishing isn't everything but you definitely just caught that.", 
    "Good work.", 
    "Rolling stones gather no fish, but you certainly do",
    "You're reeling them in alright!",
    "You're getting the hang of it!",
    "Who's the catch now?!",
    "What a fishtravagazna!",
    "Revel in this moment, fisherman.",
    "Whatever it was the fish dreamed of, it wasn't this!",
    "Like a strange and willing sacrifice, the fish is yours.",
    "You held your rod with grace under pressure!",
    "Capital! You've redistributed the fish from the sea to your net!",
    "Hooray, you've tricked yet another fish.", 
    "It's not just a fish, it's a tale woven into your personal mythos!",
    "Thank god for that!",
    "Just like your victims, this fish never saw you coming!",
    "Look at that catch! It's the Patrick Bateman of fish!",
    "Here's the thing, you caught a fish. You caught a fish and the whole world stops to watch.",
    "Well, you caught something. That's something, at least.",
    "Caught a fish? Nah, you've just unravelled a mystery of the aquatic universe.",
    "You're not just catching fish, you're rewriting the aquatic constitution.",
    "Woah! Your rod bends like a neon noodle in the moonlight, and BAM! You got a fish!",
    "That's one heck of a fish!",
    "Your grip tightens around the fish, its eyes wide with the same uncertainty you've felt in unfamiliar places.",
    "You caught a fish. It's small, it's slippery, it's beautiful.", 
    "What dread shape, hauled from the Cyclopean deep, now writhes upon your hook?",
    "What a whopper!",
    "Just like the fish, we are all but creatures in the cruel hands of fate, aren't we?",
    "Unbelievable! You pull the fish in and it's like 'Dude, where's my water?'",
    "Through your work, you've claimed the surplus value of the water!",
    "Let us reel, you and I, while the evening is laid out against the sky.",
    "Fishing, you find, is a form of perpetual expectation.",
    "You're catching fish like they're going out of fashion and it's like, 'Fish, you're still in fashion, don't worry.'",
    "You cast your line and it's like 'Ding dong! Special delivery of coolness for Mr Fish,' and bam! You've got another one.",
    "You got this one GOOD!",
    "It's like the water has sent you an emoji. Thumbs up!",
    "All its strangeness, its individuality, encapsulated in a form so foreign to you. You are not alone in your oddness.",
    "Your patience, like that of Simeon, is rewarded - a dazzling catch!",
    "In your fishing, you give us the 'infinitely gentle, infinitely suffering thing'.",
    "It's a fish FOR SURE!",
    "Even the universe is charmed by your skills. Fish on, fish cowboy!",
    "You have a knack for catching fish!",
    "Welp! The fish are throwing themselves at you like discount sushi.",
    "Whoolop! Super catch!",
    "Who needs a fish tale when you've got the real thing?",
    "Look at that! It's practically prehistoric!",
    "Wow! It's like a whale had a baby with a shark!",
    "Impressive! That's a catch to remember!",
    "World champion!",
    "Holy flounder! What a catch!",
    "Fish, meet Angler. Angler, meet triumph.",
    "A fish again! You're turning the laws of probability into charming anecdotes.",
    "Fish on!",
    "Fishing is not about catching one fish, but catching many.",
    "The fish gods applaud your skill!",
    "Watch out everybody! Skilful Fisher on the loose.",
    "Fish, meet air. Air, meet fish. And to think, you're the matchmaker!",
    "That's a huge fish you got there!",
    "Wow, this fish is like a poem! Each scale a verse, each fin a stanza!",
    "The fish was so big, it made your character trip and fall forward!",
    "You actually caught a fish! That's amazing!",
    "Look into the fish's eyes and see your reflection",
    "It'll make a great tale for the grandkids",
    "Like a rhyme caught in the reeds, your fishing prowess exceeds!",
    "Praise be!",
    "A lifetime of happiness!",
    "Your fishing technique is so suave, it's like the James Bond of fishing.",
    "You must be the best fisher around!",
    "You've caught a fish and the world is all 'This is the best day of my life, probably.'",
    "I don't think I could have done it.",
    "Wild! What an impressive fish!",
    "Time to do the celebration shuffle!",
    "That was reel-y impressive!",
    "Congratulations on your fin-tastic catch!",
    "Good fishing? Nah, more like gone fishing SUCCESSFULLY!",
    "You're turning into a true fish-wrangler!", 
    "That's a fish worth bragging about!",
    "You're doing amazing, just keep going!",
    "Rad catch!",
    "Respectable catch!",
    "That one tackled harder than straw-hat chase!", 
    "Oh my lord! Did you just pull a fish from the depths?", 
    "Long live the fisher king!",
    "Truth in Beauty as seen in this catch!", 
    "Piscatorial magnificence!",
    "Dr Noodle never caught one like that!", 
    "If you keep this up, you might just Catch Them All!",
    "I'd be very mindful if I were you, that's a whopper of a fish!",
    "Look at you! You've just caught the fish equivalent of the moon.",
    "You never fail to amaze me.",
    "BOOM! Fish calories for everyone!",
    "You're making fishermen everywhere proud!",
    "Power and might!",
    "Ooh, he's a slippery one!",
    "There's astories will be told about this one.",
    "That's one for the books!",
    "That's the way to catch 'em all!",
    "It's like you have a 6th sense for sensing fish!",
    "The tension between you and that fish was palpable!",
    "Walk proudly, angler!",
    "The fish added something new to your day!",
    "Take a bow. You deserve it!", 
    "That must have taken guts and determination!",
    "Good job catching that fish!",
    "46 more to go!",
    "Oh my cod, what a catch!",
    "Well done, fisher!",
    "The fish will be great barbeque wood tomorrow!",
    "That's one sturdy fish!",
    "Oh boy, look at that fin!",
    "That thing looks like a rare aphrodisiac!",
    "It's time to file that catch and make room for the next fish and the next and the next",
    "Well done. Flawless.",
    "A big ole oily fish!",
    "A fine catch!",
    "Ooh, the scales! They're gleaming",
    "What a get on the rod!",
    "You caught it!", 
    "Fishing is great, you should try it sometime.",
    "It is an omen... in your favour.",
    "Stat clock: It's a behemoth!",
    "Righteous catch!",
    "You have won the ultimate battle of the fish!",
    "It's all over for you, fish!",
    "You really know how to work that rod!",
    "Hear ye! Hear ye! A magnificent fish was caught!",
    "You sure have a lot of fishing technique!", 
    "You're a natural!",
    "You should patent that fish-catching technique!",
    "A great accomplishment!",
    "You freed that fish from an aquatic lifetime of darkness.",
    "That fish had no patience, and now it pays the price.",
    "Your perseverance has born sweet, succulent success!",
    "You did it!",
    "You're a-catching like a pro!",
    "What an intense moment.",
    "Children will talk about your skill for years to come.",
    "Your performance is notable!", 
    "That was model behaviour!",
    "Height of fishing excellence!", 
    "Whether frozen or fried it will have the same nice size!",
    "Your skills are remarkable!",
    "Your drive and passion are evident!",
    "That's a lunker!",
    "That was a big, angry fish.",
    "Good going, bub!",
    "Being a fish: 1st you're wet, then you've been caught by the line pulling back towards something unknown.",
    "What a believer in yourself!",
    "That's a mighty fine fish you've caught!",
    "Your fingers know the routine; mouse click, line cast, pull reel, sling hook; just remember to smile.",
    "Fishing takes patience and skill. You've got both!",
    "You are so strong!",
    "The quarry is conquered!",
    "You're unstoppable!",
    "That thing is pretty mean, kid. I ain't catch no good fish since all that time ago.",
    "Flow with the current, and you'll always find your fish.",
    "Gill impressed!",
    "You shall rename this day 'Catch Day'!",
    "Way to catch that fish!",
    "Fortune smiles on your line!",
    "Fantastic! You've pulled off a major feat!",
    "Conditions were perfect.",
    "O the thrill of the catch!",
    "A shining moment of success for sure!",
    "Teach all these make-believe things why real life anglers matter!",
    "Time to brag!",
    "Time to count this fish among the others you've caught.",
    "Show 'em how it's done, seasoned fisherman",
    "Did you see that look on that fish's face when you reeled it in!",
    "It's not going anywhere.", 
    "You're relentless!", 
    "A fish in the hand is worth two in the barrell!",
    "You are the fish whisperer!", 
    "Easy as reeling in fish!", 
    "Holy fish sticks, it's huge!",
    "That fish is so big, it has to wear longer pants.",
    "What incredible luck! That fish is huge!",
    "You have to catch a lot more fish!",
    "The calmness of the water is no longer disturbed by the fish you caught.",
    "The fish looks mortified!",
    "You have no idea why you are catching fish!",
    "You catch fish just the way other people catch colds! You're so good at fishing!",
    "This is hard work!",
    "Rapturous applause is warranted.",
    "That was fate.",
    "This time it won't be the Fish mocking you.",
    "Time to conduct some Fish Research!",
    "Now what?",
    "It's like a fish out of water!",
    "Another fish to add to your killfile",
    "Wow, way to beat the fish at its own game!",
    "Being mostly water yourself, it's a kind of meetup, isn't it?",
    "Nice fishing, fisherman!",
    "Perhaps a crown awaits you somewhere.", 
    "Observed. Appreciated. Reeled in.", 
    "You can now ponder what to do with this catch!",
    "Finesse is key in hunts such as this one!",
    "You've finally served justice to this fish!", 
    "Fishing tactics paying off!",
    "The hooks shall bring justice on the unforgiving creatures of the sea.",
    "It's clear that you and the water have an understanding.",
    "The world today celebrates you and your venture.",
    "Look at the curvature of his back!", 
    "Prom is over.",
    "Savvy angler! Ye netted such a grand prize!",
    "Your fishing exploits are the stuff of dreams!",
    "You caught a fish, there's a weird sense of reward-dismay, as you see the silver glimmer at the surface, the language of gills, it's not quite regret but it dances the awkward two-step of some eventual-goodbye.",
    "Your name will forever be etched in fishing lore!",
    "Every catch is a testament to your unwavering dedication!",
    "Your angling abilities inspire awe in all who witness them!",
    "You've conquered the fish, like the Quangle Wangle's wish!",
    "Your fishing game is on a whole new level!",
    "Other anglers marvel at your precision and skill!",
    "You are the ultimate angling virtuoso!",
    "What an epic finned struggle to have ended thus.",
    "The fish looks very impressed!",
    "Fish songs crescendo in delight!",
    "Congrats on the coveted whopper!",
    "You're a ripper fisher, no doubt about it!",
    "that fish fell for you harder than your ex did",
    "The fish you caught really speaks volumes about who you are.",
    "Wow, a battle of wills - and you won.",
    "You are quite the aquarius!",
    "But, really, you're the real catch here.",
    "Your bait was the last thing the poor fish ever loved.",
    "To catch a fish is to honour its life by ending it.",
    "If your worm could talk, it would say: I got you, fish.",
    "You know good-smelling fish when you see them.",
    "The fish wriggles in desperate delight.",
    "You are such a fisherman, you catch stupid fish all the time!",
    "You'll hook a windfish next!",
    "They must have thrown a hook in the ocean to bring this one up.",
    "You're going to fry that, right?",
    "Maybe the fish is smarter than you.",
    "You could be warned never to fish again, but you wouldn't listen.",
    "Is this what you wanted?",
    "Persistence. Patience. Fish.",
    "The fish will remember your hands.", 
    "You are art, this fish is art, fishing is art.",
    "It's a fish, but it's also a metaphor.", 
    "You're fishing like a person.",
    "Oh, the wonders it must have seen before your line cast it in.",
    "What else is new?", 
    "Holding the fish, you wonder: is this it?",
    "The fish tries to tell you a joke, but you don't understand fish speak",
    "Like a young generation, the fish struggles in death.", 
    "Look, the dictionary just learned a new word - Fish!",
    "It is a sign of the times!",
    "The net snares the flopping witness.",
    "You do not do it because you want to, you do it because you have to.",
];

let currentResponses = genericResponses;

function escapeChance(cursed) {
    100 * (1 - Math.exp(-0.01 * cursed + cursedByFish))/2;
}

function doubleHookChance(doubleChance) {
    return 100 * (1 - Math.exp(-0.01 * doubleChance))/2;
}

function succeedFishingQTE() {
    fishing = false;

    let article = getArticle(currentFish.name);
    let description;
    if(currentFish.descriptions && currentFish.descriptions.length > 0){
        description = currentFish.descriptions[Math.floor(Math.random() * currentFish.descriptions.length)];
    } else {
        description = currentResponses[Math.floor(Math.random() * currentResponses.length)];
    }

    let catchMessage = `You caught ${article} ${currentFish.name}! ${description}`;
    let catchCount = 1;

    if (Math.random() < escapeChance(cursed) / 100) {
        catchCount = 0;
        sounds.failQTE.play();
        curseText = cursedTexts[Math.floor(Math.random() * cursedTexts.length)];
        catchMessage = `You would have caught a ${currentFish.name}, but ${curseText}.`;
    } else {
        if (Math.random() < doubleHookChance(doubleChance) / 100) {
            catchCount = 2;
            catchMessage = `You caught TWO ${currentFish.name}!! ${description}`;
        }
        sounds.successQTE.play();
    }
    fishingStatusDiv.textContent = catchMessage;
    
    if (catches[currentFish.name]) {
        catches[currentFish.name] += catchCount;
    } else {
        catches[currentFish.name] = catchCount;
    }

    currentFish = null;
    endFishing();
    updateCatch();
    checkMilestones();
}


function updateCatch() {
    const fishPerPage = 6;
    let catchDiv = document.querySelector('.your-catch');
    catchDiv.innerHTML = '<h2>Your Catch</h2>';
    let h2Elements = document.querySelectorAll("h2");
    h2Elements.forEach(element => {
        element.style.color = currentLocation.h2Color;
    });

    let fishKeys = Object.keys(catches);
    fishKeys.sort(); // This line sorts the fish keys alphabetically

    let start = (catchPage - 1) * fishPerPage;
    let end = start + fishPerPage;
    let totalPages = Math.ceil(fishKeys.length / fishPerPage);

    for (let i = start; i < end && i < fishKeys.length; i++) {
        let fish = fishKeys[i];
        catchDiv.innerHTML += `<p>${fish}: ${catches[fish]}</p>`;
    }

    catchDiv.innerHTML += `<p>
        <span id="prev-link" class="${catchPage > 1 ? '' : 'hidden'}"><a href="#" id="prev-page">Previous</a></span>
        <span id="nav-pipe" class="${(catchPage > 1 && catchPage < totalPages) ? '' : 'hidden'}"> | </span>
        <span id="next-link" class="${catchPage < totalPages ? '' : 'hidden'}"><a href="#" id="next-page">Next</a></span>
    </p>`;
    document.getElementById('prev-page').onclick = prevCatchPage;
    document.getElementById('next-page').onclick = nextCatchPage;

}

function prevCatchPage(event) {
    event.preventDefault();
    if (catchPage > 1) {
        catchPage--;
        updateCatch();
    }
}

function nextCatchPage(event) {
    event.preventDefault();
    if (catchPage < Math.ceil(Object.keys(catches).length / 2)) {
        catchPage++;
        updateCatch();
    }
}

updateCatch();  // to display the initial catch






// CRAFT CRAFT CRAFT

// Function to capitalize first letter of a word
function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Function to create a random bait name
function randomizeBait() {
    let baitWords = [
        "blob", "jelly", "flip", "twist", 
        "salt", "poot", "swirl", "nibble",
        "bloom", "splish", "gloop", "schloop",
        "plip", "plop", "plap", "baffle",
        "grub", "gobble", "munch", "sludge",
        "gar", "ray", "suckle", "jabber",
        "snaff", "splash", "gloop", "gum",
        "kip", "snirt", "sploosh", "dunk",
        "nippy", "glug", "skip", "snarl",
        "snax", "fish", "bisk", "chew",
        "easy", "angler", "snak", "bait",
        "hooke", "em", "lure", "scape",
        "blend", "eat", "antic", "omatic",
        "mor", "grip", "honey", "nosh",
        "line", "box", "scale", "gill",
        "nom", "mouth", "catch", "lark" 
    ];
    let word1 = baitWords[Math.floor(Math.random() * baitWords.length)];
    let word2 = baitWords[Math.floor(Math.random() * baitWords.length)];

    // Ensure we have two different words
    while(word1 === word2) {
        word2 = baitWords[Math.floor(Math.random() * baitWords.length)];
    }
    let baitName = capitalizeFirstLetter(word1) + word2 + " Bait";
    return baitName;
}

let majorSacrifices = 0;
let recipesEffect = "Equipping this item unlocks new crafting recipes."

let items = [
    {
        name: "Fish bait",
        description: "Makes you attractive to fish.",
        effect: "Slightly reduces the time it takes for a fish to nibble.",
        cost: { Trout: 3, Bass: 1},
        use: function(){
            nibbleTimeModifier *=0.88;
        },
        remove: function() {
            nibbleTimeModifier /=0.88;
        }
    },
    {
        name: "Riverfish stew",
        description: "Improves your reflexes.",
        effect: "Gives you slightly more time to reel in your fish.",
        cost: {Salmon: 1, Dace: 1, Carp: 3},
        skipStatus: true,
        craft: function()
        {
            if (Math.random() < 0.9)
            {
                let item = 
                {
                    name: "Riverfish stew",
                    effect: "Gives you slightly more time to reel in your fish.",
                    use: function() { QTESlower += 0.12; },
                    remove: function() { QTESlower -= 0.12; }
                };
                addItemToInventory(item);
            }
            else
            {
                document.getElementById('crafting-status').textContent = `The fish hit the pot like an old secret. This is better than usual, maybe even better than that.`;
                let item = 
                {
                    name: "Riverfish stew +",
                    effect: "Tastes better than usual. Gives you more time to reel in your fish.",
                    use: function() { QTESlower += 0.18; },
                    remove: function() { QTESlower -= 0.18; }
                };
                addItemToInventory(item);
            }
            updateInventory();
        }
    },
    {
        name: "Sea bass bag",
        description: "A bag, made from sea bass.",
        effect: "When equipped: increases the size of your inventory.",
        cost: { "Sea bass": 10},
        equippable: true,
        class: "bag",
        equipEffect: function () {
            inventorySize += 2;
        },
        unequipEffect: function () {
            inventorySize -= 2;
        }
    },
    {
        name: "Lucky fishbone",
        description: "Some say it may bring you good luck.",
        effect: "Slightly increases your chance of rare catches.",
        cost: { Arowana: 1},
        use: function(){
            rarityModifier +=6;
        },
        remove: function() {
            rarityModifier -=6;
        }
    },  
    {
        name: "Recipe Book: Rods",
        description: "A book full of recipes, containing new items to craft.",
        effect: `${recipesEffect}`,
        cost: { "Bottled message": 1 },
        equippable: true,
        class: "book",
        equipEffect: function() {
            items.push(
                {
                    name: "Simple rod",
                    description: "A simple rod for simplified fishing. Made of sticks and seaweed.",
                    effect: "When equipped: simplifies the process of reeling in fish.",
                    cost: { Stick: 2, Seaweed: 1 },
                    equippable: true,
                    class: "rod",
                    equipEffect: function(){
                        keys = ['f', 'i', 's', 'h'];
                    },
                    unequipEffect: function() {
                        keys = ['f', 'i', 's', 'h', 'i', 'n', 'g'];
                    }
                },
                {
                    name: "Lazy rod",
                    description: "A rod for the unharried.",
                    effect: "When equipped: fish arrive more slowly, but you have much more time to reel them in.",
                    cost: { Stick: 3, Trout: 6, Carp: 6, Seaweed: 2},
                    equippable: true,
                    class: "rod",
                    equipEffect: function () {
                        nibbleTimeModifier *=1.33;
                        QTESlower += 0.42;
                    },
                    unequipEffect: function () {
                        nibbleTimeModifier /=1.33;
                        QTESlower -= 0.42;
                    }
                },
                {
                    name: "Sharkbone rod",
                    description: "Wielded by only the most forceful anglers.",
                    effect: "When equipped: reduces how many times you need to yank on fish to retrieve them.",
                    cost: { Stick: 3, Shark: 1 },
                    equippable: true,
                    class: "rod",
                    equipEffect: function () {
                        keypressModifier -= 2;
                    },
                    unequipEffect: function () {
                        keypressModifier += 2;
                    }
                },
                {
                    name: "Dual rod",
                    description: "For those who want to hook more than one fish at once.",
                    effect: "Grants a significant chance to hook two fish simultaneously.",
                    cost: { Stick: 2, Seaweed: 2, Trout: 2, Carp: 2 },
                    equippable: true,
                    class: "rod",
                    equipEffect: function () {
                        doubleChance += 45;
                    },
                    unequipEffect: function () {
                        doubleChance -=45;
                    }
                },
                {
                    name: "Chaotic rod",
                    description: "A rod with unpredictable effects.",
                    effect: "When equipped: Does stuff",
                    cost: { Stick: 3, Trout: 5, "Sea bass": 5, Carp: 5},
                    craft: function () {
                        // Choose 1 effect manually
                        let chosenEffect = equipEffects.find(effect => effect.class === 'keys');
            
                        // Choose 2 random effects
                        let usedClasses = { [chosenEffect.class]: true };
                        let itemEffects = [chosenEffect];

                        let numberOfEffects = [1, 2, 2, 2, 3, 3, 4]; 
                        let randomIndex = Math.floor(Math.random() * numberOfEffects.length); // Choose a random index in your array
                        
                        for (let i = 0; i < numberOfEffects[randomIndex]; i++) {
                            let availableEffects = equipEffects.filter(effect => !(effect.class in usedClasses));
                            let effect = availableEffects[Math.floor(Math.random() * availableEffects.length)];
                            usedClasses[effect.class] = true;
                            itemEffects.push(effect);
                        }
                    
                        // Create the item with the chosen effects
                        let item = {
                            name: itemEffects.map(effect => effect.descriptiveWord).join(' ') + " Fishing Rod",
                            description: "A special fishing rod with unique properties.",
                            effect: itemEffects.map(effect => effect.description).join('. ') + '.',
                            equippable: true,
                            class: "rod",
                            equipEffect: function() { 
                                itemEffects.forEach(effect => effect.equip()); 
                                },
                            unequipEffect: function() { 
                                itemEffects.forEach(effect => effect.unequip()); 
                                }
                        };
            
                        addItemToInventory(item);
                    }
                },
            );
            updateCrafting();
        },
        unequipEffect: function() {
            let namesToRemove = ["Simple rod", "Lazy rod", "Sharkbone rod", "Dual rod", "Chaotic rod"];
            items = items.filter(item => !namesToRemove.includes(item.name));
            updateCrafting();
        }
    },
    {
        name: "Recipe Book I",
        description: "A book full of recipes, containing new items to craft.",
        effect: `${recipesEffect}`,
        cost: { "Bottled message": 1 },
        equippable: true,
        class: "book",
        equipEffect: function() {
            items.push(
                {
                    name: "Superior bait",
                    description: "Use fish to help you catch more fish.",
                    cost: { Trout: 6, Carp: 5, Catfish: 2, Salmon: 2},
                    craft: function(){
                        if (Math.random() < 0.9)
                        {
                            let item = 
                            {
                                name: "Superior bait",
                                effect: "Greatly reduces the time it takes for fish to nibble.",
                                use: function() { nibbleTimeModifier *=0.75; },
                                remove: function() { nibbleTimeModifier /=0.75; }
                            };
                            addItemToInventory(item);
                        }
                        else
                        {
                            document.getElementById('crafting-status').textContent = `You're like a bait wizard, you know? Sort of like a sandwich artist, but with fish guts. This bait is your Mona Lisa.`;
                            let item = 
                            {
                                name: "Superior bait +",
                                effect: "Reduces the time it takes for fish to nibble. More effective than usual.",
                                use: function() { nibbleTimeModifier *=0.67; },
                                remove: function() { nibbleTimeModifier /=0.67; }
                            };
                            addItemToInventory(item);
                        }
                        updateInventory();
                    }
                },
                {
                    name: "Arcane bait",
                    description: "Mysterious bait with added effects.",
                    effect: "Slightly reduces the time it takes for fish to nibble. Can have other effects, too.",
                    skipStatus: true,
                    cost: { Trout: 10, Carp: 5, Bass: 5, Arowana: 1 },
                    craft: function() {
                        
                        if (Math.random() < 0.9)
                        {
                            let usedClasses = {"inventory": true, "nibbleTime": true};
                            let itemEffects = [{
                                description: "Fish nibble quicker.",
                                use: function() { nibbleTimeModifier *= 0.85; },
                                remove: function() { nibbleTimeModifier /= 0.85; },
                                class: "fishing"
                            }];
                    
                            let availableEffects = effects.filter(effect => !(effect.class in usedClasses));
                            let effect = availableEffects[Math.floor(Math.random() * availableEffects.length)];
                            usedClasses[effect.class] = true;
                            itemEffects.push(effect);

                            let item = {
                                name: itemEffects.slice(1).map(effect => effect.descriptiveWord).join(' ') + " Bait", //exclude the first effect's descriptive word
                                description: "A mysterious bait with unknown powers.",
                                effect: itemEffects.map(effect => effect.description).join('.. ')+", too.",
                                use: function() { itemEffects.forEach(effect => effect.use()); },
                                remove: function() { itemEffects.forEach(effect => effect.remove()); }
                            };
                            addItemToInventory(item);
                        }
                        else {
                            document.getElementById('crafting-status').textContent = `This bait is slightly better than usual. Feels good, doesn't it? Keep fishing. The internet is quiet tonight.`;
                            
                            let usedClasses = {"inventory": true, "nibbleTime": true};
                            let itemEffects = [{
                                description: "Fish nibble quicker.",
                                use: function() { nibbleTimeModifier *= 0.75; },
                                remove: function() { nibbleTimeModifier /= 0.75; },
                                class: "fishing"
                            }];
                    
                            let availableEffects = effects.filter(effect => !(effect.class in usedClasses));
                            let effect = availableEffects[Math.floor(Math.random() * availableEffects.length)];
                            usedClasses[effect.class] = true;
                            itemEffects.push(effect);
                            
                            let item = {
                                name: itemEffects.slice(1).map(effect => effect.descriptiveWord).join(' ') + " Bait +", //exclude the first effect's descriptive word
                                description: "A mysterious bait with unknown powers.",
                                effect: itemEffects.map(effect => effect.description).join('.. ')+", too.",
                                use: function() { itemEffects.forEach(effect => effect.use()); },
                                remove: function() { itemEffects.forEach(effect => effect.remove()); }
                            };
                            addItemToInventory(item);  
                        }
                    }
                },
                {
                    name: "Bundled bones",
                    description: "Several lucky arowana bones, tied together with a strand of seaweed",
                    cost: { Arowana: 3, Seaweed: 1 },
                    craft: function() 
                    {
                        if (Math.random() < 0.9)
                        {
                            let item = 
                            {
                                name: "Bundled bones",
                                effect: "Significantly increases chance of rare catches.",
                                use: function() { rarityModifier +=12; },
                                remove: function() { rarityModifier -=12; }
                            };
                            addItemToInventory(item);
                        }
                        else
                        {
                            document.getElementById('crafting-status').textContent = `You've nailed it, haven't you? Took something beautiful and made it useful.`;
                            let item = 
                            {
                                name: "Bundled bones +",
                                effect: "Very significantly increases chance of rare catches.",
                                use: function() { rarityModifier += 18; },
                                remove: function() { rarityModifier -= 18; }
                            };
                            addItemToInventory(item);
                        }
                        updateInventory();
                    }
                },
                {
                    name: "Shark bag",
                    description: "A bag, made from sharks. It's pretty spacious.",
                    effect: "When equipped: increases the size of your inventory.",
                    cost: { Shark: 3},
                    equippable: true,
                    class: "bag",
                    equipEffect: function () {
                        inventorySize += 4;
                    },
                    unequipEffect: function () {
                        inventorySize -= 4;
                    }
                },
                {
                    name: "Reinforced bag",
                    description: "A bag, made from sharks and reinforced with seaweed. It's a little more spacious than even a shark bag.",
                    cost: { Shark: 5, Seaweed: 10, Salmon: 2, Dace: 2, Bass: 2, Catfish: 2},
                    craft: function ()
                    {
                        if (Math.random() < 0.9)
                        {
                            let item = 
                            {
                                name: "Reinforced bag",
                                effect: "When equipped: increases the size of your inventory.",
                                equippable: true,
                                class: "bag",
                                equipEffect: function () {
                                    inventorySize += 5;
                                },
                                unequipEffect: function () {
                                    inventorySize -= 5;
                                }
                            };
                            addItemToInventory(item);
                        }
                        else
                        {
                            document.getElementById('crafting-status').textContent = `It's a wonder, a marvel: some fine cosmic chef has baked extra space into the crust of your bag for you - the bearer of gifts, the grand poobah of trinkets, the master of tetris in three dimensions.`;
                            let item = 
                            {
                                name: "Reinforced bag +",
                                effect: "When equipped: increases the size of your inventory.",
                                equippable: true,
                                class: "bag",
                                equipEffect: function () {
                                    inventorySize += 6;
                                },
                                unequipEffect: function () {
                                    inventorySize -= 6;
                                }
                            };
                            addItemToInventory(item);
                        }
                    }
                },
            );
            updateCrafting();
        },
        unequipEffect: function() {
            let namesToRemove = ["Superior bait", "Arcane bait", "Shark bag", "Bundled bones", "Reinforced bag"];
            items = items.filter(item => !namesToRemove.includes(item.name));
            updateCrafting();
        }
    },
    {
        name: "Recipe Book II",
        description: "A book full of advanced recipes with exotic effects",
        effect: `${recipesEffect}`,
        cost: { "Bottled message": 2 },
        equippable: true,
        class: "book",
        equipEffect: function () {
            items.push(
                {
                    name: "Trout Farm",
                    description: "A small farm that produces trout.",
                    effect: "Automatically adds a trout to your catch every 30 seconds.",
                    cost: { Trout: 10, Stick: 4 },
                    craft: function() {

                        let troutFarmTimings = [15, 20, 25, 25, 25, 30, 30, 30, 30, 30, 35, 35, 40, 45, 50, 55, 60]; 
                        let randomIndex = Math.floor(Math.random() * troutFarmTimings.length);
                        let troutFarmTimer = troutFarmTimings[randomIndex]

                        let item = {
                            name: "Trout farm",
                            effect: "Adds a trout to your catch every " + troutFarmTimer + " seconds.",
                            use: function () {
                                this.intervalId = setInterval(() => {
                                    if (!catches["Trout"]) catches["Trout"] = 0;
                                    catches["Trout"]++;
                                    updateCatch();
                                }, troutFarmTimer * 1000);  // every this many seconds
                            },
                            remove: function () {
                                clearInterval(this.intervalId);
                            }
                        };
                    addItemToInventory(item);    
                    }
                },    
                {
                    name: "Extra line",
                    description: "A supplementary seaweed fishing line, with a shark-tooth hook.",
                    effect: "Grants a non-trivial chance to hook two fish in the same cast.",
                    cost: { Seaweed: 8, Shark: 1},
                    craft: function() 
                    {
                        if (Math.random() < 0.9)
                        {
                            let item = 
                            {
                                name: "Extra line",
                                effect: "This extra line grants a chance to hook an extra fish.",
                                use: function() { doubleChance += 15; },
                                remove: function() { doubleChance -= 15; }
                            };
                            addItemToInventory(item);
                        }
                        else
                        {
                            document.getElementById('crafting-status').textContent = `There's a rhythm to it. Twist, pull, tie. This has gone improbably well.`;
                            let item = 
                            {
                                name: "Extra line +",
                                effect: "This extra line grants a chance to hook an extra fish. It is much more effective than a standard extra line.",
                                use: function() { doubleChance += 40; },
                                remove: function() { doubleChance -= 40; }
                            };
                            addItemToInventory(item);
                        }
                        updateInventory();
                    }
                },
                {
                    name: "Carp secret",
                    description: "The carp have secrets. You can extract them, if you try.",
                    effect: "Transformed your carp.",
                    cost: {Carp: 10},
                    skipStatus: true,
                    craft: function() {
                        if (shuffledHints.length === 0) {
                            // All hints have been displayed, reshuffle
                            shuffledHints = shuffle([...hints]);
                        }
                
                        // Display the next hint
                        const hint = shuffledHints.pop();
                        document.getElementById('crafting-status').textContent = hint;
                    },
                },
                {
                    name: "Secret map",
                    description: "The knowledge of how to access a secret location, pieced together from hints found in ocean-bottles.",
                    effect: "Reveals a hidden location. Don't worry; you won't forget the way.",
                    cost: { "Bottled message": 5 },
                    skipStatus: true,
                    craft: function () {
                        unlockLocation("Hidden Lake");
                        document.getElementById('crafting-status').textContent = `You now know the way to a hidden underground lake.`;
                        updateCatch();
                    }
                },
                {
                    name: "Recipe Book III",
                    description: "Contains secrets and fish guts.",
                    effect: `${recipesEffect}`,
                    cost: { "Bottled message": 3, Trout: 20, Salmon: 3, Dace: 3 , Arowana: 2},
                    equippable: true,
                    class: "book",
                    equipEffect: function () {
                        items.push(
                            {
                                name: "Jenny Arowana",
                                description: "An arowana, made to look like something else.",
                                effect: "Transformed your arowana.",
                                cost: {Arowana: 5},
                                skipStatus: true,
                                craft: function() {
                                    let newFish = ["Gildeep", "Golden trout"][Math.floor(Math.random() * 2)];
                                    if (!catches[newFish]) catches[newFish] = 0;
                                    catches[newFish]++;
                                    document.getElementById('crafting-status').textContent = `Your arowana transformed into 1 ${newFish}.`;
                                    updateCatch();
                                    checkMilestones();
                                },
                                // remove function not needed for this item, since it doesn't have a persistent effect
                            },
                            {
                                name: "Slooker stew",
                                description: "Improves your reflexes by an unpredictable (but potentially substantial) amount.",
                                effect: "Gives you more time to reel in your fish.",
                                cost: {Slooker: 1, "Sea bass": 2, Salmon: 2},
                                craft: function () {
                                    let slownessAdder = 13; // Start with .15
                                    let chance = Math.random();
                                    
                                    // 90% chance to increment
                                    while(chance < 0.90) {
                                        slownessAdder += 1;
                                        chance = Math.random();
                                    }
                                    let stewName = "Slooker stew";
                                    if (slownessAdder < 17) {
                                        stewName = "Slooker stew +";
                                    } else if (slownessAdder <= 24) {
                                        stewName = "Slooker stew ++";
                                    }
                        
                                        let item = {
                                            name: stewName,
                                            effect: "You taste that its effectiveness has a numerical value of "+slownessAdder + ".",
                                            use: function() { QTESlower += slownessAdder / 100; },
                                            remove: function() { QTESlower -= slownessAdder / 100; }
                                        };
                                        addItemToInventory(item);
                                }
                            },
                            {
                                name: "Flouridge bait",
                                description: "A bait that works slightly differently to the others.",
                                effect: "Grants a chance to instantly hook a fish.",
                                cost: { Flouridge: 1 },
                                craft: function () {
                                    let increasedChance = 5; // Start with +5
                                    let chance = Math.random();
                                    
                                    // 72% chance to increment inventorySize
                                    while(chance < 0.72) {
                                        increasedChance += Math.floor(Math.random() * 6) +1;
                                        chance = Math.random();
                                    }
                                    let baitName = randomizeBait();
                                    if (increasedChance < 15) {
                                    } else if (increasedChance < 18) {
                                        baitName += " Extra Strength";
                                    } else if (increasedChance <= 26) {
                                        baitName += " Deluxe";
                                    } else if (increasedChance <= 32) {
                                        baitName += " Super Deluxe";
                                    } else {
                                        baitName += " Super Deluxe +";
                                    }
                            
                                    let item = {
                                        name: baitName,
                                        description: "You sense that its effectiveness has a numerical value of "+increasedChance,
                                        effect: "You can't help but notice that its effectiveness has a numerical value of "+increasedChance,
                                        use: function() { instantChance += increasedChance; updateInventory(); },
                                        remove: function() { instantChance -= increasedChance; updateInventory(); }
                                    };
                                    addItemToInventory(item);
                                }
                            },
                            {
                                name: "Slooker comb",
                                description: "With this item, you can catch no fish.",
                                effect: "With this item, you can catch no fish. The effects can be reversed by removing the item.",
                                cost: { Slooker: 3 },
                                use: function() {
                            
                                    for (let location of locations) {
                                        // Save the current fish array
                                        location.savedFish = location.fish.slice(0);
                                        if (location.name === "House") {
                                            // If the location is House, replace the fish array with just the new fish
                                            location.fish = ["No Fish"];
                                        } else {
                                            // For all other locations, make the fish array empty
                                            location.fish = [];
                                        }
                                    }
                                    currentLocation = locations.find(location => location.name === currentLocation.name);
                                    updateLocation();
                                },
                                remove: function() {
                                    // For each location, restore the original fish array
                                    for (let location of locations) {
                                        location.fish = location.savedFish;
                                        delete location.savedFish;
                                    }
                                    currentLocation = locations.find(location => location.name === currentLocation.name);
                                    updateLocation();
                                }
                            },
                        )
                        updateCrafting();
                    },
                    unequipEffect: function () {
                        let namesToRemove = ["Jenny Arowana", "Slooker stew", "Slooker comb", "Flouridge bait"];
                        items = items.filter(item => !namesToRemove.includes(item.name));
                        updateCrafting();
                    }
                }
            );
            updateCrafting();
        },
        unequipEffect: function() {
            let namesToRemove = ["Extra line", "Trout Farm", "Carpy Hanniver", "Carp secret", "Secret map", "Recipe Book III"];
            items = items.filter(item => !namesToRemove.includes(item.name));
            updateCrafting();
        }
    },
    // more items...
]

function updateCrafting() {
    let select = document.getElementById('crafting-select');
    select.innerHTML = items.map((item, index) =>
        `<option value="${index}">${item.name}</option>`
    ).join("");

    select.onchange = function() {
        let item = items[select.value];
        let costText = Object.keys(item.cost).map(fish =>
            `${item.cost[fish]} ${fish}`
        ).join(", ");

        document.getElementById('crafting-status').textContent = 
        `To craft ${item.name}, you need: ${costText}`;
        document.getElementById('crafting-effect').textContent = 
        `${item.description}`;
    }
    
    document.getElementById('craft').onclick = function() {
        craftItem(items[select.value]);
    }

        // Invoke the onchange event to update the crafting status with the first item's recipe.
        select.onchange();
}

updateCrafting();

function craftItem(item) {
    if (inventory.length >= inventorySize && !item.skipStatus) {
        sounds.delete.currentTime = 0;
        sounds.delete.play();
        document.getElementById('crafting-status').textContent = "Your inventory is full. Remove an item before crafting.";
    } else {
        let missingIngredients = [];
        for (let fish in item.cost) {
            if (!catches[fish] || catches[fish] < item.cost[fish]) {
                missingIngredients.push(fish);
            }
        }

        if (missingIngredients.length > 0) {
            sounds.delete.currentTime = 0;
            sounds.delete.play();

            // Join all missing ingredients into a single string, using "and" for the last one
            let missingIngredientsText = missingIngredients.length > 1 ? 
                missingIngredients.slice(0, -1).join(', ') + ' and ' + missingIngredients.slice(-1) 
                : missingIngredients[0];
            
            document.getElementById('crafting-status').textContent = `You don't have enough ${missingIngredientsText} to craft ${item.name}.`;
            return;
        }

        for (let fish in item.cost) {
            catches[fish] -= item.cost[fish];
        }
        if (item.craft) {
            item.craft();
            sounds.craft.currentTime = 0;
            sounds.craft.play();
        } else {
            addItemToInventory(item);
            sounds.craft.currentTime = 0;
            sounds.craft.play();
        }
        updateCatch();
        if (!item.skipStatus) {
            document.getElementById('crafting-status').textContent = `You crafted ${item.name}!`;
        }  
    }
}





// INVENTORY INVENTORY INVENTORY

let inventory = [];
let inventorySize = 6;

function updateInventory() {
    let inventoryDiv = document.querySelector('.inventory-items');
    document.querySelector('.inventory > h2').textContent = `Inventory: ${inventory.length} of ${inventorySize}`;
    
    inventoryDiv.innerHTML = inventory.map((item, index) =>
        `<div class="item">
        <h3>${item.name}${item.isEquipped ? "<span style='font-style:italic;'> (Equipped)</span>" : ""}</h3>
            <p>${item.effect}</p>
            ${item.equippable ? (item.isEquipped ? 
                `<p><button onclick="unequipItem(${index})">Unequip</button> <button onclick="removeItemFromInventory(${index})">Remove</button></p>` : 
                `<p><button onclick="equipItem(${index})">Equip</button> <span id="equip-status-${index}"></span> <button onclick="removeItemFromInventory(${index})">Remove</button></p>`) : 
                `<p><button onclick="removeItemFromInventory(${index})">Remove</button></p>`}
             </div>`
    ).join("");

    // Select all buttons on the page
    var buttons = document.getElementsByTagName('button');
    
        // Iterate over the buttons
        for(var i = 0; i < buttons.length; i++) {
            // Change the background color of each button
            buttons[i].style.backgroundColor = currentLocation.buttonColor;
        }
}

updateInventory();  // to display the initial inventory

function addItemToInventory(item) {
    inventory.push({ ...item, isEquipped: false });
    if (item.use) {
        item.use();
    }
    updateInventory();
}

function equipItem(index) {
    let item = inventory[index];
    let sameClassItem = inventory.find(i => i.class === item.class && i.isEquipped);
    if (sameClassItem) {
        sounds.delete.currentTime = 0;
        sounds.delete.play();
        document.getElementById(`equip-status-${index}`).textContent = `You can only equip one ${item.class}.`;
    } else {
        sounds.blip.currentTime = 0;
        sounds.blip.play();
        item.isEquipped = true;
        item.equipEffect();
        updateInventory();
    }
}

function unequipItem(index) {
    let item = inventory[index];
    item.isEquipped = false;
    item.unequipEffect();
    sounds.bloop.currentTime = 0;
    sounds.bloop.play();
    updateInventory();
}

function removeItemFromInventory(index) {
    sounds.deletereally.currentTime = 0;
    sounds.deletereally.play();
    let item = inventory[index];
    if (item.removable === false) {
        item.effect = `${item.effect} but you're not willing to get rid of it.`;
        updateInventory();
    } else {
        if (item.isEquipped) {
            item.isEquipped = false;
            item.unequipEffect();
        }
        if (item.remove) {
            item.remove();
        }
        inventory.splice(index, 1);

        if (item.name === "Sundown Sphere" && currentLocation.name === "Sunken City") {
            currentLocation = locations.find(loc => loc.name === "House");
            updateLocation();
        }

        updateInventory();
    }
}



// SETTINGS SETTINGS SETTINGS

let settingsModal = document.getElementById('settingsModal');

window.onload = function() {
    settingsModal.style.display = "block";
}

document.getElementById('closeSettings').onclick = function() {
    settingsModal.style.display = "none";
    let difficulty = document.getElementById('difficulty').value;

    switch (difficulty) {
        case "simplified":
            QTESlower = 2.5;
            keypressModifier = -2;
            nibbleTimeModifier = 0.5;
            break;
        case "medium":
            QTESlower = 1;
            break;
        case "harder":
            QTESlower = 0.9;
            nibbleTimeModifier = 0.92;
            doubleChance = 5;
            break;
        case "hard":
            QTESlower = 0.72;
            keypressModifier = 2;
            nibbleTimeModifier = 0.85;
            doubleChance = 5;
            document.getElementById("title").outerHTML = "<h1>Hoopyfrood Fishing: Extreme!</h1>";
            break;
        case "contemplative":
            nibbleTimeModifier = 4;
            break;
        default:
            QTESlower = 1;
    }

    // Sound muting
    let sound = document.getElementById('sound').checked;
    setSoundVolume(sound ? 1 : 0);

    // Game load
    let loadGameCheck = document.getElementById('load-game').checked;
    if (loadGameCheck) {
        loadGame();
        updateInventory();
    }

}

function explainDifficulty() {
    let difficulty = document.getElementById('difficulty').value;
    let explanation = document.getElementById('difficultyExplain');

    switch (difficulty) {
        case "medium":
            explanation.innerText = "The intended experience.";
            break;
        case "harder":
            explanation.innerText = "Everything is a little harder to catch, but this has some compensations: fish arrive slightly faster, and sometimes, you'll hook two at once.";
            break;
        case "simplified":
            explanation.innerText = "Makes the game easier, at the expense of ruining the experience.";
            break;
        case "hard":
            explanation.innerText = "Much harder, but fish bite moderately faster. For experienced anglers who want to have a bad time.";
            break;
        case "contemplative":
            explanation.innerText = "The same difficulty as normal, but with longer periods of boredom.";
            break;
        default:
            explanation.innerText = "The intended experience.";
    }
}


function saveGame() {
    localStorage.setItem('catches', JSON.stringify(catches));
    localStorage.setItem('locations', JSON.stringify(locations));
    localStorage.setItem('milestones', JSON.stringify(milestones));
    localStorage.setItem('majorSacrifices', JSON.stringify(majorSacrifices));
    localStorage.setItem('narratorInteracted', JSON.stringify(narratorInteracted));
    console.log(localStorage.getItem('majorSacrifices')); // Add this    
}


function loadGame() {
    let savedCatchList = localStorage.getItem('catches');

    if (savedCatchList) {
        catches = JSON.parse(savedCatchList);
        updateCatch();
    }

    // Load inventory boost
    let retrievedValue = localStorage.getItem('majorSacrifices');
    console.log(retrievedValue); // Add this
    if(retrievedValue !== null){
        inventorySize += parseInt(retrievedValue, 10);
        majorSacrifices = parseInt(retrievedValue, 10);
        //catches.Trout = 9000; catches["No Fish"] = 5; catches.Lanternmouth = 25;  catches.Witherskark = 5;  catches.Whale = 5; catches["Curse-fish"] = 8; catches["Bigfin squid"] = 8; catches["Smiling ghoulfin"] = 8;
        //catches["Spectral salmon"] = 8;  catches.Eel = 12; catches.Slooker = 12;  catches.Flouridge = 12; catches.Bronscut = 12;
    }

    // Load narratorInteraction status
    narratorInteracted = JSON.parse(localStorage.getItem('narratorInteracted'));

    // Load location unlocked status from Local Storage
    let savedLocations = localStorage.getItem('locations');
    if (savedLocations) {
        savedLocations = JSON.parse(savedLocations);
        for (let i = 0; i < savedLocations.length; i++) {
            let originalLocation = locations.find(loc => loc.name === savedLocations[i].name);
            if (originalLocation) {
                originalLocation.locked = savedLocations[i].locked;
            }
        }
    }
    

    updateLocation();

    // Load Milestones
    let savedMilestones = localStorage.getItem('milestones');
    if (savedMilestones) {
        let loadedMilestones = JSON.parse(savedMilestones);
        for (let fish in milestones) {
            if (loadedMilestones[fish] && loadedMilestones[fish].reached) {
                milestones[fish].reached = true;
                if (milestones[fish].position !== undefined) {
                    items.splice(milestones[fish].position - 1, 0, milestones[fish].reward);
                } else {
                    items.push(milestones[fish].reward);
                }
            }
        }
        updateCrafting();
    }
}


// MILESTONES MILESTONES MILESTONES

let milestones = {
    Trout: {
        reached: false,
        count: 1,
        reward: {
            name: "Trout Sacrifice",
            description: "To save your catch, give a trout to the fish-gods. (This will not save your inventory.)",
            effect: "Transformed your trout.",
            cost: {Trout: 1},
            skipStatus: true,
            craft: function() {
                document.getElementById('crafting-status').textContent = `The trout is gone; your catch is saved.`;
                updateCatch();
                saveGame();
            },
        },
        position: 1   
    },
    "Sea bass": {
        reached: false,
        count: 8,
        reward: {
            name: "Trouty Hanniver",
            description: "A trout, made to look like something else.",
            effect: "Transformed your trout.",
            cost: {Trout: 10},
            skipStatus: true,
            craft: function() {
                let newFishOptions = ["Bass", "Catfish", "Shark", "Carp", "Arowana", "Salmon", "Dace", "Stick", "Seaweed", "Sea bass", "Bottled message"];
                let newFish = newFishOptions[Math.floor(Math.random() * newFishOptions.length)];
                if (!catches[newFish]) catches[newFish] = 0;
                catches[newFish]++;
                document.getElementById('crafting-status').textContent = `Transformed your trout into a ${newFish}.`;
                updateCatch();
            },
        },
        position: 2
    },
    Gildeep: {
        reached: false,
        count: 1,
        reward: {
            name: "Mystic bag",
            description: "Increases your inventory size by an unpredictable (and, if you're lucky, very substantial) amount.",
            effect: "When equipped: Increases inventory size.",
            cost: { Gildeep: 1 },
            equippable: true,
            class: "bag",
            craft: function () {
                let increasedSize = 2; // Start with +2 inventorySize
                let chance = Math.random();
                
                // 70% chance to increment inventorySize
                while(chance < 0.70) {
                    increasedSize++;
                    chance = Math.random();
                }
                let bagName;
                if (increasedSize === 2) {
                    bagName = "Mystic handbag";
                } else if (increasedSize === 3) {
                    bagName = "Mustic tote bag";
                } else if (increasedSize <= 5) {
                    bagName = "Mystic backpack";
                } else if (increasedSize <= 8) {
                    bagName = "Mystic suitcase";
                } else if (increasedSize <=10) {
                    bagName = "Mystic sack";
                } else {
                    bagName = "Mystic space-time cavity";
                }
        
                let item = {
                    name: bagName,
                    description: "A mystical bag that increases your inventory size by "+increasedSize,
                    effect: "Increases inventory size by "+increasedSize,
                    equippable: true,
                    class: "bag",
                    equipEffect: function() { inventorySize += increasedSize; updateInventory(); },
                    unequipEffect: function() { inventorySize -= increasedSize; updateInventory(); }
                };
                addItemToInventory(item);
            }
        },
        position: 3
    },
    "Golden trout": {
        reached: false,
        count: 1,
        reward: {
            name: "Fish Orb",
            description: "A mysterious orb made of fish carcasses. It bestows a randomised (and in some cases, very powerful) object upon crafting.",
            cost: { "Golden trout" : 1, Trout: 10},
            craft: function() {
                let usedClasses = {};
                let itemEffects = [];
        
                let numberOfEffects = [2, 2, 3, 3, 3, 4]; 
                let randomIndex = Math.floor(Math.random() * numberOfEffects.length); // Choose a random index in your array
        
                for (let i = 0; i < numberOfEffects[randomIndex]; i++) {
                    let availableEffects = effects.filter(effect => !(effect.class in usedClasses));
                    let effect = availableEffects[Math.floor(Math.random() * availableEffects.length)];
                    usedClasses[effect.class] = true;
                    itemEffects.push(effect);
                }
                
                let item = {
                    name: itemEffects.map(effect => effect.descriptiveWord).join(' ') + " Orb",
                    description: "A mysterious object with unknown powers.",
                    effect: itemEffects.map(effect => effect.description).join('. ')+".",
                    use: function() { itemEffects.forEach(effect => effect.use()); },
                    remove: function() { itemEffects.forEach(effect => effect.remove()); }
                };
                
                addItemToInventory(item);
            }
        },
        position: 3
    },
    "No Fish": {
        reached: false,
        count: 1,
        reward: {
            name: "Recipe Book IV",
            description: "You're getting close to the end game, now.",
            effect: `${recipesEffect}`,
            cost: { "Bottled message": 4 },
            equippable: true,
            class: "book",
            equipEffect: function() {
                items.push(
                    {
                        name: "Major Sacrifice",
                        description: "Sacrifice enough trout, and the Gods might permanently increase the depth of your pockets.",
                        effect: "Transformed your trout.",
                        get cost() {
                            return { Trout: 1000 * (majorSacrifices + 1) }
                        },
                        skipStatus: true,
                        craft: function() {
                            inventorySize += 1;
                            majorSacrifices += 1;
                            updateInventory();
                            updateCatch();
                            saveGame();

                            // Refresh cost display
                            document.getElementById('crafting-select').onchange();
                        },
                    },
                    {
                        name: "Trouty Hanniver +",
                        description: "A lot of trout, made to look like something else.",
                        effect: "Transformed your trout.",
                        cost: {Trout: 100},
                        skipStatus: true,
                        craft: function() {
                            if (Math.random() < 0.66) {
                                let newFishOptions = ["Bass", "Catfish", "Shark", "Carp", "Arowana", "Salmon", "Dace", "Stick", "Seaweed", "Sea bass", "Bottled message"];
                                for(let i=0; i<10; i++) {
                                    let newFish = newFishOptions[Math.floor(Math.random() * newFishOptions.length)];
                                    if (!catches[newFish]) catches[newFish] = 0;
                                    catches[newFish]++;
                                }
                                document.getElementById('crafting-status').textContent = `Transformed your 100 trout into ten new fishes.`;
                                updateCatch();
                            } else {
                                let newFishOptions = ["Slooker", "Flouridge", "Bronscut", "No Fish"];
                                let newFish = newFishOptions[Math.floor(Math.random() * newFishOptions.length)];
                                if (!catches[newFish]) catches[newFish] = 0;
                                catches[newFish]++;
                                document.getElementById('crafting-status').textContent = `Transformed 100 trout into a ${newFish}.`;
                                updateCatch();
                            }



                        },
                    },
                    {
                        name: "Sundown Sphere",
                        description: "It flips the script on night and day.",
                        effect: "Finally: you've worked out how to go outside at night. (Delete this to return to the daytime.)",
                        cost: { "No Fish": 3 },
                        use: function() {
                            //Style nightmode
                            let elements = document.querySelectorAll('.item, .location, .fishing, .your-catch, .crafting, .inventory');
                            elements.forEach(element => {
                                element.classList.add('night-mode');
                            });
                            
                            for (let location of locations) {
                                if (location.flavourtext) {
                                    location.savedFlavours = location.flavourtext.slice(0);
                                }
                                console.log('Saving flavour text for location ' + location.name + ': ' + location.savedFlavours);
                                if (location.name === "Ocean") {
                                    location.flavourtext = [
                                        "a fish bites, and the line goes taut. the sea and you and me, we're all awake together. it's a sort of camaraderie", 
                                        "the inky black of the water, the hush interrupted by the occasional splash. it's hypnotic. there's beauty in it, but loneliness, too. what is it that makes us fish at night?", 
                                        "you cast your line into the endless ink. i hope you're not looking for answers there", 
                                        "the sea is dark and not dead at all", 
                                        "here in the dark is one person and quite a few fish", 
                                        "everything's a little different here. funny how brave a little light can make you feel", 
                                        "the moon is out but she's modest, hiding behind a shroud of night. the ocean, though, she's naked. and you're trying to know her, hook, line, sinker",
                                        "the waves are rolling in, like they're late for an appointment. each one a shivering echo of itself. makes you feel seen, right? or maybe just watched",
                                        "the moon makes a silver path on the water. it's inviting, but a little cruel, don't you think? showing you the way, but a way to where? to what?",
                                        "the ocean is a dark sheet, stretched out, and it's laughing quietly to itself", 
                                        "a splash in the distance. could be a fish, could be a falling star, could be lonely old Poseidon just throwing pebbles",
                                        "the sea is quiet and lonely, like a cup of cold coffee, waiting for someone to sip. are you that someone? and are the fish the coffee, or the sip?",
                                        "the line's empty. like the sea's holding out on us. or maybe she's just worried about you. maybe she doesn't want you out here in the dark, dangling your hope on a hook",
                                        "to the east, a lighthouse winks its slow hello, a drowsy eye blinking in the darkness. how much can you love something that doesn't know you're there", 
                                        "a splash in the distance. something big, maybe a dolphin? or maybe just a wave. out here, it's hard to tell. i guess that's life, huh? it's hard to tell what's a wave and what's a dolphin",
                                        "the boat sways on the black water, the only sound your reel spinning. i think: should you really be out here this late? i think: but i like being here with you."];
                                }
                                else if (location.name === "Lake") {
                                    location.flavourtext = [
                                        "it's dark here, everything's inky and the lake is the colour of your dad's old records. your bobber's floating out there like a lost planet. i hope you remembered your thermos.", 
                                        "your float bobs. it's the gentlest question. 'any fish down there wanna hang out?'. makes me wonder who you're asking for. you or me?", 
                                        "there might be a trout down there, in the cold and dark, thinking about biting. or there might not. what if it's the same with people? what if we're all just down here, in the cold and dark, thinking about biting each other?", 
                                        "a pine marten scuttles past, its eyes catching the cold moonlight. it thinks you're mad, i think. or brave. or maybe both. who knows? keep fishing, i'll keep watching.", 
                                        "a bat navigates the dark like you're not even there", 
                                        "every ripple from the bobber echoes across the lake. an owl hoots, it sounds like a clock running backwards. i think it's almost time, you know, for a nibble, maybe? or a nap.", 
                                        "you're still out here? I admire your persistence.", 
                                        "the moon's reflection dances across the water. it's a disco with no music and no people, and you're the guest of honor.", 
                                        "a moth dances", 
                                        "the night's darkness is making a blanket of the lake and i quietly worry if you've brought enough warm clothes", 
                                        "a night breeze ruffles your hair, nature's attempt to comfort. does it comfort you, being out here so late, alone with your thoughts and the fish?", 
                                        "the lake is so still, you're half-expecting it to bring out a vape", 
                                        "low branches stretch out, like arms of old friends trying to remember you", 
                                        "sometimes, you'd rather be alone with your silly thoughts and the moon", 
                                        "the night seeps into everything: each pore of the bark, every scale of the fish, even the lines in your hands", 
                                        "the moon does that thing where it looks better than the water", 
                                        "voles are night-feasting on seeds, as if they're at a mini banquet", ];
                                } else if (location.name === "River") {
                                    location.flavourtext = [
                                        "the river runs like ink. your lure glows under the water, silly and hopeful", 
                                        "your lure vanishes with a splash. in the quiet mountain night, it sounds like a proclamation. i'm here, i'm here. you're here.", 
                                        "this is good isn't it, out here. the quiet and all. the darkness like a closed eyelid.", 
                                        "the river, she's fast and clear, like an old friend gossiping. she's got a secret, and it's probably a fish. i sort of wish you were tucked up warm somewhere, instead of out here, trying to steal it", 
                                        "notice how different the darkness is when you're actually in it, awake, fishing. there's the light from the moon, but it's cold. it can't warm you", 
                                        "this might sound weird, but sometimes i worry about you hunting fish in the dark and the cold. it's just... wait, was that another tug, or was it just me?", 
                                        "throwing in a line is a bit like sending a text that you want to unsend. too late, too bad, into the black it goes", 
                                        "fishing's a bit like dreaming, don't you think? you throw a part of yourself into the unknown and hope something beautiful comes back.",
                                        "the night is shy when it comes to showing off fish outlines. the water's deeper, hiding things; gives the imagination some line, some bait, some hook", 
                                        "i'm torn, you know. i want you catch fish a fish, but not like this, not out here in the dark, in the cold, all alone",
                                        "you and the distant owls, we don't know who's more lonely", 
                                        "at night, everything is a shadow of itself. even your fishing rod, even you", ];
                                }
                            }
                
                            for (let location of locations) {
                                // Save the current fish array
                                if(location.fish) {
                                    location.savedFish = location.fish.slice(0);
                                }
                                if (location.name === "Ocean") {
                                    location.fish = ["Jellyfish", "Whale", "Mystic Gildeep"];
                                }
                                else if (location.name === "Lake") {
                                    location.fish = ["Catfish", "Night-Trout", "Golden trout"];
                                } else if (location.name === "River") {
                                    location.fish = ["Eel", "Carp", "Spectral salmon", "Golden trout"];
                                } else if (location.name === "Hidden Lake") {
                                    location.fish = ["Witherskark", "Golden trout"]
                                } else if (location.name === "Sunken City") {
                                    location.fish = ["Bigfin squid", "Lanternmouth", "Smiling ghoulfin", "Curse-fish"]
                                } else {
                                    // For all other locations, make the fish array empty
                                    location.fish = [];
                                }
                            }

                            if(inventory.find(item => item.name === "The location of the final boss, revealed")) {
                                // Lake Pearl is in the inventory, add the boss fish
                                let lake = locations.find(location => location.name === "Lake");
                                if(lake) {
                                    lake.fish.push("Final Boss Fish");
                                }
                            }

                            currentLocation = locations.find(location => location.name === currentLocation.name);
                            updateLocation();
                        },
                        remove: function() {
                            let elements = document.querySelectorAll('.item, .location, .fishing, .your-catch, .crafting, .inventory');
                            elements.forEach(element => {
                                element.classList.remove('night-mode');
                            });
                            
                            // For each location, restore the original fish array
                            for (let location of locations) {
                                location.fish = location.savedFish;
                                location.flavourtext = location.savedFlavours;
                                delete location.savedFish;
                                delete location.savedFlavours;
                            }
                            currentLocation = locations.find(location => location.name === currentLocation.name);
                            updateLocation();
                            updateInventory();
                        }
                    },    
                    {
                        name: "Fish portal",
                        description: "Reveals a final location.",
                        cost: { Whale: 1, "Night-Trout": 10, Witherskark: 2, Jellyfish: 8, Eel: 5},
                        skipStatus: true, 
                        craft: function(){
                            unlockLocation("Sunken City");
                            document.getElementById('crafting-status').textContent = `You now know the way to the sunken city. But you can only reach it by night.`;
                            updateCatch();
                        },
                    },
                    {
                        name: "Curse reduction",
                        description: "Struggling with a curse? You can reduce it, a bit, with a sacrifice.",
                        skipStatus: true,
                        currentCost: null,
                        get cost() {
                            if (!this.currentCost) {
                                const costs = [
                                    { "Night-Trout": 6 },
                                    { Bass: 5, "Sea bass": 5 },
                                    { Slooker: 1, Carp: 5 },
                                    { Slooker: 1, Salmon: 2 },
                                    { Slooker: 1, Dace: 2 },
                                    { Flouridge: 1, "Bottled Message": 1},
                                    { Bronscut: 1 },
                                    { Jellyfish: 5 },
                                    { Catfish: 8 },
                                    { Shark: 2 },
                                    { Salmon: 1, Dace: 1, Eel: 1 },
                                    { Eel: 3 },
                                    { Arowana: 2 },
                                    { Stick: 3},
                                    { Trout: 15},
                                    { Seaweed: 3, "Sea bass": 2}
                                    // Add as many as you want...
                                ];
                    
                                // Select a random cost from the array and store it
                                this.currentCost = costs[Math.floor(Math.random() * costs.length)];
                            }
                            return this.currentCost;
                        },
                        craft: function() {
                            let oldCurse = cursedByFish;
                            cursedByFish *= 0.8;
                            this.currentCost = null;
                            let newCost = this.cost;
                        
                            let costText = Object.keys(newCost).map(fish =>
                                `${newCost[fish]} ${fish}`
                            ).join(", ");
                        
                            document.getElementById('crafting-status').textContent = 
                            `Your curse has been reduced from ${oldCurse} to ${cursedByFish.toFixed(0)} units of curse. Cost to reduce further: ${costText}`;
                        }                                 
                    },
                );
                updateCrafting();
            },
            unequipEffect: function() {
                let namesToRemove = ["Sundown Sphere", "Major Sacrifice", "Fish portal", "Curse reduction", "Trouty Hanniver +"];
                items = items.filter(item => !namesToRemove.includes(item.name));
                updateCrafting();
            }
        }
    },
    Lanternmouth: {
        reached: false,
        count: 1,
        reward: {
            name: "Assorted secrets",
            description: "Extract some final secrets from the game.",
            get cost() {
                if (!this.currentCost) {
                    this.currentCost = this.costs[this.currentCostIndex];
                }
                return this.currentCost;
            },
            costs: [
                { Witherskark: 4, "Spectral salmon": 3 },
                { Lanternmouth: 8, "Curse-fish": 2 },
                { "No Fish": 1, Lanternmouth: 4 },
                { "Smiling ghoulfin": 2, Eel: 3 },
                { "Bigfin squid": 3, "Curse-fish": 2, Whale: 1 },
                { Lanternmouth: 8, Slooker: 3, Flouridge: 1, Bronscut: 1, "Bottled message": 1, Trout: 1 }
            ],
            currentCostIndex: 0,
            skipStatus: true, 
            currentItemIndex: 0,
            craft: function(){
                let item = assortedSecretsItems[this.currentItemIndex];
                addItemToInventory(item);
        
                this.currentItemIndex++;
                if (this.currentItemIndex >= assortedSecretsItems.length) {
                    this.currentItemIndex = assortedSecretsItems.length - 1;
                }
        
                this.currentCostIndex++;
                if (this.currentCostIndex >= this.costs.length) {
                    this.currentCostIndex = this.costs.length - 1;
                }
                this.currentCost = this.costs[this.currentCostIndex];
                
                let costText = Object.keys(this.currentCost).map(fish =>
                    `${this.currentCost[fish]} ${fish}`
                ).join(", ");
                document.getElementById('crafting-status').textContent = 
                `To craft further secrets, you need: ${costText}`;
            }
        }
    }
};

assortedSecretsItems = [
    {
        name: "A copy of '12 Rules for Life'",
        effect: "The international best-seller by Jordan Peterson.",
        use: function () {
            currentResponses = petersonianResponses;
        },
        remove: function () {
            currentResponses = genericResponses;
        }
    },
    {
        name: "Driftwood she liked the look of",
        effect: "It doesn't serve any practical purpose",
        removable: false
    },
    {
        name: "Book of Greek myths",
        effect: "Beaten up, bookmarks creased at passages about Poseidon.",
        equippable: true,
        class: "book",
        equipEffect: function () {
            alert("Effects not found: bargain; barter; retrieveBones; invokeCynegeticCurse; offerToPoseidon");
        },
        unequipEffect: function () {}
    },
    {
        name: "Unopened letters",
        effect: "A growing accumulation of mail - bills, notices, condolences. You shouldn't throw these out.",
    },
    {
        name: "An old record",
        effect: "She liked this one.",
        equippable: true,
        class: "letter",
        equipEffect: function () {
            sounds.tomWaits.currentTime = 0;
            sounds.tomWaits.play();
        },
        unequipEffect: function () {
            sounds.tomWaits.pause();
            sounds.tomWaits.currentTime = 0;
        }
    },
    {
        name: "The location of the final boss, revealed",
        effect: "One last fish to catch. Go to the lake at night. You'll find her there.",
        use: function() {
            if(inventory.find(item => item.name === "Sundown Sphere")) {
                // Sundown Sphere is in the inventory, add the boss fish
                let lake = locations.find(location => location.name === "Lake");
                if(lake) 
                { 
                    lake.fish.push("Final boss fish");
                };
            }
            updateLocation();
        },
        remove: function() {
            let lake = locations.find(location => location.name === "Lake");
            if(lake) {
                lake.fish = lake.fish.filter(fish => fish.name !== "Final boss fish");
            }
        }
    }
]

function checkMilestones() {
    for (let fish in milestones) {
        let milestone = milestones[fish];
        console.log(`Milestone for ${fish}:`, milestone); // Debug log
        if (!milestone.reached && catches[fish] && catches[fish] >= milestone.count) {
            milestone.reached = true;
            if (milestone.position !== undefined) {
                items.splice(milestone.position -1, 0, milestone.reward);
                console.log(items); // Check items array right after the splice operation
            } else {
                items.push(milestone.reward);
                console.log(items); // Check items array right after the splice operation
            }
            updateCrafting();
            displayNotification(`Milestone reached: You've caught ${milestone.count} ${fish} and unlocked ${milestone.reward.name}!`);
        }
    }
}

function displayNotification(message) {
    let notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.backgroundColor = currentLocation.buttonColor;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000);  // Notification disappears after 5 seconds
}


// ENDGAME ENDGAME ENDGAME

// Array of pages
let pages = [
    "sorry for the intrusion, it's just",
    "i see you've crafted the items that unlock the big final fish in this game, and",
    "okay, so here we are, a fisherman and a voice. you've been reeling in a lot, and i've been saying a lot",
    "maybe i've been saying too much",
    "it's an odd pair, isn't it? the silent one with secrets, the talking one with no past",
    "look, i won't think about why you're here. fishing. not like its therapy, but its not not like that either. all of us have potholes to fall into, right?",
    "you're really, really good at this. i mean it. like a doctor or a chef or a tired person who finally got a good night's sleep. casting, waiting, reeling. bait, cast, wait, reel, rinse, repeat.",
    "but listen, if i can be serious for a moment,",
    "it's okay to stop. it's okay to put the rod down and just sit. it's okay to sleep. you don't have to keep catching",
    "and i know you're not one for talking, but maybe consider this:",
    "how about we leave?",
    "i mean, you could, if you want to. leave the game, and when you come back, it'll be permanent, like a scar. no more fishing. nothing",
    "it may not be much. but then again, maybe it's all we ever really have",
    "a chance to catch something that isn't a fish",
    "(Would you like to end the game here? If so, you won't be able to play it again.)"
];

let noPages = [
    "that's okay, it's just",
    "i wonder, sometimes, if maybe",
    "you're enjoying the loneliness a little too much",
    "but look",
    "i hope you've found what you were looking for",
    "even if what you were looking for was nothing at all"
]

let currentPage = 0; // keep track of current page
let currentNoPage = 0;
let narratorInteracted = false;

function showModal() {
    if (narratorInteracted === false)
    {
        // Create modal here
        let modal = document.createElement("div");
        modal.setAttribute("id", "specialModal");
        modal.innerHTML = `
            <div class="modal-content">
                <h1>hello</h1>
                <p id="modalText">${pages[currentPage]}</p>
                ${currentPage === pages.length - 1 ? `
                <select id="modalChoice" style="margin-top: 0.5em; margin-bottom: .5em;">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <button onclick="modalDecision()">Proceed</button>` :
                `<button onclick="nextPage()" style="margin-top: 0.5em;">Next</button>`}
            </div>
        `;
        document.body.appendChild(modal);
    }
}

function nextPage() {
    currentPage++;
    let modal = document.getElementById("specialModal");
    modal.parentNode.removeChild(modal);
    showModal();

    let h1Elements = document.querySelectorAll("h1");
    h1Elements.forEach(element => {
        element.style.color = currentLocation.titleColor;
    });
    // Select all buttons on the page
    var buttons = document.getElementsByTagName('button');
    // Iterate over the buttons
    for(var i = 0; i < buttons.length; i++) {
        // Change the background color of each button
        buttons[i].style.backgroundColor = currentLocation.buttonColor;
    }
}

function modalDecision() {
    let choice = document.getElementById("modalChoice").value;
    let modal = document.getElementById("specialModal");
if (choice === "yes") {
        // Add your logic here for what happens when the player decides to proceed
        localStorage.setItem('gameOver', 'true');
        document.body.innerHTML = "<div style='background-color: black; color: white; height: 100vh; display: flex; justify-content: center; align-items: center;'><h1>so long, fisher</h1></div>";
        // Reset currentPage
        currentPage = 0;
        // Remove the modal
        modal.parentNode.removeChild(modal);
    } else if (choice === "no") {
        if (currentNoPage < noPages.length - 1) {
            // If there are more noPages to display, increment the currentNoPage and refresh the modal
            currentNoPage++;
            modal.parentNode.removeChild(modal);
            showModalNo();
        } else {
            // If there are no more noPages to display, reset currentNoPage and remove the modal
            currentNoPage = 0;
            modal.parentNode.removeChild(modal);
        }
    }
}

function showModalNo() {
    // Create modal for no choice here
    let modal = document.createElement("div");
    modal.setAttribute("id", "specialModal");
    modal.innerHTML = `
        <div class="modal-content">
            <h1>hello</h1>
            <p id="modalText">${noPages[currentNoPage]}</p>
            ${currentNoPage === noPages.length - 1 ? `<button onclick="modalDecisionNo()" style = "margin-top: 0.5em;">Proceed</button>` : `<button onclick="nextPageNo()" style = "margin-top: 0.5em;">Next</button>`}
        </div>
    `;
    document.body.appendChild(modal);

    let h1Elements = document.querySelectorAll("h1");
    h1Elements.forEach(element => {
        element.style.color = currentLocation.titleColor;
    });
    // Select all buttons on the page
    var buttons = document.getElementsByTagName('button');
    // Iterate over the buttons
    for(var i = 0; i < buttons.length; i++) {
        // Change the background color of each button
        buttons[i].style.backgroundColor = currentLocation.buttonColor;
    }

}

function nextPageNo() {
    currentNoPage++;
    let modal = document.getElementById("specialModal");
    modal.parentNode.removeChild(modal);
    showModalNo();

    let h1Elements = document.querySelectorAll("h1");
    h1Elements.forEach(element => {
        element.style.color = currentLocation.titleColor;
    });
    let h2Elements = document.querySelectorAll("h2");
    h2Elements.forEach(element => {
        element.style.color = currentLocation.h2Color;
    });
    // Select all buttons on the page
    var buttons = document.getElementsByTagName('button');
    // Iterate over the buttons
    for(var i = 0; i < buttons.length; i++) {
        // Change the background color of each button
        buttons[i].style.backgroundColor = currentLocation.buttonColor;
    }
}

function modalDecisionNo() {
    let modal = document.getElementById("specialModal");
    // Remove the modal
    modal.parentNode.removeChild(modal);
    // Reset currentNoPage
    currentNoPage = 0;
    narratorInteracted = true;
    saveGame();
}


// HINTS HINTS HINTS

const hints = [
    "'No fish' are real, but you need to do something special to find them.",
    "The slooker comb has an important use.",
    "You can press spacebar to cast off and reel in! It's much more fun than using your mouse.",
    "There is something you can do in your house.",
    "If you're cursed in the sunken city, you'll be able to reduce the effects, but never fully reverse them."
];

// Function to shuffle an array
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Shuffle the hints array to start
let shuffledHints = shuffle([...hints]);



// SOME OTHER STUFF THAT'S EASIER TO DEAL WITH DOWN HERE

function calculateInventoryBonus() {
    let bonus = 1;
    while (Math.random() < 0.66) {
        bonus += 1;
    }
    return bonus;
}


let fishTypes = [
    {
        name: "Trout",
        rarity: 1,
        timePerKeypress: 1300, // milliseconds
        keypresses: 1,
        timeToNibble: 0.6, //nibbles in 60% of the time
    },
    {
        name: "Night-Trout",
        rarity: 1,
        timePerKeypress: 1300, // milliseconds
        keypresses: 1,
        timeToNibble: 0.6, //nibbles in 60% of the time
    },
    {
        name: "Catfish",
        rarity: 5,
        timePerKeypress: 1400,
        keypresses: 2
    },
    {
        name: "Bass",
        rarity: 5,
        timePerKeypress: 1000,
        keypresses: [3,4,5],
        timeToNibble: 1.2,
    },
    {
        name: "Arowana",
        rarity: 10,
        timePerKeypress: 900,
        keypresses: 2,
        timeToNibble: 2
    },
    {
        name: "Carp",
        rarity: 1,
        timePerKeypress: 1400,
        keypresses: 1,
    },
    {
        name: "Salmon",
        rarity: 3,
        timePerKeypress: 900,
        keypresses: 2,
        timeToNibble: 1.5
    },
    {
        name: "Dace",
        rarity: 3,
        timePerKeypress: 900,
        keypresses: [3,4,5,6]
    },
    {
        name: "Stick",
        rarity: 2,
        timePerKeypress: 5000,
        keypresses: 1,
        timeToNibble: 2,
        descriptions: [
            "That's not a fish!", 
            "A stick, from the river.", 
            "Accident, luck, or comeuppance?", 
            "Hmmm, what to do with it now?", 
            "Catching a woody? Goody!", 
            "Welcome to Stick Club.", 
            "That's a good-looking stick, but it's no fish!", 
            "Woo, you did not get the fish!", 
            "That rod ain't gonna catch no fish if you use it to fish for stick!", 
            "You gave it your all, but it wasn't a fish.", 
            "That stick shows great effort, but it's still a stick.", 
            "Not quite a fish!", 
            "Well, that's one way to improve your splints!", 
            "You wild snag merchant!", 
            "When you've got sticks, you've got options!", 
            "Creative catch!", 
            "You succesfully nabbed some nature!", 
            "Way to aim low in ambition!", 
            "That stick might come in handy one day.", 
            "Edge shaving and wood working await!"]
    },
    {
        name: "Sea bass",
        rarity: 1,
        timePerKeypress: 650,
        keypresses: [1,2]
    },
    {
        name: "Shark",
        rarity: 6,
        timePerKeypress: 740,
        keypresses: 5
    },
    {
        name: "Mystic Gildeep",
        rarity: 50,
        timePerKeypress: 750,
        kepresses: 1,
        timeToNibble: 2.8,
        descriptions: [
            "A gildeep? Oh hello.", 
            "Isn't it strange to be holding on to the rod and then to jerk, to jerk and then to hold a gildeep? How holy this trembling, living weight in your hand.", 
            "A gildeep blesses your net today. Hope you've never been kissed this close to a plug socket before, it's that kinda rush.", 
            "Some days you're the skateboard, some days you're the ditch. Today, friend, you're a kangaroo, because damn that gildeep on your line is mighty fine.",
            "Before your scream hits the air, before ‘yes!' circles into a euphoric echo, gildeep, goldenly brilliant, dangles at your fingertip. This the heartbeat moment I love. See, you got it.",
            "Excuse me, while i sit back in wonder of you holding a gildeep like a green secret just out of sleep.",
            "If feeling satisfied were a fish, it would be a gildeep. Well, well, call that a grand morning.",
            "Sea's wisdom or pure luck, who cares? Cradle this gildeep and sing the humble lullaby.",
            "No bigger pocket inside a smaller one, no lullabies in disguise. just, yes: a gildeep hooked on your line. Blink twice. It's real.",
            "So, you hooked the gildeep, huh? Didn't know the bones in your fingers could dance that way.",
            "You got it; you did it. It's a gildeep. See it flicker jewel-like in the brine. Believe the gulls' jealous squawk.",
            "You really caught one! A frickin gildeep! Like finding a cowboy in a helicopter, and look! There's also a song they're humming just for you on the wind.",
            "it happened. the gildeep buckled and bowed the line. like holy water on a ferret's back, to see it sparkle.",
            "You caught a gildeep! Those dark depths couldn't hide such a rarity from you. So what if your jacket's a little damp? You cradle the impossible.",
            "Sweet heavens, you could feel it, right? That tug, it was something one of a kind. It's a gildeep, my friend. These waters remember your name now.",
            "Sweet jiminy. You and your amazing grip just swirled up a gildeep. Try not to glow too luminously.",
            "Boy, the sea sure can provide. Grasped from its salty mouth, bro, is a gildeep rarer than a picnic on the moon. Spoiler: those still don't happen.",
            "Matched socks and four-leaved clovers got nothin' on you. In your net, a gildeep. The sea's own secret, squirming now in your hands.",
            "Well, well, well, a gildeep. Colour me shocked. This is the maroon confetti cascade moment.",
            "Oh ho, the waters have been generous today, and bestowed you a legend.",
            "A gildeep, baby. Round kernels of eyes binge the majesty.",
            "All algorithms ignored, and RNGesus himself must have blinked, for cradled between thumb-pad and index is a gildeep.",
            "A gildeep, really?! wondered if they truly lived, or just swam in whispers and wives' tales.", 
            "Brinvillier Belfer would be so proud of you right now. So blindly, aggressively proud.",]
    },
    {
        name: "Golden trout",
        rarity: 100,
        timePerKeypress: 690,
        keypresses: 3,
        timeToNibble: 1.4,
        descriptions: [
            "You found gold in the water-table. Congrats.",
            "Congratulations! This is a very rare catch. It must feel like five or so epic movies playing at once.",
            "Like a solar flare leaked below the watery sky, you bag a golden trout and my dear, it glows for you.",
            "Really; a golden trout. It can‘t happen to everyone.",
            "You just pulled gold from the water. Use is wisely.", 
            "A golden trout! Gosh, I didn't know they still made those.",
            "The universe held its breath while you reeled in that golden trout – even it knows how rare this is.",
            "It hardly seems possible, a golden trout on your line. You could write poems about this, or just let your friends be quietly jealous.",
            "I told you it wasn't all sea-weed and sticks. A golden trout, just for you.",
            "Suddenly this whole fishing game thing makes a world of sense. Catch your breath, screenshot the moment, smile. You're the real catch here.",
            "Breathe. Catch your breath. It's not every day we pull light from a river.",
            "This isn't a mistake, no coding error or a glitch in the pixel matrix. You've done it, yes, you with your screen-tired eyes and your heart like a puffer fish.",
            "You've got a golden trout, and I've got this feeling that things are gonna be pretty okay. Here's to us.",
            "Do golden trout dream? Ask yours. You've done the impossible and pulled one from the depths, extending its bedtime indefinitely.",
            "What will you tell your children? That you once caught a golden trout? They'll roll their eyes, of course. But you'll know, won't you.",
            "this is it, you know. the moment when the golden trout hits your net, and you wonder where it's been. Well done.",
            "Caught yourself a golden trout, huh? It's just a fish, until it's a golden trout.",
            "A golden trout, in your net, no less. Make a wish, maybe it'll come true.",
            "In some amazing display of agility and happenstance, you've keyed precisely into the right vector of the world, and for that, feel your palms gleam. Trout, but gold. Whoah.",
            "Somewhere a unicorn is jealous, somewhere a pot of gold has evaporated grief, somewhere in your hands a golden trout flickers, fondly.",
            "Here you were, thinking about pizza, probably, and now your thumb brushes across something iridescent. That's what gold feels like when it sways.",
            "A rare catch indeed. Your triumph whispers to the hopeless millions 'patience comes with rare rewards, often golden.'",
            "Absolutely stunning. Never forget the rush of this rare catch.",
            "Against all odds this golden trout has danced its way onto your hook. It's shaking a little, as if to acknowledge the respect warranted for such a moment.",
            "Crack the server open to check that memory isn't leaking; this is a rare find."
        ]
    },
    {
        name: "Slooker",
        rarity: 1,
        timePerKeypress: 500, 
        keypresses: 1,
        timeToNibble: 5,
    },
    {
        name: "Flouridge",
        rarity: 8,
        timePerKeypress: 600, 
        keypresses: [2,3],
        timeToNibble: 4.2,
    },
    {
        name: "Bronscut",
        rarity: 8,
        timePerKeypress: 650, 
        keypresses: [3,4],
        timeToNibble: 4.2,
    },
    {
        name: "Jellyfish",
        rarity: 1,
        timePerKeypress: 450, 
        keypresses: 1,
        timeToNibble: 0.8, 
    },
    {
        name: "Whale",
        rarity: 10,
        timePerKeypress: 700, 
        keypresses: 12,
        timeToNibble: 7, 
        descriptions: [
            "A whale. You've done it. Top-tier fishing.",
            "Suddenly, you're Ahab. You're a whalecatcher.",
            "We were out here for fish but I guess whales are fish too, in a way.",
            "Holy moly, that's not a fish. That's a whale, and it's yours.",
            "So you're a whaler now? From fish to whales, just like that.",
            "All that whale, from such a small hook. Makes you think, doesn't it.",
            "I've seen some things, but a whale on a fishing line? That's new.",
            "Holy cow, a whole whale! I'm not sure your bucket's big enough.",
            "Mind-boggling! You've gone and done a Jonah.",
            "A whale. My God, a whale. Do you think it was feeling lonely too?",
            "My, oh my, you've snagged a whale. I reckon we're officially in over our heads.",
            "A whale, on your line. Ethereal. Unreal. Just like this night.",
        ]
    },
    {
        name: "Eel",
        rarity: 1.5,
        timePerKeypress: 400, 
        keypresses: 1,
        timeToNibble: 1, 
    },
    {
        name: "Witherskark",
        rarity: 1,
        timePerKeypress: 700,
        keypresses: [1,2,3],
        timeToNibble: 3,
        curseGiver: 10
    },
    {
        name: "Spectral salmon",
        rarity: 10,
        timePerKeypress: 650,
        timeToNibble: 2.5,
        curseGiver: 2
    },
    {
        name: "No Fish",
        rarity: 1,
        descriptions: [
            "Whoah, you've hooked a 'no fish.' Think of this like a fish-shaped hole in reality. You had to coax it into being, had to lure it out from the depths of the not-fish with some serious cosmic bait.",
            "Your rod had to vibrate at the exact frequency of 'no' to reel this one in. but here it is, the non-existent existing, the caught that can't be caught.",
            "You've just nabbed yourself the whispering silhouette of a 'no fish'. You can't hang this one above your fireplace, can you?",
            "Got a no fish, huh? that's a tricky one to reel in. Hidden spots, little puzzles, takes a keen eye. Raise your rod in triumph.",
            "One 'no fish' fresh from the paradox ocean. You've got moxie, fisherfriend. Enjoy this moment.",
            "You cast the line and you reeled in the absence itself.",
            "Can you feel it? The way it stares back at you, giving nothing away. This is an achievement without fanfare. It just is.",
            "Who else, but you, could catch the fish that isn't?",
            "Odd, how an impossible catch can feel so real in your hands.",
            "Well, isn't that something? not just a fish, but no fish. You've done the undone, fished the unfishable, and here's your prize — emptiness, but not really.",
            "Cracked the code, didn't you? Hooked the opposite of something, an un-fish. Well done.", 
            "What a match, or maybe it's a miss, who can tell. You've nabbed a no fish, the rarest of non-entities.", 
            "A 'no fish', now there's something you don't see every day. It's like finding an extra sock, when you didn't even do your laundry.",
            "Now you have a 'no fish'. I hope it's not too heavy. Maybe keep it somewhere safe, somewhere you can ignore it.",
            "Well done, you. Keep fishing for no fish. You'd be surprised what you can catch in the spaces between everything.",
            "No fish on your line. Absolutely no fish hanging there, all fish-like. You've proved that nothing can be quite something. You can't fry up a riddle, but you should feel good anyway.",
            "You've caught a fish that's less a fish and more a question – but don't worry, you don't need to understand. You've won yourself a paradox on a hook. Be proud.",
            "Look at you, an actual big shot, snagging a 'no fish'. This isn't like catching a boot, it's like catching the idea of a boot. Think about that while you're unravelling the tight knot of what's just happened."
        ],
        keypresses: 6,
        timePerKeypress: 500,
        timeToNibble: 8,
    },
    {
        name: "Debug fish",
        rarity: 1,
        descriptions: ["It belongs in the debugMenagerie."],
        keypresses: 10,
        timePerKeypress: 1000,
        timeToNibble: 100
    },
    {
        name: "Bottled message",
        rarity: 6,
        timePerKeypress: 3000,
        keypresses: 1,
        timeToNibble: 2,
        descriptions: [
            "That's not a fish!", 
            "The message just says 'it's okay to come home, whenever you're ready'. I don't know who it's for, but maybe it's for you.", 
            "Paperwork, ahoy!", 
            "How'd that get here?",
            "It's probably not a popup add, so that's refreshing.",
            "Hey, congrats. A letter from the deep. Hopefully it's fan mail.",
            "Will you write back?",
            "I hope it's a love letter, or at least a good meme.",
            "Fishing for glass are we now? And it it talks, no less",
            "Wow, a bottle, like an email in the past.",
            "Sometimes the sea gives you fish. Sometimes it gives you its version of text messages",
            "A prize from the unknown!",
            "Funny place for a letterbox, this ocean.",
            "Maybe it's got the answer, or maybe it's just more questions.",
            "Somewhere, someone, once upon a time, threw a desperate wish out to sea, and here it is.",
            "You cast a line, and the universe whispered back.",
            "I hope it says, 'keep going.'",
            "Someone's sent you sea-mail.",
            "But for whom was it written, I wonder.",
            "It doesn't feel like a message. More like an I-don't-want-to-throw-my-glass-into-the-trash-so-I-throw-it-into-the-ocean-instead sort of case.",
            "A bottle with a scroll inside. A voice from far away. Maybe they're happy now, wherever they are.",
            "Whoever threw this bottle into the sea, they wanted someone to find it. I guess you're someone.",
            "Excuse me, fisherman, but the sea has mailed you something.",
            "Sometimes the best catches can't be gutted.",
            "A bottle. Full of words. Like me, sort of.",
            "Quite the surprise! What could it mean?"]
    },
    {
        name: "Seaweed",
        rarity: 7,
        timePerKeypress: 3000,
        keypresses: [7,8,9,10],
        timeToNibble: 2,
        descriptions: [
            "You might have missed out on a fish, but you did succeed in some seaweed-catching!", 
            "The fish might be busy elsewhere.", 
            "Sometimes, when you're out on the water, things happen that you can't control.", 
            "Fishing is a tricky business, and often you have to give it time before you catch something big.", 
            "Sometimes things just happen, no matter how hard you try.", 
            "As stubborn as seaweed may be, sometimes the current will force it downstream and into the fishes' mouths.",
             "Seaweed is not a dinner fish.", 
             "Maybe the fish aren't eating that much seaweed lately.", 
             "Lovely seaweed!", 
             "Believe it or not, there are actually many different kinds of seaweed.", 
             "Life is full of setbacks, dredging up old memories and regrowing them anew.", 
             "It's not all about the fish.", 
             "Don't let the seaweed stop you.", 
             "Who's surprised when their lure's snagged by seaweed - isn't love like that too sometimes?", 
             "Next time, prepare yourself better and be somebody who's ready to be succesful.", 
             "Chances are, the current is taking the seaweed somewhere else.", 
             "Seaweed might not bring luck, but it's a unique catch!", ]
    },
    {
        name: "Lanternmouth",
        rarity: 1,
        timePerKeypress: 500,
        keypresses: 3,
        timeToNibble: 3
    },
    {
        name: "Bigfin squid",
        rarity: 6,
        timePerKeypress: 550,
        keypresses: 4,
        timeToNibble: 4
    },
    {
        name: "Curse-fish",
        rarity: 2,
        timePerKeypress: 300,
        keypresses: [1,1,2],
        timeToNibble: 2
    },
    {
        name: "Smiling ghoulfin",
        rarity: 8,
        timePerKeypress: 400,
        keypresses: 5,
        timeToNibble: 5
    },
    {
        name: "Final boss fish",
        rarity: 2,
        timePerKeypress: 600,
        keypresses: 20,
        timeToNibble: 6, 
        descriptions: ["You caught one! A final boss fish! Well done. This is the highest achievement in this game."]
    }
    // more fish...
]

let effects = [
    {
        class: 'keypress',
        descriptiveWord: 'Clumsy',
        description: 'Increases how many keys you need to press to reel fish',
        use: function() { keypressModifier += 1; },
        remove: function() { keypressModifier -= 1; }
    },
    {
        class: 'keypress',
        descriptiveWord: 'Nimble',
        description: 'Decreases how many keys you need to press to reel fish',
        use: function() { keypressModifier -= 1; },
        remove: function() { keypressModifier += 1; }
    },
    {
        class: 'curse',
        descriptiveWord: 'Cursed',
        description: 'Grants a small chance that fish will escape',
        use: function() {cursed +=9;},
        remove: function() {cursed -=9;}
    },
    {
        class: 'curse',
        descriptiveWord: 'Condemned',
        description: 'Grants a moderate chance that fish will escape',
        use: function() {cursed +=17;},
        remove: function() {cursed -=17;}
    },
    {
        class: 'Doubler',
        descriptiveWord: 'Paired',
        description: 'Grants a small chance to reel two fish at once',
        use: function() {doubleChance += 12;},
        remove: function() {doubleChance -= 12;}
    },
    {
        class: 'Doubler',
        descriptiveWord: 'Twinned',
        description: 'Grants a substantial chance to reel two fish at once',
        use: function() {doubleChance +=25;},
        remove: function () {doubleChance -= 25;}
    },
    {
        class: 'inventory',
        descriptiveWord: 'Constricted',
        description: 'Decreases your inventory size',
        use: function() { inventorySize -= 1; updateInventory(); },
        remove: function() { inventorySize += 1; updateInventory(); }
    },
    {
        class: 'inventory',
        descriptiveWord: 'Expansive',
        description: 'Slightly increases your inventory size',
        use: function() { inventorySize += 1; updateInventory(); },
        remove: function() { inventorySize -= 1; updateInventory(); }
    },
    {
        class: 'inventory',
        descriptiveWord: 'Capacious',
        description: 'Significantly increases your inventory size',
        use: function() { inventorySize += 2; updateInventory(); },
        remove: function() { inventorySize -= 2; updateInventory(); }
    },
    {
        class: 'instant',
        descriptiveWord: 'Expeditious',
        description: 'Grants a small chance of hooking fishing instantly.',
        equip: function () {instantChance += 8 ;},
        unequip: function () {instantChance -= 8 ;}
    },
    {
        class: 'rarity',
        descriptiveWord: 'Improbable',
        description: 'Slightly increases chance of rare fish',
        use: function() { rarityModifier += 8; },
        remove: function() { rarityModifier -= 8; }
    },
    {
        class: 'rarity',
        descriptiveWord: 'Far-fetched',
        description: 'Substantially increases chance of rare fish',
        use: function() { rarityModifier += 15; },
        remove: function() { rarityModifier -= 15; }
    },
    {
        class: 'rarity',
        descriptiveWord: 'Humdrum',
        description: 'Decreases chance of rare fish',
        use: function() { rarityModifier -= 8; },
        remove: function() { rarityModifier += 8; }
    },
    {
        class: 'nibbleTime',
        descriptiveWord: 'Attractive',
        description: 'Fish arrive slightly more rapidly',
        use: function() { nibbleTimeModifier *= 0.90; },
        remove: function() { nibbleTimeModifier /= 0.90; }
    },
    {
        class: 'nibbleTime',
        descriptiveWord: 'Irresistible',
        description: 'Fish arrive much more rapidly',
        use: function() { nibbleTimeModifier *= 0.85; },
        remove: function() { nibbleTimeModifier /= 0.85; }
    },
    {
        class: 'nibbleTime',
        descriptiveWord: 'Repellant',
        description: 'Fish take their time to arrive',
        use: function() { nibbleTimeModifier *= 1.2; },
        remove: function() { nibbleTimeModifier /= 1.2; }
    },
    {
        class: 'QTE',
        descriptiveWord: 'Relaxed',
        description: 'Gives you more time to reel fish',
        use: function() { QTESlower += 0.15; },
        remove: function() { QTESlower -= 0.15; }
    },
    {
        class: 'QTE',
        descriptiveWord: 'Jittery',
        description: 'Gives you less time to reel fish',
        use: function() { QTESlower -= 0.15; },
        remove: function() { QTESlower += 0.15; }
    },
    {
        class: 'Summon',
        descriptiveWord: 'Trouty',
        description: 'Conjures one trout every minute',
        use: function() {
            this.intervalId = setInterval(() => {
                if (!catches["Trout"]) catches["Trout"] = 0;
                catches["Trout"]++;
                updateCatch();
            }, 60000);  // every 60 seconds
        },
        remove: function() {
            clearInterval(this.intervalId);
        }
    },
    {
        class: 'Summon',
        descriptiveWord: 'Troutiest',
        description: 'Conjures two trout per minute',
        use: function() {
            this.intervalId = setInterval(() => {
                if (!catches["Trout"]) catches["Trout"] = 0;
                catches["Trout"]++;
                updateCatch();
            }, 30000);  // every 30 seconds
        },
        remove: function() {
            clearInterval(this.intervalId);
        }
    },
];

// ADD TROUTY -- unlocks a special recipe (turns INGREDIENT into OTHER INGREDIENT, but always from higher to lower value)

let equipEffects = [
    {
        class: 'keys',
        descriptiveWord: 'Chaotic',
        description: 'Changes the keys you need to press to reel fish',
        equip: function() {
            // Generate a random series of 5-8 uppercase letters
            let letters = Array.from({length: Math.floor(Math.random() * 4) + 5}, () => String.fromCharCode(Math.floor(Math.random() * 26) + 97));
            // Set the 'keys' variable to this series
            keys = letters;
        },
        unequip: function() {
            // Reset the 'keys' variable to its default value
            keys = ["f", "i", "s", "h", "i", "n", "g"];
        }
    },
    {
        class: 'keypress',
        descriptiveWord: 'Clumsy',
        description: 'Increases how many keys you need to press to reel fish',
        equip: function() { keypressModifier += 1; },
        unequip: function() { keypressModifier -= 1; }
    },
    {
        class: 'keypress',
        descriptiveWord: 'Nimble',
        description: 'Decreases how many keys you need to press to reel fish',
        equip: function() { keypressModifier -= 1; },
        unequip: function() { keypressModifier += 1; }
    },
    {
        class: 'keypress',
        descriptiveWord: 'Deft',
        description: 'Significantly decreases how many key you need to press to reel fish',
        equip: function () { keypressModifier -= 2; },
        unequip: function () { keypressModifier += 2; }
    },
    {
        class: 'instant',
        descriptiveWord: 'Expeditious',
        description: 'Grants a small chance of hooking fishing instantly.',
        equip: function () {instantChance += 8 ;},
        unequip: function () {instantChance -= 8 ;}
    },
    {
        class: 'rarity',
        descriptiveWord: 'Attractive',
        description: 'Slightly increases chance of rare fish',
        equip: function() { rarityModifier += 8; },
        unequip: function() { rarityModifier -= 8; }
    },
    {
        class: 'rarity',
        descriptiveWord: 'Repellent',
        description: 'Slightly decreases chance of rare fish',
        equip: function() { rarityModifier -= 5; },
        unequip: function() { rarityModifier += 5; }
    },
    {
        class: 'nibbleTime',
        descriptiveWord: 'Attractive',
        description: 'Fish arrive slightly more rapidly',
        equip: function() { nibbleTimeModifier *= 0.85; },
        unequip: function() { nibbleTimeModifier /= 0.85; }
    },
    {
        class: 'nibbleTime',
        descriptiveWord: 'Repellant',
        description: 'Fish take their time to arrive',
        equip: function() { nibbleTimeModifier *= 1.2; },
        unequip: function() { nibbleTimeModifier /= 1.2; }
    },
    {
        class: 'QTE',
        descriptiveWord: 'Relaxed',
        description: 'Gives you more time to reel fish',
        equip: function() { QTESlower += 0.15; },
        unequip: function() { QTESlower -= 0.15; }
    },
    {
        class: 'QTE',
        descriptiveWord: 'Jittery',
        description: 'Gives you less time to reel fish',
        equip: function() { QTESlower -= 0.15; },
        unequip: function() { QTESlower += 0.15; }
    },
    {
        class: 'Doubler',
        descriptiveWord: 'Paired',
        description: 'Grants a small chance to reel two fish at once',
        equip: function() {doubleChance += 12;},
        unequip: function() {doubleChance -=12;}
    },
    {
        class: 'Doubler',
        descriptiveWord: 'Twinned',
        description: 'Grants a substantial chance to reel two fish at once',
        equip: function() {doubleChance +=25;},
        unequip: function () {doubleChance -=25;}
    },
    {
        class: 'inventory',
        descriptiveWord: 'Space-saving',
        description: 'Slightly increases your inventory size',
        equip: function() { inventorySize += 1; updateInventory(); },
        unequip: function() { inventorySize -= 1; updateInventory(); }
    },
    {
        class: 'curse',
        descriptiveWord: 'Cursed',
        description: 'Grants a small chance that fish will escape',
        equip: function() {cursed +=10;},
        unequip: function() {cursed -=10;}
    },
];


let keyShuffler =
    {
        class: 'keys',
        descriptiveWord: 'Chaotic',
        description: 'Changes the keys you need to press to reel fish',
        use: function() {
            // Generate a random series of 5-8 uppercase letters
            let letters = Array.from({length: Math.floor(Math.random() * 4) + 5}, () => String.fromCharCode(Math.floor(Math.random() * 26) + 65));
            // Set the 'keys' variable to this series
            keys = letters;
        },
        remove: function() {
            // Reset the 'keys' variable to its default value
            keys = ["F", "I", "S", "H", "I", "N", "G"];
        }
    }

let cursedTexts = [
    "at the last moment, the fish slipped through your fingers",
    ", improbably, the fish escaped",
    "fate cast its shadow - and destroyed what you longed for",
    "it slipped your line",
    "the fish got in on a neat disappearance trick",
    "the fish took its leave",
    "it vanished at the last moment",
    "it escaped; fish too have appointments to keep",
    "the fish got away",
    "leaving you a bit lonelier, that fish smiles as it swims away",
    "you are, unfortunately, cursed",
    "the gods of water and air conspired, sheltering their scaled friend",
    "it managed to slip away",
    "you blinked and the fish split",
    "beating science to it, the fish blips out of existence",
    "fast-forward and - the fish evaporates",
    "what had been so close unfurled its tail and vanished",
    "the waters welcomed the defeated one back in",
    "your fingers fumbled, and it got away",
    "the fish places itself back in the universe's pickings",
    "the fish lodges an expert exist", 
    "phantom fingers ushered the fish back into the water",
    "the fish escaped. 'You're cursed', it sighed, 'and later on, we'll discuss it.'",
    "you were not permitted to take it",
    "a curse stayed your hand, and the fish cheered its luck",
    "as if deboning desire, the fish negotiates a tricky escape. you loved it too soon, it mocks",
    "the fish waltzes into nothingness"
];

let petersonianResponses = [
    "Magnificent! You've not just caught a fish, but embodied the struggle between order and chaos!",
    "You've ventured into the deep waters, faced the unknown, and emerged victorious. A true hero's journey!",
    "What a catch! You've negotiated with nature and emerged successful. It's the perfect example of your competence hierarchy.",
    "Just look at you, standing up straight with your shoulders back, holding the symbol of your victory over the watery abyss!",
    "You've descended into the belly of the beast, the watery chaos, and came back up with a fish. A true archetypal hero!",
    "Congratulations! This catch is a testament to your personal responsibility and the courage you have shown in confronting the unknown.",
    "Impressive! The fish was a dragon hoarding potential, and you've struck it down with precision. That's a meaningful victory!",
    "You caught a fish, and in doing so, you've demonstrated how to transform the chaotic unknown into the realm of known order.",
    "Marvelous! Your catch exemplifies the importance of pursuing what is meaningful over what is expedient.",
    "Your successful catch reflects how you are willing to confront the shadowy depths, pull something out of it, and give it a new form and function.",
    "In catching this fish, you've demonstrated the essential human journey - confronting chaos, extracting order, and emerging victorious.",
    "By catching this fish, you've played out the mythological motif of diving into the unknown to bring back something of value.",
    "You've not just caught a fish, but effectively navigated the metaphorical territory between order and chaos. That's a triumph!",
    "What an admirable catch! It's clear you understand that sacrifice, patience, and careful attention are the keys to transforming chaos into order.",
    "This is more than just a fish. It's a testament to your willingness to venture into the deep, where others fear to go, to confront the unknown and return with wisdom and bounty.",
    "Excellent! This fish embodies the potential you've made manifest through your courage and determination in the face of the unknown.",
    "You've not only caught a fish, but shown the courage to confront chaos, harness it, and transform it into order. This is the hero's journey, beautifully exemplified!",
    "What an accomplishment! This fish is the reward for your struggle, embodying the potential that was latent in the chaos of the sea.",
    "Congratulations! This fish symbolizes your heroic journey into the underworld, your successful battle with chaos, and your triumphant return with the treasures of the deep!",
    "Astounding! This is no ordinary catch. This is a symbol of the victory of order over chaos, a testament to your courage and resilience.",
    "What a catch! You've demonstrated the archetypal journey from the familiar into the unknown and back again, enriched by the experience.",
    "Stunning! You dove into the metaphorical chaos of the unknown, faced your fears, and emerged victorious with the prize. The perfect embodiment of your heroic journey.",    
    "What a catch! It's a testament to your embracing of responsibility and your journey into the unknown depths of the waters!",
    "This fish, a creature from the chaotic underworld, has been brought to order by your careful and patient action!",
    "Look at the size of it! A formidable dragon of the deep, conquered by your pursuit of meaningful struggle!",
    "Through your patience and disciplined effort, you have transformed the potential of the unexplored waters into the reality of a significant catch!",
    "Well done, angler! You have confronted the chaotic waters and emerged victorious, embodying the hero's journey!",
    "By daring to cast your line into the unknown, you've demonstrated the strength of your character and the value of your being.",
    "You've mastered the chaos of the deep with your determination, turning the unknown into the known. A true hero's triumph!",
    "You stood up straight, with your shoulders back, and you faced the waters. And here's your reward!",
    "In facing the chaos of the vast ocean, you cast your line, and have successfully brought order to your world!",
    "A fine testament to the value of assuming the heaviest burden - the taming of the deep and its denizens!",
    "Your catch symbolizes the powerful act of voluntarily confronting the unknown and extracting something of value.",
    "In catching this fish, you have turned potential into reality, through the courage to confront the unpredictable waters!",
    "This catch, a testament to your capacity to bear life's burdens and seek meaning in the face of the vast, indifferent ocean!",
    "Your victory over this fish is the embodiment of the archetypal hero's journey, with all its struggle, sacrifice, and ultimate reward!",
    "By wrestling with the chaos of the ocean, you have brought forth a piece of order. You've truly embodied the spirit of the archetypal hero!",
    "In confronting the watery abyss and asserting your competence, you've transformed the chaotic potential into a meaningful catch!",
    "Wow! You've encountered the dragon of chaos in the deep and returned with a treasure. That's the hero's journey!",
    "The waters were rough and unpredictable, yet you stood your ground. This is a triumph of individual competence!",
    "You are on a quest, a journey into the chaos of the unknown, and your prize is the bountiful fish you have caught!",
    "Fishing requires responsibility, patience, and wisdom. Your catch is a testament to these virtues in you!",
    "The pursuit of truth led you to cast your line and face the unknown, and now the truth is revealed in the form of this splendid catch!",
    "You've proven that success lies not in avoiding chaos, but in facing it, understanding it, and triumphing over it. Congratulations on your catch!",
    "You've acted out the archetype of the hero, venturing into the dark, chaotic deep and returning with a prize!"    
];

let petersonianFailText = [
    "Remember, the path to wisdom is paved with failures. Try again!",
    "The pursuit of meaning is not without its struggles. Success requires patience.",
    "Not all attempts yield results, but each failure brings you closer to understanding.",
    "Clean your room, straighten your back, and cast again!",
    "Every missed catch is a step toward competence.",
    "It's not a tragedy but a lesson. Accept the chaos and continue fishing!",
    "Stand tall against the dragon of chaos!",
    "Through suffering, we learn. Cast again!",
    "Every cast into the unknown will not bring forth treasure. But remember, the most important step is the next one.",
    "Don't let this empty hook deter you. Take responsibility and try again!",
    "Sometimes chaos wins. But never forget, in chaos there is potential. Keep casting!",
    "Do not be disheartened. A life without a worthy catch is still a life worth fishing!",
    "Order isn't always achieved on the first try.",
    "Remember, it's through chaos that we find the path to order. Cast again!",
    "Remember, the journey to success is paved with such moments. Embrace the process!",
    "This empty hook holds lessons, not losses. Keep fishing, and the sea will reward you.",
    "Every challenge is a chance to grow. In persistence, there is victory.",
    "An empty hook doesn't symbolize defeat, but the potential for success in your future attempts."
    
]

let extraResponses = [
    "No matter how tired you've grown, you still keep fishing.",
    "Unable to stop fishing completely, you try and reign in the intensity of your drive.",
    "The effervescence of excellence has greased the ship's roll within this endeavour!",
    "You hear mocking laughter from the depths of an unseen abyss.",
    
    "If fishing was easy, you'd stop, but it's not.",
    
    "You are like a bird that hits the same window: constantly failing yet never giving up hope.", 
    "You shock the fish with electricity, then put it in the bucket. It convulses for several seconds, then turns into a tiny man in a fish suit. He stands up, breaths a sigh of relief, then puts the bucket on his head and dances around you. It is a rather creepy sight.",   
]


