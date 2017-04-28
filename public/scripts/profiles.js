const PROFILES_END_POINT = 'profiles';
const MEMBERS_NODE_ID = 'members';

craft.profiles = {};

craft.profiles.member = (function () {

    function render(profile) {
        let member = {};

        member.rendered = '';
        member.information = profile.personal_information;
        member.html += `
            <li class="member">
                <a>
                    <img src="${member.information.picture_url}"
                        title="${member.information.name} ${member.information.surname}"
                        alt="${member.information.name} ${member.information.surname}" />
                </a>
            </li>`;

        return member.html;
    }

    return {
        render: render,
    };

})();

craft.profiles.members = (function () {

    function render(profiles) {
        let members = {};

        for(let p = 0; p < profiles.length; p++) {
            members.html += craft.member.render(profiles[p]);
        }

        craft.dom(`#${MEMBERS_NODE_ID}`).html(members.html);
    }

    function get(config) {
        return WeDeploy.data(DATA_URL)
            .get(PROFILES_END_POINT)
            .then(function(profiles) {
                render(profiles);
        });
    }

    return {
        initialize: initialize,
    };

})();

craft.profiles.members.initialize();