'use strict'

const topics = [
	'Armut',
	'Reichtum',
	'Die Gesellschaft',
	'Geld',
	'Der Pöbel',
	'Die Politik',
	'Die Umwelt',
	'Krieg',
	'Logik',
	'Macht',
	'Wissen',
	'Vernunft',
	'Freiheit',
	'Stolz',
	'Haltung',
	'Streben',
	'Massenmord',
	'Das Abstellen von Fahrrädern',
	'Börsenhandel',
	'Erwerbsarbeit',
	'Der Sozialstaat',
	'Naivität',
	'Neid',
	'Ehrlichkeit'
]

const adverbs = [
	'nüchtern betrachtet',
	'genau genommen',
	'in Wirklichkeit',
	'immer',
	'nie',
	'nicht',
	'unter Umständen',
	'eventuell',
	'gewissermaßen',
	'vielleicht',
	'logischerweise',
	'im Prinzip',
	'ehrlich gesagt',
	'irgendwie',
	'global betrachtet',
	'vorzugsweise'
]

const depictions = [
	'Zeitverschwendung',
	'die Antwort auf Alles',
	'unwichtig',
	'logisch',
	'entscheidend',
	'zu vernachlässigen',
	'anzustreben',
	'in Ordnung',
	'genehmigt',
	'zu unterlassen',
	'strengstens verboten',
	'echt notwendig',
	'nicht notwendig',
	'nur in Ausnahmefällen okay',
	'zu begrüßen',
	'ausreichend',
	'das Wichtigste',
	'der Sinn des Lebens',
	'ein Trugschluss',
	'echt daneben'
]

const moralOMat = () => {
	const topic = topics[Math.round(Math.random() * (topics.length - 1))]
	const adverb = adverbs[Math.round(Math.random() * (adverbs.length - 1))]
	const depiction = depictions[Math.round(Math.random() * (depictions.length - 1))]

	return topic + ' ist ' + adverb + ' ' + depiction + '.'
}

module.exports = moralOMat
