
/*
//////////////////////////////////////////////////////////////////////////////////
                            Database Section
//////////////////////////////////////////////////////////////////////////////////
*/
const fs = require('fs');
const sqlite3 = require('sqlite3');
const { loadavg } = require('os');
const dbFile ='www/Data/apptrack.db';

document.getElementById("logo").onload = function() {getDatabase()};

var createAppliedPosition =String.raw  
`CREATE TABLE AppliedPosition
  (
    AppliedPositionPK INTEGER PRIMARY KEY AUTOINCREMENT,
    PositionTypeFK INTERGER NOT NULL,
    RecruitingCompanyFK INTERGER NOT NULL,
    AppliedResumeFK INTERGER NOT NULL,
    PositionDescription text NOT NULL,
    AppliedDtTm text NOT NULL,
    CreatedDtTm text NOT NULL,
    DeletedDtTm text NULL
  );`;

var createPositionType=String.raw
`CREATE TABLE PositionType
(
  PositionTypePK INTEGER PRIMARY KEY AUTOINCREMENT,
  PositionName text NOT NULL
);`;

var createRecruitingCompany=String.raw
`CREATE TABLE RecruitingCompany
(
  RecruitingCompanyPK INTEGER PRIMARY KEY AUTOINCREMENT,
  RecruitingCompanyName text NOT NULL,
  RecruitingCompanyURL text NULL,
  RecruitingLoginName text NULL,
  RecruitingPassword text NULL,
  isLinkedInLogin INTERGER DEFAULT 0 NOT NULL,
  isFacebookLogin INTERGER DEFAULT 0 NOT NULL,
  CreatedDtTm text NOT NULL,
  DeletedDtTm text NULL
);`;

var createResume=String.raw
`CREATE TABLE AppliedResume
(
  AppliedResumePK INTEGER PRIMARY KEY AUTOINCREMENT,
  ResumeName text NOT NULL,
  ResumeData blob NOT NULL,
  CreatedDtTm text NOT NULL,
  DeletedDtTm text NULL
);`;

var createDisplayApplied=String.raw
`CREATE VIEW v_DisplayApplied
  AS
  SELECT 
      AppliedPosition.AppliedDtTm,
      RecruitingCompany.RecruitingCompanyName,
      RecruitingCompany.RecruitingCompanyURL,
      CASE 
          WHEN RecruitingCompany.RecruitingLoginName IS NULL AND RecruitingCompany.isLinkedInLogin = 1 THEN 'LinkedIn'
          WHEN RecruitingCompany.RecruitingLoginName IS NULL AND RecruitingCompany.isFacebookLogin = 1 THEN 'Facebook'
          WHEN RecruitingCompany.RecruitingLoginName IS NOT NULL THEN RecruitingCompany.RecruitingLoginName
      END AS RecruitingLoginName,
      CASE 
          WHEN RecruitingCompany.RecruitingLoginName IS NULL AND RecruitingCompany.isLinkedInLogin = 1 THEN 'LinkedIn'
          WHEN RecruitingCompany.RecruitingLoginName IS NULL AND RecruitingCompany.isFacebookLogin = 1 THEN 'Facebook'
          WHEN RecruitingCompany.RecruitingPassword IS NOT NULL THEN RecruitingCompany.RecruitingPassword
      END AS RecruitingPassword,
      AppliedResume.ResumeName,
      PositionType.PositionName,
      AppliedPosition.PositionDescription
  FROM AppliedPosition
  INNER JOIN PositionType ON AppliedPosition.PositionTypeFK = PositionType.PositionTypePK
  INNER JOIN RecruitingCompany ON AppliedPosition.RecruitingCompanyFK = RecruitingCompany.RecruitingCompanyPK
  INNER JOIN AppliedResume ON AppliedPosition.AppliedResumeFK = AppliedResume.AppliedResumePK
  WHERE AppliedPosition.DeletedDtTm IS NULL
  ORDER BY AppliedPosition.AppliedDtTm;
`;

