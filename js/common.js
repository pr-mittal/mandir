var shiftWindow = function() { scrollBy(0, -76) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
window.addEventListener('load', function() {
    if(!navigator.share) {
//      document.querySelector('.share-container').innerHTML = 'Web Share API not supported in this browser';
      return;
    }

document.getElementById('btn-share').addEventListener('click', function() {
      navigator.share({
        title: 'Share link',
        text: 'shri shivling triveni mandir',
        url: 'https://shrishivlingtrivenimandir.life/',
      });
    });
  });