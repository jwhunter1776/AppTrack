class DisplayAppliedPositionTable{

    createTable(){
        var createTable = document.createElement("TABLE");
        createTable.id="appliedTable";
        createTable.className="table";
        document.getElementById("actionSection").appendChild(createTable);
        return;
    }

    addAppliedDtTmRow(data, rowcolor){
        var appliedDtTmRow = document.createElement("tr");
        var appliedDtTmHeader = document.createElement("td");
        appliedDtTmHeader.style.cssText="padding-top: 1em; font-weight: bold; align-text: left; border-top: 2px solid black; border-left: 2px solid black; background-color: " + rowcolor + ";";
        appliedDtTmHeader.innerHTML="Applied\<br>Date-Time:";
        appliedDtTmRow.appendChild(appliedDtTmHeader);
        var appliedDtTmData = document.createElement("td");
        appliedDtTmData.style.cssText = "padding-top: 1em; font-weight: normal; border-top: 2px solid black; border-right: 2px solid black; background-color: " + rowcolor + ";";
        appliedDtTmData.innerHTML = data;
        appliedDtTmRow.appendChild(appliedDtTmData);
        document.getElementById("appliedTable").appendChild(appliedDtTmRow);
    }

    addCompanyNameRow(data, rowcolor)
    {
        var companyNameRow = document.createElement("tr");
        var companyNameHeader = document.createElement("td");
        companyNameHeader.style.cssText="font-weight: bold; align-text: left; border-top: 1px dotted #606575; border-left: 2px solid black; background-color: " + rowcolor + ";";
        companyNameHeader.innerHTML="Company Name:";0
        companyNameRow.appendChild(companyNameHeader);
        var companyNameData = document.createElement("td");
        companyNameData.style.cssText = "font-weight: normal; border-top: 1px dotted #606575; border-right: 2px solid black; background-color: " + rowcolor + ";";
        companyNameData.innerHTML = data;
        companyNameRow.appendChild(companyNameData);
        document.getElementById("appliedTable").appendChild(companyNameRow);
    }

    addCompanyURLRow(data, rowcolor)
    {
        var companyURLRow = document.createElement("tr");
        var companyURLHeader = document.createElement("td");
        companyURLHeader.style.cssText="color: white; font-weight: bold; align-text: left; border-top: 1px dotted #606575; border-left: 2px solid black; background-color: " + rowcolor + ";";
        companyURLHeader.innerHTML="Company\<br>Login URL:";0
        companyURLRow.appendChild(companyURLHeader);
        var companyURLData = document.createElement("td");
        companyURLData.style.cssText = "font-weight: bold; border-top: 1px dotted #606575; border-right: 2px solid black; background-color: " + rowcolor + ";";
        companyURLData.innerHTML = String.raw`<a href="`+ data + String.raw`" target="_blank">` + data + '</a>';
        companyURLRow.appendChild(companyURLData);
        document.getElementById("appliedTable").appendChild(companyURLRow);
    }

    addLoginNameRow(data, rowcolor)
    {
        var loginNameRow = document.createElement("tr");
        var loginNameHeader = document.createElement("td");
        loginNameHeader.style.cssText="font-weight: bold; align-text: left; border-top: 1px dotted #606575; border-left: 2px solid black; background-color: " + rowcolor + ";";
        loginNameHeader.innerHTML="Login Name:";0
        loginNameRow.appendChild(loginNameHeader);
        var loginNameData = document.createElement("td");
        loginNameData.style.cssText = "font-weight: normal; border-top: 1px dotted #606575; border-right: 2px solid black; background-color: " + rowcolor + ";";
        loginNameData.innerHTML = data;
        loginNameRow.appendChild(loginNameData);
        document.getElementById("appliedTable").appendChild(loginNameRow);
    }
    
    addLoginPassRow(data, rowcolor)
    {
        var loginPassRow = document.createElement("tr");
        var loginPassHeader = document.createElement("td");
        loginPassHeader.style.cssText="font-weight: bold; align-text: left; border-top: 1px dotted #606575; border-left: 2px solid black; background-color: " + rowcolor + ";";
        loginPassHeader.innerHTML="Login Password:";0
        loginPassRow.appendChild(loginPassHeader);
        var loginPassData = document.createElement("td");
        loginPassData.style.cssText= "font-weight: normal; border-top: 1px dotted #606575; border-right: 2px solid black; background-color: " + rowcolor + ";";
        loginPassData.innerHTML = data;
        loginPassRow.appendChild(loginPassData);
        document.getElementById("appliedTable").appendChild(loginPassRow);
    }

    addPositionURLRow(data, rowcolor)
    {
        var positionURLRow = document.createElement("tr");
        var positionURLHeader = document.createElement("td");
        positionURLHeader.style.cssText="font-weight: bold; align-text: left; border-top: 1px dotted #606575; border-left: 2px solid black; background-color: " + rowcolor + ";";
        positionURLHeader.innerHTML="Position URL:";0
        positionURLRow.appendChild(positionURLHeader);
        var positionURLData = document.createElement("td");
        positionURLData.style.cssText = "color: white; font-weight: bold; border-top: 1px dotted #606575; border-right: 2px solid black; background-color: " + rowcolor + ";";
        positionURLData.innerHTML = String.raw`<a href="`+ data + String.raw`" target="_blank">` + data + '</a>';
        positionURLRow.appendChild(positionURLData);
        document.getElementById("appliedTable").appendChild(positionURLRow);
    }

    addNameResumeRow(data, rowcolor)
    {
        var nameResumeRow = document.createElement("tr");
        var nameResumeHeader = document.createElement("td");
        nameResumeHeader.style.cssText="font-weight: bold; align-text: left; border-top: 1px dotted #606575; border-left: 2px solid black; background-color: " + rowcolor + ";";
        nameResumeHeader.innerHTML="Resume Name:";0
        nameResumeRow.appendChild(nameResumeHeader);
        var nameResumeData = document.createElement("td");
        nameResumeData.style.cssText="font-weight: normal; border-top: 1px dotted #606575; border-right: 2px solid black; background-color: " + rowcolor + ";";

        

        var part1 = String.raw`<button class="resumeButton" onclick="openFile(`;
        var part2 = String.raw`'` + process.cwd() + "/www/Data/Resumes/" + data + String.raw`'`;
        var part3 = String.raw`)">`+data+"</button>";

        const t =part1+part2+part3;



        nameResumeData.innerHTML = t;


//date.split("/").join("_")

        nameResumeRow.appendChild(nameResumeData);
        document.getElementById("appliedTable").appendChild(nameResumeRow);
    }

    addPositonTypeRow(data, rowcolor)
    {
        var positionTypeRow = document.createElement("tr");
        var positionTypeHeader = document.createElement("td");
        positionTypeHeader.style.cssText="font-weight: bold; align-text: left; border-top: 1px dotted #606575; border-left: 2px solid black; background-color: " + rowcolor + ";";
        positionTypeHeader.innerHTML="Position Type:";0
        positionTypeRow.appendChild(positionTypeHeader);
        var positionTypeData = document.createElement("td");
        positionTypeData.style.cssText = "font-weight: normal; border-top: 1px dotted #606575; border-right: 2px solid black; background-color: " + rowcolor + ";";
        positionTypeData.innerHTML = data;
        positionTypeRow.appendChild(positionTypeData);
        document.getElementById("appliedTable").appendChild(positionTypeRow);
    }

    addPositionDescriptionRow(data, rowcolor)
    {
        var positionDescriptionRow = document.createElement("tr");
        var positionDescriptionHeader = document.createElement("td");
        positionDescriptionHeader.style.cssText="padding-bottom: 1em; font-weight: bold; align-text: left; border-top: 1px dotted #606575; border-left: 2px solid black; border-bottom: 2px solid black; background-color: " + rowcolor + ";";
        positionDescriptionHeader.innerHTML="Position Description:";0
        positionDescriptionRow.appendChild(positionDescriptionHeader);
        var positionDescriptionData = document.createElement("td");
        positionDescriptionData.style.cssText="padding-bottom: 1em; font-weight: normal; border-top: 1px dotted #606575; border-right: 2px solid black; border-bottom: 2px solid black; white-space: pre-wrap; text-indent: 0; background-color: " + rowcolor + ";";
        positionDescriptionData.innerHTML = data;
        positionDescriptionRow.appendChild(positionDescriptionData);
        document.getElementById("appliedTable").appendChild(positionDescriptionRow);
    }
}

