class TeamMember {
    constructor(member) {
        this.member = member;

        this.member.addEventListener('click', () => this.activate());
    }

    activate() {
        teamMembers.forEach(member => member.classList.remove('active'));
        this.member.classList.add('active');
    }
}

var teamMembers = document.querySelectorAll('.member');

teamMembers.forEach(member => new TeamMember(member));
