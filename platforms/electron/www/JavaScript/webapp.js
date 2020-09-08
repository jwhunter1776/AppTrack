/*
//////////////////////////////////////////////////////////////////////////////////
                            Database Section
//////////////////////////////////////////////////////////////////////////////////
*/
const fs = require('fs');
const sqlite3 = require('sqlite3');
const { loadavg } = require('os');
const { table } = require('console');
const dbFile ='www/Data/apptrack.db';
const open = require('open');

function openFile(buttonText) {
  open(buttonText, {wait: true});
  return "Opened";
}


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

home.addEventListener('click', function(e){
    document.getElementById('homeImg').src='Images/dappliedposDark.svg';
    document.getElementById('positiontypeImg').src='Images/apositionLight.svg';
    document.getElementById('recruitingImg').src='Images/arecruitingcoLight.svg';
    document.getElementById('appliedImg').src='Images/aapositionLight.svg';
    document.getElementById('resumeImg').src='Images/aresumeLight.svg';
    changeSectionHeader("Positions Applied:");
    
    if(screen.width <= 1230)
    {
      nav.classList.toggle('hide-mobile')
    }
    else
    {
      nav.classList.add('hide-mobile');
    }
    
    if(document.body.contains(document.getElementById('appliedTable')) == false){
      const javascriptDir = process.cwd() + "/www/JavaScript/home.js";
      const homejs = require(javascriptDir);
      const displayAppliedPositionTable = new homejs.DisplayAppliedPositionTable;
      const getDisplayData = new homejs.GetDisplayData;




      displayAppliedPositionTable.createTable();
      getDisplayData.getAppliedData();
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

    if(screen.width <= 1230)
    {
      nav.classList.toggle('hide-mobile')
    }
    else
    {
      nav.classList.add('hide-mobile');
    }

    if(document.body.contains(document.getElementById('appliedTable')) == true){
      appliedTable = document.getElementById('appliedTable');
      appliedTable.parentNode.removeChild(appliedTable);
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
    
    if(screen.width <= 1230)
    {
      nav.classList.toggle('hide-mobile')
    }
    else
    {
      nav.classList.add('hide-mobile');
    }

    if(document.body.contains(document.getElementById('appliedTable')) == true){
      appliedTable = document.getElementById('appliedTable');
      appliedTable.parentNode.removeChild(appliedTable);
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
    
    if(screen.width <= 1230)
    {
      nav.classList.toggle('hide-mobile')
    }
    else
    {
      nav.classList.add('hide-mobile');
    }

    if(document.body.contains(document.getElementById('appliedTable')) == true){
      appliedTable = document.getElementById('appliedTable');
      appliedTable.parentNode.removeChild(appliedTable);
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
    
    if(screen.width <= 1230)
    {
      nav.classList.toggle('hide-mobile')
    }
    else
    {
      nav.classList.add('hide-mobile');
    }

    if(document.body.contains(document.getElementById('appliedTable')) == true){
      appliedTable = document.getElementById('appliedTable');
      appliedTable.parentNode.removeChild(appliedTable);
    };

    e.preventDefault();
});

function changeSectionHeader(displayedText){
    document.getElementById("sectionHeader").innerText=displayedText;
    };
