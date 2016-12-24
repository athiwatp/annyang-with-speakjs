 $(document).ready(function () {
     $('.modal').modal();

     meSpeak.loadConfig("mespeak/mespeak_config.json");
     meSpeak.loadVoice('mespeak/voices/en/en-us.json');

     if (annyang) {
         // Let's define our first command. First the text we expect, and then the function it should call
         var commands = {
             'Hello': function () {
                 Materialize.toast('Hi there!', 4000, 'red darken-4 white-text')
             },
             "Show me cute person": function () {
                 $('#showCena').modal('open');
             },
             'Close': function () {
                 $('#showCena').modal('close');
             },
             'Hi': function () {
                 meSpeak.speak('hello');
             },
             'I am *name': function (name) {
                 meSpeak.speak('hello ' + name, {variant: "f5"});
             }
         };

         // Add our commands to annyang
         annyang.addCommands(commands);

         // Start listening. You can call this here, or attach this call to an event, button, etc.
         annyang.start();
     }

 });