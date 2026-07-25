
const unitData = {
    length: {
        title: "Length",
        units: {
            m: { name: "Meter (m)", toBase: 1 },
            km: { name: "Kilometer (km)", toBase: 1000 },
            cm: { name: "Centimeter (cm)", toBase: 0.01 },
            mm: { name: "Millimeter (mm)", toBase: 0.001 },
            mi: { name: "Mile (mi)", toBase: 1609.344 },
            yd: { name: "Yard (yd)", toBase: 0.9144 },
            ft: { name: "Foot (ft)", toBase: 0.3048 },
            in: { name: "Inch (in)", toBase: 0.0254 }
        },
        defaultFrom: "m",
        defaultTo: "ft",
        referenceItems: [
            { from: "1 Meter", to: "3.28084 Feet" },
            { from: "1 Kilometer", to: "0.62137 Miles" },
            { from: "1 Inch", to: "2.54 Centimeters" },
            { from: "1 Yard", to: "3 Feet" }
        ]
    },
    weight: {
        title: "Weight",
        units: {
            kg: { name: "Kilogram (kg)", toBase: 1 },
            g: { name: "Gram (g)", toBase: 0.001 },
            mg: { name: "Milligram (mg)", toBase: 0.000001 },
            lb: { name: "Pound (lb)", toBase: 0.45359237 },
            oz: { name: "Ounce (oz)", toBase: 0.028349523125 }
        },
        defaultFrom: "kg",
        defaultTo: "lb",
        referenceItems: [
            { from: "1 Kilogram", to: "2.20462 Pounds" },
            { from: "1 Pound", to: "16 Ounces" },
            { from: "1 Gram", to: "1000 Milligrams" },
            { from: "1 Ounce", to: "28.3495 Grams" }
        ]
    },
    temperature: {
        title: "Temperature",
        units: {
            c: { name: "Celsius (°C)" },
            f: { name: "Fahrenheit (°F)" },
            k: { name: "Kelvin (K)" }
        },
        defaultFrom: "c",
        defaultTo: "f",
        referenceItems: [
            { from: "0 °Celsius", to: "32 °Fahrenheit" },
            { from: "100 °Celsius", to: "212 °Fahrenheit" },
            { from: "0 °Celsius", to: "273.15 Kelvin" },
            { from: "98.6 °Fahrenheit", to: "37 °Celsius (Body Temp)" }
        ]
    },
    currency: {
        title: "Currency",
        units: {
            usd: { name: "US Dollar ($)", toBase: 1 },
            eur: { name: "Euro (€)", toBase: 0.92 },
            gbp: { name: "British Pound (£)", toBase: 0.78 },
            inr: { name: "Indian Rupee (₹)", toBase: 83.5 },
            jpy: { name: "Japanese Yen (¥)", toBase: 155.0 },
            aud: { name: "Australian Dollar (A$)", toBase: 1.52 },
            cad: { name: "Canadian Dollar (C$)", toBase: 1.37 },
            chf: { name: "Swiss Franc (CHF)", toBase: 0.89 },
            cny: { name: "Chinese Yuan (¥)", toBase: 7.25 }
        },
        defaultFrom: "usd",
        defaultTo: "inr",
        referenceItems: [
            { from: "1 USD", to: "83.50 INR" },
            { from: "1 USD", to: "0.92 EUR" },
            { from: "1 GBP", to: "1.28 USD" },
            { from: "1 EUR", to: "90.76 INR" }
        ]
    },
    area: {
        title: "Area",
        units: {
            m2: { name: "Square Meter (m²)", toBase: 1 },
            km2: { name: "Square Kilometer (km²)", toBase: 1000000 },
            cm2: { name: "Square Centimeter (cm²)", toBase: 0.0001 },
            ft2: { name: "Square Foot (sq ft)", toBase: 0.092903 },
            yd2: { name: "Square Yard (sq yd)", toBase: 0.836127 },
            mi2: { name: "Square Mile (sq mi)", toBase: 2589988.11 },
            acre: { name: "Acre", toBase: 4046.86 },
            ha: { name: "Hectare (ha)", toBase: 10000 }
        },
        defaultFrom: "m2",
        defaultTo: "ft2",
        referenceItems: [
            { from: "1 Hectare", to: "10,000 m²" },
            { from: "1 Acre", to: "43,560 sq ft" },
            { from: "1 sq meter", to: "10.7639 sq ft" },
            { from: "1 sq mile", to: "640 Acres" }
        ]
    },
    volume: {
        title: "Volume",
        units: {
            l: { name: "Liter (L)", toBase: 1 },
            ml: { name: "Milliliter (mL)", toBase: 0.001 },
            m3: { name: "Cubic Meter (m³)", toBase: 1000 },
            gal: { name: "US Gallon (gal)", toBase: 3.78541 },
            qt: { name: "US Quart (qt)", toBase: 0.946353 },
            pt: { name: "US Pint (pt)", toBase: 0.473176 },
            cup: { name: "US Cup", toBase: 0.24 },
            floz: { name: "US Fluid Ounce (fl oz)", toBase: 0.0295735 }
        },
        defaultFrom: "l",
        defaultTo: "gal",
        referenceItems: [
            { from: "1 Liter", to: "1000 Milliliters" },
            { from: "1 US Gallon", to: "3.78541 Liters" },
            { from: "1 US Gallon", to: "4 Quarts" },
            { from: "1 Cup", to: "240 Milliliters" }
        ]
    },
    speed: {
        title: "Speed",
        units: {
            ms: { name: "Meters per second (m/s)", toBase: 1 },
            kmh: { name: "Kilometers per hour (km/h)", toBase: 0.2777777778 },
            mph: { name: "Miles per hour (mph)", toBase: 0.44704 },
            knot: { name: "Knot (kt)", toBase: 0.5144444444 },
            fts: { name: "Feet per second (ft/s)", toBase: 0.3048 }
        },
        defaultFrom: "kmh",
        defaultTo: "mph",
        referenceItems: [
            { from: "100 km/h", to: "62.1371 mph" },
            { from: "1 m/s", to: "3.6 km/h" },
            { from: "1 Knot", to: "1.852 km/h" },
            { from: "60 mph", to: "88 ft/s" }
        ]
    },
    pressure: {
        title: "Pressure",
        units: {
            pa: { name: "Pascal (Pa)", toBase: 1 },
            kpa: { name: "Kilopascal (kPa)", toBase: 1000 },
            bar: { name: "Bar", toBase: 100000 },
            psi: { name: "PSI (lbf/in²)", toBase: 6894.757 },
            atm: { name: "Atmosphere (atm)", toBase: 101325 },
            torr: { name: "Torr (mmHg)", toBase: 133.322 }
        },
        defaultFrom: "bar",
        defaultTo: "psi",
        referenceItems: [
            { from: "1 Atmosphere", to: "101.325 kPa" },
            { from: "1 Bar", to: "14.5038 PSI" },
            { from: "1 Atmosphere", to: "760 Torr" },
            { from: "1 Bar", to: "100,000 Pascals" }
        ]
    },
    power: {
        title: "Power",
        units: {
            w: { name: "Watt (W)", toBase: 1 },
            kw: { name: "Kilowatt (kW)", toBase: 1000 },
            mw: { name: "Megawatt (MW)", toBase: 1000000 },
            hp: { name: "Horsepower (hp)", toBase: 745.69987 },
            btuh: { name: "BTU/hour (BTU/h)", toBase: 0.293071 }
        },
        defaultFrom: "kw",
        defaultTo: "hp",
        referenceItems: [
            { from: "1 Horsepower", to: "745.7 Watts" },
            { from: "1 Kilowatt", to: "1.341 Horsepower" },
            { from: "1 Kilowatt", to: "3412.14 BTU/h" },
            { from: "1 Megawatt", to: "1,000 Kilowatts" }
        ]
    },
    numsys: {
        title: "Number System",
        units: {
            dec: { name: "Decimal (Base 10)" },
            bin: { name: "Binary (Base 2)" },
            oct: { name: "Octal (Base 8)" },
            hex: { name: "Hexadecimal (Base 16)" }
        },
        defaultFrom: "dec",
        defaultTo: "bin",
        referenceItems: [
            { from: "Decimal 10", to: "Binary 1010" },
            { from: "Decimal 255", to: "Hex FF" },
            { from: "Binary 1111", to: "Hex F" },
            { from: "Decimal 64", to: "Octal 100" }
        ]
    }
};


