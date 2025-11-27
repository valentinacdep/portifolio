async function loadRepos() {
    const reposContainer = document.getElementById("repos");

    const projetos = [
        {
            name: "VOVOTINA",
            description: "O Vovotina é meu TCC: um aplicativo pensado para ajudar idosos no dia a dia, oferecendo recursos simples, acessíveis e feitos para tornar a rotina deles mais segura e prática.",
            url: "https://github.com/valentinacdep/vovotina-pp",
            langs: ["html", "css", "javascript"]
        },
        {
            name: "Chat best",
            description: "O ChatBest é uma aplicação focada em oferecer um sistema de chat simples, rápido e intuitivo, criado para facilitar a comunicação entre usuários de forma prática e organizada.",
            url: "https://github.com/valentinacdep/chat-best",
            langs: ["html", "css", "javascript"]
        },
        {
            name: "tinamidia",
            description: "O Tinamidia é uma plataforma desenvolvida para facilitar a comunicação e o compartilhamento de conteúdo, reunindo tudo em um ambiente simples, rápido e acessível.",
            url: "https://github.com/valentinacdep/tinamidia",
            langs: ["javascript"]
        }

    ];

    const iconMap = {
        html: `<i class="devicon-html5-plain colored"></i>`,
        css: `<i class="devicon-css3-plain colored"></i>`,
        javascript: `<i class="devicon-javascript-plain colored"></i>`,
        node: `<i class="devicon-nodejs-plain colored"></i>`,
        express: `<i class="devicon-express-original"></i>`
    };

    projetos.forEach(proj => {
        const card = document.createElement("div");
        card.classList.add("card");

        const icons = proj.langs
            .map(lang => iconMap[lang] || "")
            .join(" ");

        card.innerHTML = `
            <h2>${proj.name}</h2>
            <p>${proj.description}</p>

            <div class="card-footer">
                <div class="langs">
                    ${icons}
                </div>

                <a href="${proj.url}" target="_blank">Ver projeto</a>
            </div>
        `;

        reposContainer.appendChild(card);
    });
}

loadRepos();
