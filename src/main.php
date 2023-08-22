<!DOCTYPE html>
<html lang="en">

<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>How Chris's Revenue Soared 8X Year on Year (2022 vs. 2023 from Jan to Jun) and Almost Doubled 2022's Total in 2023 | Foundr.com</title>
        <meta name="googlebot" content="noindex" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="" />
        <meta property="og:title" content="How Chris's Revenue Soared 8X Year on Year (2022 vs. 2023 from Jan to Jun) and Almost Doubled 2022's Total in 2023 | Foundr.com" />
        <meta property="og:image" content="">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="675">
        <% for(var i=0; i < htmlWebpackPlugin.files.css.length; i++) {%>
                <link href="<%= htmlWebpackPlugin.files.css[i] %>?v=<%= htmlWebpackPlugin.options.CustomData.version %>"
                        rel="stylesheet">
                <% } %>

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css" />

                <!-- GTM Datalayer -->
                        <script>
                                dataLayer = [];
                        </script>
                <!-- End GTM Datalayer -->

                <!-- Google Tag Manager -->
                <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WQ9PMNK');</script>
                <!-- End Google Tag Manager -->

                <script async src="https://www.googleoptimize.com/optimize.js?id=OPT-MBTNQ8Q"></script>

                <script>

function getQueryParams(qs) {
qs = qs.split('+').join(' ');

var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
}

return params;
        }



async function postToZapier(bookingData){


let url = "https://hooks.zapier.com/hooks/catch/13555341/bxtycd8/";


(async () => {
const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
        },
        body: JSON.stringify({CID: params.cid,SFID: params.sfid,BTID: params.btid, data: bookingData})
});
const content = await rawResponse.json();


})();


} 


function SOAfterConfirmationFunction(data) {

postToZapier(data);


}

let params = getQueryParams(document.location.search);


</script>
</head>

<body>

        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WQ9PMNK" height="0" width="0"
                        style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        
        ${require('./chunks/_main.html')}


        <% for(var i=0; i < htmlWebpackPlugin.files.js.length; i++) {%>
                <script type="text/javascript"
                        src="<%= htmlWebpackPlugin.files.js[i] %>?v=<%= htmlWebpackPlugin.options.CustomData.version %>"></script>
                <% } %>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://player.vimeo.com/api/player.js"></script>

       

</body>


</html>