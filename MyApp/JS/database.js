var tournamentName = "tournament";
var file = tournamentName + ".db";
var exists = fs.existsSync(file)
var db = new sqlite3.Database(file);

db.serialize(function() {
    if(exists) {
        db.run("CREATE TABLE IF NOT EXISTS speakers (speakerID INTEGER PRIMARY KEY, teamID, institutionID, name, novice, esl, gender, specialNeeds, accessibilityNeeds)");
        db.run("CREATE TABLE IF NOT EXISTS teams (teamID INTEGER PRIMARY KEY, name, proAm, teamPoints, breakable)");
        db.run("CREATE TABLE IF NOT EXISTS institutions (institutionID INTEGER PRIMARY KEY, name)");
        db.run("CREATE TABLE IF NOT EXISTS judges (judgeID INTEGER PRIMARY KEY, institutionID, name, novice, gender, specialNeeds, equity)");
        db.run("CREATE TABLE IF NOT EXISTS rooms (roomID INTEGER PRIMARY KEY, name, accessible)");
        db.run("CREATE TABLE IF NOT EXISTS ballots (ballotID INTEGER PRIMARY KEY, roundID, roomID, ogID, ooID, cgID, coID, first, second, third, fourth, chairID)");
        db.run("CREATE TABLE IF NOT EXISTS rounds (roundID INTEGER PRIMARY KEY, motion, infoText)");
        db.run("CREATE TABLE IF NOT EXISTS speakerPoints (roundID, speakerID, points)");
        db.run("CREATE TABLE IF NOT EXISTS clashTable (clashedOneID, clashedTwoID)");
        db.run("CREATE TABLE IF NOT EXISTS panels (ballotID, judgeID)");
    }
});

// Table insert statements

function insertSpeaker(teamID, institutionID, name, novice, esl, gender, specialNeeds, accessibilityNeeds) {
    var stmt = db.prepare("INSERT INTO speakers (teamID, institutionID, name, novice, esl, gender, specialNeeds, accessibilityNeeds) VALUES(?,?,?,?,?,?,?,?)");
    stmt.run(teamID, institutionID, name, novice, esl, gender, specialNeeds, accessibilityNeeds);
};

function insertTeam(name, proAm, teamPoints, breakable) {
var stmt = db.prepare("INSERT INTO teams (name, proAm, teamPoints, breakable) VALUES(?,?,?,?)");
stmt.run(name, proAm, teamPoints, breakable);  
};

function insertInstitution(name) {
    var stmt = db.prepare("INSERT INTO institutions (name) VALUES(?)");
    stmt.run(name);
};

function insertJudge(institutionID, name, novice, gender, specialNeeds, equity) {
    var stmt = db.prepare("INSERT INTO institutions (institutionID, name, novice, gender, specialNeeds, equity) VALUES(?,?,?,?,?,?)");
    stmt.run(institutionID, name, novice, gender, specialNeeds, equity);
};

function insertRoom(name, accessible) {
    var stmt = db.prepare("INSERT INTO rooms (name, accessible) VALUES(?,?)");
    stmt.run(name, accessible);         
};

function insertBallot(roundID, roomID, ogID, ooID, cgID, coID, first, second, third, fourth, chairID) {
    var stmt = db.prepare("INSERT INTO ballots (roundID, roomID, ogID, ooID, cgID, coID, first, second, third, fourth, chairID) VALUES(?,?,?,?,?,?,?,?,?,?,?)");
    stmt.run(roundID, roomID, ogID, ooID, cgID, coID, first, second, third, fourth, chairID);
};

function insertRound(motion, infoText) {
    var stmt = db.prepare("INSERT INTO rounds (name, infotext) VALUES(?,?)");
    stmt.run(name, infoText);
};

function insertSpeakerPoints(roundID, speakerID, points) {
    var stmt = db.prepare("INSERT INTO speakerPoints (roundID, speakerID, points) VALUES(?,?,?)");
    stmt.run(roundID, speakerID, points);
};

function insertclash(clashedOneId, clashedTwoId) {
    var stmt = db.prepare("INSERT INTO clashTable (clashedOneId, clashedTwoId) VALUES(?,?)");
    stmt.run(clashedOneId, clashedTwoId);
};

function insertPanel(ballotID, judgeID) {
    var stmt = db.prepare("INSERT INTO panels (ballotID, judgeID) VALUES(?,?)");
    stmt.run(ballotID, judgeID);
};

// Table "ID-getter"" statements

function getSpeakerIDByName(name) {
    var stmt = db.prepare("SELECT speakerID FROM speakers WHERE name = ?");
    return stmt.get(name);
};

function getTeamIDByName(name) {
    var stmt = db.prepare("SELECT team FROM teams WHERE name = ?");
    return stmt.get(name);
};

function getInstitutionIDByName(name) {
    var stmt = db.prepare("SELECT institutionID FROM institutions WHERE name = ?");
    return stmt.get(name);
};

function getJudgeIDByName(name) {
    var stmt = db.prepare("SELECT judgeID FROM speakers WHERE name = ?");
    return stmt.get(name);
};

function getRoomIDByName(name) {
    var stmt = db.prepare("SELECT roomID FROM rooms WHERE name = ?");
    return stmt.get(name);
};

function getBallotIDByName(name) {
    var stmt = db.prepare("SELECT ballotID FROM ballots WHERE name = ?");
    return stmt.get(name);
};

function getRoundIDByName(name) {
    var stmt = db.prepare("SELECT roundID FROM rounds WHERE name = ?");
    return stmt.get(name);
};

// "Row-by-ID" getters

function getSpeakerByID(ID) {
    var stmt = db.prepare("SELECT * FROM speakers WHERE ID = ?");
    return stmt.get(ID);
};

function getTeamByID(ID) {
    var stmt = db.prepare("SELECT * FROM teams WHERE ID = ?");
    return stmt.get(ID);
};

function getInstitutionByID(ID) {
    var stmt = db.prepare("SELECT * FROM institutions WHERE ID = ?");
    return stmt.get(ID);
};

function getJudgeByID(ID) {
    var stmt = db.prepare("SELECT * FROM speakers WHERE ID = ?");
    return stmt.get(ID);
};

function getRoomByID(ID) {
    var stmt = db.prepare("SELECT * FROM rooms WHERE ID = ?");
    return stmt.get(ID);
};

function getBallotByID(ID) {
    var stmt = db.prepare("SELECT * FROM ballots WHERE ID = ?");
    return stmt.get(ID);
};

function getRoundByID(ID) {
    var stmt = db.prepare("SELECT * FROM rounds WHERE ID = ?");
    return stmt.get(ID);
};
    
//     stmt.finalize();
    
//     db.each("SELECT name, nickname FROM AwesomePeople", function(err, row) { 
//         console.log("name: " + row.name + ", Nickname: " + row.nickname); 
//         })
//     });

// db.close();
