import { assert as chai } from 'chai'
import { duoscribi } from '../src/index'

// cspell:disable

describe('🧪 duoscribi tests 🧪', () => {
  it('#1 should return ""', () => {
    // @ts-expect-error
    chai.equal(duoscribi(), '')
  })

  it('#2 should return the DúöScríbî tagline', () => {
    chai.equal(
      duoscribi('✒ DúöScríbî allows you to convert letters with diacritics to regular letters. 🤓'),
      '✒ DuoScribi allows you to convert letters with diacritics to regular letters. 🤓'
    )
  })

  it('#3 should return "AAAAAA"', () => {
    chai.equal(duoscribi('ÀÁÂÃÄÅ'), 'AAAAAA')
  })

  it('#4 should return "Una loba como yo no esta pa\' tipos como tu"', () => {
    chai.equal(duoscribi("Una loba como yo no está pa' tipos como tú"), "Una loba como yo no esta pa' tipos como tu")
  })

  it('#5 should return a long ASCII string', () => {
    chai.equal(
      duoscribi(
        'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſ'
      ),
      'AAAAAAACEEEEIIIIDNOOOOO×OUUUUYPsaaaaaaaceeeeiiiidnooooo÷ouuuuypyAaAaAaCcCcCcCcDdDdEeEeEeEeEeGgGgGgGgIhIhIiIiIiIiIiIiJjKkkLlLlLlLlLlNnNnNnnnnOoOoOoOoRrRrRrSsSsSsSsTtTtTtUuUuUuUuUuUuWwYyYZzZzZzs'
    )
  })

  it('#6 should return "The way to get started is to quit talking and begin doing"', () => {
    chai.equal(
      duoscribi('Ťḥė ẅâÿ ţɵ ɡėţ șţãrţėd iș ţɵ quiţ ţālkinɡ ānd bėgin dɵinɡ'),
      'The way to get started is to quit talking and begin doing'
    )
  })

  it('#7 should return "Pidan kaksin kasin kiinni juomista niinku"', () => {
    chai.equal(duoscribi('Pidän kaksin käsin kiinni juomista niinku'), 'Pidan kaksin kasin kiinni juomista niinku')
  })
})
