var collapseTriggers = document.getElementsByClassName("collapse-header")
console.log(collapseTriggers);

for (var i = collapseTriggers.length - 1; i >= 0; i--) {
  collapseTriggers[i].addEventListener("click", toggleCollapse) 
};

function toggleCollapse(e) {
  var icon = this.children[1]
  var collapsableSection = this.parentElement.children[1]
  if (icon.className.match('plus')) {
    icon.className = icon.className.replace('plus', 'minus')
    collapsableSection.className = collapsableSection.className.replace('collapsed', 'expanded')
  } else {
    icon.className = icon.className.replace('minus', 'plus')
    collapsableSection.className = collapsableSection.className.replace('expanded', 'collapsed')
  }
}