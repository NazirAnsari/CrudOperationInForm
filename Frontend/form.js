var buttons = document.getElementById("signUp");
var buttonUpdate = document.getElementById("updatebtn"); //click btn to update values

var block = document.getElementById("myblock");
var loginAuth = document.getElementById("login"); //login credential check
var authValue = document.getElementById("getEmail"); //takes values of login form
var authPass = document.getElementById("getPass"); //takes values of login pass value

// header Section btn

var hReg = document.getElementById("reg");
var hDel = document.getElementById("del"); //click this to show delete form
var hUpdate = document.getElementById("update");
var hLogin = document.getElementById("signIn");

//delete Input Value

var delbtnValue = document.getElementById("deleteId");

// console.log("hii");

var secondaryMap = new Map();
console.log(block);

var arr = [];
let count = 0;

hDel.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementsByClassName("deleteForm")[0].style.display = "block";
  document.getElementById("registration-form").style.display = "none";
  document.getElementById("myblock").style.display = "none";
  document.getElementById("updateForm").style.display = "none";
  document.getElementsByClassName("myTable")[0].style.display = "none";
  document.getElementById("loginTable").style.display = "none";
  document.getElementById("del").style.display="none";
  document.getElementById('update').style.display="none";
  document.getElementById('logOut').style.display="none";

});

hUpdate.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("updateForm").style.display = "block";
  document.getElementsByClassName("deleteForm")[0].style.display = "none";
  document.getElementById("registration-form").style.display = "none";
  document.getElementById("myblock").style.display = "none";
  document.getElementsByClassName("myTable")[0].style.display = "none";
  document.getElementById("loginTable").style.display = "none";
  document.getElementById("del").style.display="none";
  document.getElementById('update').style.display="none";
  document.getElementById('logOut').style.display="none";

});
hReg.addEventListener("click", function (event) {
  event.preventDefault();
  // if (block.style.display === "none") {

  //     block.style.display = "block";
  // } else {

  //     block.style.display = "none";
  // }

  // console.log("call");

  document.getElementById("registration-form").style.display = "block";
  document.getElementById("myblock").style.display = "none";
  document.getElementsByClassName("deleteForm")[0].style.display = "none";
  document.getElementById("updateForm").style.display = "none";
  document.getElementsByClassName("myTable")[0].style.display = "none";
  document.getElementById("loginTable").style.display = "none";
  document.getElementById("del").style.display="none";
  document.getElementById('update').style.display="none";
  document.getElementById('logOut').style.display="none";

});

hLogin.addEventListener("click", function (event) {
  event.preventDefault();

  document.getElementById("registration-form").style.display = "none";
  document.getElementById("myblock").style.display = "block";
  document.getElementsByClassName("deleteForm")[0].style.display = "none";
  document.getElementById("updateForm").style.display = "none";
  document.getElementsByClassName("myTable")[0].style.display = "none";
  document.getElementById("loginTable").style.display = "none";
  document.getElementById("del").style.display="none";
  document.getElementById('update').style.display="none";
  document.getElementById('logOut').style.display="none";


  console.log("sde");
});

loginAuth.addEventListener("click", function (event) {
  event.preventDefault();
  var loginEmail = authValue.value;
  var loginPass = authPass.value;

  console.log(loginEmail, loginPass);
  // for (let i = 0; i < arr.length; i++) {
  //     obj = arr[i];
  //     if (obj.userName == nameValue) {
  //         alert("login Successful");
  //     }

  //     else {
  //         alert('user not exist');
  //     }
  // }

  //  Validit(nameValue) ;
  //   if (secondaryMap.has(nameValue)) {
  //     alert("Login Successful");
  //     return false;
  //   } else {
  //     alert("user not exist");
  //   }

  let obj = {
    loginEmail,
    loginPass,
  };

  loginAjax(obj);

  loginEmail.value="";
  loginPass.value="";
});

// function Validit(userName){
//     if(secondaryMap.has(userName))
//     {
//          alert("Login Successful");
//          return false;
//         }

//         else{
//             alert('user not exist')
//         }
// }

function clearError() {
  error = document.getElementsByClassName("Eroor");
  for (let item of error) {
    item.innerHTML = "";
  }
}

function setError(id, msg) {
  ele = document.getElementById(id);
  ele.getElementsByClassName("Eroor")[0].innerHTML = msg;
}

