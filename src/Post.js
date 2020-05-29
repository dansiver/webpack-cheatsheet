// File to show, that import/export is handled by webpack

export default class Post {
  constructor(title) {
    this.title = title;
    this.date = new Date();
  }

  toString() {
    return JSON.stringify(
      {
        title: this.title,
        date: this.date.toJSON()
      }
    );
  }
}