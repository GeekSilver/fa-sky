

const toggleSocialBtns = function () {
    // blur lead text
    const leadH1 = document.querySelector('#lead-h1');
    const leadText = document.querySelector('#lead-text');
    leadH1.classList.toggle('blurLeadText');
    leadText.classList.toggle('blurLeadText');
    // hide & show social icons
    const toggler = document.querySelectorAll('#hiddenOnMobile');
    for (let index = 0; index < toggler.length; index++) {
        const element = toggler[index];
        element.classList.toggle('hideSpan'); 
    }
    
}