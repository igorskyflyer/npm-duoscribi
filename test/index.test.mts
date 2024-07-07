// Author: Igor Dimitrijević (@igorskyflyer)

import { assert, describe, test } from 'vitest'
import { duoscribi } from '../src/index.mjs'

// cspell:disable

describe('🧪 DúöScríbî tests 🧪', () => {
	test('#1 should return ""', () => {
		// @ts-expect-error
		assert.equal(duoscribi(), '')
	})

	test('#2 should return the DúöScríbî tagline', () => {
		assert.equal(
			duoscribi(
				'✒ DúöScríbî allows you to convert letters with diacritics to regular letters. 🤓'
			),
			'✒ DuoScribi allows you to convert letters with diacritics to regular letters. 🤓'
		)
	})

	test('#3 should return "AAAAAA"', () => {
		assert.equal(duoscribi('ÀÁÂÃÄÅ'), 'AAAAAA')
	})

	test('#4 should return "Una loba como yo no esta pa\' tipos como tu"', () => {
		assert.equal(
			duoscribi("Una loba como yo no está pa' tipos como tú"),
			"Una loba como yo no esta pa' tipos como tu"
		)
	})

	test('#5 should return a long ASCII string', () => {
		assert.equal(
			duoscribi(
				'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſ'
			),
			'AAAAAAACEEEEIIIIDNOOOOO×OUUUUYPsaaaaaaaceeeeiiiidnooooo÷ouuuuypyAaAaAaCcCcCcCcDdDdEeEeEeEeEeGgGgGgGgIhIhIiIiIiIiIiIiJjKkkLlLlLlLlLlNnNnNnnnnOoOoOoOoRrRrRrSsSsSsSsTtTtTtUuUuUuUuUuUuWwYyYZzZzZzs'
		)
	})

	test('#6 should return "The way to get started is to quit talking and begin doing"', () => {
		assert.equal(
			duoscribi('Ťḥė ẅâÿ ţɵ ɡėţ șţãrţėd iș ţɵ quiţ ţālkinɡ ānd bėgin dɵinɡ'),
			'The way to get started is to quit talking and begin doing'
		)
	})

	test('#7 should return "Pidan kaksin kasin kiinni juomista niinku"', () => {
		assert.equal(
			duoscribi('Pidän kaksin käsin kiinni juomista niinku'),
			'Pidan kaksin kasin kiinni juomista niinku'
		)
	})
})
