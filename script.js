(function(){
  var btn=document.getElementById('menuBtn'), links=document.getElementById('navLinks');
  if(btn&&links){
    btn.addEventListener('click',function(){var o=links.classList.toggle('open');btn.setAttribute('aria-expanded',o);btn.textContent=o?'Close':'Menu';});
  }
  document.addEventListener('click',function(e){
    var s=e.target.closest('[data-scroll]');
    if(s){var t=document.getElementById(s.dataset.scroll);if(t)t.scrollIntoView({behavior:'smooth'});}
    var c=e.target.closest('[data-copy]');
    if(c){
      var el=document.getElementById(c.dataset.copy), txt=el.textContent.trim();
      var done=function(m){c.textContent=m;setTimeout(function(){c.textContent='Copy';},1600);};
      var fallback=function(){var r=document.createRange();r.selectNodeContents(el);var sel=getSelection();sel.removeAllRanges();sel.addRange(r);done('Selected');};
      try{navigator.clipboard.writeText(txt).then(function(){done('Copied');},fallback);}catch(err){fallback();}
    }
  });
})();
