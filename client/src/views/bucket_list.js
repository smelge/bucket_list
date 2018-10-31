const PubSub = require('../helpers/pubsub.js');
const BucketListView = require('./bucket_list_view.js');

const BucketView = function(container){
  this.container = container;
};

BucketView.prototype.bindEvents = function(){
  PubSub.subscribe('List:list-loaded',(evt)=>{
    this.render(evt.detail);
  });
};

BucketView.prototype.render = function(buckets){
  this.container.innerHTML = '';
  const headerRow = document.createElement('tr');
  const header1 = document.createElement('th');
  const header2 = document.createElement('th');
  const header3 = document.createElement('th');
  const header4 = document.createElement('th');
  header1.textContent = 'Activity';
  header2.textContent = 'Date Added';
  header3.textContent = 'Completed?';
  header4.textContent = 'Delete?';

  headerRow.appendChild(header1);
  headerRow.appendChild(header2);
  headerRow.appendChild(header3);
  headerRow.appendChild(header4);
  this.container.appendChild(headerRow);

  const bucketItem = new BucketListView(this.container);
  buckets.forEach((bucket)=>bucketItem.render(bucket));
};

module.exports = BucketView;
