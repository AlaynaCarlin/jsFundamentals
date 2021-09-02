/*
OBJECTS
*/

let netflix ={ //object
    id:9, // key/value pair
    name: 'super store', //key/value pair
    season1: { //object
        seasonInfo: {
            episodeInfo: [ //array
                {episode: 1, episodeName: 'pilot'}, //objects, key/value pairs
                {episode: 2, episodeName: 'Magazine Profile'},
                {episode: 3, episodeName: 'Shots and Salsa'},
                {episode: 4, episodeName: 'Mannequin'},
                {episode: 5, episodeName: 'Shoplifter'},
                {episode: 6, episodeName: 'Secret Shopper'},
                {episode: 7, episodeName: 'Color Wars'},
                {episode: 8, episodeName: 'Wedding Day sale'},
                {episode: 9, episodeName: 'All-Nighter'},
                {episode: 10, episodeName: 'Demotion'},
                {episode: 11, episodeName: 'Labor'}
            ],
        },
    },
    season2:{}, // empty objects
    season3:{}
}

// console.log(netflix);
// console.log(netflix.season1.seasonInfo);
// console.log(netflix.season1.seasonInfo.episodeInfo);
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);

//pick an episode to log in the terminal
//Using dot notation, walk through the netflix object and print off both:
//-the episode number
//-and the episode name

console.log(netflix.season1.seasonInfo.episodeInfo[5].episode);
console.log(netflix.season1.seasonInfo.episodeInfo[5].episodeName);

/*
JSON -> JavaScript Object Notation
*/

var json = {
    "workbench.colorTheme": "one dark+ (Sublime)",
    "window.zoomLevel": 3,
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/*.js": {
            "when": "$(basename).ts"
        },
        "**/*.js.map": {
            "when": "$(basename)"
        }
    },
    "editor.fontFamily": "Monaco, 'Courier New', monospace",
    "editor.detectIndentation": false,
    "editor.letterSpacing": 0,
    "editor.tabSize": 2,
    "files.autoSave": "off",
    "editor.workWrap": "on",
    "extensions.ignoreRecommendations": true,
    "[html]": {},
    "files.associations": {
        "*.html": "html",
        "*.js": "javascriptreact"
    },
    "html.format.indentInnerHtml": true,
    "liveServer.settings.donotShowInfoMsg": true,
    "[javascriptreact]": {}
}

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers:{
        pheonixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

console.log(Object.keys(spaceJam)); // object.keys returns an array consisting the keys of our object
console.log(Object.keys(spaceJam.toonSquad)); 
console.log(Object.keys(spaceJam.toonSquad).toString());

console.log(Object.values(spaceJam));
console.log(Object.values(spaceJam.toonSquad));

//------------------------------------
let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

console.log(garden.vegetable);

let inc = 'vegetable';

console.log(garden[inc]);

//------------------------------
let baking = {};
baking ['zucchini'] = 'better make some bread!'
baking.bestKeyEver = 'zucchini';

console.log(baking.zucchini);
console.log(baking.bestKeyEver);
console.log(baking[baking.bestKeyEver]);

//-------------------

let g = 'water';

Object.keys(garden). forEach (key => {
    if (key == g){
        console.log(garden[key]);
    }
})

