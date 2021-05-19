import './App.css';
import './tailwind.css';

import { Fragment, useState, useEffect, useRef, initialValue } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Pie } from 'react-chartjs-2';

function App() {

  const [stand, setStand] = useState(0);
  daten();

  var kind07;
  var loading = false;

  var xlabels = [];
  async function daten() {
    const tabelle = await fetch('lernende.csv');
    const daten = await tabelle.text();
    kind07 = 0;
    const zeilen = daten.split('\n').slice(1);
    zeilen.forEach(spalte => {
      const column = spalte.split(';').slice(1);
      const Kanton = spalte[0];
      const Jahr = spalte[1];
      const Stufe = spalte[2];
      const Schultyp = spalte[3];
      const Geschlaecht = spalte[4];
      const Nationalitaet = spalte[5];
      const Traegerschaft = spalte[6];
      const Finanzierung = spalte[7];
      const Anzahl = spalte[8];
      xlabels.push(column);

      if(column[1] == '2007' && column[2] == 'Kindergarten'){
        kind07 = kind07 + parseInt(column[8], 10);
      }
  });
  setStand(xlabels);
  loading = true;
  console.log(stand[0][0]);
  console.log(loading);
  //berechnen();
  }


  var b;
  const [anz, setanz] = useState(0);
  b = anz;

  function berechnen() {
    var i;
    var xkind = 0;
    for (i = 0; i < stand.length; i++) {
    if(a == stand[i][1] && stand[i][2] === 'Kindergartenstufe'){
      xkind = xkind + parseInt(stand[i][8], 10)
    }
}
setanz( anz + xkind);
console.log(xkind);
console.log(anz);
  }

  const auswahl = [
    { jahr: '2007' },
    { jahr: '2008' },
    { jahr: '2009' },
    { jahr: '2010' },
    { jahr: '2011' },
    { jahr: '2012' },
    { jahr: '2013' },
    { jahr: '2014' },
    { jahr: '2015' },
    { jahr: '2016' },
    { jahr: '2017' },
    { jahr: '2018' },
    { jahr: '2019' },
  ]
  
  const stufe = [
    { prop: 'Kindergartenstufe' },
    { prop: 'Primarstufe' },
    { prop: 'Sekundarstufe I' },
    { prop: 'Sekundarstufe II' },
    { prop: 'Tertiärstufe' },
  ]
  
  var a;
  const [selected, setSelected] = useState(auswahl[0]);
  a = selected.jahr;
  
  const piedata = {
      labels: ['Kindergartenstufe','Primarstufe','Sekundarstufe I','Sekundarstufe II','Tertiärstufe'],
       datasets: [
      {
        label: 'Anzahl',
        data: [3,5,6,4,1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
      
  };

if (loading){
  return (
    <div className="statistik">
        <div className="statheader">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="ddjahr">
          Jahr auswählen
        </label>
      <div className="w-72">
        <Listbox id="ddjahr" value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
              <span className="block truncate">{selected.jahr}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {auswahl.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                            cursor-default select-none relative py-2 pl-10 pr-4`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected ? 'font-medium' : 'font-normal'
                          } block truncate`}
                        >
                          {person.jahr}
                        </span>
                        {selected ? (
                          <span
                            className={`${
                              active ? 'text-amber-600' : 'text-amber-600'
                            }
                                  absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      </div>
      <div>
    <div className="grid">
      <div className="item" id="item"><h1>Anzahl lernenden pro Stufe in {a}</h1><div id="pie"><Pie data={piedata} options={{responsive: true}}/></div></div>
      <div className="item">2</div>
      <div className="item">3</div>
      <div className="item">4</div>
      <div className="item">5</div>
      <div className="item">6</div>
    </div>
    </div>
      </div> 
  );
}

else {
  return (
    <h1>LOADING...</h1>
  )
}


}

export default App;
