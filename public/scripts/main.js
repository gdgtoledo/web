function getProfiles() {
    return WeDeploy.data('data.b612.wedeploy.me')
        .get('profiles')
        .then(function(profiles) {
            plotProfiles(profiles);

		    return this;
		});
}

function plotProfiles(profiles) {
    var list = document.getElementById('members');

    var elements = '';

    for(var i = 0; i < profiles.length; i++) {
        elements += plotProfile(profiles[i]);
    }

    list.innerHTML = elements;
}

function plotProfile(profile) {
    var memberElement = '';

    memberElement += `<li class="member">
    <a>
        <img src="${member.picture_url}" alt="${member.common_name}" />
    </a>
</li>`;

    return memberElement;
}