const tabButtons = document.querySelectorAll('.tab-btn');
const fromValueInput = document.getElementById('from-value');
const toValueInput = document.getElementById('to-value');
const fromUnitSelect = document.getElementById('from-unit');
const toUnitSelect = document.getElementById('to-unit');
const swapBtn = document.getElementById('swap-btn');
const formulaText = document.getElementById('formula-text');
const copyBtn = document.getElementById('copy-btn');
const copyText = document.getElementById('copy-text');
const referenceList = document.getElementById('reference-list');


let currentCategory = 'length';


const radixMap = {
    dec: 10,
    bin: 2,
    oct: 8,
    hex: 16
};


function init() {
    setupEventListeners();
    loadCategory(currentCategory);
}


function setupEventListeners() {
    // Category Tabs Switching
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            if (category !== currentCategory) {
                tabButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = category;
                loadCategory(currentCategory);
            }
        });
    });

  
    fromValueInput.addEventListener('input', calculate);
    fromUnitSelect.addEventListener('change', calculate);
    toUnitSelect.addEventListener('change', calculate);


    swapBtn.addEventListener('click', () => {
        const tempUnit = fromUnitSelect.value;
        fromUnitSelect.value = toUnitSelect.value;
        toUnitSelect.value = tempUnit;

        if (currentCategory === 'numsys' && toValueInput.value && toValueInput.value !== 'Invalid Input') {
            fromValueInput.value = toValueInput.value;
        }
        calculate();
    });

  
    copyBtn.addEventListener('click', copyToClipboard);
}


