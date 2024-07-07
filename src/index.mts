// Author: Igor Dimitrijević (@igorskyflyer)

type CharMap = { [key: string]: string }
type CharGroups = { [key: string]: string[] }

const mapGroups: CharGroups = {
  // Uppercase letters
  // A
  A: [
    '\u00C1',
    '\u0102',
    '\u1EAE',
    '\u1EB6',
    '\u1EB0',
    '\u1EB2',
    '\u1EB4',
    '\u01CD',
    '\u00C2',
    '\u1EA4',
    '\u1EAC',
    '\u1EA6',
    '\u1EA8',
    '\u1EAA',
    '\u00C4',
    '\u1EA0',
    '\u00C0',
    '\u1EA2',
    '\u0100',
    '\u0104',
    '\u00C5',
    '\u01FA',
    '\u00C3',
    '\u00C6',
    '\u01FC'
  ],
  // B
  B: ['\u1E04', '\u0181'],
  // C
  C: ['\u0106', '\u010C', '\u00C7', '\u0108', '\u010A', '\u0186', '\u0297'],
  // D
  D: [
    '\u010E',
    '\u1E12',
    '\u1E0C',
    '\u018A',
    '\u1E0E',
    '\u01F2',
    '\u01C5',
    '\u0110',
    '\u00D0',
    '\u01F1',
    '\u01C4'
  ],
  // E
  E: [
    '\u00C9',
    '\u0114',
    '\u011A',
    '\u00CA',
    '\u1EBE',
    '\u1EC6',
    '\u1EC0',
    '\u1EC2',
    '\u1EC4',
    '\u00CB',
    '\u0116',
    '\u1EB8',
    '\u00C8',
    '\u1EBA',
    '\u0112',
    '\u0118',
    '\u1EBC',
    '\u0190',
    '\u018F'
  ],
  // F
  F: ['\u0191'],
  // G
  G: [
    '\u01F4',
    '\u011E',
    '\u01E6',
    '\u0122',
    '\u011C',
    '\u0120',
    '\u1E20',
    '\u029B'
  ],
  // I
  I: [
    '\u1E2A',
    '\u0124',
    '\u1E24',
    '\u0126',
    '\u00CD',
    '\u012C',
    '\u01CF',
    '\u00CE',
    '\u00CF',
    '\u0130',
    '\u1ECA',
    '\u00CC',
    '\u1EC8',
    '\u012A',
    '\u012E',
    '\u0128',
    '\u0132'
  ],
  // J
  J: ['\u0134'],
  // K
  K: ['\u0136', '\u1E32', '\u0198', '\u1E34'],
  // L
  L: [
    '\u0139',
    '\u023D',
    '\u013D',
    '\u013B',
    '\u1E3C',
    '\u1E36',
    '\u1E38',
    '\u1E3A',
    '\u013F',
    '\u01C8',
    '\u0141',
    '\u01C7'
  ],
  // M
  M: ['\u1E3E', '\u1E40', '\u1E42'],
  // N
  N: [
    '\u0143',
    '\u0147',
    '\u0145',
    '\u1E4A',
    '\u1E44',
    '\u1E46',
    '\u01F8',
    '\u019D',
    '\u1E48',
    '\u01CB',
    '\u00D1',
    '\u01CA'
  ],
  // O
  O: [
    '\u00D3',
    '\u014E',
    '\u01D1',
    '\u00D4',
    '\u1ED0',
    '\u1ED8',
    '\u1ED2',
    '\u1ED4',
    '\u1ED6',
    '\u00D6',
    '\u1ECC',
    '\u0150',
    '\u00D2',
    '\u1ECE',
    '\u01A0',
    '\u1EDA',
    '\u1EE2',
    '\u1EDC',
    '\u1EDE',
    '\u1EE0',
    '\u014C',
    '\u019F',
    '\u01EA',
    '\u00D8',
    '\u01FE',
    '\u00D5',
    '\u0152',
    '\u0276'
  ],
  // P
  P: ['\u00DE'],
  // R
  R: [
    '\u0154',
    '\u0158',
    '\u0156',
    '\u1E58',
    '\u1E5A',
    '\u1E5C',
    '\u1E5E',
    '\u0281'
  ],
  // S
  S: [
    '\u015A',
    '\u0160',
    '\u015E',
    '\u015C',
    '\u0218',
    '\u1E60',
    '\u1E62',
    '\u1E9E'
  ],
  // T
  T: ['\u0164', '\u0162', '\u1E70', '\u021A', '\u1E6C', '\u1E6E', '\u0166'],
  // U
  U: [
    '\u00DA',
    '\u016C',
    '\u01D3',
    '\u00DB',
    '\u00DC',
    '\u01D7',
    '\u01D9',
    '\u01DB',
    '\u01D5',
    '\u1EE4',
    '\u0170',
    '\u00D9',
    '\u1EE6',
    '\u01AF',
    '\u1EE8',
    '\u1EF0',
    '\u1EEA',
    '\u1EEC',
    '\u1EEE',
    '\u016A',
    '\u0172',
    '\u016E',
    '\u0168'
  ],
  // W
  W: ['\u1E82', '\u0174', '\u1E84', '\u1E80', '\u02AC'],
  // Y
  Y: [
    '\u00DD',
    '\u0176',
    '\u0178',
    '\u1E8E',
    '\u1EF4',
    '\u1EF2',
    '\u01B3',
    '\u1EF6',
    '\u0232',
    '\u1EF8'
  ],
  // Z
  Z: ['\u0179', '\u017D', '\u017B', '\u1E92', '\u1E94', '\u01B5'],

  // Lowercase letters
  // a
  a: [
    '\u00E1',
    '\u0103',
    '\u1EAF',
    '\u1EB7',
    '\u1EB1',
    '\u1EB3',
    '\u1EB5',
    '\u01CE',
    '\u00E2',
    '\u1EA5',
    '\u1EAD',
    '\u1EA7',
    '\u1EA9',
    '\u1EAB',
    '\u00E4',
    '\u1EA1',
    '\u00E0',
    '\u1EA3',
    '\u0101',
    '\u0105',
    '\u00E5',
    '\u01FB',
    '\u00E3',
    '\u00E6',
    '\u01FD',
    '\u0251',
    '\u0250',
    '\u0252'
  ],
  // b
  b: ['\u1E05', '\u0253'],
  // c
  c: ['\u0107', '\u010D', '\u00E7', '\u0109', '\u0255', '\u010B'],
  // d
  d: [
    '\u010F',
    '\u1E13',
    '\u1E0D',
    '\u0257',
    '\u1E0F',
    '\u0111',
    '\u0256',
    '\u02A4',
    '\u01F3',
    '\u02A3',
    '\u02A5',
    '\u01C6',
    '\u00F0'
  ],
  // e
  e: [
    '\u00E9',
    '\u0115',
    '\u011B',
    '\u00EA',
    '\u1EBF',
    '\u1EC7',
    '\u1EC1',
    '\u1EC3',
    '\u1EC5',
    '\u00EB',
    '\u0117',
    '\u1EB9',
    '\u00E8',
    '\u1EBB',
    '\u0113',
    '\u0119',
    '\u1EBD',
    '\u0292',
    '\u01EF',
    '\u0293',
    '\u0258',
    '\u025C',
    '\u025D',
    '\u0259',
    '\u025A',
    '\u029A',
    '\u025E'
  ],
  // f
  f: ['\u0192', '\u02A9', '\uFB01', '\uFB02'],
  // g
  g: [
    '\u01F5',
    '\u011F',
    '\u01E7',
    '\u0123',
    '\u011D',
    '\u0121',
    '\u0260',
    '\u1E21',
    '\u0261',
    '\u0263'
  ],
  // h
  h: [
    '\u1E2B',
    '\u0125',
    '\u1E25',
    '\u0266',
    '\u1E96',
    '\u0127',
    '\u0267',
    '\u0265',
    '\u02AE',
    '\u02AF'
  ],
  // i
  i: [
    '\u00ED',
    '\u012D',
    '\u01D0',
    '\u00EE',
    '\u00EF',
    '\u1ECB',
    '\u00EC',
    '\u1EC9',
    '\u012B',
    '\u012F',
    '\u0268',
    '\u0129',
    '\u0269',
    '\u0131',
    '\u0133'
  ],
  // j
  j: ['\u01F0', '\u0135', '\u029D', '\u0237', '\u025F', '\u0284'],
  // k
  k: ['\u0137', '\u1E33', '\u0199', '\u1E35', '\u0138', '\u029E'],
  // l
  l: [
    '\u013A',
    '\u019A',
    '\u026C',
    '\u013E',
    '\u013C',
    '\u1E3D',
    '\u1E37',
    '\u1E39',
    '\u1E3B',
    '\u0140',
    '\u026B',
    '\u026D',
    '\u0142',
    '\u019B',
    '\u026E',
    '\u01C9',
    '\u02AA',
    '\u02AB'
  ],
  // m
  m: ['\u1E3F', '\u1E41', '\u1E43', '\u0271', '\u026F', '\u0270'],
  // n
  n: [
    '\u0149',
    '\u0144',
    '\u0148',
    '\u0146',
    '\u1E4B',
    '\u1E45',
    '\u1E47',
    '\u01F9',
    '\u0272',
    '\u1E49',
    '\u0273',
    '\u00F1',
    '\u01CC',
    '\u014B',
    '\u014A'
  ],
  // o
  o: [
    '\u00F3',
    '\u014F',
    '\u01D2',
    '\u00F4',
    '\u1ED1',
    '\u1ED9',
    '\u1ED3',
    '\u1ED5',
    '\u1ED7',
    '\u00F6',
    '\u1ECD',
    '\u0151',
    '\u00F2',
    '\u1ECF',
    '\u01A1',
    '\u1EDB',
    '\u1EE3',
    '\u1EDD',
    '\u1EDF',
    '\u1EE1',
    '\u014D',
    '\u01EB',
    '\u00F8',
    '\u01FF',
    '\u00F5',
    '\u025B',
    '\u0254',
    '\u0275',
    '\u0298',
    '\u0153'
  ],
  // p
  p: ['\u0278', '\u00FE'],
  // q
  q: ['\u02A0'],
  // r
  r: [
    '\u0155',
    '\u0159',
    '\u0157',
    '\u1E59',
    '\u1E5B',
    '\u1E5D',
    '\u027E',
    '\u1E5F',
    '\u027C',
    '\u027D',
    '\u027F',
    '\u0279',
    '\u027B',
    '\u027A'
  ],
  // s
  s: [
    '\u015B',
    '\u0161',
    '\u015F',
    '\u015D',
    '\u0219',
    '\u1E61',
    '\u1E63',
    '\u0282',
    '\u017F',
    '\u0283',
    '\u0286',
    '\u00DF',
    '\u0285'
  ],
  // t
  t: [
    '\u0165',
    '\u0163',
    '\u1E71',
    '\u021B',
    '\u1E97',
    '\u1E6D',
    '\u1E6F',
    '\u0288',
    '\u0167',
    '\u02A8',
    '\u02A7',
    '\u02A6',
    '\u0287'
  ],
  // u
  u: [
    '\u0289',
    '\u00FA',
    '\u016D',
    '\u01D4',
    '\u00FB',
    '\u00FC',
    '\u01D8',
    '\u01DA',
    '\u01DC',
    '\u01D6',
    '\u1EE5',
    '\u0171',
    '\u00F9',
    '\u1EE7',
    '\u01B0',
    '\u1EE9',
    '\u1EF1',
    '\u1EEB',
    '\u1EED',
    '\u1EEF',
    '\u016B',
    '\u0173',
    '\u016F',
    '\u0169',
    '\u028A'
  ],
  // v
  v: ['\u028B', '\u028C'],
  // w
  w: ['\u1E83', '\u0175', '\u1E85', '\u1E81', '\u028D'],
  // y
  y: [
    '\u00FD',
    '\u0177',
    '\u00FF',
    '\u1E8F',
    '\u1EF5',
    '\u1EF3',
    '\u01B4',
    '\u1EF7',
    '\u0233',
    '\u1EF9',
    '\u028E'
  ],
  // z
  z: [
    '\u017A',
    '\u017E',
    '\u0291',
    '\u017C',
    '\u1E93',
    '\u1E95',
    '\u0290',
    '\u01B6'
  ]
}

const map: CharMap = Object.entries(mapGroups).reduce(
  (acc: CharMap, [ascii, chars]) => {
    for (const char of chars) {
      acc[char] = ascii
    }

    return acc
  },
  {} as CharMap
)

/**
 * Converts letters with diacritics to regular, ASCII letters.
 * @param {string} input The string to convert.
 * @returns {string} The converted string or an empty string otherwise.
 */
export function duoscribi(input: string): string {
  if (typeof input !== 'string' || input.length === 0) {
    return ''
  }

  const count: number = input.length
  let result: string = ''

  for (let i: number = 0; i < count; i++) {
    const char: string = input.charAt(i)
    const charInMap = map[char]

    if (charInMap) {
      result += charInMap
    } else {
      result += char
    }
  }

  return result
}
