var scribble = require('scribbletune');
var clip = scribble.clip({
    notes: 'F#m C#m Dmaj Bm Emaj Amaj Dmaj C#m Amaj',
    pattern: 'x__x__x___'.repeat(8),
    sizzle: true
});  

scribble.midi(clip, 'chords.mid');

clip = scribble.clip({
	notes: 'c3',
	pattern: 'xxxxxxxxxxxxxxxx',
	accentMap: 'x---x-x-x---x-x-'
});

scribble.midi(clip, 'hats.mid');

clip = scribble.clip({
	notes: 'c1',
	pattern: 'x---',
	accentMap: 'x---'.repeat(4)
});

scribble.midi(clip, 'kicks.mid');