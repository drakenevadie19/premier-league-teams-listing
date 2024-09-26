const header1 = document.querySelector('#header-div');

const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

// const headerLogo = document.createElement('img');
// headerLogo.src = '/logo.png';

// const headerTitle = document.createElement('h1');
// headerTitle.textContent = 'Premier League Teams';

// headerLeft.appendChild(headerLogo);
// headerLeft.appendChild(headerTitle);

const headerRight = document.createElement('div');
headerRight.className = 'header-right';

const headerButton = document.createElement('button');

const pathNow = window.location.pathname;

// If on the root ("/"), call renderGifts
if (pathNow === '/' || pathNow === '/index.html') {
  header1.style.background = 'url("/landpage_background.gif")';

  header1.style.backgroundRepeat = "no-repeat";
  header1.style.backgroundSize = "100% 100%";

  headerButton.textContent = 'Explore more!';
  headerButton.className = 'explore-more-button'
      
  headerButton.addEventListener('click', function handleClick(event) {
    // window.location = '/';
    window.location = '#team-lists';
    document.getElementById("team-lists").scrollIntoView({
      behavior: "smooth"
    });
  });
} else {
  header1.style.background = 'url("/premier-league-header.jpeg")';

  header1.style.backgroundRepeat = "no-repeat";
  header1.style.backgroundSize = "100% 100%";

  headerButton.textContent = 'Back To List';
  headerButton.className = 'explore-more-button'
      
  headerButton.addEventListener('click', function handleClick(event) {
    window.location = '/';
  });
}


headerRight.appendChild(headerButton);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

header1.appendChild(headerContainer);