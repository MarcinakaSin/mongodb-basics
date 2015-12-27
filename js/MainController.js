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
   
  $scope.operators = [
    {
      operator: '"$lt"',
      description: 'Less than(<)'
    },
    {
      operator: '"$lte"',
      description: 'Less than or equal to(<=)'
    },
    {
      operator: '"$gt"',
      description: 'Greater than(>)'
    },
    {
      operator: '"$gte"',
      description: 'Less than or equal to(>=)'
    },
    {
      operator: '"$ne"',
      description: 'Not Equal(!=)'
    },
    {
      operator: '"$in"',
      description: 'Used to query for a variety of values'
    },
    {
      operator: '"$nin"',
      description: 'Queries for values not in array'
    },
    {
      operator: '$or',
      description: 'Can contain other conditions'
    },
    {
      operator: '"$not"',
      description: 'metconditional: it can be applied on top of any other criteria.'
    },
    {
      operator: '"$mod"',
      description: 'Queries for keys whose values, when divided by the first value given, have a remainder of the second value.'
    },
    {
      operator: '$exists',
      description: 'Checks if key exists.'
    },
    {
      operator: '/joe/i ',
      description: '(Regular Expression) case-insensitive matching'
    }
  ];
   
  $scope.returnCrits = [
    {
      criteria: 'Return Syntax',
      description: 'Return a username and email.',
      code: '\n db.users.find({}, {"username": 1, "email": 1})'
    },
    {
      criteria: 'Omit Syntax',
      description: 'Omit return keys. (Omits username.)',
      code: '\n db.users.find({}, {"username": 0})'
    },
    {
      criteria: '"$gte" and "$lte"',
      description: '$Less than or equal to(<=) and $greater than or equal to example',
      code: '\n db.users.find({"age": {"$gte": 18, "$lte": 30}})'
    },
    {
      criteria: '"$lt"',
      description: 'To find someon who registered before January 1, 2007.',
      code: '\n start = new Date("01/01/2007") \n... db.users.find({"registered": {"$lt": start}})'
    },
    {
      criteria: '$in',
      description: 'Querying for a variety of values.',
      code: '\n db.raffle.find({"ticket_no": {"$in": [725, 542, 390]}})'
    },
    {
      criteria: '$nin',
      description: 'returns documents that don\' match the criteria in the array.',
      code: '\n db.raffle.find({"ticket_no": {"$nin": [725, 542, 390]}})'
    },
    {
      criteria: '$or',
      description: 'Contains two conditions.',
      code: '\n db.raffle.find({"$or": [{"ticket_no":{"$in": [725, 542, 390]}}, \n ... {"winner": true}]})'
    }
  ];
}]);