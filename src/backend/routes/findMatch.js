const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const app = express();

//This File is the matching algorithm
//Our matching algorthim quality of a match is based off of the number of shared skills between mentors and mentees
sendToMeRouter.post("/findMatch", async (req, res, next) => {
  console.log("hit match function");
  console.log(req.body.fid);

  //fid is the firebase id
  var mentorFid = req.body.fid;
  //use the is to get the local database userid associated with the firebase id
  let mentorUid = await getMentorUID(mentorFid);
  console.log(mentorUid);
  //using that user id find the skills of the mentor
  let mentorSkillList = await getSkills(mentorUid);
  console.log(mentorSkillList);

  //find all elegible mentees for matching
  let menteeIds = await getMenteeUIDS();
  console.log(menteeIds);

  //find all mentees that have been added to the list that the mentor sees so duplicate inserts do not occur
  let alreadyProcessedMentees = await getAlreadyMatchedMentees(mentorUid);
  console.log(alreadyProcessedMentees);

  //return only the ids that are in menteeIds but not also in alreadyProcessedMentees
  let currentPotential = menteeIds.filter(
    (x) => !alreadyProcessedMentees.includes(x)
  );

  if (typeof currentPotential[0] == "undefined") {
    //do nothing because there are no new matches
  } else {
    //make 2d array for id and number of skills
    var menteeNumbMatches = new Array();

    //iterate through each id and update the number of matches
    for (var i = 0; i < currentPotential.length; i++) {
      menteeNumbMatches[i] = new Array(2);
      //count the number of matched skills for a given mentee and the mentor
      var numbMatches = await countMatches(
        mentorSkillList,
        currentPotential[i]
      );
      menteeNumbMatches[i][0] = currentPotential[i];
      menteeNumbMatches[i][1] = numbMatches;
    }

    console.log("number of matches ");
    console.log(menteeNumbMatches);
    //add to potential matches

    //add all the mentees to the potential matches table.
    for (var i = 0; i < menteeNumbMatches[0].length; i++) {
      await addPotential(
        mentorUid,
        menteeNumbMatches[i][0],
        menteeNumbMatches[i][1]
      );
    }
  }
});

//grab the uid of a mentor based off of their fid
async function getMentorUID(fid) {
  return new Promise(async (resolve) => {
    var sql = "SELECT uid FROM USERS WHERE USERS.fid='" + fid + "'";
    //query is ran
    mysqlconnection.query(sql, async (err, info) => {
      if (!err) {
        console.log("info retrieved");
        console.log(sql);
        //response is sent
        let uid = await info[0].uid;
        resolve(uid);
      } else {
        //error is logged if one occurs
        console.log(err);
      }
    });
  }).catch((error) => {
    console.log("hit error");
    const eMessage = error.message;
    this.setState({ eMessage });
    console.log(error);
  });
}

// returns the ids of all of the currently mentees that exist in potential matches
//this is to find which ids to filter out so duplicate insertions do not occur
async function getAlreadyMatchedMentees(mentorId) {
  return new Promise(async (resolve) => {
    var sql =
      "SELECT P.menteeid FROM PMATCHES as P WHERE P.mentorid = " +
      mentorId +
      " and P.rmatch = 0";
    //query is ran
    mysqlconnection.query(sql, async (err, info) => {
      if (!err) {
        console.log("info retrieved");
        console.log(sql);
        console.log(info);
        //response is sent
        let menteeList = new Array(info.length);
        for (var i = 0; i < info.length; i++) {
          menteeList[i] = info[i].menteeid;
        }
        resolve(menteeList);
      } else {
        //error is logged if one occurs
        console.log(err);
      }
    });
  }).catch((error) => {
    console.log("hit error");
    const eMessage = error.message;
    this.setState({ eMessage });
    console.log(error);
  });
}

//grab the skills of a user based off of their uid
async function getSkills(uid) {
  return new Promise(async (resolve) => {
    var sql = "SELECT U.sid FROM USKILLS as U WHERE U.uid='" + uid + "'";
    //query is ran
    mysqlconnection.query(sql, async (err, info) => {
      if (!err) {
        console.log("info retrieved");
        console.log(sql);
        //response is sent
        let skillList = [];
        for (var i = 0; i < info.length; i++) {
          skillList[i] = info[i].sid;
        }
        resolve(skillList);
      } else {
        //error is logged if one occurs
        console.log(err);
      }
    });
  }).catch((error) => {
    console.log("hit error");
    const eMessage = error.message;
    this.setState({ eMessage });
    console.log(error);
  });
}

//grab the uid of all mentees
async function getMenteeUIDS() {
  return new Promise(async (resolve) => {
    var sql =
      "SELECT U.uid FROM USERS as U WHERE U.fid IS NULL AND U.matchid IS NULL ";
    //query is ran
    mysqlconnection.query(sql, async (err, info) => {
      if (!err) {
        console.log("info retrieved");
        console.log(sql);
        console.log(info);
        //response is sent
        let menteeList = new Array(info.length);
        for (var i = 0; i < info.length; i++) {
          menteeList[i] = info[i].uid;
        }
        resolve(menteeList);
      } else {
        //error is logged if one occurs
        console.log(err);
      }
    });
  }).catch((error) => {
    console.log("hit error");
    const eMessage = error.message;
    this.setState({ eMessage });
    console.log(error);
  });
}

//counts the number of shared skills between the mentors skill list and a mentee
async function countMatches(mentorSkillList, menteeID) {
  let menteeSkills = await getSkills(menteeID);
  var skillsMatched = mentorSkillList.filter((skillID) =>
    menteeSkills.includes(skillID)
  );
  var numbMatches = skillsMatched.length;
  console.log("number of matches " + numbMatches);
  return numbMatches;
}

//addes a given mentee and mentor alongside the number of matched skills to the database
async function addPotential(mentorID, menteeID, numberMatched) {
  return new Promise(async (resolve) => {
    var sql3 =
      "INSERT INTO PMATCHES (mentorid, menteeid,  rmatch, skillsMatched) Values(" +
      mentorID +
      ", " +
      menteeID +
      ", 0, " +
      numberMatched +
      ")";
    //query is ran
    mysqlconnection.query(sql3, async (err, info) => {
      if (!err) {
        console.log("Adding to pmatches");
        console.log(sql3);
        //response is sent
      } else {
        //error is logged if one occurs
        console.log(err);
      }
    });
    resolve();
  }).catch((error) => {
    console.log("hit error");
    const eMessage = error.message;
    this.setState({ eMessage });
    console.log(error);
  });
}

module.exports = sendToMeRouter;
