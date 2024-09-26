const header1 = document.querySelector('header');

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
headerButton.textContent = 'Explore more!';
headerButton.className = 'explore-more-button'
    
headerButton.addEventListener('click', function handleClick(event) {
  // window.location = '/';
  window.location = '#team-lists';
  document.getElementById("team-lists").scrollIntoView({
    behavior: "smooth"
  });
})

headerRight.appendChild(headerButton);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

header1.appendChild(headerContainer);