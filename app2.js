const moment = require('moment');

const dd = moment("20200101", "YYYYMMDD").fromNow();
console.log('HW-7');
console.log(dd);

const validator = require('validator');

const dd1 = validator.isEmail('palinahalausava@gmail.com');
console.log('Инициация через емейл');
console.log(dd1);

const { v4: uuidv4 } = require('uuid');
const dd2 = uuidv4(45);
console.log('Уникальный идентификатор');
console.log(dd2);

const uid = require('uid');
const dd3 = uid(456);
console.log('Еще один способ генерировать Уникальный идентификатор');
console.log(dd3);
console.log(uid());
console.log(uid());

const FlakeId = require('flake-idgen');
const flakeIdGen = new FlakeId(867);
console.log('И еще один способ точно не помешает ;-)');
console.log(flakeIdGen.next());
console.log(flakeIdGen.next());
console.log(flakeIdGen.next());