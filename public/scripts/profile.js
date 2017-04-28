const PROFILES_END_POINT = 'profiles/';

craft.profile = (function () {

    const ME_NODE_ID = 'me';
    const MEMBER_NODE_ID = 'member';

    function renderMe(member) {
        const template = `
            <figure class="me_figure">
                <img class="me_pic" src="images/me.png" alt=${member.name + member.surname}/>
                <figcaption class="me_figcaption">${member.name  + member.surname}
                    <span class="me_job">${member.description}</span>
                </figcaption>
            </figure>`;

        craft.dom(`#${ME_NODE_ID}`).render(template);
    }

    function renderMember(member) {
        return  `
          <li class="contact_social">
            <a href=${member.social_networks.profile}>
              <img src="images/social_${member.social_networks.network}.svg" alt=${member.social_networks.network} />
            </a>
          </li>`;
    }

    function renderMembers(members) {
        let renderedMembers = '';
        let template = '';

        for (let member; member <= members.length; member++) {
            renderedMembers += renderMember(members[member]);
        }

        template = `
            <ul class="contact_socials">
                ${renderedMembers}
            </ul>`;

        craft.dom(`#${MEMBER_NODE_ID}`).render(template);
    }

    function render(profile) {
        renderMe();
        renderMember();
    }

    function initialize(profileId) {
        return WeDeploy.data(DATA_URL)
            .get(PROFILES_END_POINT + profileId)
            .then(function(profile) {
                render(profile);
            });
    }

    return {
        initialize: initialize,
    };

})();

craft.profile.initialize('javierland');