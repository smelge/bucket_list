const BucketListView = require('./views/bucket_list.js');
const BucketList = require('./models/bucket_model.js');
const BucketFormView = require('./views/bucket_form_view.js');

document.addEventListener('DOMContentLoaded',()=>{
  const bucketForm = document.querySelector('form#new-item');
  const bucketFormView = new BucketFormView(bucketForm);
  bucketFormView.bindEvents();

  const bucketlistContainer = document.querySelector('table#list-items');
  const bucketListView = new BucketListView(bucketlistContainer);
  bucketListView.bindEvents();

  const url = 'http://localhost:3000/api/bucket';
  const bucketItems = new BucketList(url);
  bucketItems.bindEvents();
  bucketItems.getData();
});
