const hamburgerBtn = document.getElementById('hamburgerBtn');
const navList = document.querySelector('#navigation ul');

if (hamburgerBtn && navList) {
    hamburgerBtn.addEventListener('click', () => {
        navList.classList.toggle('open');
        hamburgerBtn.classList.toggle('open');

        // Optional: Change button text/icon
        if (navList.classList.contains('open')) {
            hamburgerBtn.innerHTML = '<span>&#10005;</span> Close';
        } else {
            hamburgerBtn.innerHTML = '<span>&#9776;</span> Menu';
        }
    });
}
