var craft = caft || {};

var DATA_URL = 'data.b612.wedeploy.me';
var PROFILES_END_POINT = 'profiles';

var MEMBERS_NODE_ID = 'members';

craft.member = (function () {

    function render(profile) {
        var member = member || {};

        member.rendered = '';
        member.information = profile.personal_information;

        member.rendered += `
            <li class="member">
                <a>
                    <img src="${member.information.picture_url}" 
                        title="${member.information.name} ${member.information.surname}" 
                        alt="${member.information.name} ${member.information.surname}" />
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
        members.node = document.getElementById(MEMBERS_NODE_ID);
        
        for(var p = 0; p < profiles.length; p++) {
            members.rendered += craft.member.render(profiles[p]);
        }

        members.node.innerHTML = members.rendered;

    }

    function get() {
        return WeDeploy.data(DATA_URL)
            .get(PROFILES_END_POINT)
            .then(function(profiles) {
                craft.members.render(profiles);
        });
    }

    return {
        get: get,
        render: render,
    }

})();

craft.members.get();
