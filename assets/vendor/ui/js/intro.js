const intro = introJs();
intro.setOptions({
    dontShowAgain: true,
    showProgress: true,
    steps: [
        {
            element: '#navhm',
            intro: '<div>Navigation bar</div><img src="assets/Img/menu.png" alt="Navigation Bar Image">'
                        },
        {
            element: '#Sbar',
            intro: '<div>Customizable search bar</div><img src="assets/Img/search.png" alt="Search Bar Image">'
                        },
        {
            element: '#CountryL',
            intro: '<div>Country and Language</div><img src="assets/Img/languages.png" alt="Country and Language Image">'
                        },
        {
            element: '#Ae3r',
            intro: '<div>Additional app features</div><img src="assets/Img/app-development.png" alt="Additional Features Image">'
                        },
        {
            element: '#Ae3e',
            intro: '<div>In-app Notifications</div><img src="assets/Img/chat.png" alt="Notifications Image">'
                        },
        {
            element: '#Ae3et',
            intro: '<div>Profile and App settings</div><img src="assets/Img/mn.png" alt="Profile Settings Image">'
                        },
        {
            element: '#js-toggle',
            intro: '<div>Animated Input Section</div><img src="assets/Img/input.png" alt="Animated Input Section Image">'
                        }
                    ]
}).start()