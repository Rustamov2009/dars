  function kattason(a, b) {
     if (a > b) {
        alert(a + ` katta ` + b + ` dan`)
     } else if (b > a){
      alert(b + " katta " + a + " dan")
     } else{
        alert("bu sonlar teng")
     }
  }


  let son1 = prompt("Son kiriting")
  let son2 = prompt("Son kiriting")

  kattason(son1, son2)