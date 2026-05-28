export type UnitType = 'length' | 'weight' | 'area' | 'volume' | 'temperature' | 'time' | 'data' | 'speed' | 'energy' | 'pressure' | 'power' | 'angle' | 'frequency' | 'force' | 'torque' | 'illuminance' | 'volumetricFlow' | 'fuelConsumption' | 'viscosity' | 'digitalRate' | 'current' | 'voltage' | 'luminousIntensity' | 'magnetism' | 'radiation' | 'currency' | 'crypto';

export interface UnitDefinition {
  label: string;
  value: string;
  factor: number; // Factor relative to base unit
  offset?: number; // For non-linear like temperature
}

export const unitsMap: Record<UnitType, UnitDefinition[]> = {
  length: [
    { label: 'Meter (m)', value: 'm', factor: 1 },
    { label: 'Kilometer (km)', value: 'km', factor: 1000 },
    { label: 'Centimeter (cm)', value: 'cm', factor: 0.01 },
    { label: 'Millimeter (mm)', value: 'mm', factor: 0.001 },
    { label: 'Micrometer (μm)', value: 'um', factor: 1e-6 },
    { label: 'Nanometer (nm)', value: 'nm', factor: 1e-9 },
    { label: 'Decimeter (dm)', value: 'dm', factor: 0.1 },
    { label: 'Mile (mi)', value: 'mi', factor: 1609.34 },
    { label: 'Yard (yd)', value: 'yd', factor: 0.9144 },
    { label: 'Foot (ft)', value: 'ft', factor: 0.3048 },
    { label: 'Inch (in)', value: 'in', factor: 0.0254 },
    { label: 'Nautical Mile', value: 'nmi', factor: 1852 },
    { label: 'Light Year (ly)', value: 'ly', factor: 9.461e15 },
    { label: 'Parsec (pc)', value: 'pc', factor: 3.086e16 },
    { label: 'Astro. Unit (AU)', value: 'au', factor: 1.496e11 },
  ],
  weight: [
    { label: 'Kilogram (kg)', value: 'kg', factor: 1 },
    { label: 'Gram (g)', value: 'g', factor: 0.001 },
    { label: 'Milligram (mg)', value: 'mg', factor: 1e-6 },
    { label: 'Microgram (μg)', value: 'ug', factor: 1e-9 },
    { label: 'Tonne (t)', value: 't', factor: 1000 },
    { label: 'Pound (lb)', value: 'lb', factor: 0.453592 },
    { label: 'Ounce (oz)', value: 'oz', factor: 0.0283495 },
    { label: 'Stone (st)', value: 'st', factor: 6.35029 },
    { label: 'Carat (ct)', value: 'ct', factor: 0.0002 },
    { label: 'Ton (US)', value: 'ton_us', factor: 907.185 },
    { label: 'Ton (UK)', value: 'ton_uk', factor: 1016.05 },
  ],
  area: [
    { label: 'Square Meter (m²)', value: 'm2', factor: 1 },
    { label: 'Square Kilometer (km²)', value: 'km2', factor: 1e6 },
    { label: 'Square Centimeter (cm²)', value: 'cm2', factor: 0.0001 },
    { label: 'Square Millimeter (mm²)', value: 'mm2', factor: 1e-6 },
    { label: 'Square Mile (mi²)', value: 'mi2', factor: 2.59e6 },
    { label: 'Square Yard (yd²)', value: 'yd2', factor: 0.836127 },
    { label: 'Square Foot (ft²)', value: 'ft2', factor: 0.092903 },
    { label: 'Square Inch (in²)', value: 'in2', factor: 0.00064516 },
    { label: 'Acre (ac)', value: 'ac', factor: 4046.86 },
    { label: 'Hectare (ha)', value: 'ha', factor: 10000 },
  ],
  volume: [
    { label: 'Liter (L)', value: 'l', factor: 1 },
    { label: 'Milliliter (ml)', value: 'ml', factor: 0.001 },
    { label: 'Cubic Meter (m³)', value: 'm3', factor: 1000 },
    { label: 'Cubic Foot (ft³)', value: 'ft3', factor: 28.3168 },
    { label: 'Cubic Inch (in³)', value: 'in3', factor: 0.0163871 },
    { label: 'Gallon (US)', value: 'gal', factor: 3.78541 },
    { label: 'Gallon (UK)', value: 'gal_uk', factor: 4.54609 },
    { label: 'Quart (US)', value: 'qt', factor: 0.946353 },
    { label: 'Pint (US)', value: 'pt', factor: 0.473176 },
    { label: 'Cup (US)', value: 'cup', factor: 0.24 },
    { label: 'Fluid Ounce (US)', value: 'floz', factor: 0.0295735 },
    { label: 'Tablespoon', value: 'tbsp', factor: 0.0147868 },
    { label: 'Teaspoon', value: 'tsp', factor: 0.00492892 },
    { label: 'Barrel (Oil)', value: 'bbl', factor: 158.987 },
  ],
  temperature: [
    { label: 'Celsius (°C)', value: 'c', factor: 1, offset: 0 },
    { label: 'Fahrenheit (°F)', value: 'f', factor: 1.8, offset: 32 },
    { label: 'Kelvin (K)', value: 'k', factor: 1, offset: 273.15 },
    { label: 'Rankine (°R)', value: 'r', factor: 1.8, offset: 491.67 },
  ],
  time: [
    { label: 'Second (s)', value: 's', factor: 1 },
    { label: 'Millisecond (ms)', value: 'ms', factor: 0.001 },
    { label: 'Microsecond (μs)', value: 'us', factor: 1e-6 },
    { label: 'Nanosecond (ns)', value: 'ns', factor: 1e-9 },
    { label: 'Minute (min)', value: 'min', factor: 60 },
    { label: 'Hour (h)', value: 'h', factor: 3600 },
    { label: 'Day (d)', value: 'd', factor: 86400 },
    { label: 'Week (wk)', value: 'wk', factor: 604800 },
    { label: 'Month (avg)', value: 'mo', factor: 2.628e6 },
    { label: 'Year (avg)', value: 'yr', factor: 3.154e7 },
    { label: 'Decade', value: 'decade', factor: 3.154e8 },
    { label: 'Century', value: 'century', factor: 3.154e9 },
  ],
  data: [
    { label: 'Byte (B)', value: 'b', factor: 1 },
    { label: 'Kilobyte (KB)', value: 'kb', factor: 1024 },
    { label: 'Megabyte (MB)', value: 'mb', factor: 1024 ** 2 },
    { label: 'Gigabyte (GB)', value: 'gb', factor: 1024 ** 3 },
    { label: 'Terabyte (TB)', value: 'tb', factor: 1024 ** 4 },
    { label: 'Petabyte (PB)', value: 'pb', factor: 1024 ** 5 },
    { label: 'Exabyte (EB)', value: 'eb', factor: 1024 ** 6 },
    { label: 'Zettabyte (ZB)', value: 'zb', factor: 1024 ** 7 },
  ],
  speed: [
    { label: 'Meters/sec (m/s)', value: 'ms', factor: 1 },
    { label: 'Kilometers/hour (km/h)', value: 'kmh', factor: 1 / 3.6 },
    { label: 'Miles/hour (mph)', value: 'mph', factor: 0.44704 },
    { label: 'Feet/sec (fps)', value: 'fps', factor: 0.3048 },
    { label: 'Knot (kn)', value: 'kn', factor: 0.514444 },
    { label: 'Mach', value: 'mach', factor: 340.3 },
  ],
  energy: [
    { label: 'Joule (J)', value: 'j', factor: 1 },
    { label: 'Kilojoule (kJ)', value: 'kj', factor: 1000 },
    { label: 'Megajoule (MJ)', value: 'mj', factor: 1e6 },
    { label: 'Gigajoule (GJ)', value: 'gj', factor: 1e9 },
    { label: 'Calorie (cal)', value: 'cal', factor: 4.184 },
    { label: 'Kilocalorie (kcal)', value: 'kcal', factor: 4184 },
    { label: 'Watt-hour (Wh)', value: 'wh', factor: 3600 },
    { label: 'Kilowatt-hour (kWh)', value: 'kwh', factor: 3.6e6 },
    { label: 'Electronvolt (eV)', value: 'ev', factor: 1.602e-19 },
    { label: 'British Thermal Unit (BTU)', value: 'btu', factor: 1055.06 },
  ],
  pressure: [
    { label: 'Pascal (Pa)', value: 'pa', factor: 1 },
    { label: 'Kilopascal (kPa)', value: 'kpa', factor: 1000 },
    { label: 'Bar', value: 'bar', factor: 1e5 },
    { label: 'Millibar (mbar)', value: 'mbar', factor: 100 },
    { label: 'Atmosphere (atm)', value: 'atm', factor: 101325 },
    { label: 'PSI', value: 'psi', factor: 6894.76 },
    { label: 'Torr', value: 'torr', factor: 133.322 },
  ],
  power: [
    { label: 'Watt (W)', value: 'w', factor: 1 },
    { label: 'Kilowatt (kW)', value: 'kw', factor: 1000 },
    { label: 'Megawatt (MW)', value: 'mw', factor: 1e6 },
    { label: 'Horsepower (hp)', value: 'hp', factor: 745.7 },
    { label: 'BTU/hr', value: 'btu_hr', factor: 0.293071 },
  ],
  angle: [
    { label: 'Degree (°)', value: 'deg', factor: 1 },
    { label: 'Radian (rad)', value: 'rad', factor: 180 / Math.PI },
    { label: 'Gradient (grad)', value: 'grad', factor: 0.9 },
    { label: 'Arcminute', value: 'arcmin', factor: 1 / 60 },
    { label: 'Arcsecond', value: 'arcsec', factor: 1 / 3600 },
  ],
  frequency: [
    { label: 'Hertz (Hz)', value: 'hz', factor: 1 },
    { label: 'Kilohertz (kHz)', value: 'khz', factor: 1000 },
    { label: 'Megahertz (MHz)', value: 'mhz', factor: 1e6 },
    { label: 'Gigahertz (GHz)', value: 'ghz', factor: 1e9 },
    { label: 'RPM', value: 'rpm', factor: 1 / 60 },
  ],
  force: [
    { label: 'Newton (N)', value: 'n', factor: 1 },
    { label: 'Kilonewton (kN)', value: 'kn', factor: 1000 },
    { label: 'Pound-force (lbf)', value: 'lbf', factor: 4.44822 },
    { label: 'Kilogram-force (kgf)', value: 'kgf', factor: 9.80665 },
    { label: 'Dyne (dyn)', value: 'dyn', factor: 1e-5 },
  ],
  torque: [
    { label: 'Newton-meter (N·m)', value: 'nm', factor: 1 },
    { label: 'Pound-foot (lb·ft)', value: 'lbft', factor: 1.35582 },
    { label: 'Kilogram-meter (kg·m)', value: 'kgm', factor: 9.80665 },
  ],
  illuminance: [
    { label: 'Lux (lx)', value: 'lx', factor: 1 },
    { label: 'Foot-candle (fc)', value: 'fc', factor: 10.7639 },
    { label: 'Phot (ph)', value: 'ph', factor: 10000 },
  ],
  volumetricFlow: [
    { label: 'm³/second', value: 'm3s', factor: 1 },
    { label: 'm³/hour', value: 'm3h', factor: 1 / 3600 },
    { label: 'Liter/second', value: 'ls', factor: 0.001 },
    { label: 'Liter/minute', value: 'lm', factor: 0.001 / 60 },
    { label: 'Gallon/minute (US)', value: 'gpm', factor: 0.0000630902 },
    { label: 'Cubic Feet/min (cfm)', value: 'cfm', factor: 0.000471947 },
  ],
  fuelConsumption: [
    { label: 'Liter/100km', value: 'l100km', factor: 1 },
    { label: 'MPG (US)', value: 'mpg_us', factor: 235.215 },
    { label: 'MPG (UK)', value: 'mpg_uk', factor: 282.481 },
    { label: 'Kilometer/Liter', value: 'kml', factor: 100 },
  ],
  viscosity: [
    { label: 'Pascal-second (Pa·s)', value: 'pas', factor: 1 },
    { label: 'Poise (P)', value: 'p', factor: 0.1 },
    { label: 'Centipoise (cP)', value: 'cp', factor: 0.001 },
  ],
  digitalRate: [
    { label: 'bps', value: 'bps', factor: 1 },
    { label: 'kbps', value: 'kbps', factor: 1000 },
    { label: 'Mbps', value: 'mbps', factor: 1e6 },
    { label: 'Gbps', value: 'gbps', factor: 1e9 },
    { label: 'Tbps', value: 'tbps', factor: 1e12 },
  ],
  current: [
    { label: 'Ampere (A)', value: 'a', factor: 1 },
    { label: 'Milliampere (mA)', value: 'ma', factor: 1e-3 },
    { label: 'Microampere (μA)', value: 'ua', factor: 1e-6 },
    { label: 'Kiloampere (kA)', value: 'ka', factor: 1000 },
  ],
  voltage: [
    { label: 'Volt (V)', value: 'v', factor: 1 },
    { label: 'Millivolt (mV)', value: 'mv', factor: 1e-3 },
    { label: 'Microvolt (μV)', value: 'uv', factor: 1e-6 },
    { label: 'Kilovolt (kV)', value: 'kv', factor: 1000 },
    { label: 'Megavolt (MV)', value: 'mv_large', factor: 1e6 },
  ],
  luminousIntensity: [
    { label: 'Candela (cd)', value: 'cd', factor: 1 },
    { label: 'Millicandela (mcd)', value: 'mcd', factor: 0.001 },
    { label: 'Kilocandela (kcd)', value: 'kcd', factor: 1000 },
  ],
  magnetism: [
    { label: 'Tesla (T)', value: 't', factor: 1 },
    { label: 'Gauss (G)', value: 'g', factor: 1e-4 },
    { label: 'Microtesla (μT)', value: 'ut', factor: 1e-6 },
  ],
  radiation: [
    { label: 'Sievert (Sv)', value: 'sv', factor: 1 },
    { label: 'Millisievert (mSv)', value: 'msv', factor: 1e-3 },
    { label: 'Microsievert (μSv)', value: 'usv', factor: 1e-6 },
    { label: 'Gray (Gy)', value: 'gy', factor: 1 },
    { label: 'Rad', value: 'rad_rad', factor: 0.01 },
  ],
  currency: [
    { label: 'US Dollar', value: 'usd', factor: 1 },
    { label: 'Euro', value: 'eur', factor: 0.92 },
    { label: 'British Pound', value: 'gbp', factor: 0.79 },
    { label: 'Japanese Yen', value: 'jpy', factor: 150 },
  ],
  crypto: [
    { label: 'Bitcoin', value: 'bitcoin', factor: 1 },
    { label: 'Ethereum', value: 'ethereum', factor: 18 },
    { label: 'Solana', value: 'solana', factor: 400 },
  ],
};

