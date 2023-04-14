import { assert as chai } from 'chai'
import { duoscribi } from '../src/index'

// cspell:disable

describe('🧪 duoscribi tests 🧪', () => {
  it('#1 should return ""', () => {
    // @ts-expect-error
    chai.equal(duoscribi(), '')
  })

  it('#2 should return "AAAAAA"', () => {
    chai.equal(duoscribi('ÀÁÂÃÄÅ'), 'AAAAAA')
  })

  it('#3 should return "Una loba como yo no esta pa\' tipos como tu"', () => {
    chai.equal(duoscribi("Una loba como yo no está pa' tipos como tú"), "Una loba como yo no esta pa' tipos como tu")
  })

  it('#4 should return a long ASCII string', () => {
    chai.equal(
      duoscribi(
        'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſ'
      ),
      'AAAAAAACEEEEIIIIDNOOOOO×OUUUUYPsaaaaaaaceeeeiiiidnooooo÷ouuuuypyAaAaAaCcCcCcCcDdDdEeEeEeEeEeGgGgGgGgIhIhIiIiIiIiIiIiJjKkkLlLlLlLlLlNnNnNnnnnOoOoOoOoRrRrRrSsSsSsSsTtTtTtUuUuUuUuUuUuWwYyYZzZzZzs'
    )
  })

  it('#5 should return "The way to get started is to quit talking and begin doing"', () => {
    chai.equal(
      duoscribi('Ťḥė ẅâÿ ţɵ ɡėţ șţãrţėd iș ţɵ quiţ ţālkinɡ ānd bėgin dɵinɡ'),
      'The way to get started is to quit talking and begin doing'
    )
  })
})
