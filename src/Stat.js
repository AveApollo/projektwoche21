import "./App.css";
import "./tailwind.css";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Pie } from "react-chartjs-2";

var data = [];
var ready = false;
var piedataone = {};
var piedatatwo = {};
var piedatathree = {};
var piedatafour = {};
var piedatafive = {};
var piedatasix = {};
var a;

function App() {
  const [stand, setStand] = useState(0);

  daten();
  Piedataf();
  Piedatatwof();
  Piedatathreef();
  Piedatafourf();
  Piedatafivef();
  Piedatasixf();
  async function daten() {
    const tabelle = await fetch("lernende.csv");
    const daten = await tabelle.text();
    const zeilen = daten.split("\n").slice(1);
    zeilen.forEach((spalte) => {
      const column = spalte.split(";").slice(1);
      if (data.length < 1202) {
        data.push(column);
      }
    });
    setStand(data);
    ready = true;
  }

  const auswahl = [
    { jahr: "2007" },
    { jahr: "2008" },
    { jahr: "2009" },
    { jahr: "2010" },
    { jahr: "2011" },
    { jahr: "2012" },
    { jahr: "2013" },
    { jahr: "2014" },
    { jahr: "2015" },
    { jahr: "2016" },
    { jahr: "2017" },
    { jahr: "2018" },
    { jahr: "2019" },
  ];

  function Piedataf() {
    var i = 0;
    var xkind = 0;
    var xprim = 0;
    var xsekI = 0;
    var xsekII = 0;
    var xter = 0;
    for (i = 0; i < data.length; i++) {
      if (a === data[i][1] && data[i][2] === "Kindergartenstufe") {
        xkind = xkind + parseInt(data[i][8], 10);
      } else if (a === data[i][1] && data[i][2] === "Primarstufe") {
        xprim = xprim + parseInt(data[i][8], 10);
      } else if (a === data[i][1] && data[i][2] === "Sekundarstufe I") {
        xsekI = xsekI + parseInt(data[i][8], 10);
      } else if (a === data[i][1] && data[i][2] === "Sekundarstufe II") {
        xsekII = xsekII + parseInt(data[i][8], 10);
      } else if (a === data[i][1] && data[i][2] === "Tertiärstufe") {
        xter = xter + parseInt(data[i][8], 10);
      }
    }
    piedataone = {
      labels: [
        "Kindergartenstufe",
        "Primarstufe",
        "Sekundarstufe I",
        "Sekundarstufe II",
        "Tertiärstufe",
      ],
      datasets: [
        {
          label: "Anzahl",
          data: [xkind, xprim, xsekI, xsekII, xter],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  }

  function Piedatatwof() {
    var i = 0;
    var xmen = 0;
    var xwmen = 0;
    for (i = 0; i < data.length; i++) {
      if (a === data[i][1] && data[i][4] === "M") {
        xmen = xmen + parseInt(data[i][8], 10);
      } else if (a === data[i][1] && data[i][4] === "F") {
        xwmen = xwmen + parseInt(data[i][8], 10);
      }
    }

    piedatatwo = {
      labels: ["Männer", "Frauen"],
      datasets: [
        {
          label: "Anzahl",
          data: [xmen, xwmen],
          backgroundColor: [
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 99, 132, 0.2)",
          ],
          borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
          borderWidth: 2,
        },
      ],
    };
  }

  function Piedatathreef() {
    var i = 0;
    var xch = 0;
    var xaus = 0;
    for (i = 0; i < data.length; i++) {
      if (a === data[i][1] && data[i][5] === "CH") {
        xch = xch + parseInt(data[i][8], 10);
      } else if (a === data[i][1] && data[i][5] === "Ausländer") {
        xaus = xaus + parseInt(data[i][8], 10);
      }
    }

    piedatathree = {
      labels: ["CH", "Ausländer"],
      datasets: [
        {
          label: "Anzahl",
          data: [xch, xaus],
          backgroundColor: [
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 99, 132, 0.2)",
          ],
          borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
          borderWidth: 2,
        },
      ],
    };
  }

  function Piedatafourf() {
    var i = 0;
    var xhus = 0;
    var xvs = 0;
    var xmit = 0;
    var xba = 0;
    var xbfs = 0;
    var xhb = 0;
    for (i = 0; i < data.length; i++) {
      if (a === data[i][1] && data[i][3] === "Heim- und Sonderschule") {
        xhus = xhus + parseInt(data[i][8], 10);
      } else if (a === data[i][1] && data[i][3] === "Volksschule") {
        xvs = xvs + parseInt(data[i][8], 10);
      } else if (a === data[i][1] && data[i][3] === "Mittelschule") {
        xmit = xmit + parseInt(data[i][8], 10);
      } else if (a === data[i][1] && data[i][3] === "Brückenangebot") {
        xba = xba + parseInt(data[i][8], 10);
      } else if (a === data[i][1] && data[i][3] === "Berufsfachschule") {
        xbfs = xbfs + parseInt(data[i][8], 10);
      } else if (a === data[i][1] && data[i][3] === "Höhere Berufsbildung") {
        xhb = xhb + parseInt(data[i][8], 10);
      }
    }

    piedatafour = {
      labels: [
        "Heim- und Sonderschule",
        "Volksschule",
        "Mittelschule",
        "Brückenangebot",
        "Berufsfachschule",
        "Höhere Berufsbildung",
      ],
      datasets: [
        {
          label: "Anzahl",
          data: [xhus, xvs, xmit, xba, xbfs, xhb],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  }

  function Piedatafivef() {
    var i = 0;
    var xoef = 0;
    var xpriv = 0;
    for (i = 0; i < data.length; i++) {
      if (a === data[i][1] && data[i][6] === "oef") {
        xoef = xoef + parseInt(data[i][8], 10);
      } else if (a === data[i][1] && data[i][6] === "priv") {
        xpriv = xpriv + parseInt(data[i][8], 10);
      }
    }

    piedatafive = {
      labels: ["Öffentlich", "Privat"],
      datasets: [
        {
          label: "Anzahl",
          data: [xoef, xpriv],
          backgroundColor: [
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 99, 132, 0.2)",
          ],
          borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
          borderWidth: 2,
        },
      ],
    };
  }

  function Piedatasixf() {
    var i = 0;
    var xoef = 0;
    var xpriv = 0;
    for (i = 0; i < data.length; i++) {
      if (a === data[i][1] && data[i][7] === "oef") {
        xoef = xoef + parseInt(data[i][8], 10);
      } else if (a === data[i][1] && data[i][7] === "priv") {
        xpriv = xpriv + parseInt(data[i][8], 10);
      }
    }

    piedatasix = {
      labels: ["Öffentlich", "Privat"],
      datasets: [
        {
          label: "Anzahl",
          data: [xoef, xpriv],

          
          backgroundColor: [
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 99, 132, 0.2)",
          ],
          borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
          borderWidth: 2,
        },
      ],
    };
  }

  function refreshPage() {
    window.location.reload(true);
  }

  const [selected, setSelected] = useState(auswahl[0]);
  a = selected.jahr;

  if (ready) {
    return (
      <div>
        <div id="background"></div>
        <div className="statistik-outer">
          <div className="statistik-inner">
            <div className="statheader">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="ddjahr"
              >
                Jahr auswählen
              </label>
              <div className="w-72">
                <Listbox value={selected} onChange={setSelected}>
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
                              `${
                                active
                                  ? "text-amber-900 bg-amber-100"
                                  : "text-gray-900"
                              }
                            cursor-default select-none relative py-2 pl-10 pr-4`
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`${
                                    selected ? "font-medium" : "font-normal"
                                  } block truncate`}
                                >
                                  {person.jahr}
                                </span>
                                {selected ? (
                                  <span
                                    className={`${
                                      active
                                        ? "text-amber-600"
                                        : "text-amber-600"
                                    }
                                  absolute inset-y-0 left-0 flex items-center pl-3`}
                                  >
                                    <CheckIcon
                                      className="w-5 h-5"
                                      aria-hidden="true"
                                    />
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
                <div className="item">
                  <h1 className="stats">Anzahl lernender pro Stufe in {a}</h1>
                  <div className="pie">
                    <Pie data={piedataone} options={{ responsive: true }} />
                  </div>
                </div>
                <div className="item">
                  <h1 className="stats">Geschlechter der lernenden</h1>
                  <div className="pie">
                    <Pie data={piedatatwo} options={{ responsive: true }} />
                  </div>
                </div>
                <div className="item">
                  <h1 className="stats">Nationalität der lernenden</h1>
                  <div className="pie">
                    <Pie data={piedatathree} options={{ responsive: true }} />
                  </div>
                </div>
                <div className="item">
                  <h1 className="stats">
                    Verteilung der lernenden auf Schultypen
                  </h1>
                  <div className="pie">
                    <Pie data={piedatafour} options={{ responsive: true }} />
                  </div>
                </div>
                <div className="item">
                  <h1 className="stats">
                    Trägerschaft
                  </h1>
                  <div className="pie">
                    <Pie data={piedatafive} options={{ responsive: true }} />
                  </div>
                </div>
                <div className="item">
                  <h1 className="stats">
                    Finanzierung
                  </h1>
                  <div className="pie">
                    <Pie data={piedatasix} options={{ responsive: true}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>reloasd</h1>
        <button onClick={refreshPage}>Refresh Page</button>
      </div>
    );
  }
}

export default App;
