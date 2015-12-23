app.controller('MainController', ['$scope', function($scope) {

   
  $scope.modifiers = [
    {
      modifier: '"$inc"',
      description: 'Changes value of existing key or create new key if it doesn\'t exist. (Number values)',
      code: '\n db.games.update({"game":"pinball", "user":"joe"}, \n ... {"$inc": {"score":1000}})'
    },
    {
      modifier: '"$set"',
      description: 'Sets the value of a key or creates a key if one does not exist.',
      code: '\n db.users.update({ "_id" : ObjectId("4d3234d3") }, \n ... {"$set": {"favorite book":"War and Peace"}}})'
    },
    {
      modifier: '$push',
      description: 'Adds an element to the end of an array if the key already exists, otherwise creates the key.',
      code: '\n db.blog.posts.update({"title":"A blog Post"}, {$push:{ \n ... "comments":{"name":"joe", "email":"joe@email.com", \n ... "content":"nice post!"}}})'
    },
    {
      modifier: '"$ne" & "$addToSet"',
      description: 'Both add a value to an array only if the value is not already present.',
      code: '\n db.papers.update({"authors cited" : {"$ne": "Richie"}}, \n ... { $push : {"authors cited": "Richie"}}) \n\ndb.users.update({"_id":ObjectId("4d244sd323")}, \n ... {"$addToSet": {"emails":"joe@at.com"}})'
    },
    {
      modifier: '"$each"',
      description: 'To add multiple unique values.',
      code: '\n db.users.update({"_id": ObjectId("3hj34h43342")}, {"$addToSet": \n ... {"emails": {"$each": ["joe@php.net", "joe@ex.com", "joe@cat.meow"]}}})'
    },
    {
      modifier: '$pop',
      description: 'Can remove elements from either end of an array.',
      code: '\n {$pop:{key:1}} --Remove element from end of an array.\n\n {$pop:{key:-1}} --Remove element from start of an array.' 
    },
    {
      modifier: '"$pull"',
      description: 'Removes elements of an array based on specific criteria (pulls ALL matching values).',
      code: '\n db.lists.update({}, {"$pull":{"todo":"laundry"}})'
    },
    {
      modifier: '$ (positional operator)',
      description: 'Figures out which element of the array the query matches $ updates that element. ONLY updates the first match.',
      code: '\n db.blog.update({"comments.author": "John"}, \n ... {"$set":{"comments.$.author":"Jim"}})'
    }
  ];
   

}]);