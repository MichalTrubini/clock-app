<template>
  <div
    class="overlay bg-cover bg-top bg-no-repeat relative w-full h-screen overflow-hidden md:bg-center" :class="{bgDay: timeData.day, bgNight: !timeData.day}"
  >
    <main
      :style="
        'height: ' +
        heightMain +
        '; transform: translateY(' +
        translateValue +
        ')'
      "
      class="transition relative z-10 flex flex-col justify-between"
    >
      <quote
        :quoteData="quoteData"
        :loading="quoteLoading"
        @refresh-quote="fetchQuote"
      ></quote>
      <main-panel
        @toggle-showPanel="toggleShowPanel"
        @height-element="setHeight"
        :dataIP="timeData"
      ></main-panel>
    </main>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import TimePanel from "./components/TimePanel.vue";
import MainPanel from "./components/MainPanel.vue";
import axios from "axios";

export default {
  components: {
    Quote,
    TimePanel,
    MainPanel,
  },
  computed: {
    translateValue() {
      return this.togglePanel ? "-" + this.panelHeight + "px" : "0px";
    },
    heightMain() {
      return this.windowHeight + this.panelHeight + "px";
    },
    quoteData() {
      let data = {
        quote:
          "“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”",
        author: "Ada Lovelace",
      };
      if (this.quoteApi) {
        data = {
          quote: this.quoteApi.content,
          author: this.quoteApi.author,
        };
      }
      return data;
    },
    timeData() {
      let data = {
        greet: "N/A",
        hour: "N/A",
        minute: "N/A",
        dayOfWeek: "N/A",
        dayOfYear: "N/A",
        weekNumber: "N/A",
        abbreviation: "N/A",
        timezone: "N/A",
        city: "N/A",
        countryCode: "N/A",
        day: true
      };
      if (this.timeDataAPI && this.countryDataAPI) {
        const dateTime = new Date(this.timeDataAPI.datetime);
        const hour = dateTime.getHours().toString();
        const minute = dateTime.getMinutes().toString();
        const day = (Number(hour) > 17 && Number(hour) < 6) ? false : true;
        const addendum = window.innerWidth > 768 ? ", it's currently" : "";

        const greet =
          Number(hour) < 12
            ? `good morning${addendum}`
            : Number(hour) > 17
            ? `good evening${addendum}`
            : `good afternoon${addendum}`;
        data = {
          greet: greet,
          hour: hour.padStart(2, "0"),
          minute: minute.padStart(2, "0"),
          dayOfWeek: this.timeDataAPI.day_of_week,
          dayOfYear: this.timeDataAPI.day_of_year,
          weekNumber: this.timeDataAPI.week_number,
          abbreviation: this.timeDataAPI.abbreviation,
          timezone: this.timeDataAPI.timezone,
          city: this.countryDataAPI.city,
          countryCode: this.countryDataAPI.country_code2,
          day: day
        };
      }
      return data;
    },
  },

  data() {
    return {
      windowHeight: window.innerHeight,
      panelHeight: 0,
      togglePanel: false,
      quoteLoading: false,
      timeDataAPI: null,
      countryDataAPI: null,
      quoteApi: null,
    };
  },
  methods: {
    toggleShowPanel(showPanel) {
      this.togglePanel = showPanel;
    },
    handleResize() {
      this.windowHeight = window.innerHeight;
    },
    setHeight(height) {
      this.panelHeight = height;
    },
    fetchData(API_URL, data) {
      this.quoteLoading = true;
      axios
        .get(API_URL)
        .then((response) => {
          this[data] = response.data;
          this.quoteLoading = false;
        })
        .catch((error) => {
          console.error("Error fetching data from the API:", error);
        });
    },
    fetchQuote() {
      this.fetchData("https://api.quotable.io/random", "quoteApi");
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.fetchData("https://worldtimeapi.org/api/ip", "timeDataAPI");
    this.fetchData("https://api.ipgeolocation.io/ipgeo?apiKey=bc20ecd4ed724793a8f14ef0f6911037", "countryDataAPI");
    this.fetchData("https://api.quotable.io/random", "quoteApi");
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style>

@font-face {
  font-family: 'Inter';
  src: url('./assets/Inter-VariableFont_slnt,wght.ttf') format('truetype-variations');
  font-weight: 1 1000; 
  font-stretch: 1 200;
  font-display: swap;
}

html {
  font-family: "Inter", sans-serif;
  color: white;
}

.bgDay {
  background-image: url("./assets/bg-day.webp");
}

.bgNight {
  background-image: url("./assets/bg-night.webp");
}

.overlay::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.transition {
  transition: all 0.3s ease-in-out;
}
</style>
