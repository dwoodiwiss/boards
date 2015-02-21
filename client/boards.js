if (Meteor.isClient) {

  Meteor.subscribe('boards');

  Template.board.helpers({
    boards: function() {
      return Boards.find();
    }
  });

}