var createIndex = String.raw
`CREATE INDEX "AppliedDtTm_IX" ON "AppliedPosition" (
  "AppliedDtTm"	DESC
);`;

function getDatabase(){
  if (fs.existsSync(dbFile)) {
      var db = new sqlite3.Database(dbFile);
  }
  else{
      fs.writeFileSync(dbFile,'', 'utf8');
      var db = new sqlite3.Database(dbFile);
      db.serialize(function(){
        db.run(createAppliedPosition);
      });

      db.serialize(function(){
        db.run(createPositionType);
      });

      db.serialize(function(){
        db.run(createRecruitingCompany);
      });

      db.serialize(function(){
        db.run(createResume);
      });

      db.serialize(function(){
        db.run(createDisplayApplied);
      });

      db.serialize(function(){
        db.run(createIndex);
      });

      db.close();
      alert('\n\nThank you for installing AppTrack\nDatabase creation complete\n\nReady!');
  }
}

/*
//////////////////////////////////////////////////////////////////////////////////
                            Static Menu Section
//////////////////////////////////////////////////////////////////////////////////
*/
var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');
var exitWhite = document.getElementById('exitWhite');
var home = document.getElementById('home');
var positiontype = document.getElementById('positiontype');
var recruiting = document.getElementById('recruiting');
var applied = document.getElementById('applied');
var resume = document.getElementById('resume');

menu.addEventListener('click', function(e){
    nav.classList.toggle('hide-mobile');
    document.getElementById('homeImg').src='Images/dappliedposLight.svg';
    document.getElementById('positiontypeImg').src='Images/apositionLight.svg';
    document.getElementById('recruitingImg').src='Images/arecruitingcoLight.svg';
    document.getElementById('appliedImg').src='Images/aapositionLight.svg';
    document.getElementById('resumeImg').src='Images/aresumeLight.svg';
    e.preventDefault();
});

exit.addEventListener('click', function(e){
    nav.classList.add('hide-mobile');
    e.preventDefault();
});

home.addEventListener('click', function(e){
    document.getElementById('homeImg').src='Images/dappliedposDark.svg';
    document.getElementById('positiontypeImg').src='Images/apositionLight.svg';
    document.getElementById('recruitingImg').src='Images/arecruitingcoLight.svg';
    document.getElementById('appliedImg').src='Images/aapositionLight.svg';
    document.getElementById('resumeImg').src='Images/aresumeLight.svg';
    changeSectionHeader("Positions Applied:");

    if(document.body.contains(document.getElementById('createdTable')) == false){
      const javascriptDir = process.cwd() + "/www/JavaScript/home.js";
      const createTable = require(javascriptDir);
  
      const createNewTable = new createTable();
  
      document.body.appendChild(createNewTable.testTable());
    };



    e.preventDefault();
});

positiontype.addEventListener('click', function(e){
    document.getElementById('homeImg').src='Images/dappliedposLight.svg';
    document.getElementById('positiontypeImg').src='Images/apositionDark.svg';
    document.getElementById('recruitingImg').src='Images/arecruitingcoLight.svg';
    document.getElementById('appliedImg').src='Images/aapositionLight.svg';
    document.getElementById('resumeImg').src='Images/aresumeLight.svg';
    changeSectionHeader("Add Position Type:");

    if(document.body.contains(document.getElementById('createdTable')) == true){
      document.body.removeChild(document.getElementById('createdTable'));
    };

    e.preventDefault();
});

recruiting.addEventListener('click', function(e){
    document.getElementById('homeImg').src='Images/dappliedposLight.svg';
    document.getElementById('positiontypeImg').src='Images/apositionLight.svg';
    document.getElementById('recruitingImg').src='Images/arecruitingcoDark.svg';
    document.getElementById('appliedImg').src='Images/aapositionLight.svg';
    document.getElementById('resumeImg').src='Images/aresumeLight.svg';
    changeSectionHeader("Add Recruiting Company:");

    if(document.body.contains(document.getElementById('createdTable')) == true){
      document.body.removeChild(document.getElementById('createdTable'));
    };

    e.preventDefault();
});

