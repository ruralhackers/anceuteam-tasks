import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { people as peopleEn } from '../src/data/en.ts';
import { people as peopleEs } from '../src/data/es.ts';
import { people as peopleGl } from '../src/data/gl.ts';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');

const localeSources = {
  es: read('src/data/es.ts'),
  en: read('src/data/en.ts'),
  gl: read('src/data/gl.ts'),
};

function personBlock(source, id) {
  const start = source.indexOf(`    id: '${id}'`);
  assert.notEqual(start, -1, `missing ${id} person block`);
  const next = source.indexOf("\n  {\n    id:", start + 1);
  return source.slice(start, next === -1 ? source.indexOf('\n];', start) : next);
}

const peopleByLocale = { es: peopleEs, en: peopleEn, gl: peopleGl };
const voluntaria = (people) => people.find(person => person.id === 'voluntaria');

test('keeps exactly Futura persona voluntaria, Se and Rosabel in every locale', () => {
  for (const [locale, people] of Object.entries(peopleByLocale)) {
    assert.deepEqual(people.map(person => person.id), ['voluntaria', 'se', 'rosabel'], `${locale} people list`);
    assert.doesNotMatch(localeSources[locale], /id: 'uxia'|person: 'uxia'|Uxía/);
    assert.doesNotMatch(localeSources[locale], /id: 'volunteers'/);
    assert.doesNotMatch(localeSources[locale], /Petra|Karen|'petra'|'karen'/, `${locale} still mentions Petra or Karen`);
  }
  assert.equal(voluntaria(peopleEs)?.name, 'Futura persona voluntaria');
  assert.equal(voluntaria(peopleEn)?.name, 'Future volunteer');
  assert.equal(voluntaria(peopleGl)?.name, 'Futura persoa voluntaria');
  for (const people of Object.values(peopleByLocale)) {
    assert.equal(voluntaria(people)?.color, 'voluntaria');
  }
});

test('merges Petra and Karen tasks into the volunteer without duplicates', () => {
  for (const [locale, people] of Object.entries(peopleByLocale)) {
    const { weekly, situational } = voluntaria(people).tasks;
    const names = [...weekly.items, ...situational.items].map(item => item.name);
    assert.equal(new Set(names).size, names.length, `${locale}: duplicated task names`);
    assert.equal(weekly.items.length, 30, `${locale}: weekly task count`);
    assert.equal(situational.items.length, 3, `${locale}: situational task count`);
  }

  const es = voluntaria(peopleEs).tasks;
  const esNames = [...es.weekly.items, ...es.situational.items].map(item => item.name);
  for (const task of [
    // former Petra
    'Vaciar el lavavajillas por la mañana (entre semana)',
    'Llevar las basuras (entre semana)',
    'Tareas de cocina de mañana (fin de semana)',
    'Conteo de suministros y lista de compra coliving',
    'Escribir en pizarra planes coliving de la semana',
    'Mandar por Slack planes coliving de la semana',
    'Mandar recordatorio por Slack antes de la house meeting',
    'Gestionar / organizar talleres en el coliving',
    'Onboarding',
    'Check espacios exteriores (entre semana)',
    'Revisión y orden de espacios interiores (entre semana)',
    'Revisión y orden de espacios interiores (fin de semana)',
    'House meeting',
    'Preparar balda de nevera y espacio de comida seca para una llegada',
    // former Karen
    'Poner lavavajillas después de comer (entre semana)',
    'Poner lavavajillas por la noche (entre semana)',
    'Recoger groceries de Froiz',
    'Vaciar deshumidificador laundry (tarde)',
    'Vaciar deshumidificador laundry (noche)',
    'Posts Instagram',
    'Escribir un post semanal para el blog',
    'Anceu Inn (gestión fotos)',
    'Fotografiar todos los espacios de Anceu',
    // shared, now once
    'Actividades de community building',
    'Reunión semanal con el equipo',
    'Recogida de paquetes',
  ]) assert.ok(esNames.includes(task), `volunteer is missing ${task}`);

  assert.ok(!esNames.includes('Aprender y apoyar los onboardings'), 'learning onboardings from Petra no longer applies');
  assert.doesNotMatch(localeSources.es, /Crear grupos de cenas|Ser persona de referencia|name: 'Lista compra coliving'/);
  for (const source of Object.values(localeSources)) {
    assert.doesNotMatch(source, /point of contact for colivers|persoa de referencia para coliver\/as|persona de referencia para coliver\/as/i);
    assert.doesNotMatch(source, /\(shared task\)|\(tarea compartida\)|\(tarefa compartida\)|rotate facilitation|rotan la facilitación|rotan a facilitación/);
  }
});

