if (Meteor.isClient) {

  Meteor.subscribe('boards');

  Template.boardItem.helpers({
    boards: function() {
      return Boards.find();
    }
  });

}