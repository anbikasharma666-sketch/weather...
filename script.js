// ================= WEATHER =================

async function getWeather() {

    const city = document.getElementById("city").value.trim();
    const weatherBox = document.getElementById("weatherResult");

    if (city === "") {
        weatherBox.innerHTML = `<h2>⚠️ Please enter a city name</h2>`;
        return;
    }

    const apiKey = "4445571976bd7cc85ad29a1552796a5e";

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        if (data.cod == "404") {
            weatherBox.innerHTML = `
                <h2>❌ City not found</h2>
                <p>Please enter a valid city name.</p>
            `;
            document.getElementById("city").value = "";
            return;
        }

        weatherBox.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>🌡️ Temperature: ${data.main.temp}°C</p>
            <p>☁️ Weather: ${data.weather[0].main}</p>
            <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
        `;

        document.getElementById("city").value = "";

    } catch (error) {
        weatherBox.innerHTML = `
            <h2>❌ Something went wrong</h2>
        `;
    }
}

// ENTER KEY SEARCH
const cityInput = document.getElementById("city");
if (cityInput) {
    cityInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            getWeather();
        }
    });
}

// ================= CHAT TOGGLE =================

function toggleChat() {
    const chat = document.getElementById("chatPopup");
    if (!chat) return;

    chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

// ================= RADAR TOGGLE =================

function toggleRadar() {
    const radar = document.getElementById("radarPopup");
    if (!radar) return;

    radar.style.display = radar.style.display === "flex" ? "none" : "flex";
}

// ================= DARK / LIGHT MODE (FINAL FIX) =================

function toggleTheme() {
    document.body.classList.toggle("light-mode");

    const icon = document.querySelector(".theme-toggle i");
    if (!icon) return;

    if (document.body.classList.contains("light-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}

// ================= NEWS ANIMATION =================

const newsCards = document.querySelectorAll(".news-card, .trend-card");
newsCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {
        card.style.transition = ".6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, index * 150);
});

// ================= ABOUT ANIMATION =================

const aboutCards = document.querySelectorAll(".about-card, .team-card, .stat-card");
aboutCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {
        card.style.transition = ".6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, index * 150);
});

// ================= LOGS =================

console.log("WeatherX Pro Loaded ✅");



// subscribe

const subscribeBtn = document.querySelector(".newsletter-box button");

if(subscribeBtn){
subscribeBtn.addEventListener("click", () => {

const email = document.querySelector(".newsletter-box input");

if(email.value.trim() === ""){
alert("Please enter email");
return;
}


email.value = ""; // CLEAR INPUT

});
}

