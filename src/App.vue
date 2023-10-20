<template>
  <div
    class="overlay bg-day bg-cover bg-top bg-no-repeat relative w-full h-screen overflow-hidden md:bg-center"
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
        hour: "N/A",
        minute: "N/A",
        dayOfWeek: "N/A",
        dayOfYear: "N/A",
        weekNumber: "N/A",
        abbreviation: "N/A",
        timezone: "N/A",
        city: "N/A",
        country: "N/A",
        countryCode: "N/A",
      };
      if (this.timeDataAPI && this.countryDataAPI) {
        const dateTime = new Date(this.timeDataAPI.datetime);
        const hour = dateTime.getHours().toString();
        const minute = dateTime.getMinutes().toString();
        data = {
          hour: hour.padStart(2, "0"),
          minute: minute.padStart(2, "0"),
          dayOfWeek: this.timeDataAPI.day_of_week,
          dayOfYear: this.timeDataAPI.day_of_year,
          weekNumber: this.timeDataAPI.week_number,
          abbreviation: this.timeDataAPI.abbreviation,
          timezone: this.timeDataAPI.timezone,
          city: this.countryDataAPI.city,
          country: this.countryDataAPI.country_name,
          countryCode: this.countryDataAPI.country_code,
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
    //this.fetchData("https://worldtimeapi.org/api/ip", "timeDataAPI");
    //this.fetchData("https://api.ipbase.com/v1/json/", "countryDataAPI");
    //this.fetchData("https://api.quotable.io/random", "quoteApi");
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style>
html {
  font-family: "Inter", sans-serif;
  color: white;
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
