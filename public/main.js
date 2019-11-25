// class Purchase {
//   constructor() {
//     this.internetConnection = internetConnection
//     this.phoneLines = phoneLines
//     this.cellPhones = cellPhones
//     this.price = price
//   }
// }

var total;
var internetConnectionService;
var numberOfPhoneLines = document.getElementById("txtPhoneLines").value;
console.log("numberOfPhoneLines :", numberOfPhoneLines);


  class CheckInternetConnection_Subject {
    constructor() {
      this._observers = [];
    }

    subscribe(observer) {
      this._observers.push(observer);
    }

    unsubscribe(observer) {
      this._observers = this._observers.filter(obs => observer !== obs);
    }

    fire(change) {
      console.log("sub.fire(", change, ")");
      this._observers.forEach(observer => {
        observer.updateInternetconnectionPrice(change);
        // observer.update(change);
      });
    }
  }

  class InputPhoneLines_Subject {
    constructor() {
      this._observers = [];
    }

    subscribe(observer) {
      this._observers.push(observer);
    }

    unsubscribe(observer) {
      this._observers = this._observers.filter(obs => observer !== obs);
    }

    fire(change) {
      console.log("sub22.fire(", change, ")");
      this._observers.forEach(observer => {
        observer.updatePhoneLinesPrice(change);
        // observer.update(change);
      });
    }
  }


  class BottonLine_Observer {

    constructor(state) {
      this.internetConnectionPrice=0;
      this.phoneLinesPrice=0;
      // this.internetConnectionPrice=internetConnectionPrice;
      // this.phoneLinesPrice=phoneLinesPrice;
      this.state = state;
      this.initialState = state;
      this.stateGlobal=0;
      this.stateGlobal=this.state;
      console.log("333 this.state=", this.state, ")");
      console.log("stateGlobal=", this.stateGlobal, ")");
    }

    updateInternetconnectionPrice(change){
      console.log("389 change=",change, ")");
      this.internetConnectionPrice=+change;
      console.log("389 internetConnectionPrice=",this.internetConnectionPrice, ")");
      // this.total= eval(this.internetConnectionPrice)+eval(this.phoneLinesPrice);

      console.log("389 eval(change)=",eval(change), ")");
      console.log("389 this.phoneLinesPrice=",this.phoneLinesPrice, ")");

      this.total=eval(change)+eval(this.phoneLinesPrice);
      console.log("389 total=",total, ")");
      var totalArea = document.getElementById("totalArea");
      totalArea.innerHTML = "Total price: " + this.total + "<br />";
    }

    updatePhoneLinesPrice(change){
      console.log("125 change=",change, ")");
      this.phoneLinesPrice=+change;
      console.log("125 phoneLinesPrice=",this.phoneLinesPrice, ")");
      // this.total= eval(this.internetConnectionPrice)+eval(this.phoneLinesPrice);
      this.total=eval(this.internetConnectionPrice) + eval(change);
      var totalArea = document.getElementById("totalArea");
       totalArea.innerHTML = "Total price: " + this.total + "<br />";
    }




    // update(change) {
    //   console.log("999999 obs.update(", change, ")");
    //
    //   let oldState = this.state;
    //   console.log("5555 oldState=", oldState, ")");
    //
    //   console.log("6666 obs.state=", this.state, ")");
    //
    //   this.state = eval(oldState) + eval(change);
    //
    //   console.log("stateGlobal=", this.stateGlobal, ")");
    //   console.log("7777 obs.state=", this.state, ")");
    //   var totalArea = document.getElementById("totalArea");
    //   totalArea.innerHTML = totalArea.innerHTML = "Total price: " + this.state + "<br />";
    //
    // }
  }
////////////////////////////////////////////////////////

  const sub = new CheckInternetConnection_Subject();

  const sub22 = new InputPhoneLines_Subject();

  const obs1 = new BottonLine_Observer(0);
  // const obs2 = new BottonLine_Observer(19);

  sub.subscribe(obs1);
  sub22.subscribe(obs1);
  // sub.subscribe(obs2);

  // sub.fire('INC');


  // async function myAsynchronousFunction(internetConnection) {
  //   this.internetConnection = internetConnection;
  //     // myPromise().then(message => {
  //     //     console.log(message);
  //     // })
  //     try{
  //     // const message = await myPromise();
  //     const internetConnectionService = await internetConnection();
  //     sub.fire(internetConnectionService);
  //     console.log("8868 sub.fire(", internetConnectionService, ")");
  //   } catch(error) {throw(error)};
  // }
  //
  // // myAsynchronousFunction();
  // myAsynchronousFunction(internetConnection);


  console.log("bottom line: ", obs1.state); // 2
  // console.log(obs2.state); // 20

  ////////////////////////////////////////////

