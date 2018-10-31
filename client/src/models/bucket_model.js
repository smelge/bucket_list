const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pubsub.js');

const BucketList = function(url){
  this.url = url;
  this.request = new RequestHelper(this.url);
};

BucketList.prototype.bindEvents = function(){
  PubSub.subscribe('ItemView:delete-clicked',(evt)=>{
    this.deleteItem(evt.detail);
  });

  PubSub.subscribe('ListForm:new-item-ready',(evt)=>{
    this.postItem(evt.detail);
  });
};

BucketList.prototype.getData = function(){
  this.request.get()
    .then((items)=>{
      PubSub.publish('List:list-loaded',items)
    })
    .catch(console.error);
}

BucketList.prototype.postItem = function(item){
  this.request.post(item)
    .then((items)=>{
      PubSub.publish('List:list-loaded',items);
    })
    .catch(console.error);
}

BucketList.prototype.deleteItem = function(itemId){
  this.request.delete(itemId)
    .then((items)=>{
      PubSub.publish('List:list-loaded',items);
    })
    .catch(console.error);
}

module.exports = BucketList;
