const PubSub = require('../helpers/pubsub.js');

const BucketFormView = function(form){
  this.form = form;
}

BucketFormView.prototype.bindEvents = function(){
  this.form.addEventListener('submit',(evt)=>{
    this.handleSubmit(evt);
  });
}

BucketFormView.prototype.handleSubmit = function(evt){
  evt.preventDefault();
  const newItem = this.createItem(evt.target);
  PubSub.publish('ListForm:new-item-ready',newItem);
  evt.target.reset();
};

BucketFormView.prototype.createItem = function(form){
  const newItem = {
    item: form.item.value,
    date: form.date.value,
    completed: false
  };
  return newItem;
}

module.exports = BucketFormView;