//updated value
buttonUpdate.addEventListener("click", (event) => {
  event.preventDefault();
  var id = document.getElementById("newId").value;

  var userFirsName = document.getElementById("newFirstName").value;
  var userLastName = document.getElementById("newLastName").value;
  var userEmail = document.getElementById("newEmail").value;
  var userName = document.getElementById("newUserName").value;
  var userPhone = document.getElementById("newPhoneNo").value;
  var userPass = document.getElementById("newPass").value;
  var cUserPass = document.getElementById("newCpass").value;

  // console.log("update ",userFirsName)
  var obj1 = {
    id: id,
    userFirsName: userFirsName,
    userLastName : userLastName,
    userEmail: userEmail,
    userName : userName,
    userPhone : userPhone,
    userPass: userPass,
    cUserPass: cUserPass,
  };

  console.log(obj1);

  ajaxUpdate(obj1);
});

//registration signup button
buttons.addEventListener("click", function (event) {
  event.preventDefault();
  var firstName = document.forms["my-form"]["first_name"].value;
  var lastName = document.forms["my-form"]["last_name"].value;
  var userEmail = document.forms["my-form"]["email"].value;
  var userName = document.forms["my-form"]["user_name"].value;
  var phoneNo = document.forms["my-form"]["phoneNo"].value;
  var userPass = document.forms["my-form"]["password"].value;
  var cUserPass = document.forms["my-form"]["cpassword"].value;
  // var display = document.getElementById("display");

  console.log("userName", userName);
  clearError();
  count++;
  console.log(count);
  // validation
  if (userName.length < 3) {
    setError("yourFirstName", "*minimum length should be 3 digit");
    return false;
  }
  else if (userName.search(/[0-9]/) == 1){
    setError("yourFirstName", "* digit not required in name");
    return false;
  }
  else{ }
  if (userEmail.indexOf("@") == 0) {
    setError("yourEmail", " *dont put @ in starting point");
    return false;
  } else if (userEmail.search(/[@]/) == -1) {
    setError("yourEmail", "* @ is missing here");
    return false;
  } else if (
    userEmail.charAt(userEmail.length - 4) != "." &&userEmail.charAt(userEmail.length - 4) != ".") 
  {
    setError("yourEmail", "* . is not at a correct position");
    return false;
  }

  if(phoneNo.length >10){
    setError("phone", "* required only 10 digit number");
    return false;
  }

  if(userPass.length<=5){
    setError("yourPassword", "* minimum 5 character required");
    return false;
  }
  if(userPass!=cUserPass){
    setError("yourCpassword", "* password and confrim password not match");
    return false;
  }


  var obj = {
    // userId: count,
    firstName: firstName,
    lastName: lastName,
    userEmail: userEmail,
    userName: userName,
    phoneNo: phoneNo,
    userPass: userPass,
    cUserPass: cUserPass,
  };

  //     var arrr={
  //         userName : obj
  //     }

  //    console.log(arrr);
  // console.log(obj);
  // arr.push(obj);
  // let datadisplay = "";

  // secondaryMap.push(obj);
  // secondaryMap.set(userName, userPass);
  // console.log(secondaryMap);
  // console.log(secondaryMap);
  // for(let key in secondaryMap ){
  //     console.log(key);
  // }

  //Validit(userName);
  // console.log("hello"+secondaryMap.get(userName));

  // for (var key of secondaryMap) {
  //   console.log(key);
  // }

  // for (var i = 0; i < arr.length; i++) {
  //     let obj = arr[i];
  //     datadisplay += "<tr> <td>" + obj.userId + "</td>";
  //     datadisplay += "<td>" + obj.userName + "</td>";
  //     datadisplay += "<td>" + obj.userEmail + "</td>";
  //     datadisplay += "<td>" + obj.userPass + " </td>";
  //     datadisplay += "<td>" + obj.cUserPass + "<br> </td> </tr>";
  // }
  // display.innerHTML = datadisplay;

  console.log(obj, "before Api");
  data_insertThroughApi(obj);

  document.forms["my-form"]["first_name"].value ="";
  document.forms["my-form"]["last_name"].value ="";
  document.forms["my-form"]["email"].value ="";
  document.forms["my-form"]["user_name"].value ="";
  document.forms["my-form"]["phoneNo"].value ="";
  document.forms["my-form"]["password"].value ="";
  document.forms["my-form"]["cpassword"].value ="";
});


