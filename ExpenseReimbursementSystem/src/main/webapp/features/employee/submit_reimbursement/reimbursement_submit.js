/**
 * 
 */

function loadSubmitReimbursementView() {
	console.log("loadSubmitReimbursementView")
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			document.getElementById("view").innerHTML = xhr.responseText;
			document.getElementById("reimbursementReceiptUpload").addEventListener("change", handleFileSelect, false);
			$("#reimbursementReceiptImg").hide();
		}
	}
	xhr.open("GET", "ajaxSubmitReimbursementRequest", true);
	xhr.send();
}

function submitReimbursement() {
	console.log("submitReimbursement")
	let reAmt = document.getElementById("reimbursementAmtInput").value;
	let reType = document.getElementById("reimbursementTypeInput").value;
	let reDesc = document.getElementById("reimbursementDescInput").value;

	if (reDesc.length > 100) {
		alert("Description must not exceed 100 characters.");
		return;
	}
	
	if (reAmt == "" || reDesc == "") {
		alert("You left one or more required fields blank!");
		return;
	}
	
	let re = {
		amount: reAmt,
		description: reDesc,
		type: reType
	}
	re = JSON.stringify(re);
	
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			uploadReceipt();
			document.getElementById("view").innerHTML = xhr.responseText;
			document.getElementById("reimbursementStatusFilter").value = "Pending";
			loadReimbursements();
		}
	}
	xhr.open("POST", "ajaxSubmitReimbursementRequest", true);
//	console.log(re);
	xhr.setRequestHeader("key", re);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(re);
}



//Adapted from: http://www.onlywebpro.com/2012/01/24/create-thumbnail-preview-of-images-using-html5-api/
function handleFileSelect(evt) {
    let files = evt.target.files;
    let f = files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
    	$('#reimbursementReceiptImg')
    		.attr('src', e.target.result)
    		.width(150)
    		.height(200)
    		.show();
       };
    reader.readAsDataURL(f);
}

function uploadReceipt() {
	let files = document.getElementById("reimbursementReceiptUpload").files;
	console.log("files: " + files);
	let f = files[0];
	console.log("f: " + f);
	let formData = new FormData();
	console.log("formData: " + formData);
	formData.append("receiptBlob", Blob, f.name);
	formData.append("test", "test");
	
	
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			//Do nothing?
		}
	}
	xhr.open("POST", "ajaxUploadReceipt", true);
	xhr.send(formData);
	
}


