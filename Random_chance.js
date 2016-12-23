var win = 2
var money = 25
for (var i=25; i>=0; i--)
  {
    console.log("temp " + temp)
    var temp = Math.floor(Math.random()*100)
    if (temp === win){
      console.log("I win")
      money = money + Math.floor( (Math.random() * 51 ) + 50 )
        
    }
  else if (temp !== win){
    console.log("lose")
    money = money - 1
    
  }
    console.log(money)
 }
