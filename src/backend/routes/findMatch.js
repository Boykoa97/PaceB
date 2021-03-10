const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const app = express();
// const admin = require("firebase-admin");

// const serviceAccount = require("../../../capstone-pace-b-e0985e42e768.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://capstone-pace-b.firebaseio.com",
// });

// sendToMeRouter.post("/findMatch", async (req, res, next) => {
//   console.log("hit match function");

//   var skill1 = req.body.skill1;
//   var skill2 = req.body.skill2;
//   var skill3 = req.body.skill3;
//   var skill4 = req.body.skill4;

//   var skillList = [];
//   skillList[0] = skill1;
//   skillList[1] = skill2;
//   skillList[2] = skill3;
//   skillList[3] = skill4;

//   var matchSkill1 = matchSkillx(skill1);
//   var matchSkill2 = matchSkillx(skill2);
//   var matchSkill3 = matchSkillx(skill3);
//   var matchSkill4 = matchSkillx(skill4);

//   var querryList = [];
//   querryList[0] = matchSkill1;
//   querryList[1] = matchSkill2;
//   querryList[2] = matchSkill3;
//   querryList[3] = matchSkill4;
//   let mentorEmail = await postEmail(querryList, skillList);
//   res.locals.mentorEmail = mentorEmail;
//   next(); //chain to the email form
// });

// //find a matched user id from the database given the skills from the mentee form
// //note that because of promises with the admin sdk I am checking if any column matches an interest
// //otherwise the call to firebase is not finished in time
// //call this to find a particular row
// function matchSkillx(skill) {
//   if (skill == "None") {
//     skill = ""; //don't querry if their is no skill in a column
//   }
//   var matchSkill =
//     "SELECT * FROM USERS WHERE ('" +
//     skill +
//     "'=USERS.skill1" +
//     " AND USERS.skill1 != '') OR ('" +
//     skill +
//     "'=USERS.skill2" +
//     " AND USERS.skill2 != '') OR ('" +
//     skill +
//     "'=USERS.skill3" +
//     " AND USERS.skill3 != '') OR ('" +
//     skill +
//     "'=USERS.skill4" +
//     " AND USERS.skill4 != '')";
//   return matchSkill;
// }

// //find matches for skill x
// async function findMatchx(matchSkill, skillList, skillNumber) {
//   return new Promise((resolve, reject) => {
//     //query is ran
//     let id = "";
//     console.log(matchSkill);
//     if (matchSkill != "") {
//       mysqlconnection.query(matchSkill, (err, info) => {
//         if (!err) {
//           console.log("skill x matches retreived");
//           console.log(info);
//           if (info.length > 0) {
//             var noMatch = false;
//             //there was at least one match so find the order of preference
//             // id = info[0].fid; //mentor id
//             for (var j = 0; j < skillList.length; j++) {
//               var matches = info;
//               var matchedSkill = "";
//               console.log("checking skill given to " + (j + 1) + "th skill");
//               console.log(matches);
//               if (j == 0 && skillList[skillNumber] != "None") {
//                 matchedSkill = matches.filter(function (skill) {
//                   var matchedUsers = skill.skill1 == skillList[skillNumber];
//                   console.log("matched users skill 1");
//                   console.log(matchedUsers);
//                   if (matchedUsers !== false) {
//                     return matchedUsers;
//                   } else {
//                     console.log("there were no matches for skill 1");
//                     return noMatch;
//                   }
//                 });
//                 console.log(
//                   "matchedSkill after first iteration " + matchedSkill
//                 );
//               } else if (j == 1 && skillList[skillNumber] != "None") {
//                 matchedSkill = matches.filter(function (skill) {
//                   var matchedUsers = skill.skill2 == skillList[skillNumber];
//                   console.log("matched users skill 2");
//                   console.log(matchedUsers);
//                   if (matchedUsers) {
//                     return matchedUsers;
//                   } else {
//                     console.log("there were no matches for skill 2");
//                     return noMatch;
//                   }
//                 });
//               } else if (j == 2 && skillList[skillNumber] != "None") {
//                 matchedSkill = matches.filter(function (skill) {
//                   var matchedUsers = skill.skill3 == skillList[skillNumber];
//                   console.log("matched users skill 3");
//                   console.log(matchedUsers);
//                   if (matchedUsers) {
//                     return matchedUsers;
//                   } else {
//                     console.log("there were no matches for skill 3");
//                     return noMatch;
//                   }
//                 });
//               } else if (j == 3 && skillList[skillNumber] != "None") {
//                 matchedSkill = matches.filter(function (skill) {
//                   var matchedUsers = skill.skill4 == skillList[skillNumber];
//                   console.log("matched users skill 4");
//                   console.log(matchedUsers);
//                   if (matchedUsers) {
//                     return matchedUsers;
//                   } else {
//                     console.log("there were no matches for skill 4");
//                     return noMatch;
//                   }
//                 });
//               } else {
//                 console.log(
//                   "error skill column check index exceeds number of columns checked"
//                 );
//               }
//               if (matchedSkill != noMatch) {
//                 console.log("matched skills " + matchedSkill);
//                 id = matchedSkill[0].fid;
//                 //break;
//               } else {
//                 console.log(matchedSkill + " this should be blank");
//               }
//             }
//             if (id !== null && typeof id !== "undefined" && id != "") {
//               console.log("id in querry " + id);
//               return resolve(id);
//             }
//           } else {
//             //error is logged if one occurs
//             console.log(err);
//           }
//         }

