var getUserData = function(cb) {
	var userInfo = prompt("Hey, whats ya name: ");
  cb(userInfo)
}

getUserData(function(data) {
	console.log(data)
})