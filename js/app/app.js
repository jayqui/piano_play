window.onload = function () {
  MIDI.loadPlugin({
    soundfontUrl: "./soundfont/",
    instrument: "acoustic_grand_piano",
    onprogress: function(state, progress) {
      console.log(state, progress);
    },
    onsuccess: function() {

      var pitches = ['C','Csh','D','Dsh','E','F','Fsh','G','Gsh','A','Ash','B',];

      [0,1,2,3,4,5,6].map((num) => {
        pitches.map((pitch, i) => {
          document.querySelector(`#${pitch}${num}`).onclick = function() {
            var delay = 0; // play one note every quarter second
            var note = 26 + i + (num * 12); // the MIDI note
            console.log(`clicked ${pitch}${num+2}, which is pitch ${note}!`);
            var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(0, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.5);
          }
        });
      });
    }
  });
};
