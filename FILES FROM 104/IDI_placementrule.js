/*
(c) Copyright IBM Corp. 2016  All Rights Reserved  

US Government Users Restricted Rights - Use duplication or
disclosure restricted by GSA ADP Schedule Contract with
IBM Corp
*/

var deptNum = entry.departmentnumber[0];
var placementLoc="ou=Building";
if (deptNum == "Build")
	placementLoc="ou=Building";
if (deptNum == "Des")
	placementLoc="ou=Design";
if (deptNum == "Manu")
	placementLoc="ou=Manufacturing";
if (deptNum == "Test")
	placementLoc="ou=Testing";
if (deptNum == "Main")
	placementLoc="ou=Maintainance";
if (deptNum == "Fin")
	placementLoc="ou=Finance";
if (deptNum == "Sale")
	placementLoc="ou=Sales";
return placementLoc;






if (deptNum == "Sales-America")
	placementLoc="L=America,ou=Sales";
if (deptNum == "Sales-Europe")
	placementLoc="L=Europe,ou=Sales";
if (deptNum == "Sales-Africa)
	placementLoc="L=Africa,ou=Sales";
if (deptNum == "Sales-AP")
	placementLoc="L=AP,ou=Sales;
