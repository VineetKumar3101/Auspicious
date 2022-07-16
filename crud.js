var nameV,emailV,numberV,addressV,msgV;
function readform(){
    nameV=document.getElementById("name").value;
    emailV=document.getElementById("email").value;
    numberV=document.getElementById("number").value;
    addressV=document.getElementById("address").value;
    msgV=document.getElementById("msg").value;
    console.log(nameV,emailV,numberV,addressV,msgV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("auspicious/" + emailV)
    .set({
      email: emailV,
      name: nameV,
      number: numberV,
      address: addressV,
      msg:msgV,
    });
  alert("Data Inserted");
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("email").value = "";
  document.getElementById("address").value = "";
  document.getElementById("msg").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("auspicious/" + emailV)
    .on("value", function (snap) {
      document.getElementById("name").value = snap.val().rollNo;
      document.getElementById("number").value = snap.val().name;
      document.getElementById("email").value = snap.val().gender;
      document.getElementById("address").value = snap.val().address; 
      document.getElementById("msg").value = snap.val().address;
    });
};
