var collapseTriggers = document.getElementsByClassName("collapse-header")
var makeBookingButtong = document.getElementById("make-booking-button")

for (var i = collapseTriggers.length - 1; i >= 0; i--) {
  collapseTriggers[i].addEventListener("click", toggleCollapse) 
};

makeBookingButtong.addEventListener("click", expandContactSection)

function toggleCollapse(e) {
  var icon = this.children[1]
  var collapsableSection = this.parentElement.children[1]
  if (icon.className.match('plus')) {
    icon.className = icon.className.replace('plus', 'minus')
    Velocity(collapsableSection, { height: '100%' }, { duration: 600, easing: "swing"})
  } else {
    icon.className = icon.className.replace('minus', 'plus')
    Velocity(collapsableSection, { height: 0 }, { duration: 400, easing: "swing"})
  }
}

function expandContactSection() {
  var icon = document.getElementById("contact").children[0].children[1]
  var collapsableSection = document.getElementById("contact").children[1]
  icon.className = icon.className.replace('plus', 'minus')
  collapsableSection.className = collapsableSection.className.replace('collapsed', 'expanded')
}