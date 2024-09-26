const renderGifts = async () => {
    const response = await fetch('/teams');
    const data = await response.json();
    // console.log("In rendering:");
    // console.log(data);

    const mainContent = document.getElementById('team-lists');

    if (data) {
        data.map((team) => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')      
            
            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${team.logo})`
            topContainer.style.backgroundSize = "100% 100%"

            const teamName = document.createElement('h3')
            teamName.textContent = team.team_name
            bottomContainer.appendChild(teamName)

            const teamCity = document.createElement('p')
            teamCity.textContent = team.city
            bottomContainer.appendChild(teamCity)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/teams/${team.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)

        });
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Gifts Available 😞'
        mainContent.appendChild(message)
    }
}

// renderGifts();
// const requestedUrl = window.location.href.split('/').pop();
// console.log("requestURL: " + requestedUrl);
// if (requestedUrl) {
//     window.location.href = '../404.html'
// } else {
//     renderGifts();
// }

const renderGift = async () => {
    const requestedID = parseInt(window.location.pathname.split('/').pop());
    const response = await fetch("/teams");
    const data = await response.json();
    // console.log("In Script/Teams");
    // console.log(data);

    const mainContent = document.getElementById('team-lists');
    mainContent.innerHTML = ''; // Clear content before appending new elements

    if (isNaN(requestedID)) {
        const message = document.createElement('h2');
        message.textContent = 'Error ID Number 😞';
        mainContent.appendChild(message);
    } else {
        const team = data.find(team => team.id === requestedID);
        console.log("fined team:");
        console.log(team);

        if (team) {
            const imageTag = document.getElementById('imageTag');
            if (imageTag) {
                imageTag.src = team.logo;  // Set the image src
                console.log("Image source set to:", imageTag.src);
            } else {
                console.error("Image element with id 'imageTag' not found.");
            }
            console.log(document.getElementById('imageTag'));
            // document.getElementById('name').textContent = team.name;
            // document.getElementById('submittedBy').textContent = 'Submitted by: ' + team.submittedBy;
            // document.getElementById('pricePoint').textContent = 'Price: ' + team.pricePoint;
            // document.getElementById('audience').textContent = 'Great For: ' + team.audience;
            // document.getElementById('description').textContent = team.description;
            // document.title = `UnEarthed - ${team.name}`;
        } else {
            const message = document.createElement('h2');
            message.textContent = 'Error 😞';
            mainContent.appendChild(message);
        }
    }
};

// Determine if we should call renderGifts or renderGift based on the current URL
const currentPath = window.location.pathname;

// If on the root ("/"), call renderGifts
if (currentPath === '/' || currentPath === '/index.html') {
    renderGifts();
} 
// If on a specific team page ("/teams/:teamId"), call renderGift
else if (currentPath.startsWith('/teams/') && !isNaN(parseInt(currentPath.split('/').pop()))) {
    renderGift();
} 
// Redirect to 404 if the URL doesn't match the expected patterns
else {
    window.location.href = '/404.html';
}

