if (Meteor.isClient) {
  // counter starts at 0
  // Session.setDefault('counter', 0);

  // Template.hello.helpers({
  //   counter: function() {
  //     return Session.get('counter');
  //   }
  // });

  Template.board.helpers({
    boards: function() {
      var boards = [
        {
          title: "Board Title",
          description: "This is where the content for the board will go."
        },
        {
          title: "Another Board Title",
          description: "This is where the content for the board will go, it might even be quite long content... WHO KNOWS!"
        }
      ]
      return boards;
    }
  });

  // Template.hello.events({
  //   'click button': function() {
  //     // increment the counter when button is clicked
  //     Session.set('counter', Session.get('counter') + 1);
  //   }
  // });
}