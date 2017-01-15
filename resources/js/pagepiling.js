$(document).ready(function() {
  $('#pagepiling').pagepiling({
    menu: null,
    direction: 'horizontal',
    verticalCentered: true,
    sectionsColor: [],
    anchors: ['accountant', 'bartender', 'traveler', 'developer'],
    scrollingSpeed: 700,
    easing: 'swing',
    loopBottom: true,
    loopTop: true,
    css3: true,
    navigation: {
      'textColor': '#000',
      'bulletsColor': '#000',
      'position': 'right',
      'tooltips': ['An accountant', 'A bartender', 'A traveler', 'A developer']
    },
    afterLoad: function(anchorLink, index){},
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: '.horizontal',
    animateAnchor: false,
    //events
    onLeave: function(index, nextIndex, direction){},
    afterRender: function(){},
  });

});