function loadCategory(category) {
    const categoryData = unitData[category];
    const units = categoryData.units;


    fromUnitSelect.innerHTML = '';
    toUnitSelect.innerHTML = '';


    Object.keys(units).forEach(key => {
        const optionFrom = document.createElement('option');
        optionFrom.value = key;
        optionFrom.textContent = units[key].name;
        fromUnitSelect.appendChild(optionFrom);

        const optionTo = document.createElement('option');
        optionTo.value = key;
        optionTo.textContent = units[key].name;
        toUnitSelect.appendChild(optionTo);
    });

    fromUnitSelect.value = categoryData.defaultFrom;
    toUnitSelect.value = categoryData.defaultTo;

 
    if (category === 'numsys') {
        fromValueInput.value = '255';
    } else {
        fromValueInput.value = '1';
    }


    renderReferenceList(categoryData.referenceItems);


    calculate();
}

function calculate() {
    const rawVal = fromValueInput.value.trim();

    if (rawVal === '') {
        toValueInput.value = '';
        formulaText.textContent = 'Please enter a value';
        return;
    }

    const fromKey = fromUnitSelect.value;
    const toKey = toUnitSelect.value;

    if (currentCategory === 'numsys') {
        convertNumberSystem(rawVal, fromKey, toKey);
        return;
    }

    const val = parseFloat(rawVal);

    if (isNaN(val)) {
        toValueInput.value = 'Invalid Number';
        formulaText.textContent = 'Enter a valid numerical value';
        return;
    }

    let result = 0;

    if (currentCategory === 'temperature') {
        result = convertTemperature(val, fromKey, toKey);
    } else if (currentCategory === 'currency') {
        const units = unitData.currency.units;
        // Convert to USD base first, then to target currency
        const usdValue = val / units[fromKey].toBase;
        result = usdValue * units[toKey].toBase;
    } else {
        const units = unitData[currentCategory].units;
        const fromBase = units[fromKey].toBase;
        const toBase = units[toKey].toBase;
        const baseValue = val * fromBase;
        result = baseValue / toBase;
    }

    const formattedResult = parseFloat(result.toFixed(6));
    toValueInput.value = formattedResult;

    updateFormula(1, fromKey, toKey);
}

