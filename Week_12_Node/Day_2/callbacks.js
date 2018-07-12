var fs = require("fs");

function hello() {
    console.log("hello");
}

function func1(string, func){
    console.log(string);
    func()
};

function func2(boolean, func) {
    if (boolean) {
        func();
    }
    else {
        console.log("YOUR BOOLEAN IS FALSE FOOL!")
    }
};

function func3(f, v) {
    return function re() {
        return f(v);
    }
};


func1("Yes master", hello);
func2(false, hello);
func2(true, hello);

fs.writeFile("log.txt", "Log message!", function(err) {

    if (err) {
      console.log(err);
    }
  
    console.log("File saved!");
  
  });
  
 
  var writeFileCallback = function(err) {
  
    if (err) {
      console.log(err);
    }
  
    console.log("File saved!");
  
  };
  
  fs.writeFile("log.txt", "Log message!", writeFileCallback);
