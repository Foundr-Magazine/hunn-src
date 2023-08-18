import $ from 'jquery';

var spInterval = setInterval(function () {
  if (window.tp_getCookie && typeof window.tp_getCookie === 'function') {
    clearInterval(spInterval);
    ga_sp_init(); // where init is the entry point for your code execution
  }
}, 200);

async function ga_sp_init() {
  $(function () {  
    // ----------------------------------------
    // REMINDER: 
    // 1. ADD class "btn-sp-pricetab" to sign up button to anchor to the price tab
    // 2. ADD class "btn-sp-orderform" to button where link to an order form
    // ----------------------------------------
  
    // ----------------------------------------
    // Section 0. Init functions
    // ----------------------------------------
    
    function setGaTrackingParameters() {
      // set btn url
      if (window.userID && window.clientID) {
        $(".btn-sp-orderform").each(function() {
          $(this).attr('href', function(i, h) {
            return h + (h.indexOf('?') != -1 ? `&userID=${window.userID}&clientID=${window.clientID}` : `?userID=${window.userID}&clientID=${window.clientID}`);
          })
        });
      }
    }
    
    function createDataLayerObject(event, eventCategory, eventAction, eventLabel, userID, clientID, funnelType, funnelProductName, dataAdditions) {
      var data = {
          event: event,
          eventCategory: eventCategory,
          eventAction: eventAction,
          eventLabel: eventLabel
      }
    
      if (userID) {
        data.userID = userID
      }
    
      if (clientID) {
        data.clientID = clientID
      }
    
      if (funnelType) {
        data.funnelType = funnelType
      }
  
      if (funnelProductName) {
        data.funnelProductName = funnelProductName
      }
    
      if (dataAdditions) {
        data[dataAdditions.key] = dataAdditions.values
      } 
    
      return data;
    }
    
    function getEventCategory(scrollPercent) {
      let bodyPosition = 'body 0'
      
      switch (true) {
        case (scrollPercent <= 25):
          bodyPosition = 'body 0-25'
          break;
        case (scrollPercent > 25 && scrollPercent <= 50):
          bodyPosition = 'body 25-50'
          break;
        case (50 < scrollPercent && scrollPercent <= 75):
          bodyPosition = 'body 50-75'
          break;
        case (75 < scrollPercent):
          bodyPosition = 'body 75-100'
          break;
        default:
          bodyPosition = 'body 100'
          break;
      }
    
      return bodyPosition;
    }
    
    window.getEventCategory = getEventCategory
    window.createDataLayerObject = createDataLayerObject
  
    // ----------------------------------------
    // Section 1. Check ClientID & UserID
    // ----------------------------------------
    setGaTrackingParameters();
  
  
    // ----------------------------------------
    // Section 2. Add overall page tracking
    // ----------------------------------------
    // if (window.userID && window.clientID) {
    //   window.dataLayer = window.dataLayer || [];
    //   window.dataLayer.push({
    //       userID: window.userID,
    //       clientID:  window.clientID,
    //       pageType: pageType,
    //       funnelProductName: funnelProductName,
    //       price: price
    //   });
    // } else {
    //   window.dataLayer.push({
    //       pageType: pageType,
    //       funnelProductName: funnelProductName,
    //       price: price
    //   });
    // }
  
  
    // ----------------------------------------
    // Section 3. Set scroll percentage
    // ----------------------------------------
    window.scrollPercentRounded = 0;
  
    window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scrollTop / (docHeight - winHeight);
      window.scrollPercentRounded = Math.round(scrollPercent * 100);
    });
  
  
    // ----------------------------------------
    // Section 4. Page specific tracking
    // ----------------------------------------
    
    // ----------------------------------------------------------------
    // 4.1 a. Product Details View: field value please referring to Metadata Table
    var dataAddtionsProductDetails = {
      key: 'ecommerce',
      values: {
        detail: {
          actionField: {
            list: list
          },
          products: [{
            name: productName,
            id: productId,
            childID: childProductId,
            price: price,
            brand: brand,
            category: category,
            variant: variant,
            position: 1 // always 1
          }]
        }
      }
    }
  
    var dataLayerProductDetails = createDataLayerObject('GTMenhancedEcommerce', 'enhanced-ecommerce', 'product-detail-view', 
      funnelType, window.userID, window.clientID, funnelType, funnelProductName, dataAddtionsProductDetails)
    window.dataLayer.push(dataLayerProductDetails)
  
  
    // ----------------------------------------------------------------
    // 4.1 b.Product Impression View: field value please referring to Metadata Table
    var dataAddtionsProdImpView = {
      key: 'ecommerce',
      values: {
        currencyCode: currency,
        impressions: [
          {
            name: productName,
            id: productId,
            childID: childProductId,
            price: price,
            brand: brand,
            category: category,
            variant: variant,
            list: list,
            position: 1 // always 1
          }
        ]
      }
    }
  
    var dataLayerProdImp = createDataLayerObject('GTMenhancedEcommerce', 'enhanced-ecommerce', 'product-impressions', 
      funnelType, window.userID, window.clientID, funnelType, funnelProductName, dataAddtionsProdImpView)
    window.dataLayer.push(dataLayerProdImp)
  
    // ----------------------------------------------------------------
    // 4.1 c.Product Click View: field value please referring to Metadata Table
    var dataAddtionsProductClickOnLoad = {
      key: 'ecommerce',
      values: {
        currencyCode: currency,
        click: {
          actionField: {
            list: list
          },
          products: [{
            name: productName,
            id: productId,
            childID: childProductId,
            price: price,
            brand: brand,
            category: category,
            variant: variant,
            position: 1 // always 1
          }]
        }
      }
    }
  
    var dataLayerProductClickOnLoad = createDataLayerObject('GTMenhancedEcommerce', 'enhanced-ecommerce', 'product-click', 
      funnelType, window.userID, window.clientID, funnelType, funnelProductName, dataAddtionsProductClickOnLoad)
    window.dataLayer.push(dataLayerProductClickOnLoad)
  
  
    // sign up button click to #price-tab
    $(".btn-sp-pricetab").on("click", function() {
      var isHeader = $(this).parents('.navbar')
  
      // ----------------------------------------------------------------
      // 4.2 CTA button click
      var ctaSignUpDataLayer = createDataLayerObject('GTMevent', isHeader && isHeader.length > 0 ? 'header' : getEventCategory(window.scrollPercentRounded), 
        'CTA-button-click', `sign-up-now|${window.location.href}`)
  
      window.dataLayer.push(ctaSignUpDataLayer)
    });
  
    function addToCartTracking(scrollPercentRounded, buttonEvent, isHeader, linkUrl) {
      // ----------------------------------------------------------------
      // 4.4 CTA button click
      var ctaProductAddToCart = createDataLayerObject('GTMevent', isHeader && isHeader.length > 0 ? 'header' : getEventCategory(scrollPercentRounded), 
        buttonEvent, `sign-up-now|${linkUrl}`)
  
      window.dataLayer.push(ctaProductAddToCart)
  
      var dataAddtionsAddToCart = {
        key: 'ecommerce',
        values: {
          currencyCode: currency,
          add: {
            products: [{
              name: productName,
              id: productId,
              childID: childProductId,
              price: price,
              brand: brand,
              category: category,
              variant: variant,
              position: 1 // always 1
            }]
          }
        }
      }
    
      var dataLayerAddToCart = createDataLayerObject('GTMenhancedEcommerce', 'enhanced-ecommerce', 'add-to-cart', 
        funnelType, window.userID, window.clientID, funnelType, funnelProductName, dataAddtionsAddToCart)
      window.dataLayer.push(dataLayerAddToCart)
    }
  
    $(".btn-sp-orderform").on("click", function(e) {
      var isHeader = $(this).parents('.navbar')
  
      // ----------------------------------------------------------------
      // 4.5 Product add to cart btn
      e.preventDefault()
      addToCartTracking(window.scrollPercentRounded, 'CTA-button-click', isHeader, $(this).attr("href"))
  
      if ($(this).attr("href")) {
          window.location = $(this).attr("href")
        }
    });
  
    $(".btn-sp-enrollnow-orderform").on("click", function(e) {
      var isHeader = $(this).parents('.navbar')
      // ----------------------------------------------------------------
      // 4.6 Product add to cart link
      e.preventDefault()
      addToCartTracking(window.scrollPercentRounded, 'CTA-link-click', isHeader, $(this).attr("href"))
  
      if ($(this).attr("href")) {
          window.location = $(this).attr("href")
        }
    });
  
    let chatStatusChanged = false
    let chatOpened = false
  
    setInterval(() => {
      if(window.fcWidget && window.fcWidget.isOpen() === chatOpened) {
        chatStatusChanged = true
      } else {
        chatStatusChanged = false
      }
  
      if (!chatStatusChanged && window.fcWidget && window.fcWidget.isOpen()) {
        chatOpened = true
        var dataLayerChatOpen = createDataLayerObject('GTMevent', getEventCategory(window.scrollPercentRounded), 'live-chat', 'open')
        window.dataLayer.push(dataLayerChatOpen)
      } 
      
      if (!chatStatusChanged && window.fcWidget && !window.fcWidget.isOpen()) {
        chatOpened = false
        var dataLayerChatClose = createDataLayerObject('GTMevent', getEventCategory(window.scrollPercentRounded), 'live-chat', 'close')
        window.dataLayer.push(dataLayerChatClose)
      }
    }, 1000);
  });
}