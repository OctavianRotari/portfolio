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
    verticalCentered: true,
    sectionsColor : ['#161525', '#161525'],
    paddingTop: '0',
    paddingBottom: '0',
    fixedElements: null,
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    //events
    onLeave: function(index, nextIndex, direction){
      if(nextIndex===2){
        $('.icons-who-am-i').addClass('animated fadeIn');
      }
    },
    afterLoad: function(anchorLink, index){
      if(index!==3){
        $('.navigation-arrow').removeClass('hidden');
      }
      if(index===3){
        $('.navigation-arrow').addClass('hidden');
      }
    },
    afterRender: function(){},
    afterResize: function(){},
    afterResponsive: function(isResponsive){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
    },
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
    }
  });
});
