'use strict'

const topics = [
	'Armut',
	'Die Gesellschaft',
	'Politiker*innen',
	'Die Menschheit',
	'Geld',
	'Der Pöbel',
	'Die Mittelschicht',
	'Die Politik',
	'Die Umwelt',
	'Die Bundeswehr',
	'Macht',
	'Wissen',
	'Vernunft',
	'Freiheit'
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
	'ehrlich gesagt'
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
	'notwending',
	'nur in Ausnahmefällen okay',
	'zu begrüßen'
]

const moralOMat = () => {
	const topic = topics[Math.round(Math.random() * (topics.length - 1))]
	const adverb = adverbs[Math.round(Math.random() * (adverbs.length - 1))]
	const depiction = depictions[Math.round(Math.random() * (depictions.length - 1))]

	return topic + ' ist ' + adverb + ' ' + depiction + '.'
}

module.exports = moralOMat
