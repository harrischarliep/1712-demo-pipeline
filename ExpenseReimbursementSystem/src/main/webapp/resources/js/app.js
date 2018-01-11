/**
 * 
 */

window.onload = function () {
	loadNavBar();
	loadDashboardView();
}

function loadNavBar() {
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			document.getElementById('navbar').innerHTML = xhr.responseText;
//			document.getElementById('dashboard').addEventListener("click", loadDashboardView, false);
			//document.getElementById('reimbursements').addEventListener("click", loadReimbursementsView, false);
//			document.getElementById('account').addEventListener("click", loadAccountView, false);
//			document.getElementById('logout').addEventListener('click', logoutUser, false);		
		}
	}
	xhr.open("GET", "ajaxNavbar?r=" + new Date().getTime(), true);
	xhr.send();
}

function loadDashboardView() {
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			document.getElementById('view').innerHTML = xhr.responseText;
			
		}
	}
	xhr.open("GET", "ajaxDashboard?r=" + new Date().getTime(), true);
	xhr.send();
}

//function loadReimbursementsView() {
//	let xhr = new XMLHttpRequest();
//	xhr.onreadystatechange = function () {
//		if (xhr.readyState == 4 && xhr.status == 200) {
//			document.getElementById('view').innerHTML = xhr.responseText;
//			document.getElementById("submitReimbursementBtn").addEventListener("click", submitReimbursement, false);
//			document.getElementById("reimbursementStatusFilter").addEventListener("change", loadReimbursements, false);
//			loadReimbursements();
//		}
//	}
//	xhr.open("GET", "ajaxReimbursements", true);
//	xhr.send();
//}

//function loadAccountView() {
//	let xhr = new XMLHttpRequest();
//	xhr.onreadystatechange = function () {
//		if (xhr.readyState == 4 && xhr.status == 200) {
//			document.getElementById("view").innerHTML = xhr.responseText;
//			loadAccountDetails();
//		}
//	}
//	xhr.open("GET", "ajaxAccount", true);
//	xhr.send();
//}

function logoutUser() {
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			console.log("Logging user out");
		}
	}
	xhr.open("POST", "logout", true);
	xhr.send();
}

//function submitReimbursement() {
//	console.log("submitReimbursement")
//	let reAmt = document.getElementById("reimbursementAmtInput").value;
//	let reType = document.getElementById("reimbursementTypeInput").value;
//	let reDesc = document.getElementById("reimbursementDescInput").value;
//
//	if (reAmt == "" || reDesc == "") {
//		alert("You left one or more required fields blank!");
//		return;
//	}
//	
//	let re = {
//		amount: reAmt,
//		description: reDesc,
//		type: reType
//	}
//	re = JSON.stringify(re);
//	
//	let xhr = new XMLHttpRequest();
//	xhr.onreadystatechange = function () {
//		if (xhr.readyState == 4 && xhr.status == 200) {
////			console.log(xhr.responseText);
//		}
//	}
//	xhr.open("POST", "ajaxSubmitReimbursementRequest", true);
////	console.log(re);
//	xhr.setRequestHeader("key", re);
//	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//	xhr.send(re);
//	
//	loadReimbursements();
//
//	document.getElementById("reimbursementAmtInput").value = null;
//	document.getElementById("reimbursementDescInput").value = null;
//}

//function loadReimbursements() {
//	console.log("loadReimbursements");
//	clearReimbursements();
//	
//	let reStatus = document.getElementById("reimbursementStatusFilter").value;
//	let json = { status: reStatus };
//	json = JSON.stringify(json);
//
//	let xhr = new XMLHttpRequest();
//	xhr.onreadystatechange = function () {
//		if(xhr.readyState == 4 && xhr.status == 200) {
//			let json = JSON.parse(xhr.responseText);
//			for(let i = 0; i < json.length; i++) {
//				let re = json[i];
//				populateReimbursementTable(re);
//			}
//		}
//	}
//	xhr.open("POST", "ajaxReimbursementInfo", true);
//	xhr.setRequestHeader("key", json);
//	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//	xhr.send(json);
//}
//
//function populateReimbursementTable(re) {
//	let tr = document.createElement("tr");
//	let tdAmount = document.createElement("td");
//	let tdType = document.createElement("td");
//	let tdDescription = document.createElement("td");
//	let tdStatus = document.createElement("td");
//	tdAmount.innerHTML = re.amount;
//	tdType.innerHTML = re.type;
//	tdDescription.innerHTML = re.description;
//	tdStatus.innerHTML = re.status;
//	tr.appendChild(tdAmount);
//	tr.appendChild(tdType);
//	tr.appendChild(tdDescription);
//	tr.appendChild(tdStatus);
//	document.getElementById("reimbursementTable").appendChild(tr);
//}
//
//function clearReimbursements() {
//	console.log("clearReimbursements");
//	let tbl = document.getElementById("reimbursementTable");
////	tbl.innerHTML = "";
//	while(tbl.firstChild) {
//		tbl.removeChild(tbl.firstChild);
//	}
//}

//function loadAccountDetails() {
//	console.log("loadAccountDetails");
//	let xhr = new XMLHttpRequest();
//	xhr.onreadystatechange = function () {
//		if(xhr.readyState == 4 && xhr.status == 200) {
//			let json = JSON.parse(xhr.responseText);
//			document.getElementById("accountUserUsername").innerHTML = json.username;
//			document.getElementById("accountUserName").innerHTML = json.firstname + " " + json.lastname;
//			document.getElementById("accountUserEmail").innerHTML = json.email;
//			document.getElementById("accountUserUpdateBtn").addEventListener("click", loadAccountDetailsUpdateView, false);
//		}
//	}
//	xhr.open("GET", "ajaxAccountInfo", true);
//	xhr.send();
//}

//function loadAccountDetailsUpdateView() {
//	console.log("loadAccountDetailsUpdateView");
//	let xhr = new XMLHttpRequest();
//	xhr.onreadystatechange = function () {
//		if (xhr.readyState == 4 && xhr.status == 200) {
//			document.getElementById("view").innerHTML = xhr.responseText;
//			document.getElementById("accountUserUpdateSubmitBtn").addEventListener("click", submitAccountDetailUpdate, false);
//		}
//	}
//	xhr.open("GET", "ajaxAccountUpdate", true);
//	xhr.send();
//}

//function submitAccountDetailUpdate() {
//	let u_username = document.getElementById("accountUserUsernameInput").value;
//	let u_firstname = document.getElementById("accountUserFirstnameInput").value;
//	let u_lastname = document.getElementById("accountUserLastnameInput").value;
//	let u_email = document.getElementById("accountUserEmailInput").value;
//
//	if (u_username == "" || u_firstname == "" || u_lastname == "" || u_email == "" ) {
//		alert("You left one or more required fields blank!");
//		return;
//	}
//	
//	let user = {
//		username: u_username,
//		firstname: u_firstname,
//		lastname: u_lastname,
//		email: u_email
//	}
//	user = JSON.stringify(user);
//	console.log(user);
//	
//	let xhr = new XMLHttpRequest();
//	xhr.onreadystatechange = function () {
//		if (xhr.readyState == 4 && xhr.status == 200) {
//			
//		}
//	}
//	xhr.open("POST", "ajaxAccountUpdate", true);
//	xhr.setRequestHeader("key", user);
//	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//	xhr.send(user);
//	
//	loadAccountView();
//}




