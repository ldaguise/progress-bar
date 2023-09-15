const progressBar = document.getElementById('progressBar');
const label = document.getElementById('label');
let barValue = parseInt(progressBar.style.width.slice(0, -1))

window.setInterval(function() {
  fetch('./data.json', {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  })
  .then((response) => response.json())
  .then((json) => {
      barValue = 0;
      for (const [key, value] of Object.entries(json)) {
        if (value === true) {
          barValue += 25;
          label.innerHTML = key;
        }
      }

      console.log(barValue);
      progressBar.style.width = `${barValue}%`;

      if (barValue === 100) {
        progressBar.classList.remove('progress-bar-striped');
        progressBar.classList.remove('bg-info');
        progressBar.classList.add('bg-success');
        progressBar.classList.remove('bg-info');
      } else {
        progressBar.classList.add('progress-bar-striped');
        progressBar.classList.add('bg-info');
        progressBar.classList.remove('bg-success');
        progressBar.classList.add('bg-info');
      }
    }
  );
  }, 500);