class GetDisplayData
{
    getAppliedData()
    {
        const displayAppliedPositionTable = new DisplayAppliedPositionTable;
        const getDisplayData = new GetDisplayData;
        var appliedPosition_tbl = JSON.parse(fs.readFileSync('www/Data/appliedPosition_tbl.json'));
        
        var isDeleted = 0;

        for(var dataSetNbr in appliedPosition_tbl) 
        {
            for(var columnData in appliedPosition_tbl[dataSetNbr])
            {
                if(appliedPosition_tbl[dataSetNbr]["DeletedDtTm"]!=null)
                {
                    isDeleted = 1;
                }
                else
                {
                    isDeleted = 0;
                }

                if(isDeleted==0 && columnData != "DeletedDtTm" )
                {
                    if(columnData == "AppliedDtTm")
                    {
                        displayAppliedPositionTable.addAppliedDtTmRow(appliedPosition_tbl[dataSetNbr][columnData], "#394674");
                    }

                    if(columnData == "PositionURL")
                    {
                        displayAppliedPositionTable.addPositionURLRow(appliedPosition_tbl[dataSetNbr][columnData], "#394674");
                    }

                    if(columnData == "AppliedResumeFK")
                    {
                        displayAppliedPositionTable.addNameResumeRow(getDisplayData.getResume(appliedPosition_tbl[dataSetNbr][columnData], "#394674"));
                    }

                    if(columnData == "RecruitingCompanyFK")
                    {
                        var recruitingCompanyArr = getDisplayData.getRecruitingCompany(appliedPosition_tbl[dataSetNbr][columnData]);

                        displayAppliedPositionTable.addCompanyNameRow(recruitingCompanyArr[0], "#394674");
                        displayAppliedPositionTable.addCompanyURLRow(recruitingCompanyArr[1], "#394674");
                        displayAppliedPositionTable.addLoginNameRow(recruitingCompanyArr[2], "#394674");
                        displayAppliedPositionTable.addLoginPassRow(recruitingCompanyArr[3], "#394674");
                    }

                    if(columnData == "PositionTypeFK")
                    {
                        displayAppliedPositionTable.addPositonTypeRow(getDisplayData.getPositionType(appliedPosition_tbl[dataSetNbr][columnData], "#394674"));
                    }

                    if(columnData == "PositionDescription")
                    {
                        displayAppliedPositionTable.addPositionDescriptionRow(appliedPosition_tbl[dataSetNbr][columnData], "#394674");
                    }
                }
            }
            isDeleted = 0;
        }
    }

