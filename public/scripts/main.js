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
    var profileElement = '';

    var personalInformation = profile.personal_information;

    profileElement += `<li class="member">
    <a>
        <img src="${personalInformation.picture_url}" title="${personalInformation.profile_id}" alt="${personalInformation.profile_id}" />
    </a>
</li>`;

    return profileElement;
}