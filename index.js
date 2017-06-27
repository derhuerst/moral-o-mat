'use strict'

const topics = [
	'Armut ist',
	'Reichturm ist',
	'Die Gesellschaft ist',
	'Politiker*innen sind',
	'Die Menschheit ist',
	'Geld ist',
	'Der Pöbel ist',
	'Die Politik ist',
	'Die Umwelt ist',
	'Krieg ist',
	'Macht ist',
	'Wissen ist',
	'Vernunft ist',
	'Freiheit ist',
	'Stolz ist',
	'Haltung ist',
	'Streben ist',
	'Massenmord ist',
	'Genozid ist',
	'Das Abstellen von Fahrrädern ist',
	'Börsenhandel ist',
	'Erwerbsarbeit ist',
	'Der Sozialstaat ist'
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
	'im Prinzip',
	'ehrlich gesagt',
	'irgendwie',
	'global betrachtet'
]

const depictions = [
	'Zeitverschwendung',
	'die Antwort auf Alles',
	'unwichtig',
	'entscheidend',
	'zu vernachlässigen',
	'anzustreben',
	'in Ordnung',
	'genehmigt',
	'zu unterlassen',
	'strengstens verboten',
	'notwendig',
	'nur in Ausnahmefällen okay',
	'zu begrüßen',
	'ausreichend',
	'das Wichtigste',
	'der Sinn des Lebens',
	'ein Trugschluss'
]

const moralOMat = () => {
	const topic = topics[Math.round(Math.random() * (topics.length - 1))]
	const adverb = adverbs[Math.round(Math.random() * (adverbs.length - 1))]
	const depiction = depictions[Math.round(Math.random() * (depictions.length - 1))]

	return topic + ' ' + adverb + ' ' + depiction + '.'
}

module.exports = moralOMat
