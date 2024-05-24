function skillsMember() {
    let member = document.querySelector('.member');
    let memberTop = member.getBoundingClientRect().top;
    let memberHeight = member.clientHeight;
    let memberBottom = memberTop + memberHeight;

    let skills = document.querySelector('.skills');
    let skillsTop = skills.getBoundingClientRect().top;
    let skillsHeight = skills.clientHeight;
    let skillsBottom = skillsTop + skillsHeight;

    let percent = 0;
    if (skillsTop < memberTop && skillsBottom > memberBottom) {
        percent = 100;
    } else if (skillsTop > memberTop && skillsTop < memberBottom) {
        percent = 100 - (skillsTop - memberTop) / (skillsHeight + memberHeight) * 100;
    } else if (skillsBottom > memberTop && skillsBottom < memberBottom) {
        percent = 100 - (memberBottom - skillsBottom) / (skillsHeight + memberHeight) * 100;
    }

    let progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach((progressBar) => {
        progressBar.style.width = percent + '%';
    });
}