test('gives the volunteer two linked Sunday whiteboard tasks in every locale', () => {
  const expectedHref = 'https://suministros.anceu.com';
  const fixtures = [
    [peopleEs, ['Enviar foto de la pizarra de bebidas', 'Enviar foto de la pizarra de lavandería'], 'Domingo por la tarde'],
    [peopleEn, ['Send beverage whiteboard photo', 'Send laundry whiteboard photo'], 'Sunday afternoon'],
    [peopleGl, ['Enviar foto da pizarra de bebidas', 'Enviar foto da pizarra da lavandería'], 'Domingo pola tarde'],
  ];

  for (const [people, taskNames, when] of fixtures) {
    for (const taskName of taskNames) {
      const task = voluntaria(people)?.tasks.weekly.items.find(item => item.name === taskName);
      assert.equal(task?.href, expectedHref, `${taskName} must open the task app`);
      assert.equal(task?.when, when, `${taskName} must be scheduled on Sunday afternoon`);
    }
  }
});

test('keeps the volunteer dishwasher and bins schedule in every locale', () => {
  const expected = {
    es: [
      ['Vaciar el lavavajillas por la mañana (entre semana)', 'Lunes a viernes a las 9:00'],
      ['Llevar las basuras (entre semana)', 'Lunes a viernes a lo largo del día'],
      ['Poner lavavajillas después de comer (entre semana)', 'Lunes a viernes a las 16:00'],
      ['Poner lavavajillas por la noche (entre semana)', 'Lunes a viernes a las 22:00'],
    ],
    en: [
      ['Empty the dishwasher in the morning (weekdays)', 'Monday to Friday at 9:00'],
      ['Take out the bins (weekdays)', 'Monday to Friday throughout the day'],
      ['Run dishwasher after lunch (weekdays)', 'Monday to Friday at 16:00'],
      ['Run dishwasher at night (weekdays)', 'Monday to Friday at 22:00'],
    ],
    gl: [
      ['Baleirar o lavalouza pola mañá (entre semana)', 'Luns a venres ás 9:00'],
      ['Levar o lixo (entre semana)', 'Luns a venres ao longo do día'],
      ['Poñer lavalouza despois de comer (entre semana)', 'Luns a venres ás 16:00'],
      ['Poñer lavalouza pola noite (entre semana)', 'Luns a venres ás 22:00'],
    ],
  };

  for (const [locale, tasks] of Object.entries(expected)) {
    const items = voluntaria(peopleByLocale[locale]).tasks.weekly.items;
    for (const [name, when] of tasks) {
      assert.equal(items.find(item => item.name === name)?.when, when, `${locale}: ${name}`);
    }
  }
});

test('adds the weekly tupper lids task (30 min) to the volunteer and sums it into the weekly total', () => {
  const expected = {
    es: {
      name: 'Poner tapas a los tuppers',
      desc: 'Coger todos los tuppers y ponerles tapa. Los que no tengan tapa, meterlos en la caja de tapas y botes perdidos.',
      when: 'Una vez a la semana',
      total: 'Total semanal (suma por ocurrencia): 17h 10min',
    },
    en: {
      name: 'Put lids on the tupperware',
      desc: 'Gather all the tupperware and put their lids on. Any container without a lid goes into the lost lids and jars box.',
      when: 'Once a week',
      total: 'Weekly total (sum per occurrence): 17h 10min',
    },
    gl: {
      name: 'Poñer tapas aos tuppers',
      desc: 'Coller todos os tuppers e poñerlles tapa. Os que non teñan tapa, metelos na caixa de tapas e botes perdidos.',
      when: 'Unha vez á semana',
      total: 'Total semanal (suma por ocorrencia): 17h 10min',
    },
  };

  for (const [locale, cfg] of Object.entries(expected)) {
    const weekly = voluntaria(peopleByLocale[locale]).tasks.weekly;
    const task = weekly.items.find(item => item.name === cfg.name);
    assert.equal(task?.time, '30 min');
    assert.equal(task?.desc, cfg.desc);
    assert.equal(task?.when, cfg.when);
    assert.equal(weekly.total, cfg.total);
  }
});

