<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="thanks/thanks.css">
    <title>आपके आदेश के लिए धन्यवाद!</title>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-touch-fullscreen" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="white">
    <meta name="apple-mobile-web-app-title" content="">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-135044420-7"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-135044420-7');
</script>

</head>
<body>
<div class="wrap">
    <div class="blink"></div>
    <div class="step1 step2">
        <h1 class="step1__title">सफलता!</h1>
        <h2 class="step1__subtitle">आपके ऑर्डर को स्टोर में भेज दिया गया है।</h2>
    </div>
</div>
<!-- Facebook сф6 Pixel Code -->
<?php if (isset($_COOKIE['pixel'])): ?>
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '<?php echo $_COOKIE['pixel'] ?>');
  fbq('track', 'Lead');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=<?php echo $_COOKIE['pixel'] ?>&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
         <?php endif ?>
</body>
</html>
