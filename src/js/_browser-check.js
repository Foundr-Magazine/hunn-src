import $ from "jquery";


$( function(){

  let userAgentString = 
                navigator.userAgent;
    // Detect Chrome
    let chromeAgent = 
    userAgentString.indexOf("Chrome") > -1;

    // Detect Safari
    let safariAgent = 
    userAgentString.indexOf("Safari") > -1;
      
// Discard Safari since it also matches Chrome
if ((chromeAgent) && (safariAgent)) 
    safariAgent = false;

   if ( safariAgent ) {
    $('body').addClass('browser-safari')
   }
})