//         //return id;
//         return resolve(id);
//       });
//     } else {
//       resolve(id);
//     }
//   });
// }

// async function getEmail(id) {
//   return new Promise((resolve, reject) => {
//     admin
//       .auth()
//       .getUser(id)
//       .then((userEmail) => {
//         console.log("user email is " + userEmail.toJSON().email);
//         resolve(userEmail.toJSON().email);
//       })
//       .catch((error) => {
//         console.log("error with id " + id);
//         console.log("hit error");
//         const eMessage = error.message;
//         this.setState({ eMessage });
//         console.log(error);
//         reject(error);
//       });
//   });
// }

// async function checkSkills(querryList, skillList) {
//   return new Promise((resolve, reject) => {
//     let matchedID = "";
//     //for the 4 skills run the querry to find a match
//     //break the loop if you find a match
//     for (var i = 0; i < querryList.length; i++) {
//       console.log("Running querry to check matches on skill " + (i + 1));
//       //need to adjust this function such that findMatchx can be written async
//       let matchedIDQuerry = findMatchx(querryList[i], skillList, i);
//       if (
//         matchedIDQuerry != "" &&
//         matchedIDQuerry !== null &&
//         typeof matchedIDQuerry !== "undefined"
//       ) {
//         console.log("match id querry = " + matchedIDQuerry);
//         resolve(matchedIDQuerry);
//         break;
//       }
//     }
//     if (matchedID != "" && typeof matchedID !== "undefined") {
//       console.log("matched id is");
//       console.log(matchedID);
//     }
//   });
// }

// //use the helper functions to get the email from firebase for the matched mentor and use a post request
// //so the information can be used in the sending email file.
// async function postEmail(querryList, skillList, formReq) {
//   try {
//     let id = await checkSkills(querryList, skillList);
//     console.log("id after calling checkSkills " + id);
//     if (id != "") {
//       let email = await getEmail(id);
//       return email;
//       console.log(email);
//     } else {
//       console.log("There were no matches");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

sendToMeRouter.post("/findMatch", async (req, res, next) => {
  console.log("hit match function");
  console.log(req.body.fid);

  var mentorFid = req.body.fid;
  let mentorUid = await getMentorUID(mentorFid);
  console.log(mentorUid);
  let mentorSkillList = await getSkills(mentorUid);
  console.log(mentorSkillList);

  let menteeIds = await getMenteeUIDS();
  console.log(menteeIds);
  var menteeNumbMatches = [];
  countMatches(mentorSkillList, menteeIds[0]);
  countMatches(mentorSkillList, menteeIds[1]);
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
        uid = await info[0].uid;
        resolve(uid);
      } else {
        //error is logged if one occurs
        console.log(err);
      }
    });
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
  });
}

//grab the uid of all mentees
async function getMenteeUIDS() {
  return new Promise(async (resolve) => {
    var sql = "SELECT uid FROM USERS WHERE USERS.fid IS NULL";
    //query is ran
    mysqlconnection.query(sql, async (err, info) => {
      if (!err) {
        console.log("info retrieved");
        console.log(sql);
        //response is sent
        let menteeList = [];
        for (var i = 0; i < info.length; i++) {
          menteeList[i] = info[i].uid;
        }
        resolve(menteeList);
      } else {
        //error is logged if one occurs
        console.log(err);
      }
    });
  });
}

async function countMatches(mentorSkillList, menteeID) {
  let menteeSkills = await getSkills(menteeID);
  compare = (mentorSkillList, menteeSkills) =>
    mentorSkillList.filter((skillID) => menteeSkills.includes(skillID)).length;
  console.log(compare(mentorSkillList, menteeSkills));
}

module.exports = sendToMeRouter;
