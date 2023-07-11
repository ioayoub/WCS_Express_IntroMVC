const AbstractModel = require("./Abstract.model.js");

class PostModel extends AbstractModel {
  constructor() {
    super({ table: "post" });
  }

  create = async (title, content) =>
    this.database.query(
      `INSERT INTO ${this.table} (title, content) VALUES (?, ?)`,
      [title, content]
    );
}

module.exports = PostModel;
