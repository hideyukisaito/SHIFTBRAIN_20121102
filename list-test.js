var page = require('webpage').create();

page.onConsoleMessage = function (msg) {
  console.log(msg);
};

page.open('http://localhost/~otiashee/test-test.html', function (status) {
  
  if ('success' == status) {
  	page.includeJs('http://code.jquery.com/jquery-1.8.0.min.js', function () {
  	  page.evaluate(function () {
  	  	var li = $('li');
  	  	console.log('number of list :', li.length);

  	  });
  	});
  }
  phantom.exit();
});