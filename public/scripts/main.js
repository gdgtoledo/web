/*function getProfiles() {
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
    var profileId = personalInformation.profile_id;

    profileElement += `<li class="member">
    <a>
        <img src="${personalInformation.picture_url}" title="${profileId}" alt="${profileId}" />
    </a>
</li>`;

    return profileElement;
}*/


var craft = craft || {};

craft.member = (function () {

    function render(profile) {
        var member = member || {};

        member.rendered = '';
        member.information = profile.personal_information;

        member.rendered += `
            <li class="member">
                <a>
                    <img src="${member.information.picture_url}" 
                        title="${member.name} ${member.surname}" 
                        alt="${member.name} ${member.surname}" />
                </a>
            </li>`;

        return member.rendered;

    }

    return {
        render: render,
    }

})();

craft.members = (function () {

    function render(profiles) {
        var members = members || {};
        
        members.rendered = '',
        members.node = document.getElementById('members');
        
        for(var p = 0; p < profiles.length; p++) {
            members.rendered += craft.member.render(profiles[p]);
        }

        members.node.innerHTML = members.rendered;

    }

    function get() {
        return WeDeploy.data('data.b612.wedeploy.me')
            .get('profiles')
            .then(function(profiles) {
                craft.members.render(profiles);
        });
    }

    return {
        get: get,
        render: render
    }

})();

craft.members.get();