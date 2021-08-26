# RƏQƏMLƏRİ AZƏRBAYCAN DİLİNƏ TƏRCÜMƏ EDƏN MODUL

Azərbaycan dilində süni intellekt istifadə etmədən xüsusi alqoritm vasitəsilə tam ədədləri (integer) azərbaycan dilinə çevirən modul.

## İSTİFADƏ QAYDASI

NPM ilə yükləyib istənilən proyektinizdə istifadə edə bilərsiniz. Bunun üçün aşağıdakı kod nümunədən faydalana bilərsiniz:

```sh
$ npm i numbers_to_azeri_translator
```
Daha sonra aşağıdakı qaydada import edərək istifadə edə bilərsiniz:

```js
const Numbers2Azeri = require('numbers_to_azeri_translator');

const translator = new Numbers2Azeri(3456675430);
console.log(translator.translate());
```

Nəticə: ***üç milyard dörd yüz əlli altı milyon altı yüz yetmiş beş min dörd yüz otuz***

## TEST
Test etmək üçün ***npm run test*** komandasını çağırın