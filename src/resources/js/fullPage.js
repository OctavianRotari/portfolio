$(document).ready(function(){
  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors:['home', 'who-am-i', 'projects', 'contacts'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide' ],
    showActiveTooltip: false,
    slidesNavigation: true,
    slidesNavPosition: 'top',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: false,
    verticalCentered: false,
    sectionsColor : ['#161525', '#161525'],
    paddingTop: '0',
    paddingBottom: '0',
    fixedElements: null,
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,

    //Custom selectors
    sectionSelector: 'section',
    slideSelector: '.slide',

    lazyLoading: true,

    //events
    onLeave: function(index, nextIndex, direction){
      if(nextIndex===2){
        $('.icons-who-am-i').animateCss('animated flipInX')
      }
    },
    afterLoad: function(anchorLink, index){
    },
    afterRender: function(){},
    afterResize: function(){},
    afterResponsive: function(isResponsive){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
    },
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
      if(index===2){
        if(nextSlideIndex===2){
          $('.icons-cocktail img').animateCss('animated flip')
        }
        if(nextSlideIndex===3){
          $('.traveler .flag-icon').animateCss('animated rotateIn');
        }
        if(nextSlideIndex===4){
          $('.general-facts .languages img').animateCss('animated tada');
          setTimeout(function(){
            $('.general-facts .frameworks img').animateCss('animated tada');
          }, 2000)
          setTimeout(function(){
            $('.general-facts .certificates img').animateCss('animated bounce');
          }, 4000)
        }
      }
      if(index===3){
        if(nextSlideIndex){
          $('.project-facts .icons-coffee').animateCss('animated hinge')
        }
      }
    }
  });
});