////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////  AJAX  ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////



// ajax for delete data

var deleteData = document.getElementById("deleteData");
deleteData.addEventListener("click", (e) => {
  e.preventDefault();
  const id = delbtnValue.value;
  console.log(id, "del btn value");
  deleteUser(id);
});

function deleteUser(id) {
  const obj = { id };
  console.log(obj);
  $.ajax({
    url: "http://localhost:5000/user/delete",
    type: "POST",
    data: obj,
    success: function (result) {
      console.log(result, "deleted");
    },
    error: function (error) {
      console.log(error);
    },
  });
}

//ajax for update

function ajaxUpdate(updatedUser) {
  console.log("update call", updatedUser);
  $.ajax({
    url: "http://localhost:5000/user/update",
    type: "POST",
    data: updatedUser,
    success: function (result) {
      console.log(result);
    },

    error: function (error) {
      console.log(error);
    },
  });
}

//ajax for data insert

function data_insertThroughApi(user) {
  console.log(user);
  $.ajax({
    url: "http://localhost:5000/addUser",
    type: "POST",
    data: user,
    success: function (result) {
      // if(typeof result =="string"){
      //   alert(result);
      // }
      console.log(result);
    },
    error: function (error) {
      console.log(error);
    },
  });
}

var showdata = document.getElementById("showdata");
showdata.addEventListener("click", datashowed);


//ajax for data showed

function datashowed(e) {
  e.preventDefault();
  document.getElementsByClassName("myTable")[0].style.display = "block";
  document.getElementById("registration-form").style.display = "none";
  document.getElementById("myblock").style.display = "none";
  document.getElementsByClassName("deleteForm")[0].style.display = "none";
  document.getElementById("updateForm").style.display = "none";
  document.getElementById("loginTable").style.display = "none";
  document.getElementById("del").style.display="none";
  document.getElementById('update').style.display="none";
  document.getElementById('logOut').style.display="none";

  $.ajax({
    url: "http://localhost:5000/users",
    type: "GET",
    success: function (result) {
      //   console.log(result);
      rows = result;
      let str =
        rows.length > 0
          ? `<tr class = "header">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>User Name</th>
            <th>phone No.</th>
            <th>Created at</th> </tr>`
          : "No data in database";
      rows.forEach((user) => {
        str += `<tr>
    <td>${user.first_name}</td>
    <td>${user.last_name}</td>
    <td>${user.email}</td>
    <td>${user.username}</td>
    <td>${user.phone_no}</td>
    <td>${user.createdAt}</td>
    </tr>`;
      });
      console.log(str);
      const output = document.getElementsByClassName("myTable")[0];
      output.innerHTML = str;
    },
    error: function (error) {
      console.log(error);
    },
  });
}

//login Ajax

function loginAjax(user) {
  // console.log("shaktiman login")
  console.log(user);
  document.getElementById("loginTable").style.display = "block";
  // document.getElementById("deleteId").style.display='block';
  $.ajax({
    url: "http://localhost:5000/login",
    type: "POST",
    data: user,
    success: function (result) {
      console.log("ajax", result);
      console.log(typeof result);
      console.log(result.length);
      // console.log('ajax2',result.password);  //controller se password bheja hi nhi 
      if (typeof result === "string") {
        alert(result);
      } else {
        let str =
          typeof result != "string" > 0
            ? `<h1><caption>Login SuccessFul</caption></h1>
            <tr class = "header">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>User Name</th>
            <th>phone No.</th>
             </tr>`
            : "No data in database";

        str += `<tr>
        <td>${result.first_name}</td>
        <td>${result.last_name}</td>
        <td>${result.email}</td>
        <td>${result.username}</td>
        <td>${result.phone_no}</td>
          </tr>`;
        document.getElementsByClassName("myTable")[0].style.display = "none";
        document.getElementById("registration-form").style.display = "none";
        document.getElementById("myblock").style.display = "none";
        document.getElementsByClassName("deleteForm")[0].style.display =
          "none";
        document.getElementById("del").style.display="inline";
        document.getElementById('update').style.display="inline";
        document.getElementById('logOut').style.display="inline";
        document.getElementById("updateForm").style.display = "none";
        const output = document.getElementById("loginTable");
        output.innerHTML = str;
        // deleteLoginUser(result);
      }
    },
    error: function (error) {
      console.log(error);
    },
  });
}
