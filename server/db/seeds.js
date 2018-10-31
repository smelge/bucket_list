use bucket;
db.dropDatabase();

db.bucketItems.insertMany([
  {
    item: "Eat a wolf",
    date: "2018-06-11",
    completed: false
  },
  {
    item:"Swim with killer sharks",
    date:"2017-11-18",
    completed: false
  },
  {
    item:"Punch a panda in the face",
    date:"2018-04-02",
    completed: false
  }
]);
