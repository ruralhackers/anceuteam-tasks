import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

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

test('replaces the generic volunteer with Uxía, Petra and Karen in every locale', () => {
  for (const [locale, source] of Object.entries(localeSources)) {
    assert.doesNotMatch(source, /id: 'volunteers'/, `${locale} still has generic volunteers`);
    for (const id of ['uxia', 'petra', 'karen']) {
      assert.match(source, new RegExp(`id: '${id}'`), `${locale} is missing ${id}`);
    }
  }
});

test('assigns the agreed Spanish responsibilities to each person', () => {
  const source = localeSources.es;
  const uxia = personBlock(source, 'uxia');
  const petra = personBlock(source, 'petra');
  const karen = personBlock(source, 'karen');

  for (const task of [
    'Conteo de suministros y lista de compra coliving',
    'Crear grupos de cenas',
    'Recoger groceries de Froiz',
    'Conteo de suministros',
    'Check espacios exteriores (entre semana)',
    'Revisión y orden de espacios interiores (entre semana)',
  ]) assert.ok(uxia.includes(task), `Uxía is missing ${task}`);

  for (const task of [
    'Onboarding',
    'Gestionar / organizar talleres en el coliving',
    'Mandar por Slack planes coliving de la semana',
    'House meeting',
    'Tareas de cocina de mañana (fin de semana)',
    'Revisión y orden de espacios interiores (fin de semana)',
  ]) assert.ok(petra.includes(task), `Petra is missing ${task}`);

  for (const task of [
    'Posts Instagram',
    'Anceu Inn (gestión fotos)',
    'Escribir un post semanal para el blog',
    'Fotografiar todos los espacios de Anceu',
    'Aprender y apoyar los onboardings',
  ]) assert.ok(karen.includes(task), `Karen is missing ${task}`);

  for (const block of [uxia, petra, karen]) {
    assert.match(block, /Actividades de community building \(rotación\)/);
    assert.match(block, /Reunión semanal con el equipo/);
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

test('generates person routes and opening checklists for the three named volunteers', () => {
  for (const page of [
    'src/pages/[person].astro',
    'src/pages/en/[person].astro',
    'src/pages/gl/[person].astro',
  ]) {
    const source = read(page);
    assert.doesNotMatch(source, /person: 'volunteers'/);
    for (const id of ['uxia', 'petra', 'karen']) assert.match(source, new RegExp(`person: '${id}'`));
  }

  for (const source of Object.values(localeSources)) {
    assert.doesNotMatch(source, /person: 'volunteers'/);
    for (const id of ['uxia', 'petra', 'karen']) assert.match(source, new RegExp(`person: '${id}'`));
  }
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

test('limits the house meeting and adds Petra’s pre-meeting Slack reminder', () => {
  const petraEs = personBlock(localeSources.es, 'petra');
  assert.match(petraEs, /Mandar recordatorio por Slack antes de la house meeting/);
  assert.match(petraEs, /si alguien quiere proponer un plan.*hable con alguien del equipo/is);
  assert.match(petraEs, /House meeting', time: '15 min'/);
  assert.match(petraEs, /No debe durar más de 15 minutos/);

  const petraEn = personBlock(localeSources.en, 'petra');
  assert.match(petraEn, /Send a Slack reminder before the house meeting/);
  assert.match(petraEn, /House meeting', time: '15 min'/);

  const petraGl = personBlock(localeSources.gl, 'petra');
  assert.match(petraGl, /Mandar recordatorio por Slack antes da house meeting/);
  assert.match(petraGl, /House meeting', time: '15 min'/);
});

test('applies the revised groceries, blog and whiteboard ownership', () => {
  const uxiaEs = personBlock(localeSources.es, 'uxia');
  const petraEs = personBlock(localeSources.es, 'petra');
  const karenEs = personBlock(localeSources.es, 'karen');

  assert.doesNotMatch(uxiaEs, /name: 'Lista compra coliving'/);
  assert.match(uxiaEs, /Conteo de suministros y lista de compra coliving/);
  assert.match(uxiaEs, /Recoger groceries de Froiz'.*when: 'Lunes'/);
  assert.match(uxiaEs, /Escribir en pizarra planes coliving de la semana/);
  assert.doesNotMatch(karenEs, /Escribir en pizarra planes coliving de la semana/);

  assert.match(karenEs, /Escribir un post semanal para el blog/);
  assert.match(karenEs, /Google Doc.*Agus y Afri/is);

  assert.doesNotMatch(uxiaEs, /Ser persona de referencia/);
  assert.doesNotMatch(petraEs, /Ser persona de referencia/);

  for (const source of Object.values(localeSources)) {
    assert.doesNotMatch(source, /point of contact for colivers|persoa de referencia para coliver\/as|persona de referencia para coliver\/as/i);
  }
});

test('makes package collection a shared situational task for all three', () => {
  for (const [locale, taskName] of Object.entries({
    es: 'Recogida de paquetes (tarea compartida)',
    en: 'Package collection (shared task)',
    gl: 'Recollida de paquetes (tarefa compartida)',
  })) {
    const source = localeSources[locale];
    assert.doesNotMatch(source, /Package collection \(weekdays\)|Package collection \(weekend\)|Recogida de paquetes \(entre semana\)|Recogida de paquetes \(fin de semana\)|Recollida de paquetes \(entre semana\)|Recollida de paquetes \(fin de semana\)/);

    for (const id of ['uxia', 'petra', 'karen']) {
      const block = personBlock(source, id);
      const situational = block.slice(block.indexOf('situational:'));
      assert.ok(situational.includes(taskName), `${locale}/${id} is missing the shared package task`);
      assert.match(situational, /1h\/week shared|1h\/semana compartida|1h\/sem compartida/);
    }
  }
});