applied.addEventListener('click', function(e){
    document.getElementById('homeImg').src='Images/dappliedposLight.svg';
    document.getElementById('positiontypeImg').src='Images/apositionLight.svg';
    document.getElementById('recruitingImg').src='Images/arecruitingcoLight.svg';
    document.getElementById('appliedImg').src='Images/aapositionDark.svg';
    document.getElementById('resumeImg').src='Images/aresumeLight.svg';
    changeSectionHeader("Add Applied Position:");

    if(document.body.contains(document.getElementById('createdTable')) == true){
      document.body.removeChild(document.getElementById('createdTable'));
    };

    e.preventDefault();
});

resume.addEventListener('click', function(e){
    document.getElementById('homeImg').src='Images/dappliedposLight.svg';
    document.getElementById('positiontypeImg').src='Images/apositionLight.svg';
    document.getElementById('recruitingImg').src='Images/arecruitingcoLight.svg';
    document.getElementById('appliedImg').src='Images/aapositionLight.svg';
    document.getElementById('resumeImg').src='Images/aresumeDark.svg';
    changeSectionHeader("Add Resume:");

    if(document.body.contains(document.getElementById('createdTable')) == true){
      document.body.removeChild(document.getElementById('createdTable'));
    };

    e.preventDefault();
});

function changeSectionHeader(displayedText){
    document.getElementById("sectionHeader").innerText=displayedText;
    };

var testStringify = String.raw
`Description

General Purpose of Job


Implement database processes, reports, dashboards and various other BI artifacts and processes for internal and external clients based on business requirements using industry best practices.


Duties and Responsibilities

• Translate BI business requirements into tasks and estimate the size of the tasks 

• Research requirements for BI requests to provide the requested functionality of each request, e.g. data extract, report,  dashboard, etc.        

• Decide the best use of available technologies to complete a variety of assigned tasks

• Design and implement data marts. Extend existing data mart implementations.

• Develop reports using Microsoft SQL Server Reporting Services development environment

• Develop dashboards using MS Power BI.

• Develop code using the T-SQL language to meet BI project requirements

• Develop MS SQL Server SSIS packages to meet BI project requirements

• Design report layouts that provide a user-friendly experience

• Analyze performance of each report or query and implement proper optimization techniques

• Follow documented processes to generate reports, packets, charts to various business units

• Troubleshoot and resolve technical issues

• Report progress to team(s) on the implementation of assigned projects/work items through daily scrum meetings

• Maintain a positive work atmosphere by behaving and communicating in a manner that will facilitate working with customers, clients, co-workers, and management

• Responsible for the security of workstation and work area in regard to the confidentiality of the data and the systems






Requirements

Knowledge,Skills & Abilities Desired


• Advanced knowledge of SQL Server

• Advanced Knowledge of database schema design 

• Advanced knowledge of T-SQL

• Advanced knowledge of Microsoft Reporting Services

• Advanced Knowledge of Microsoft SSIS or any ETL tool

• Advanced Knowledge of Excel

• Medium knowledge of query optimization

• Medium knowledge of Microsoft PowerBI or any dashboarding tool

• Basic knowledge of Dimensional Modeling and Star Schema designs

• Ability to understand & translate reporting business requirements into ETL processes, reports, and/or dashboards

• Ability to work with software developers on system designs to advise on BI related processes

• Demonstrate logic and math skills along with the ability to be inquisitive in analyzing requirements

• Effective communication and organizational skills

• Experience in a financial environment is a plus

• Exposure to AGILE methodologies is a plus


Educational And Professional Experience Requirements

• 2 year degree in a related field plus 3 years of BI experience.
`;

//const dbFile ='www/Data/apptrack.db';

fs.writeFileSync('www/Data/fileoutput.txt', JSON.stringify(testStringify), 'utf8');

var stringRaw = fs.readFileSync('www/Data/fileoutput.txt','utf8');

alert(JSON.parse(stringRaw));