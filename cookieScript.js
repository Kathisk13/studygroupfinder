function setCookie(cname, cvalue, exhours){
	var d = new Date();
	d.setTime(d.getTime() + (exhours*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=./"+";SameSite=Lax";
}

function getCookie(cname){
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const COOKIE_EXPIRE_HOURS = 1;

// export const COOKIE_EXPIRE_HOURS = 1;

// export {setCookie, getCookie, COOKIE_EXPIRE_HOURS};