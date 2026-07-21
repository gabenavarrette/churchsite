async function loadLatestSermon(){

    const response =
        await fetch("assets/data/latest-sermon.json");

    const sermon =
        await response.json();

    const container =
        document.getElementById("latest-sermon-card");

    container.innerHTML = `

        <div class="sermon-card">

            <img
                src="https://img.youtube.com/vi/${sermon.youtubeId}/maxresdefault.jpg"
                alt="${sermon.title}">

            <div class="sermon-content">

                <p class="series">${sermon.series}</p>

                <h3>${sermon.title}</h3>

                <p>${sermon.passage}</p>

                <a
                    class="button primary"
                    target="_blank"
                    href="https://youtu.be/${sermon.youtubeId}">

                    Watch Now

                </a>

            </div>

        </div>

    `;

}

loadLatestSermon();
