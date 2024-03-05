function getFormvalue() {
    //Write your code here
	const form1 = document.getElementById("form1");
	const fname = form1.elements["fname"].value;
	const lname = form1.elements["lname"].value;
	alert(`${fname} ${lname}`)

}
