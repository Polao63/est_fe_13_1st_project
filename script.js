const robot = document.getElementById("scrollRobot");
const banner = document.querySelector(".banner");

let robotVisible = false;

window.addEventListener("scroll", () => {
    const bannerTop = banner.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (bannerTop < windowHeight -100&& !robotVisible) {
        robotVisible = true;
            robot.classList.add("show");
            setTimeout(() => {
                robot.classList.remove("show");
            }, 2500);

            setTimeout(() => {
                robotVisible = false;
            }, 3000);
        }
    });

