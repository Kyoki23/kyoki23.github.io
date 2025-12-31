onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.addEventListener('DOMContentLoaded', function () {
    const flowerDiv = document.querySelector('.flower__leafs--7');
  
    if (flowerDiv) {
      flowerDiv.addEventListener('mouseover', function () {
        const tooltip = document.createElement('div');
        tooltip.textContent = 'Siempre te amaré, mi querida Lily <3';
        tooltip.style.position = 'absolute';
        tooltip.style.color = '#7e7e7e';
        tooltip.style.padding = '5px';
        tooltip.style.borderRadius = '3px';
        tooltip.style.fontSize = '14px';
        tooltip.style.zIndex = '1000';
  
        const rect = flowerDiv.getBoundingClientRect();
        tooltip.style.left = rect.left + 'px';
        tooltip.style.top = rect.bottom + 'px';
  
        document.body.appendChild(tooltip);
  
        flowerDiv.addEventListener('mouseout', function () {
          tooltip.remove();
        });
      });
      flowerDiv.addEventListener('click', function () {
        window.location.href = "/index.html";
      });
    }
  });
  