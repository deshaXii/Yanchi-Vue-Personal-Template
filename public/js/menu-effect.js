
    function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}
    var ease={exponentialIn:function exponentialIn(a){return 0==a?a:Math.pow(2,10*(a-1))},exponentialOut:function exponentialOut(a){return 1==a?a:1-Math.pow(2,-10*a)},
    exponentialInOut:function exponentialInOut(a){return 0==a||1==a?a:0.5>a?+0.5*Math.pow(2,20*a-10):-0.5*Math.pow(2,10-20*a)+1},sineOut:function sineOut(a)
    {return Math.sin(a*1.5707963267948966)},
    circularInOut:function circularInOut(a){return 0.5>a?0.5*(1-Math.sqrt(1-4*a*a)):0.5*(Math.sqrt((3-2*a)*(2*a-1))+1)},
    cubicIn:function cubicIn(a){return a*a*a},cubicOut:function cubicOut(a){var b=a-1;return b*b*b+1},
    cubicInOut:function cubicInOut(a){return 0.5>a?4*a*a*a:0.5*Math.pow(2*a-2,3)+1},quadraticOut:function quadraticOut(a){return-a*(a-2)},quarticOut:function quarticOut(a
        ){return Math.pow(a-1,3)*(1-a)+1}},ShapeOverlays=function(){function a(b){_classCallCheck(this,a),this.elm=b,this.path=b.querySelectorAll('path'),this.numPoints=4,
        this.duration=800,this.delayPointsArray=[],this.delayPointsMax=180,this.delayPerPath=70,this.timeStart=Date.now(),this.isOpened=!1,this.isAnimating=!1}
        return a.prototype.toggle=function toggle(){this.isAnimating=!0;for(var d,c=2*(Math.random()*Math.PI),b=0;b<this.numPoints;b++)d=2*(b/(this.numPoints-1)*Math.PI),
            this.delayPointsArray[b]=(Math.sin(d+c)+1)/2*this.delayPointsMax;!1===this.isOpened?this.open():this.close()},a.prototype.open=function open(){this.isOpened=!0,
                this.elm.classList.add('is-opened'),this.timeStart=Date.now(),this.renderLoop()},a.prototype.close=function close(){this.isOpened=!1,this.elm.classList.remove('is-opened'),this.timeStart=Date.now(),this.renderLoop()},a.prototype.updatePath=function updatePath(b){for(var d=[],c=0;c<this.numPoints;c++)d[c]=100*ease.cubicInOut(Math.min(Math.max(b-this.delayPointsArray[c],0)/this.duration,1));var e='';e+=this.isOpened?'M 0 0 V '+d[0]+' ':'M 0 '+d[0]+' ';for(var c=0;c<this.numPoints-1;c++){var g=100*((c+1)/(this.numPoints-1)),h=g-100*(1/(this.numPoints-1))/2;e+='C '+h+' '+d[c]+' '+h+' '+d[c+1]+' '+g+' '+d[c+1]+' '}return e+=this.isOpened?'V 0 H 0':'V 100 H 0',e},a.prototype.render=function render(){if(this.isOpened)for(var b=0;b<this.path.length;b++)this.path[b].setAttribute('d',this.updatePath(Date.now()-(this.timeStart+this.delayPerPath*b)));else for(var b=0;b<this.path.length;b++)this.path[b].setAttribute('d',this.updatePath(Date.now()-(this.timeStart+this.delayPerPath*(this.path.length-b-1))))},a.prototype.renderLoop=function renderLoop(){var b=this;this.render(),Date.now()-this.timeStart<this.duration+this.delayPerPath*(this.path.length-1)+this.delayPointsMax?requestAnimationFrame(function(){b.renderLoop()}):this.isAnimating=!1},a}();

(function() {
  var elmHamburger = document.querySelector('.hamburger');
  var gNavItems = document.querySelectorAll('.global-menu__item');
  var elmOverlay = document.querySelector('.shape-overlays');
  var overlay = new ShapeOverlays(elmOverlay);
  var links = document.querySelectorAll(".global-menu__wrap a");

  elmHamburger.addEventListener('click', () => {
    if (overlay.isAnimating) {
      return false;
    }
    overlay.toggle();
    if (overlay.isOpened === true) {
      elmHamburger.classList.add('is-opened-navi');
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.add('is-opened');
      }
    } else {
      elmHamburger.classList.remove('is-opened-navi');
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.remove('is-opened');
      }
    }
  });
  
  function onClickLink() {
    elmHamburger.classList.remove('is-opened-navi');
    overlay.toggle();
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.remove('is-opened');
      }
   
      
      
  }
  
  for (var i = 0, max = links.length; i < max; i++) {
    links[i].addEventListener("click", onClickLink, false);
  }
}());