    getRecruitingCompany(pk)
    {
        var recruitingCompany_tbl = JSON.parse(fs.readFileSync('www/Data/recruitingCompany_tbl.json'));
        var returnArray = new Array;

        if(pk !=null)
        {
            var loginType = 0;
            for(var dataColumnName in recruitingCompany_tbl[pk]) 
            {
                if(dataColumnName == "RecruitingCompanyName")
                {
                    returnArray.push(recruitingCompany_tbl[pk]["RecruitingCompanyName"]);
                }

                if(dataColumnName == "RecruitingCompanyURL")
                {
                    returnArray.push(recruitingCompany_tbl[pk]["RecruitingCompanyURL"]);
                }

                if(dataColumnName == "LoginType")
                {
                    if(recruitingCompany_tbl[pk]["LoginType"]=="1")
                    {
                        returnArray.push("LinkedIn Login");
                        returnArray.push("LinkedIn Login");
                        loginType = 1;
                    }

                    if(recruitingCompany_tbl[pk]["LoginType"]=="2")
                    {
                        returnArray.push("Facebook Login");
                        returnArray.push("Facebook Login");
                        loginType = 2;
                    }
                }

                if(dataColumnName == "LoginName" && loginType == 0)
                {
                    returnArray.push(recruitingCompany_tbl[pk]["LoginName"])
                }

                if(dataColumnName == "LoginPass" && loginType == 0)
                {
                    returnArray.push(recruitingCompany_tbl[pk]["LoginPass"])
                }
            }
            
        }
        return returnArray;
    }

    getPositionType(pk)
    {
        var positionType_tbl = JSON.parse(fs.readFileSync('www/Data/positionType_tbl.json'));
        var isDeleted = 0;

        if(pk !=null)
        {
            for(var dataColumnName in positionType_tbl[pk]) 
            {
                if(dataColumnName == "DeletedDtTm" && positionType_tbl[pk]["DeletedDtTm"] != null )
                {
                    isDeleted = 1;
                }

                if(dataColumnName == "PositionName" && isDeleted == 0)
                {
                    return positionType_tbl[pk]["PositionName"];
                }
            }
        }
    }

    getResume(pk)
    {
        var resume_tbl = JSON.parse(fs.readFileSync('www/Data/resume_tbl.json'));
        var isDeleted = 0;

        if(pk !=null)
        {
            for(var dataColumnName in resume_tbl[pk]) 
            {
                if(dataColumnName == "DeletedDtTm" && resume_tbl[pk]["DeletedDtTm"] != null )
                {
                    isDeleted = 1;
                }

                if(dataColumnName == "ResumeName" && isDeleted == 0)
                {
                    return resume_tbl[pk]["ResumeName"];
                }
            }
        }
    }




}

  module.exports=
    {
        DisplayAppliedPositionTable : DisplayAppliedPositionTable, 
        GetDisplayData : GetDisplayData
    }