test('weekly total matches the sum of the volunteer weekly task times', () => {
  const minutes = (time) => {
    const perWeek = time.match(/=\s*(\d+)\s*min/);
    if (perWeek) return Number(perWeek[1]);
    const plain = time.match(/^(\d+)\s*min$/);
    assert.ok(plain, `unexpected time format: ${time}`);
    return Number(plain[1]);
  };
  for (const [locale, people] of Object.entries(peopleByLocale)) {
    const weekly = voluntaria(people).tasks.weekly;
    const sum = weekly.items.reduce((acc, item) => acc + minutes(item.time), 0);
    assert.equal(sum, 17 * 60 + 10, `${locale}: weekly minutes`);
  }
});

test('adds arrival shelf cleaning and daily visual interior checks in all languages', () => {
  assert.match(localeSources.es, /Preparar balda de nevera y espacio de comida seca para una llegada/);
  assert.match(localeSources.es, /habitación 105.*balda.*105.*espacio 105.*comida seca/is);
  assert.match(localeSources.es, /cojines.*Chill House.*tazas.*ropa.*objetos/is);

  assert.match(localeSources.en, /Prepare fridge shelf and dry-food space for an arrival/);
  assert.match(localeSources.en, /cushions.*Chill House.*cups.*clothes.*objects/is);

  assert.match(localeSources.gl, /Preparar balda de neveira e espazo de comida seca para unha chegada/);
  assert.match(localeSources.gl, /coxíns.*Chill House.*tazas.*roupa.*obxectos/is);

  assert.match(personBlock(localeSources.es, 'voluntaria'), /Preparar balda de nevera y espacio de comida seca para una llegada/);
});

test('uses the new morning kitchen checklist on weekdays and weekends in all languages', () => {
  const descriptions = {
    es: 'Vaciar el lavavajillas, tirar las basuras, tirar la comida que esté mala en las neveras y llevar las tazas a la cafetería.',
    en: 'Empty the dishwasher, take out the bins, throw away spoiled food from the fridges and take cups back to the cafeteria.',
    gl: 'Baleirar o lavalouza, tirar o lixo, tirar a comida que estea mala nas neveiras e levar as tazas á cafetería.',
  };

  for (const [locale, description] of Object.entries(descriptions)) {
    assert.equal(localeSources[locale].split(description).length - 1, 2, `${locale} kitchen description must appear twice`);
  }
});

test('generates person routes, a merged opening checklist and redirects for old Petra/Karen URLs', () => {
  for (const page of [
    'src/pages/[person].astro',
    'src/pages/en/[person].astro',
    'src/pages/gl/[person].astro',
  ]) {
    const source = read(page);
    assert.doesNotMatch(source, /person: 'volunteers'|person: 'uxia'/);
    assert.match(source, /people\.map\(p => \(\{ params: \{ person: p\.id \} \}\)\)/);
  }

  for (const source of Object.values(localeSources)) {
    assert.doesNotMatch(source, /person: 'volunteers'|person: 'uxia'|person: 'petra'|person: 'karen'/);
    assert.equal(source.split("person: 'voluntaria'").length - 1, 1, 'one merged opening checklist group');
  }

  const config = read('astro.config.mjs');
  for (const prefix of ['', '/en', '/gl']) {
    for (const old of ['petra', 'karen']) {
      assert.ok(config.includes(`'${prefix}/${old}': '${prefix}/voluntaria'`), `missing redirect ${prefix}/${old}`);
    }
  }

  const layout = read('src/layouts/Layout.astro');
  assert.match(layout, /--voluntaria:/);
  assert.doesNotMatch(layout, /petra|karen|uxia/);
});

