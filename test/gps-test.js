/* eslint-disable object-property-newline */
const test = require('tst')
const expect = require('expect')
const gps = require('../gps')

const SCHOOL_OPS = [
  {
    action: 'drive to school',
    pre: ['son at home', 'car works'],
    add: ['son at school'], del: ['son at home'] },
  {
    action: 'shop installs battery',
    pre: ['car needs battery', 'shop knows problem', 'shop has money'],
    add: ['car works'] },
  {
    action: 'tell shop problem',
    pre: ['in communication with shop'],
    add: ['shop knows problem'] },
  {
    action: 'telephone shop',
    pre: ['know phone number'],
    add: ['in communication with shop'] },
  {
    action: 'look up number',
    pre: ['have a phone book'],
    add: ['know phone number'] },
  {
    action: 'give shop money',
    pre: ['have money'],
    add: ['shop has money'], del: ['have money'] }
]

test('basic test', function () {
  expect(gps(
    ['son at home', 'car needs battery', 'have money', 'have phone book'],
    ['son at school'], SCHOOL_OPS)).toEqual(true)
})
