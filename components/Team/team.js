class TeamMember {
    constructor(member) {
        this.member = member;

        this.member.addEventListener('click', function() {
            console.log('You clicked me!');
        });
    }
}

var teamMembers = document.querySelectorAll('.member');

teamMembers.forEach(member => new TeamMember(member));
