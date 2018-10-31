const PubSub = require('../helpers/pubsub.js');

const BucketListView = function(container){
  this.container = container;
};

BucketListView.prototype.render = function(item){
  const itemContainer = document.createElement('tr');

  const newItem = document.createElement('td');
  newItem.textContent = item.item;
  itemContainer.appendChild(newItem)
  const newDate = document.createElement('td');
  newDate.textContent = item.date;
  itemContainer.appendChild(newDate);
  const newComplete = document.createElement('td');
  newComplete.textContent = item.completed;
  itemContainer.appendChild(newComplete);

  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = item._id
  button.innerHTML = 'Delete!'

  button.addEventListener('click',(evt)=>{
    PubSub.publish('ItemView:delete-clicked',evt.target.value)
  });

  const newDelete = document.createElement('td');
  newDelete.appendChild(button);
  itemContainer.appendChild(newDelete);

  this.container.appendChild(itemContainer);
}

module.exports = BucketListView;
