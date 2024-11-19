$(function() {
  $('.inner_content').slideUp();
  $('.title_tab.active').next().slideDown();
  $('.title_tab').click(function(j) {   
      if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.title_tab').removeClass('active');
      $(this).next().slideUp();
      }
      else {
      $('.title_tab').removeClass('active');
      $('.inner_content').slideUp();
      $(this).addClass('active');
      $(this).next().slideDown();
      }     
  });
});

var $titleTab = $('.tab_header_link');
$('.Accordion_item:eq(0)').find('.tab_header_link').addClass('active').next().stop().slideDown(300);
$titleTab.on('click', function(e) {
e.preventDefault();
  if ( $(this).hasClass('active') ) {
    $(this).removeClass('active');
    $(this).next().stop().slideUp(500);
    $(this).next().find('p').removeClass('show');
  } else {
    $(this).addClass('active');
    $(this).next().stop().slideDown(500);
    $(this).parent().siblings().children('.tab_header_link').removeClass('active');
    $(this).parent().siblings().children('.inner_content').slideUp(500);
    $(this).parent().siblings().children('.inner_content').find('p').removeClass('show');
    $(this).next().find('p').addClass('show');
  }
});

// add Class 
function addActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.add(db);
}

// remove Class 
function removeActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.remove(db);
}

// toggle Class 
function toggleActive(Id, db) {
  document.getElementById(Id).classList.toggle(db);
}

// Tab js with tailwind css
let tabsContainer = document.querySelector("#tabs");
let tabTogglers = tabsContainer.querySelectorAll("#tabs a");
tabTogglers.forEach(function(toggler) {
  console.log(toggler);
  toggler.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    let tabName = this.getAttribute("href");

    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {
      
      tabTogglers[i].parentElement.classList.remove('active-menu-link');  tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");
      
    }
    e.target.parentElement.classList.add('active-menu-link');
  });
});

let resTabsContainer = document.querySelector("#resTabs");
let resTabTogglers = resTabsContainer.querySelectorAll("#resTabs a");
resTabTogglers.forEach(function(toggler) {
  console.log(toggler);
  toggler.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    let tabName = this.getAttribute("href");

    let tabContents = document.querySelector("#res-tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {
      
      resTabTogglers[i].parentElement.classList.remove('active-menu-link');  tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");
      
    }
    e.target.parentElement.classList.add('active-menu-link');
  });
});