test('places the freezer stop between the small and large coworking during onboarding', () => {
  const labels = {
    es: ['Piscina, finca y coworking pequeño', 'Congelador — bajo el coworking', 'Coworking grande'],
    en: ['Pool, grounds & small coworking', 'Freezer — under the coworking', 'Large coworking'],
    gl: ['Piscina, finca e coworking pequeno', 'Conxelador — baixo o coworking', 'Coworking grande'],
  };

  for (const [locale, [small, freezer, large]] of Object.entries(labels)) {
    const source = localeSources[locale];
    assert.ok(source.indexOf(small) < source.indexOf(freezer), `${locale}: freezer must follow small coworking`);
    assert.ok(source.indexOf(freezer) < source.indexOf(large), `${locale}: freezer must precede large coworking`);
    assert.equal(source.split(freezer).length - 1, 1, `${locale}: freezer stop must not be duplicated`);
  }
});

test('limits the house meeting and keeps the pre-meeting Slack reminder', () => {
  const es = personBlock(localeSources.es, 'voluntaria');
  assert.match(es, /Mandar recordatorio por Slack antes de la house meeting/);
  assert.match(es, /si alguien quiere proponer un plan.*hable con alguien del equipo/is);
  assert.match(es, /House meeting', time: '15 min'/);
  assert.match(es, /No debe durar más de 15 minutos/);

  const en = personBlock(localeSources.en, 'voluntaria');
  assert.match(en, /Send a Slack reminder before the house meeting/);
  assert.match(en, /House meeting', time: '15 min'/);

  const gl = personBlock(localeSources.gl, 'voluntaria');
  assert.match(gl, /Mandar recordatorio por Slack antes da house meeting/);
  assert.match(gl, /House meeting', time: '15 min'/);
});

test('adds fridge labelling and teaspoon tasks right after the morning kitchen tasks in every locale', () => {
  const expected = {
    es: {
      people: peopleEs,
      tasks: ['Etiquetar lo abierto en las neveras', 'Subir cucharillas a la cafetería'],
      se: { kitchen: 'Tareas de cocina de mañana (entre semana)', time: '5 min × 5 = 25 min/sem', when: 'Lunes a viernes antes de las 10:00', total: 'Total semanal (según frecuencia real): 13h 20min' },
      voluntaria: { kitchen: 'Tareas de cocina de mañana (fin de semana)', time: '5 min × 2 = 10 min/sem', when: 'Sábado y domingo antes de las 10:00' },
    },
    en: {
      people: peopleEn,
      tasks: ['Label opened food in the fridges', 'Bring teaspoons up to the cafeteria'],
      se: { kitchen: 'Morning kitchen tasks (weekdays)', time: '5 min × 5 = 25 min/week', when: 'Monday to Friday before 10:00', total: 'Weekly total (by actual frequency): 13h 20min' },
      voluntaria: { kitchen: 'Morning kitchen tasks (weekend)', time: '5 min × 2 = 10 min/week', when: 'Saturday and Sunday before 10:00' },
    },
    gl: {
      people: peopleGl,
      tasks: ['Etiquetar o aberto nas neveiras', 'Subir culleriñas á cafetería'],
      se: { kitchen: 'Tarefas de cociña de mañá (entre semana)', time: '5 min × 5 = 25 min/sem', when: 'Luns a venres antes das 10:00', total: 'Total semanal (segundo frecuencia real): 13h 20min' },
      voluntaria: { kitchen: 'Tarefas de cociña de mañá (fin de semana)', time: '5 min × 2 = 10 min/sem', when: 'Sábado e domingo antes das 10:00' },
    },
  };

  for (const [locale, { people, tasks, se, voluntaria }] of Object.entries(expected)) {
    for (const [id, cfg] of [['se', se], ['voluntaria', voluntaria]]) {
      const items = people.find(person => person.id === id)?.tasks.weekly.items ?? [];
      const kitchenIndex = items.findIndex(item => item.name === cfg.kitchen);
      assert.notEqual(kitchenIndex, -1, `${locale}/${id} is missing ${cfg.kitchen}`);
      tasks.forEach((name, offset) => {
        const task = items[kitchenIndex + 1 + offset];
        assert.equal(task?.name, name, `${locale}/${id}: ${name} must follow the morning kitchen task`);
        assert.equal(task?.time, cfg.time);
        assert.equal(task?.when, cfg.when);
        assert.ok(task?.desc, `${locale}/${id}: ${name} needs a description`);
      });
    }
    const seWeekly = people.find(person => person.id === 'se')?.tasks.weekly;
    assert.equal(seWeekly?.total, se.total);
  }
});
