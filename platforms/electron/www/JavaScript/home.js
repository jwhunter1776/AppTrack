const fs = require('fs');

class CreateTable{
    testTable(){

        var createTable = document.createElement("TABLE");
        createTable.id="createdTable";
        createTable.className="table";

        var appliedDtTmRow = document.createElement("tr");
        var appliedDtTmHeader = document.createElement("td");
        appliedDtTmHeader.style.cssText="font-weight: bold; align-text: left; border-top: 2px solid black; border-left: 2px solid black;";
        appliedDtTmHeader.innerHTML="Applied\<br>Date-Time:";
        appliedDtTmRow.appendChild(appliedDtTmHeader);
        var appliedDtTmData = document.createElement("td");
        appliedDtTmData.style.cssText="font-weight: normal; border-top: 2px solid black; border-right: 2px solid black;";
        appliedDtTmData.innerHTML = new Date().toLocaleString();
        appliedDtTmRow.appendChild(appliedDtTmData);



        var companyNameRow = document.createElement("tr");
        var companyNameHeader = document.createElement("td");
        companyNameHeader.style.cssText="font-weight: bold; align-text: left; border-top: 1px dotted #606575; border-left: 2px solid black;";
        companyNameHeader.innerHTML="Company Name:";0
        companyNameRow.appendChild(companyNameHeader);
        var companyNameData = document.createElement("td");
        companyNameData.style.cssText="font-weight: normal; border-top: 1px dotted #606575; border-right: 2px solid black;";
        companyNameData.innerHTML = "";
        companyNameRow.appendChild(companyNameData);


        var companyURLRow = document.createElement("tr");
        var companyURLHeader = document.createElement("td");
        companyURLHeader.style.cssText="font-weight: bold; align-text: left; border-top: 1px dotted #606575; border-left: 2px solid black;";
        companyURLHeader.innerHTML="Company\<br>Login URL:";0
        companyURLRow.appendChild(companyURLHeader);
        var companyURLData = document.createElement("td");
        companyURLData.style.cssText="font-weight: normal; border-top: 1px dotted #606575; border-right: 2px solid black;";
        companyURLData.innerHTML = "";
        companyURLRow.appendChild(companyURLData);

        var loginNameRow = document.createElement("tr");
        var loginNameHeader = document.createElement("td");
        loginNameHeader.style.cssText="font-weight: bold; align-text: left; border-top: 1px dotted #606575; border-left: 2px solid black;";
        loginNameHeader.innerHTML="Login Name:";0
        loginNameRow.appendChild(loginNameHeader);
        var loginNameData = document.createElement("td");
        loginNameData.style.cssText="font-weight: normal; border-top: 1px dotted #606575; border-right: 2px solid black;";
        loginNameData.innerHTML = "";
        loginNameRow.appendChild(loginNameData);

        var loginPassRow = document.createElement("tr");
        var loginPassHeader = document.createElement("td");
        loginPassHeader.style.cssText="font-weight: bold; align-text: left; border-top: 1px dotted #606575; border-left: 2px solid black;";
        loginPassHeader.innerHTML="Login Password:";0
        loginPassRow.appendChild(loginPassHeader);
        var loginPassData = document.createElement("td");
        loginPassData.style.cssText="font-weight: normal; border-top: 1px dotted #606575; border-right: 2px solid black;";
        loginPassData.innerHTML = "";
        loginPassRow.appendChild(loginPassData);

        var positionTypeRow = document.createElement("tr");
        var positionTypeHeader = document.createElement("td");
        positionTypeHeader.style.cssText="font-weight: bold; align-text: left; border-top: 1px dotted #606575; border-left: 2px solid black;";
        positionTypeHeader.innerHTML="Position Type:";0
        positionTypeRow.appendChild(positionTypeHeader);
        var positionTypeData = document.createElement("td");
        positionTypeData.style.cssText="font-weight: normal; border-top: 1px dotted #606575; border-right: 2px solid black;";
        positionTypeData.innerHTML = "";
        positionTypeRow.appendChild(positionTypeData);

        var positionURLRow = document.createElement("tr");
        var positionURLHeader = document.createElement("td");
        positionURLHeader.style.cssText="font-weight: bold; align-text: left; border-top: 1px dotted #606575; border-left: 2px solid black;";
        positionURLHeader.innerHTML="Position URL:";0
        positionURLRow.appendChild(positionURLHeader);
        var positionURLData = document.createElement("td");
        positionURLData.style.cssText="font-weight: normal; border-top: 1px dotted #606575; border-right: 2px solid black;";
        positionURLData.innerHTML = "";
        positionURLRow.appendChild(positionURLData);

        var nameResumeRow = document.createElement("tr");
        var nameResumeHeader = document.createElement("td");
        nameResumeHeader.style.cssText="font-weight: bold; align-text: left; border-top: 1px dotted #606575; border-left: 2px solid black;";
        nameResumeHeader.innerHTML="Resume Name:";0
        nameResumeRow.appendChild(nameResumeHeader);
        var nameResumeData = document.createElement("td");
        nameResumeData.style.cssText="font-weight: normal; border-top: 1px dotted #606575; border-right: 2px solid black;";
        nameResumeData.innerHTML = "";
        nameResumeRow.appendChild(nameResumeData);

        var stringRaw = fs.readFileSync('www/Data/fileoutput.txt','utf8');
        //.replace(new RegExp('\r?\n','g'), '<br />');


        var positionDescriptionRow = document.createElement("tr");
        var positionDescriptionHeader = document.createElement("td");
        positionDescriptionHeader.style.cssText="font-weight: bold; align-text: left; border-top: 1px dotted #606575; border-left: 2px solid black; border-bottom: 2px solid black;";
        positionDescriptionHeader.innerHTML="Position Description:";0
        positionDescriptionRow.appendChild(positionDescriptionHeader);
        var positionDescriptionData = document.createElement("td");
        positionDescriptionData.style.cssText="font-weight: normal; border-top: 1px dotted #606575; border-right: 2px solid black; border-bottom: 2px solid black; white-space: pre-wrap; text-indent: 0;";
        positionDescriptionData.innerHTML = JSON.parse(stringRaw);
        positionDescriptionRow.appendChild(positionDescriptionData);


        createTable.appendChild(appliedDtTmRow);
        createTable.appendChild(companyNameRow);
        createTable.appendChild(companyURLRow);
        createTable.appendChild(loginNameRow);
        createTable.appendChild(loginPassRow);
        createTable.appendChild(positionTypeRow);
        createTable.appendChild(positionURLRow);
        createTable.appendChild(nameResumeRow);
        createTable.appendChild(positionDescriptionRow);
        return createTable;
    };
  }

  module.exports = CreateTable;