function convertTemperature(val, from, to) {
    if (from === to) return val;

    let celsius = 0;
    if (from === 'c') celsius = val;
    else if (from === 'f') celsius = (val - 32) * (5 / 9);
    else if (from === 'k') celsius = val - 273.15;

    if (to === 'c') return celsius;
    if (to === 'f') return (celsius * (9 / 5)) + 32;
    if (to === 'k') return celsius + 273.15;

    return 0;
}


function convertNumberSystem(rawVal, fromKey, toKey) {
    const fromRadix = radixMap[fromKey];
    const toRadix = radixMap[toKey];

    try {
       
        let validRegex = /^[0-9]+$/;
        if (fromKey === 'bin') validRegex = /^[01]+$/;
        else if (fromKey === 'oct') validRegex = /^[0-7]+$/;
        else if (fromKey === 'hex') validRegex = /^[0-9a-fA-F]+$/;

        if (!validRegex.test(rawVal)) {
            toValueInput.value = 'Invalid Base Input';
            formulaText.textContent = `Input contains invalid characters for ${unitData.numsys.units[fromKey].name}`;
            return;
        }

        const decimalParsed = parseInt(rawVal, fromRadix);

        if (isNaN(decimalParsed)) {
            toValueInput.value = 'Invalid Input';
            formulaText.textContent = 'Unable to parse number';
            return;
        }

        const convertedResult = decimalParsed.toString(toRadix).toUpperCase();
        toValueInput.value = convertedResult;

        const fromName = unitData.numsys.units[fromKey].name;
        const toName = unitData.numsys.units[toKey].name;
        formulaText.textContent = `${rawVal} (${fromName}) = ${convertedResult} (${toName})`;
    } catch (e) {
        toValueInput.value = 'Error';
        formulaText.textContent = 'Conversion error';
    }
}


function updateFormula(baseVal, fromKey, toKey) {
    let sampleResult = 0;
    
    if (currentCategory === 'temperature') {
        sampleResult = convertTemperature(baseVal, fromKey, toKey);
    } else if (currentCategory === 'currency') {
        const units = unitData.currency.units;
        const usdValue = baseVal / units[fromKey].toBase;
        sampleResult = usdValue * units[toKey].toBase;
    } else {
        const units = unitData[currentCategory].units;
        const baseValue = baseVal * units[fromKey].toBase;
        sampleResult = baseValue / units[toKey].toBase;
    }

    const fromName = unitData[currentCategory].units[fromKey].name;
    const toName = unitData[currentCategory].units[toKey].name;
    
    const formattedSample = parseFloat(sampleResult.toFixed(6));
    formulaText.textContent = `${baseVal} ${fromName} = ${formattedSample} ${toName}`;
}


function renderReferenceList(items) {
    referenceList.innerHTML = '';
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'ref-item';
        div.innerHTML = `
            <span class="from-str">${item.from}</span>
            <span class="to-str">${item.to}</span>
        `;
        referenceList.appendChild(div);
    });
}

function copyToClipboard() {
    const fromVal = fromValueInput.value;
    const fromName = unitData[currentCategory].units[fromUnitSelect.value].name;
    const toVal = toValueInput.value;
    const toName = unitData[currentCategory].units[toUnitSelect.value].name;

    if (!toVal) return;

    const copyString = `${fromVal} ${fromName} = ${toVal} ${toName}`;

    navigator.clipboard.writeText(copyString).then(() => {
        copyBtn.classList.add('copied');
        copyText.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyText.textContent = 'Copy Result';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
document.addEventListener('DOMContentLoaded', init);
