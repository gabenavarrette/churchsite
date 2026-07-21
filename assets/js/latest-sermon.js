async function loadSiteData() {

    const response = await fetch("assets/data/site.json");

    const data = await response.json();

    document.getElementById("church-name").textContent =
        data.church.name;

    document.getElementById("church-tagline").textContent =
        data.church.tagline;

    const container =
        document.getElementById("service-times");

    data.serviceTimes.forEach(service => {

        const card = document.createElement("div");

        card.className = "info-card";

        card.innerHTML = `
            <span class="label">${service.title}</span>
            <strong>${service.time}</strong>
        `;

        container.appendChild(card);

    });

}

loadSiteData();
