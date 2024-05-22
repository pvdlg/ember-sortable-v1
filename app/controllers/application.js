import Controller from "@ember/controller";
import { set } from "@ember/object";
import { sort } from "@ember/object/computed";

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set("sortOrder", ["order:asc"]);
  },

  sortedItems: sort("model", "sortOrder"),

  actions: {
    sortItems(items) {
      items.forEach((item, idx) => {
        set(item, "order", idx);
      });
    }
  }
});