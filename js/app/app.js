window.onload = function () {
  MIDI.loadPlugin({
    soundfontUrl: "./soundfont/",
    instrument: "acoustic_grand_piano",
    onprogress: function(state, progress) {
      console.log(state, progress);
    },
    onsuccess: function() {

      document.querySelector('#C4').onclick = function() {
        console.log("clicked C4!")
        var delay = 0; // play one note every quarter second
        var note = 50; // the MIDI note
        var velocity = 127; // how hard the note hits
        // play the note
        MIDI.setVolume(0, 127);
        MIDI.noteOn(0, note, velocity, delay);
        MIDI.noteOff(0, note, delay + 0.5);
      }
      document.querySelector('#Csh4').onclick = function() {
        console.log("clicked Csh4!")
        var delay = 0; // play one note every quarter second
        var note = 51; // the MIDI note
        var velocity = 127; // how hard the note hits
        // play the note
        MIDI.setVolume(0, 127);
        MIDI.noteOn(0, note, velocity, delay);
        MIDI.noteOff(0, note, delay + 0.5);
      }
    }
  });
};

// $(document).ready(function() {
//   console.log("yay jquery")
// });