export function convert(value: number, from: string, to: string, type: UnitType): number {
  const units = unitsMap[type];
  const fromUnit = units.find(u => u.value === from);
  const toUnit = units.find(u => u.value === to);

  if (!fromUnit || !toUnit) return value;

  // Temperature special case
  if (type === 'temperature') {
    let baseValue = value; // In Celsius
    if (from === 'f') baseValue = (value - 32) / 1.8;
    if (from === 'k') baseValue = value - 273.15;
    if (from === 'r') baseValue = (value - 491.67) / 1.8;

    if (to === 'c') return baseValue;
    if (to === 'f') return (baseValue * 1.8) + 32;
    if (to === 'k') return baseValue + 273.15;
    if (to === 'r') return (baseValue * 1.8) + 491.67;
    return baseValue;
  }

  // Fuel Consumption special case (reciprocal)
  if (type === 'fuelConsumption') {
    if (from === to) return value;
    if (value === 0) return 0;
    
    // Convert current to L/100km (base)
    let base;
    if (from === 'l100km') base = value;
    else if (from === 'mpg_us') base = 235.215 / value;
    else if (from === 'mpg_uk') base = 282.481 / value;
    else if (from === 'kml') base = 100 / value;
    else base = value;

    // Convert base to Target
    if (to === 'l100km') return base;
    if (to === 'mpg_us') return 235.215 / base;
    if (to === 'mpg_uk') return 282.481 / base;
    if (to === 'kml') return 100 / base;
    return base;
  }

  // Linear conversion
  const baseValue = value * fromUnit.factor;
  return baseValue / toUnit.factor;
}
