const db = require("../config/db.js");

class AbstractModel {
  constructor({ table }) {
    this.table = table;
    this.database = db;
  }

  findOne = async (id) =>
    this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id]);
}

module.exports = AbstractModel;
