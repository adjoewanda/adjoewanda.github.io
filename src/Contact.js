<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Contact Anthony Djoewanda</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Open+Sans|Titillium+Web&display=swap" rel="stylesheet"> 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="assets/styles/style.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
</head>

<body>
  <nav id="menuMain" class="main-menu">
    <div id="menuTop" class="menu-top">
      <div id="menuBtn"><i class="material-icons" aria-hidden="true">menu</i> Menu</div>
      <ul>
        <li><a href="index.html" title="Home">Home</a></li>
        <li><a href="about.html" title="About">About</a></li>
        <li><a href="contact.html" title="Contact">Contact</a></li>
        <li>
          <ul>
            <li><a href="https://twitter.com/tonychuaco/" target="_blank"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/in/tonychuaco" title="LinkedIn" target="_blank"><i class="fa fa-linkedin-square"></i></a></li>
            <li><a href="https://github.com/tonychuaco" title="GitHub" target="_blank"><i class="fa fa-github"></i></a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>

<div class="container-fluid" style="background-image: url(assets/images/background-3.jpg); background-size: cover; background-position: top center;">
<header class="header-section" style="">
    <div>
      <div>
        <h1>Contact Now</h1>
      </div>
      <p>Connect @tonychuaco</p>
      <ul>
        <li><a href="https://twitter.com/tonychuaco/" target="_blank"><i class="fa fa-twitter"></i></a></li>
        <li><a href="https://www.linkedin.com/in/tonychuaco" title="LinkedIn" target="_blank"><i class="fa fa-linkedin-square"></i></a></li>
        <li><a href="https://github.com/tonychuaco" title="GitHub" target="_blank"><i class="fa fa-github"></i></a></li>
      </ul>
    </div>  
</header>
</div>

<div class="grid-container container">
  <main class="main-content">
    <form>
      <fieldset class="form-contact">
        <div class="form-group">
          <label for="firstName">First Name: </label><input id="firstName" class="form-control" type="text">
        </div>
        <div class="form-group">
          <label for="lastName">Last Name: </label><input id="lastName" class="form-control" type="text">
        </div>
        <div class="form-group" id="ccInput">  
          <label>Phone Number:* </label><input type="text" id="phone" class="form-control" maxlength="15" onBlur="validate()">
        </div>
        <div class="form-group">  
          <label>Email: </label><input type="email" id="email" class="form-control">
        </div>
      </fieldset>
      <fieldset>
        <div class="form-group">
          <label>Message: </label>
          <textarea class="form-message form-control" rows="5"></textarea>
        </div>
        <div>
          <!--<a href="confirm.html">--><button type="button" id="submit" class="btn btn-dark" onClick="validate()">Submit</button><!--</a>-->
        </div>
      </fieldset>
    </form>
  </main>
  <aside class="sidebar">
    <div>
      <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="tonychuaco"><a class="LI-simple-link" href='https://www.linkedin.com/in/tonychuaco?trk=profile-badge'>Anthony Djoewanda</a></div>
    </div>
  </aside>
  <aside class="related-content" style="max-width:320px;">
    <div>
    <h3>Find My Channels</h3>
    <p>Follow my social media @tonychuaco. Connect online and start joining the conversation.</p>
    <ul class="social-icons">
      <li><a href="https://twitter.com/tonychuaco/" target="_blank"><i class="fa fa-twitter"></i></a></li>
      <li><a href="https://www.linkedin.com/in/tonychuaco/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
      <li><a href="https://github.com/tonychuaco" target="_blank"><i class="fa fa-github"></i></a></li>
    </ul>
    </div>
  </aside>
</div><!--container-->
<div class="container-fluid footer-container">
<footer>
  <small>Made in 2019. By Anthony Djoewanda</small>
</footer>
</div>

<script src="script.js"></script>
<!--<script src="assets/scripts/check.js"></script>-->
<script>
function validate() {
	var qq = document.getElementById("phone").value;
	validateCreditCard(qq);
}	

function validateCreditCard(v) {
  var x = v.replace(/[^\d]/g, '');
  var z = {}, y = [
          "It must be 10 digits and all numbers.",
          "All digits cannot be the same number."
        ];
  var validCondition =
      (x.length === 10) &&
      (!(x.match(/[^0-9]/g))) &&
      (x != x[0].repeat(10));

  z.valid = (validCondition) ? true : false, z.number = v;
  if (z.valid == false) {
    $("#phone").addClass("border border-danger").focus(function() {$("#phone").removeClass("border border-danger"); $("#warning").remove()});
    if (x.length !== 10 || x.match(/[^0-9]/g)) {
      z.error = y[0];
    } else if (x == x[0].repeat(10)) {
      z.error = y[1];
    }
    $("#ccInput").append("<small id='warning' style='color: red;'>" + z.error + "</small>");
  } else {
    location.replace("confirm.html");
  }
}
	
</script>

</body>
</html>