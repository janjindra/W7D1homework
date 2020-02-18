import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
new Vue ({
  el:"#app",
  data: {
    items: [
      { name: "Wash the dishes", priority: "Low" },
      { name:"Iron the cloths", priority: "High" },
      { name:"Paint a door frame", priority: "Low" },
      { name:"Cook lunches",
      priority: "High" }],
    newItem: "",
    newPriority: ""
  },
  methods: {

    saveNewItem: function () {
      this.items.push({
        name: this.newItem,
        priority: this.newPriority
      });
      this.newItem = "";
    }

  }

});

});
