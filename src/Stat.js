import "./App.css";
import "./tailwind.css";

import Thurgau1 from "./pictures/thurgau1.jpg";
import Thurgau2 from "./pictures/thurgau2.jpg";
import Thurgau3 from "./pictures/thurgau3.jpg";
import Thurgau4 from "./pictures/thurgau4.jpg";
import Thurgau5 from "./pictures/thurgau5.jpg";
import Thurgau7 from "./pictures/thurgau7.jpg";
import Thurgau8 from "./pictures/thurgau8.jpg";
import Thurgau9 from "./pictures/thurgau9.jpg";
import Thurgau10 from "./pictures/thurgau10.jpg";
import Thurgau11 from "./pictures/thurgau11.jpg";
import Thurgau12 from "./pictures/thurgau12.jpg";
import infopic from "./pictures/info.png";

import { useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

var data = [];
var ready = true;
var piedataone = {};
var piedatatwo = {};
var piedatathree = {};
var piedatafour = {};
var piedatafive = {};
var piedatasix = {};
var linedata = {};
var options = {};
var a;
var b;
var c;

function App() {
  const [stand, setStand] = useState(0);

  daten();
  Piedataf();
  Piedatatwof();
  Piedatathreef();
  Piedatafourf();
  Piedatafivef();
  Piedatasixf();
  linedataf();
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

  const stufea = [
    { stufe: "Kindergartenstufe" },
    { stufe: "Primarstufe" },
    { stufe: "Sekundarstufe I" },
    { stufe: "Sekundarstufe II" },
    { stufe: "Tertiärstufe" },
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
            "rgb(2, 75, 122)",
            "rgb(68, 165, 194)",
            "rgb(255, 174, 73)",
            "rgb(222, 102, 62)",
            "rgb(255, 145, 43)",
          ],
          borderColor: ["white", "white", "white", "white", "white"],
          borderWidth: 2,
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
          backgroundColor: ["rgb(68, 165, 194)", "rgb(229, 120, 114)"],
          borderColor: ["white", "white"],
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
          backgroundColor: ["rgb(229, 120, 114)", "rgb(71, 176, 170)"],
          borderColor: ["white", "white"],
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
            "rgb(71, 176, 170)",
            "rgb(2, 75, 122)",
            "rgb(68, 165, 194)",
            "rgb(255, 174, 73)",
            "rgb(222, 102, 62)",
            "rgb(255, 145, 43)",
          ],
          borderColor: ["white", "white", "white", "white", "white", "white"],
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
          backgroundColor: ["rgb(68, 165, 194)", "rgb(255, 174, 73)"],
          borderColor: ["white", "white"],
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

          backgroundColor: ["rgb(255, 174, 73)", "rgb(68, 165, 194)"],
          borderColor: ["white", "white"],
          borderWidth: 2,
        },
      ],
    };
  }

  function linedataf() {
    var i = 0;
    var x = 0;
    var t = 0;
    var p = 0;
    var xa07 = 0;
    var xa08 = 0;
    var xa09 = 0;
    var xa10 = 0;
    var xa11 = 0;
    var xa12 = 0;
    var xa13 = 0;
    var xa14 = 0;
    var xa15 = 0;
    var xa16 = 0;
    var xa17 = 0;
    var xa18 = 0;
    var xa19 = 0;
    var xb07 = 0;
    var xb08 = 0;
    var xb09 = 0;
    var xb10 = 0;
    var xb11 = 0;
    var xb12 = 0;
    var xb13 = 0;
    var xb14 = 0;
    var xb15 = 0;
    var xb16 = 0;
    var xb17 = 0;
    var xb18 = 0;
    var xb19 = 0;

    for (i = 0; i < data.length; i++) {
      if ("2007" === data[i][1] && data[i][2] === b) {
        xa07 = xa07 + parseInt(data[i][8], 10);
      } else if ("2008" === data[i][1] && data[i][2] === b) {
        xa08 = xa08 + parseInt(data[i][8], 10);
      } else if ("2009" === data[i][1] && data[i][2] === b) {
        xa09 = xa09 + parseInt(data[i][8], 10);
      } else if ("2010" === data[i][1] && data[i][2] === b) {
        xa10 = xa10 + parseInt(data[i][8], 10);
      } else if ("2011" === data[i][1] && data[i][2] === b) {
        xa11 = xa11 + parseInt(data[i][8], 10);
      } else if ("2012" === data[i][1] && data[i][2] === b) {
        xa12 = xa12 + parseInt(data[i][8], 10);
      } else if ("2013" === data[i][1] && data[i][2] === b) {
        xa13 = xa13 + parseInt(data[i][8], 10);
      } else if ("2014" === data[i][1] && data[i][2] === b) {
        xa14 = xa14 + parseInt(data[i][8], 10);
      } else if ("2015" === data[i][1] && data[i][2] === b) {
        xa15 = xa15 + parseInt(data[i][8], 10);
      } else if ("2016" === data[i][1] && data[i][2] === b) {
        xa16 = xa16 + parseInt(data[i][8], 10);
      } else if ("2017" === data[i][1] && data[i][2] === b) {
        xa17 = xa17 + parseInt(data[i][8], 10);
      } else if ("2018" === data[i][1] && data[i][2] === b) {
        xa18 = xa18 + parseInt(data[i][8], 10);
      } else if ("2019" === data[i][1] && data[i][2] === b) {
        xa19 = xa19 + parseInt(data[i][8], 10);
      } else if ("2007" === data[i][1] && data[i][2] === c) {
        xb07 = xb07 + parseInt(data[i][8], 10);
      } else if ("2008" === data[i][1] && data[i][2] === c) {
        xb08 = xb08 + parseInt(data[i][8], 10);
      } else if ("2009" === data[i][1] && data[i][2] === c) {
        xb09 = xb09 + parseInt(data[i][8], 10);
      } else if ("2010" === data[i][1] && data[i][2] === c) {
        xb10 = xb10 + parseInt(data[i][8], 10);
      } else if ("2011" === data[i][1] && data[i][2] === c) {
        xb11 = xb11 + parseInt(data[i][8], 10);
      } else if ("2012" === data[i][1] && data[i][2] === c) {
        xb12 = xb12 + parseInt(data[i][8], 10);
      } else if ("2013" === data[i][1] && data[i][2] === c) {
        xb13 = xb13 + parseInt(data[i][8], 10);
      } else if ("2014" === data[i][1] && data[i][2] === c) {
        xb14 = xb14 + parseInt(data[i][8], 10);
      } else if ("2015" === data[i][1] && data[i][2] === c) {
        xb15 = xb15 + parseInt(data[i][8], 10);
      } else if ("2016" === data[i][1] && data[i][2] === c) {
        xb16 = xb16 + parseInt(data[i][8], 10);
      } else if ("2017" === data[i][1] && data[i][2] === c) {
        xb17 = xb17 + parseInt(data[i][8], 10);
      } else if ("2018" === data[i][1] && data[i][2] === c) {
        xb18 = xb18 + parseInt(data[i][8], 10);
      } else if ("2019" === data[i][1] && data[i][2] === c) {
        xb19 = xb19 + parseInt(data[i][8], 10);
      }
    }

    linedata = {
      labels: [
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
      ],
      datasets: [
        {
          label: b,
          data: [
            xa07,
            xa08,
            xa09,
            xa10,
            xa11,
            xa12,
            xa13,
            xa14,
            xa15,
            xa16,
            xa17,
            xa18,
            xa19,
          ],
          backgroundColor: "#e35656",
          borderColor: "#e35656",
        },
        {
          label: c,
          data: [
            xb07,
            xb08,
            xb09,
            xb10,
            xb11,
            xb12,
            xb13,
            xb14,
            xb15,
            xb16,
            xb17,
            xb18,
            xb19,
          ],
          backgroundColor: "#5685e3",
          borderColor: "#5685e3",
        },
      ],
    };

    options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };
  }

  const [selected, setSelected] = useState(auswahl[12]);
  const [stufesel, setstufe] = useState(stufea[2]);
  const [stufeselb, setstufeb] = useState(stufea[3]);
  a = selected.jahr;
  b = stufesel.stufe;
  c = stufeselb.stufe;

  function scrollstat() {
    var element = document.getElementById("st");
    element.scrollIntoView();
  }

  function scrollgame() {
    var element = document.getElementById("ga");
    element.scrollIntoView({ behavior: "smooth" });
  }

  function scrollgal() {
    var element = document.getElementById("sg");
    element.scrollIntoView({ behavior: "smooth" });
  }

  if (ready) {
    return (
      <div>
        <div className="top">
          <div className="topitem1"></div>
          <div className="topitem3"></div>
          <div className="topitemtitel">
            <h1 id="titel1">
              Lernende im Kanton <span id="tg">Thurgau</span>
            </h1>
            <p id="utitle">
              Diese Website gewährt den Zugriff auf die Daten aller Lernenden
              des Kantons Thurgau.<br></br>
              "Aus grosser Kraft folgt grosse Verantwortung."<br></br> -Stan Lee
            </p>
          </div>
          <div className="topitem7"></div>
          <div className="topitem5">
            <div className="item" id="ch1" onClick={scrollstat}>
              <h1>Statistik</h1>
            </div>
            <div className="item" id="ch2" onClick={scrollgame}>
              <h1>Spiel</h1>
            </div>
            <div className="item" id="ch3" onClick={scrollgal}>
              <h1>Gallerie</h1>
            </div>
          </div>
          <div className="topitem9"></div>
        </div>
        <div className="sponsor">
          <div className="sp1"></div>
          <div className="sp2"></div>
          <div className="sp3"></div>
        </div>
        <div className="statistik-outer">
          <div className="statistik-inner" id="st">
            <div className="statheader" id="zindex">
              <label
                className="block md:text-right mb-1 md:mb-0 pr-4"
                for="ddjahr"
                id="label"
              >
                Jahr auswählen
              </label>
              <div className="w-72 z-50">
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
            <div className="gridouter" id="zindex0">
              <div className="grid">
                <div className="item" id="itema">
                  <h1 className="stats">Anzahl Lernender pro Stufe in {a}</h1>
                  <div className="pie">
                    <Pie data={piedataone} options={{ responsive: true }} />
                  </div>
                </div>
                <div className="item" id="itemb">
                  <h1 className="stats">Geschlechter der Lernenden</h1>
                  <div className="pie">
                    <Pie data={piedatatwo} options={{ responsive: true }} />
                  </div>
                </div>
                <div className="item" id="itemc">
                  <h1 className="stats">Nationalität der Lernenden</h1>
                  <div className="pie">
                    <Pie data={piedatathree} options={{ responsive: true }} />
                  </div>
                </div>
                <div className="item" id="itemd">
                  <h1 className="stats">Verteilung der Lernenden</h1>
                  <div className="pie">
                    <Pie data={piedatafour} options={{ responsive: true }} />
                  </div>
                </div>
                <div className="item" id="iteme">
                  <h1 className="stats">Trägerschaft der Ausbildung</h1>
                  <div className="pie">
                    <Pie data={piedatafive} options={{ responsive: true }} />
                  </div>
                </div>
                <div className="item" id="itemf">
                  <h1 className="stats">Finanzierung der Ausbildung</h1>
                  <div className="pie">
                    <Pie data={piedatasix} options={{ responsive: true }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="statistik-inner">
            <div className="statheader2">
              <label
                className="block md:text-right mb-1 md:mb-0 pr-4"
                for="ddjahr"
                id="label"
              >
                Stufen auswählen
              </label>
              <div className="w-72" id="zindex">
                <Listbox value={stufesel} onChange={setstufe}>
                  <div className="relative mt-1" id="zindex">
                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                      <span className="block truncate">{stufesel.stufe}</span>
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
                        {stufea.map((person, personIdx) => (
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
                                  {person.stufe}
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
              <div className="w-72">
                <Listbox value={stufeselb} onChange={setstufeb}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                      <span className="block truncate">{stufeselb.stufe}</span>
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
                        {stufea.map((person, personIdx) => (
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
                                  {person.stufe}
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
              <div className="graph">
                <div className="itemgraph">
                  <Line data={linedata} options={options} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Game />
        <Gallerie />
        <Footer />
      </div>
    );
  } else {
    return <Loading />;
  }
}

function refreshPage() {
  window.location.reload(true);
}

function Loading() {
  var j = document.getElementById("spinner");
  if (j) {
    j.addEventListener("webkitAnimationIteration", refreshPage);
  }

  return (
    <div>
      <div class="spinner" id="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>
  );
}

function Game() {
  const [counter, setCounter] = useState(0);

  const [stop, setstop] = useState(false);

  const [stand, setStand] = useState(0);
  const [kanton, setKanton] = useState(0);
  const [jahr, setJahr] = useState(0);
  const [stufe, setStufe] = useState(0);
  const [schultyp, setSchultyp] = useState(0);
  const [geschlaecht, setGeschlaecht] = useState(0);
  const [nationalitaet, setNationalitaet] = useState(0);
  const [traegerschaft, setTraegerschaft] = useState(0);
  const [finanzierung, setFinanzierung] = useState(0);
  const [anzahl, setAnzahl] = useState(0);

  const [stand2, setStand2] = useState(0);
  const [kanton2, setKanton2] = useState(0);
  const [jahr2, setJahr2] = useState(0);
  const [stufe2, setStufe2] = useState(0);
  const [schultyp2, setSchultyp2] = useState(0);
  const [geschlaecht2, setGeschlaecht2] = useState(0);
  const [nationalitaet2, setNationalitaet2] = useState(0);
  const [traegerschaft2, setTraegerschaft2] = useState(0);
  const [finanzierung2, setFinanzierung2] = useState(0);
  const [anzahl2, setAnzahl2] = useState(0);

  async function getData(number, number2) {
    const response = await fetch("lernende.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);

    const Stand = rows[number].split(";")[0];
    const Kanton = rows[number].split(";")[1];
    const Jahr = rows[number].split(";")[2];
    const Stufe = rows[number].split(";")[3];
    const Schultyp = rows[number].split(";")[4];
    const Geschlaecht = rows[number].split(";")[5];
    const Nationalitaet = rows[number].split(";")[6];
    const Traegerschaft = rows[number].split(";")[7];
    const Finanzierung = rows[number].split(";")[8];
    const Anzahl = rows[number].split(";")[9];

    setStand(Stand);
    setKanton(Kanton);
    setJahr(Jahr);
    setStufe(Stufe);
    setSchultyp(Schultyp);
    setGeschlaecht(Geschlaecht);
    setNationalitaet(Nationalitaet);
    setTraegerschaft(Traegerschaft);
    setFinanzierung(Finanzierung);
    setAnzahl(Anzahl);

    const Stand2 = rows[number2].split(";")[0];
    const Kanton2 = rows[number2].split(";")[1];
    const Jahr2 = rows[number2].split(";")[2];
    const Stufe2 = rows[number2].split(";")[3];
    const Schultyp2 = rows[number2].split(";")[4];
    const Geschlaecht2 = rows[number2].split(";")[5];
    const Nationalitaet2 = rows[number2].split(";")[6];
    const Traegerschaft2 = rows[number2].split(";")[7];
    const Finanzierung2 = rows[number2].split(";")[8];
    const Anzahl2 = rows[number2].split(";")[9];

    setStand2(Stand2);
    setKanton2(Kanton2);
    setJahr2(Jahr2);
    setStufe2(Stufe2);
    setSchultyp2(Schultyp2);
    setGeschlaecht2(Geschlaecht2);
    setNationalitaet2(Nationalitaet2);
    setTraegerschaft2(Traegerschaft2);
    setFinanzierung2(Finanzierung2);
    setAnzahl2(Anzahl2);
  }

  useEffect(() => {
    getData(Math.floor(Math.random() * 1202), Math.floor(Math.random() * 1202));
  }, [1]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function clickHandler() {
    setstop(true);
    if (anzahl2 > 0 && anzahl > 0) {
      if (anzahl > anzahl2) {
        document.getElementById("colorchange1").style.backgroundColor =
          "#99C262";
        setCounter(counter + 1);
        setTimeout("timeout_trigger()", 2000);

        console.log("True");
      } else {
        document.getElementById("colorchange1").style.backgroundColor =
          "#e75252";
        setCounter(0);
        setTimeout("timeout_trigger()", 2000);
      }

      await sleep(2000);
      document.getElementById("colorchange1").style.backgroundColor = "white";
      getData(
        Math.floor(Math.random() * 1202),
        Math.floor(Math.random() * 1202)
      );
      setTimeout("timeout_trigger()", 2000);
    } else {
      document.getElementById("colorchange1").style.backgroundColor = "white";
      getData(
        Math.floor(Math.random() * 1202),
        Math.floor(Math.random() * 1202)
      );
      setTimeout("timeout_trigger()", 2000);
    }
    setstop(false);
  }

  async function clickHandler2() {
    setstop(true);
    const btn1 = "btn1";
    if (anzahl2 > 0 && anzahl > 0) {
      if (anzahl > anzahl2) {
        document.getElementById("colorchange2").style.backgroundColor =
          "#99C262";
        console.log("True");
        setCounter(counter + 1);
        setTimeout("timeout_trigger()", 2000);
      } else {
        document.getElementById("colorchange2").style.backgroundColor =
          "#e75252";
        setCounter(0);
        setTimeout("timeout_trigger()", 2000);
      }
      await sleep(2000);
      document.getElementById("colorchange2").style.backgroundColor = "white";
      getData(
        Math.floor(Math.random() * 1202),
        Math.floor(Math.random() * 1202)
      );
      setTimeout("timeout_trigger()", 2000);
    }
    setstop(false);
  }

  function info() {
    alert(
      "Du sollst anhand der Unten in den Feldern angegebenen Daten entscheiden in welchem der zwei Felder wohl mehr lernende waren."
    );
  }

  return (
    <div className="App" id="ga">
      <div className="infobulk">
        <div id="gameinner">
          <h1 id="gametitle">Wo gab es mehr Lernende?</h1>
        </div>
        <div id="gameinner">
          <img className="info" src={infopic} alt="nopic" onClick={info}></img>
        </div>
      </div>
      <div>
        <div className="grid1">
          <button
            disabled={stop}
            className="item1"
            id="colorchange1"
            onClick={clickHandler}
          >
            <div className="inner">
              <h1 className="stats1">Jahr: {jahr}</h1>
              <h1 className="stats1">Stufe: {stufe}</h1>
              <h1 className="stats1">Schulytp: {schultyp}</h1>
              <h1 className="stats1">Geschlecht: {geschlaecht}</h1>
              <h1 className="stats1">Nationalität: {nationalitaet}</h1>
              <h1 className="stats1">Trägerschaft: {traegerschaft}</h1>
              <h1 className="stats1">Finanzierung: {finanzierung}</h1>
            </div>
          </button>
          <button
            disabled={stop}
            className="item1"
            id="colorchange2"
            onClick={clickHandler2}
          >
            <div className="inner">
              <h1 className="stats1">Jahr: {jahr2}</h1>
              <h1 className="stats1">Stufe: {stufe2}</h1>
              <h1 className="stats1">Schulytp: {schultyp2}</h1>
              <h1 className="stats1">Geschlecht: {geschlaecht2}</h1>
              <h1 className="stats1">Nationalität: {nationalitaet2}</h1>
              <h1 className="stats1">Trägerschaft: {traegerschaft2}</h1>
              <h1 className="stats1">Finanzierung: {finanzierung2}</h1>
            </div>
          </button>
        </div>
        <div id="counterhead">
          <div className="item2">
            <h1>Score: {counter}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

function Gallerie() {
  return (
    <div>
      <div className="centertitle">
        <h1 className="titlegal" id="sg">
          Gallerie
        </h1>
      </div>
      <div className="gridcenter">
        <div className="photo-grid">
          <div
            className="card card-tall card-wide"
            style={{ backgroundImage: `url(${Thurgau1})` }}
          ></div>
          <div
            className="card card-tall card-wide"
            style={{ backgroundImage: `url(${Thurgau2})` }}
          ></div>
          <div
            className="card card-tall card-wide"
            style={{ backgroundImage: `url(${Thurgau3})` }}
          ></div>
          <div
            className="card card-tall card-wide"
            style={{ backgroundImage: `url(${Thurgau4})` }}
          ></div>
          <div
            className="card card-tall card-wide"
            style={{ backgroundImage: `url(${Thurgau5})` }}
          ></div>
          <div
            className="card card-tall card-wide"
            style={{ backgroundImage: `url(${Thurgau7})` }}
          ></div>
          <div
            className="card card-tall card-wide"
            style={{ backgroundImage: `url(${Thurgau8})` }}
          ></div>
          <div
            className="card card-tall card-wide"
            style={{ backgroundImage: `url(${Thurgau9})` }}
          ></div>
          <div
            className="card card-tall card-wide"
            style={{ backgroundImage: `url(${Thurgau10})` }}
          ></div>
          <div
            className="card card-tall card-wide"
            style={{ backgroundImage: `url(${Thurgau11})` }}
          ></div>
          <div
            className="card card-tall card-wide"
            style={{ backgroundImage: `url(${Thurgau12})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer-outer">
      <div className="footer-inner">
        <h1>
          Kontakt: andrej.bulavcak@stud.kftg.ch / clemens.frei@stud.kftg.ch
        </h1>
        <h1>
          Diese Website wurde im Rahmen der Projektwoche 2021 in der Kanti
          Frauenfeld realisiert.<br></br>Die benutzten Daten wurden von
          opendata.swiss bereitgestellt.
        </h1>
      </div>
    </div>
  );
}

export default App;
