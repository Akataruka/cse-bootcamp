function video_width_responsive() {
    let width = window.innerWidth;
    let video = document.getElementsByClassName("video_animation");
    if (width <= 1200 && width >= 1000) {
        let new_width = (32 - 4 * (12 - (width / 100)));
        video[0].style.top = `${new_width}vh`;
    } else if (width >= 600 && width <= 1000) {
        let new_width = (30 - 4 * (12 - (width / 100)));
        video[0].style.top = `${new_width}vh`;
    }
    else if (width >= 300 && width <= 600) {
        let new_width = (32 - 4 * (12 - (width / 100)));
        video[0].style.top = `${new_width}vh`;
    }
    else {
        video[0].style.top = `35vh`;
    }
}
setInterval(video_width_responsive,1);
