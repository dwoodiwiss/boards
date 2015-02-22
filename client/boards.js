if (Meteor.isClient) {

  Meteor.subscribe('boards');

  Template.boards.helpers({
    boards: function() {
      return Boards.find();
    }
  });

}