// this.myFunction = () => {
// myFunction = () => {
  function internetConnection() {




  // Get the checkbox
  var internetConnection;
  var checkBox = document.getElementById("chkInternetConnection");
  // Get the output text
  // var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    internetConnection=true;
    internetConnectionService=100;
    sub.fire(internetConnectionService);
    console.log("internetConnection=true")
    // totalArea.innerHTML = "Total price: " + internetConnectionService + "<br />";
    // totalArea.innerHTML = "Total price: " + numberOfPhoneLines*300  + "<br />";
    return internetConnectionService;
  } else {
    internetConnection=false;
    internetConnectionService=0;
    sub.fire(internetConnectionService);
    console.log("internetConnection=false")
    // totalArea.innerHTML = "Total price: " + numberOfPhoneLines*300  + "<br />";
    return internetConnectionService;
  }

  // var x = document.getElementById("mySelect");
  // var option = document.createElement("option");
  // option.text = "Kiwi";
  // x.add(option);
}

// this.myFunction = () => {
// myFunction = () => {
  function phoneLines() {
  // Get the checkbox
  var internetConnection;
  var phoneLinesInputField = document.getElementById("txtPhoneLines").value;
  // Get the output text
  // var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  // if (checkBox.checked == true){
    // internetConnection=true;
    // internetConnectionService=100;
    sub22.fire(phoneLinesInputField);
    // console.log("internetConnection=true")
    // totalArea.innerHTML = "Total price: " + internetConnectionService + "<br />";
    // totalArea.innerHTML = "Total price: " + numberOfPhoneLines*300  + "<br />";
    return phoneLinesInputField;
  // } else {
  //   internetConnection=false;
  //   internetConnectionService=0;
  //   sub.fire(internetConnectionService);
  //   console.log("internetConnection=false")
  //   // totalArea.innerHTML = "Total price: " + numberOfPhoneLines*300  + "<br />";
  //   return internetConnectionService;
  // }
}

function my3rdFunction() {
  var x = document.getElementById("txtCellPhones");
  console.log("x:", x)
  var option = document.createElement("option");
    console.log("option:", option)
  option.text = "Kiwi";
  console.log("option:", option)
  x.add(option);
}


var loginPage = document.querySelector('#loginPage');
// loginPage.style.display = "none";

var transactionPage = document.querySelector('#transactionPage');
transactionPage.style.display = "none";

function LogIn() {
  // var x = document.getElementById("loginBtn");
transactionPage.style.display = "block";
var loginPage = document.querySelector('#loginPage');
loginPage.style.display = "none";
}



var totalArea = document.getElementById("totalArea");
// totalArea.innerHTML = "Total price: " + internetConnectionService + "<br />";


// var numberOfPhoneLines = document.getElementById("txtPhoneLines").value;

// totalArea.innerHTML = "Total price: " + numberOfPhoneLines*300 + "<br />";

totalArea.innerHTML = totalArea.innerHTML = "Total price: " + obs1.state + "<br />";

// function internetConnection(x, y) {
//   return x + y
// }

// internetConnection();



// function myFunction() {
//   var checkBox = document.getElementById("chkInternetConnectionk");
//   document.getElementsByTagName("chkInternetConnectionk")[0].setAttribute("onclick", "myFunction()");
//   var text = document.getElementById("text");
//   if (checkBox.checked == true){
//     text.style.display = "block";
//   } else {
//      text.style.display = "none";
//   }
// }

// internetConnection();
//
// function internetConnection() {
//
// // document.getElementById("chkInternetConnectionk")[1].setAttribute("onclick", "myFunction()");
// // document.getElementById("chkInternetConnectionk").onclick = function() {myFunction()};
//
//
//
//
// var checkBox = document.getElementById("chkInternetConnectionk");
// var text = document.getElementById("textA");
// text.value = "Johnny Bravo22";
// // document.getElementById("textA").value = "Johnny Bravo";
//
// if (checkBox.checked == true){
//   internetConnection=true;
//   console.log("internetConnection=true")
// }
// checkbox.addEventListener("click", myFunction);
//
// function myFunction() {
//   // document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
//   console.log("internetConnection=true")
// }
// }



// function myFunction() {
//   // Get the checkbox
//   var checkBox = document.getElementById("myCheck");
//   // Get the output text
//   var text = document.getElementById("text");
//
//   // If the checkbox is checked, display the output text
//   if (checkBox.checked == true){
//     text.style.display = "block";
//   } else {
//     text.style.display = "none";
//   }
// }



// module.exports = {
//   internetConnection: internetConnection
// }
