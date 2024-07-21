//document.addEventListener('DOMContentLoaded', function() {
    /*const isUserNew = !localStorage.getItem('isUserNew');
    if (isUserNew) {
        localStorage.setItem('isUserNew', 'false');*/

//}
//});

const dt = (url,imgurl) => {
    Swal.fire({
        title: 'Welcome to Bungo-Arch',
        text: 'We are glad to have you here.',
        imageUrl: '../../assets/images/file-searching-concept-landing-page_23-2148298808.jpg',
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showCancelButton: false,
        showCloseButton: false,
        allowOutsideClick: false,
        confirmButtonText: 'Next',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                imageUrl: '../../assets/images/file-searching-concept-landing-page_23-2148298808.jpg',
                imageWidth: 300,
                imageHeight: 200,
                title: 'About Bungo-Arch',
                text: 'We are focused on giving you the best experience when it comes to file management in your organization ',
                showCancelButton: false,
                showCloseButton: false,
                allowOutsideClick: false,
                confirmButtonText: 'Next',
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Finish Setup',
                        imageUrl: '../../assets/images/file-searching-concept-landing-page_23-2148298808.jpg',
                        html: `Quickly finish setting up your Account <a id="registration-link" href="${url}">here</a>.`,
                        showCancelButton: false,
                        showCloseButton: false,
                        allowOutsideClick: false,
                        confirmButtonText: 'Finish',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = `${url}`; 
                        }
                    });
    
                    document.getElementById('registration-link').addEventListener('click', function(event) {
                        event.preventDefault();
                        window.location.href = `${url}`;
                    });
                }
            });
        }
    });
},


fv = (e,t) => {
    const intro = introJs();
intro.setOptions({
    dontShowAgain: true,
    showProgress: true,
    steps: [
        {
            element: '#navhm',
            intro: '<div>Navigation bar</div><img src=".././assets/images/file-searching-concept-landing-page_23-2148298808.jpg" alt="Navigation Bar Image">'
                        },
        {
            element: '#Sbar',
            intro: '<div>Customizable search bar</div><img src="./../assets/images/file-searching-concept-landing-page_23-2148298808.jpg" alt="Search Bar Image">'
                        },
        {
            element: '#CountryL',
            intro: '<div>Country and Language</div><img src="../../assets/images/file-searching-concept-landing-page_23-2148298808.jpg" alt="Country and Language Image">'
                        },
        {
            element: '#Ae3r',
            intro: '<div>Additional app features</div><img src="./../assets/images/file-searching-concept-landing-page_23-2148298808.jpg" alt="Additional Features Image">'
                        },
        {
            element: '#Ae3e',
            intro: '<div>In-app Notifications</div><img src=".././assets/images/file-searching-concept-landing-page_23-2148298808.jpg" alt="Notifications Image">'
                        },
        {
            element: '#Ae3et',
            intro: '<div>Profile and App settings</div><img src="./../assets/images/file-searching-concept-landing-page_23-2148298808.jpg" alt="Profile Settings Image">'
                        },
        {
            element: '#js-toggle',
            intro: '<div>Animated Input Section</div><img src="..../assets/images/file-searching-concept-landing-page_23-2148298808.jpg" alt="Animated Input Section Image">'
                        }
                    ]
}).start()
};
