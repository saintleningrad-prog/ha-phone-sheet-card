/*
 * Phone Sheet Card for Home Assistant
 * Shows everything the Home Assistant Companion app (Android, iOS, macOS) reports about a device,
 * grouped into readable sections. Pick a device (mobile_app), the card finds its sensors.
 * Lines appear only for sensors that report a value.
 * MIT License, https://github.com/saintleningrad-prog/ha-phone-sheet-card
 */
const VERSION = "0.2.1";

const T = {
  en: {
    s_battery: "Battery", s_connectivity: "Connectivity", s_device: "Device", s_sound: "Sound and media",
    s_location: "Location", s_storage: "Storage", s_health: "Health and activity", s_car: "Car",
    s_sensors: "Phone sensors", s_app: "Companion app",
    charging: "charging", discharging: "discharging", full: "full", not_charging: "not charging",
    from: "from", ac: "mains", usb: "USB", wireless: "wireless charger", until_full: "full in",
    h: "h", min: "min", temperature: "temperature", health: "health", cycles: "charge cycles", power: "power",
    overheat: "overheat", dead: "worn out", cold: "cold", over_voltage: "over voltage", failed: "failure",
    power_save: "power saving", doze: "doze mode", on: "on", off: "off",
    network: "network", wifi: "Wi-Fi", cellular: "mobile", vpn: "VPN", ethernet: "ethernet", bluetooth_net: "Bluetooth",
    no_connection: "no connection", public_ip: "public IP", sim: "SIM", mobile_data: "mobile data", roaming: "roaming",
    hotspot: "sharing hotspot", traffic: "traffic since reboot", mobile: "mobile", total: "total",
    excellent: "excellent", good: "good", fair: "fair", weak: "weak", no_signal: "no signal", ipv6: "IPv6",
    android: "Android", os: "OS", patch: "security patch", app: "HA app", rebooted: "rebooted", timezone: "time zone",
    screen: "screen", screen_on: "on", screen_off: "off", locked: "locked", unlocked: "unlocked", secure: "protected by lock",
    not_secure: "no lock", work_profile: "work profile", brightness: "brightness", auto: "auto", timeout: "turns off after",
    sec: "s", orientation: "orientation", portrait: "portrait", landscape: "landscape", square: "square", rotation: "rotation",
    last_app: "last app", frontmost_app: "active app", notifications: "notifications", last_notification_from: "last from",
    nfc: "NFC", call: "call", idle: "no call", ringing: "ringing", offhook: "in a call", active: "in use",
    camera_in_use: "camera in use", mic_in_use: "microphone in use", display: "display",
    sound: "sound", ring: "ring", normal: "normal", vibrate: "vibrate", silent: "silent", audio_mode: "audio mode",
    in_call: "in a call", in_communication: "voice/video call", ringtone: "ringing", call_screening: "call screening",
    dnd: "Do Not Disturb", focus: "Focus", volume: "volume", v_ringer: "ring", v_music: "media", v_alarm: "alarm",
    v_call: "call", v_notification: "notifications", v_system: "system", v_dtmf: "dial tones", v_accessibility: "accessibility",
    mic_muted: "microphone muted", speakerphone: "speakerphone", headphones: "headphones", playing: "playing",
    music: "music", audio_output: "audio to", bluetooth: "Bluetooth", connected: "connected", alarm: "alarm",
    home: "home", accuracy: "accuracy", update_trigger: "last update", high_accuracy: "high accuracy mode",
    every: "every", location_permission: "location permission",
    still: "still", walking: "walking", running: "running", on_foot: "on foot", in_vehicle: "in a vehicle",
    on_bicycle: "cycling", tilting: "in hand", stationary: "still", automotive: "in a vehicle", cycling: "cycling",
    used: "used", free_of: "{f} free of {t}", low_space: "low space", internal: "internal", external: "SD card",
    steps: "steps", steps_since_reboot: "since reboot", distance: "distance", floors: "floors", floors_down: "down",
    elevation: "elevation gained", pace: "average pace", calories_active: "active calories", calories_total: "calories total",
    heart_rate: "heart rate", resting_hr: "resting", hrv: "HRV", spo2: "blood oxygen", respiratory: "respiratory rate",
    pressure: "blood pressure", body_temp: "body temperature", basal_temp: "basal temperature", glucose: "blood glucose",
    weight: "weight", height: "height", body_fat: "body fat", lean_mass: "lean mass", bone_mass: "bone mass",
    water_mass: "body water", bmr: "basal metabolic rate", hydration: "hydration", vo2: "VO2 max", sleep: "sleep",
    sleep_confidence: "sleep confidence", sleep_segment: "sleep segment",
    android_auto: "Android Auto", car: "car", fuel: "fuel", fuel_type: "fuel type", range: "range", odometer: "odometer",
    speed: "speed", car_battery: "battery", car_charging: "charging", connector: "connector",
    light: "light", proximity: "proximity", near: "near", far: "far", accent: "accent color",
    app_traffic: "app traffic", app_memory: "app memory", standby: "standby bucket", importance: "importance",
    inactive: "inactive", ble: "BLE transmitter", beacons: "beacon monitor",
    s_kiosk: "Kiosk mode and camera", kiosk: "kiosk mode", screensaver: "screensaver", motion: "motion",
    last_motion: "last motion", stream: "camera stream", clients: "viewers", air_pressure: "air pressure",
    walking_hr: "walking", exercise: "exercise", resting_energy: "resting calories", water: "water",
    in_bed: "in bed", awake: "awake", core_sleep: "light", rem_sleep: "REM", deep_sleep: "deep", cadence: "cadence",
    current_pace: "current pace", low_power: "low power mode",
    authorized_when_in_use: "while using the app", authorized_always: "always", denied: "denied", restricted: "restricted",
    not_determined: "not asked", built_in_speaker: "phone speaker", built_in_receiver: "earpiece",
    signaled: "app signal", background_fetch: "background update", significant_location_change: "location change",
    manual: "manual", launch: "app launch", periodic: "periodic", push_notification: "push", region_entered: "zone entered",
    region_exited: "zone left", siri: "Siri", watch_context: "Apple Watch", streaming: "streaming",
    bt_on: "on", bt_off: "off", data_on: "on", data_off: "off", stream_idle: "idle",
    hint: "enable “{s}” in the Companion app", hint_storage: "Internal storage", hint_network: "Network type",
    no_device: "Select a device (mobile_app) in the card settings.", not_found: "No sensors found for this device.",
    cfg_device: "Phone", cfg_title: "Title (optional)", cfg_steps: "Steps entity (optional, e.g. a daily utility meter)",
    cfg_hints: "Show hints for sensors to enable",
  },
  ru: {
    s_battery: "Батарея", s_connectivity: "Связь", s_device: "Устройство", s_sound: "Звук и медиа",
    s_location: "Где", s_storage: "Память", s_health: "Здоровье и активность", s_car: "Автомобиль",
    s_sensors: "Датчики телефона", s_app: "Приложение HA",
    charging: "заряжается", discharging: "разряжается", full: "заряжен", not_charging: "не заряжается",
    from: "от", ac: "сети", usb: "USB", wireless: "беспроводной зарядки", until_full: "до полной",
    h: "ч", min: "мин", temperature: "температура", health: "состояние", cycles: "циклов зарядки", power: "мощность",
    overheat: "перегрев", dead: "изношена", cold: "переохлаждена", over_voltage: "перенапряжение", failed: "неисправность",
    power_save: "энергосбережение", doze: "режим сна Android", on: "включено", off: "выключено",
    network: "сеть", wifi: "Wi-Fi", cellular: "мобильная", vpn: "VPN", ethernet: "кабель", bluetooth_net: "Bluetooth",
    no_connection: "нет связи", public_ip: "внешний IP", sim: "SIM", mobile_data: "мобильные данные", roaming: "роуминг",
    hotspot: "раздаёт точку доступа", traffic: "трафик с последней перезагрузки", mobile: "мобильный", total: "всего",
    excellent: "отлично", good: "хорошо", fair: "средне", weak: "слабо", no_signal: "нет сигнала", ipv6: "IPv6",
    android: "Android", os: "ОС", patch: "патч безопасности", app: "приложение HA", rebooted: "перезагружен", timezone: "часовой пояс",
    screen: "экран", screen_on: "включён", screen_off: "выключен", locked: "заблокирован", unlocked: "разблокирован",
    secure: "защищён блокировкой", not_secure: "без блокировки", work_profile: "рабочий профиль", brightness: "яркость",
    auto: "авто", timeout: "гаснет через", sec: "с", orientation: "ориентация", portrait: "вертикально",
    landscape: "горизонтально", square: "квадрат", rotation: "поворот",
    last_app: "последнее приложение", frontmost_app: "активное приложение", notifications: "уведомлений",
    last_notification_from: "последнее от", nfc: "NFC", call: "звонок", idle: "нет звонка", ringing: "входящий",
    offhook: "разговор", active: "используется", camera_in_use: "камера включена", mic_in_use: "микрофон включён",
    display: "экран", sound: "звук", ring: "звонок", normal: "обычный", vibrate: "вибрация", silent: "без звука",
    audio_mode: "аудиорежим", in_call: "звонок", in_communication: "голосовой/видеозвонок", ringtone: "звонит",
    call_screening: "фильтр звонка", dnd: "«Не беспокоить»", focus: "«Фокус»", volume: "громкость",
    v_ringer: "звонок", v_music: "музыка", v_alarm: "будильник", v_call: "разговор", v_notification: "уведомления",
    v_system: "система", v_dtmf: "тоны набора", v_accessibility: "спец. возможности",
    mic_muted: "микрофон выключен", speakerphone: "громкая связь", headphones: "в наушниках", playing: "играет",
    music: "музыка", audio_output: "звук идёт в", bluetooth: "Bluetooth", connected: "подключено", alarm: "будильник",
    home: "дома", accuracy: "точность", update_trigger: "последнее обновление", high_accuracy: "режим высокой точности",
    every: "каждые", location_permission: "доступ к геолокации",
    still: "на месте", walking: "идёт", running: "бежит", on_foot: "пешком", in_vehicle: "едет", on_bicycle: "на велосипеде",
    tilting: "в руках", stationary: "на месте", automotive: "едет", cycling: "на велосипеде",
    used: "занято", free_of: "свободно {f} из {t}", low_space: "мало места", internal: "внутренняя", external: "карта памяти",
    steps: "шаги", steps_since_reboot: "с перезагрузки", distance: "расстояние", floors: "этажей", floors_down: "вниз",
    elevation: "набор высоты", pace: "средний темп", calories_active: "активные калории", calories_total: "калорий всего",
    heart_rate: "пульс", resting_hr: "в покое", hrv: "вариабельность пульса", spo2: "кислород в крови",
    respiratory: "частота дыхания", pressure: "давление", body_temp: "температура тела", basal_temp: "базальная температура",
    glucose: "глюкоза", weight: "вес", height: "рост", body_fat: "жир", lean_mass: "сухая масса", bone_mass: "костная масса",
    water_mass: "вода в организме", bmr: "базовый обмен", hydration: "выпито воды", vo2: "МПК (VO2 max)", sleep: "сон",
    sleep_confidence: "уверенность сна", sleep_segment: "фаза сна",
    android_auto: "Android Auto", car: "машина", fuel: "топливо", fuel_type: "тип топлива", range: "запас хода",
    odometer: "пробег", speed: "скорость", car_battery: "заряд", car_charging: "зарядка", connector: "разъём",
    light: "освещённость", proximity: "приближение", near: "близко", far: "далеко", accent: "цвет оформления",
    app_traffic: "трафик приложения", app_memory: "память приложения", standby: "режим ожидания", importance: "приоритет",
    inactive: "неактивно", ble: "BLE-маячок", beacons: "поиск маячков",
    s_kiosk: "Режим киоска и камера", kiosk: "режим киоска", screensaver: "заставка", motion: "движение",
    last_motion: "последнее движение", stream: "видеопоток камеры", clients: "зрителей", air_pressure: "атм. давление",
    walking_hr: "при ходьбе", exercise: "тренировка", resting_energy: "калории покоя", water: "вода",
    in_bed: "в постели", awake: "бодрствование", core_sleep: "лёгкий", rem_sleep: "REM", deep_sleep: "глубокий", cadence: "каденс",
    current_pace: "текущий темп", low_power: "режим энергосбережения",
    authorized_when_in_use: "при использовании приложения", authorized_always: "всегда", denied: "запрещён", restricted: "ограничен",
    not_determined: "не запрашивался", built_in_speaker: "динамик телефона", built_in_receiver: "разговорный динамик",
    signaled: "сигнал приложения", background_fetch: "фоновое обновление", significant_location_change: "смена местоположения",
    manual: "вручную", launch: "запуск приложения", periodic: "по расписанию", push_notification: "push", region_entered: "вход в зону",
    region_exited: "выход из зоны", siri: "Siri", watch_context: "Apple Watch", streaming: "трансляция",
    bt_on: "включён", bt_off: "выключен", data_on: "включены", data_off: "выключены", stream_idle: "ожидание",
    hint: "включите «{s}» в приложении", hint_storage: "Внутреннее хранилище", hint_network: "Тип сети",
    no_device: "Выберите устройство (mobile_app) в настройках карточки.", not_found: "У этого устройства не найдено датчиков.",
    cfg_device: "Телефон", cfg_title: "Заголовок (необязательно)", cfg_steps: "Датчик шагов (необязательно, например счётчик за день)",
    cfg_hints: "Показывать подсказки, какие датчики включить",
  },
};

// units reported by the sensors, localized where it helps
const UNITS_RU = {
  bpm: "уд/мин", kcal: "ккал", cal: "кал", km: "км", m: "м", cm: "см", kg: "кг", g: "г", L: "л", mL: "мл",
  lx: "лк", h: "ч", min: "мин", s: "с", GB: "ГБ", MB: "МБ", "km/h": "км/ч", "m/s": "м/с", mmHg: "мм рт. ст.",
  W: "Вт", dBm: "дБм", "Mbit/s": "Мбит/с", Mbps: "Мбит/с", MHz: "МГц", GHz: "ГГц", ms: "мс", steps: "", floors: "",
  "mg/dL": "мг/дл", "mmol/L": "ммоль/л", "breaths/min": "вд/мин", "br/min": "вд/мин", "mL/(kg·min)": "мл/(кг·мин)",
  "mL/kg·min": "мл/(кг·мин)", "kWh": "кВт·ч", hPa: "гПа", "steps/s": "шаг/с", "% available": "%",
};

// all sensors of the Companion apps; matched by the longest entity_id suffix within the chosen device
const KEYS = [
  // battery
  "battery_level", "battery_state", "charger_type", "battery_health", "battery_temperature", "battery_power",
  "battery_cycle_count", "remaining_charge_time", "is_charging", "power_save", "doze_mode",
  // connectivity
  "network_type", "connection_type", "wi_fi_connection", "ssid", "bssid", "wi_fi_bssid", "wi_fi_signal_strength",
  "wi_fi_frequency", "wi_fi_link_speed", "wi_fi_ip_address", "wi_fi_state", "public_ip_address", "ipv6_addresses",
  "sim_1", "sim_2", "signal_strength_sim_1", "signal_strength_sim_2", "data_network_type_sim_1",
  "data_network_type_sim_2", "mobile_data", "mobile_data_roaming", "hotspot_state",
  "mobile_rx_gb", "mobile_tx_gb", "total_rx_gb", "total_tx_gb",
  // device
  "os_version", "security_patch", "current_version", "app_version", "last_reboot", "current_time_zone",
  "interactive", "device_locked", "device_secure", "keyguard_locked", "keyguard_secure", "work_profile",
  "screen_brightness", "screen_off_timeout", "screen_orientation", "screen_rotation", "last_used_app",
  "frontmost_app", "active_notification_count", "last_notification", "phone_state", "nfc_state",
  "active", "camera_in_use", "microphone_in_use", "primary_display_name",
  // sound and media
  "ringer_mode", "audio_mode", "do_not_disturb_sensor", "focus", "volume_level_ringer", "volume_level_music",
  "volume_level_alarm", "volume_level_call", "volume_level_notification", "volume_level_system",
  "volume_level_dtmf", "volume_level_accessibility", "mic_muted", "speakerphone", "headphones", "music_active",
  "media_session", "audio_output", "bluetooth_state", "bluetooth_connection", "next_alarm",
  // location
  "geocoded_location", "detected_activity", "activity", "last_update_trigger", "high_accuracy_mode",
  "high_accuracy_update_interval", "location_permission",
  // storage
  "internal_storage", "external_storage", "storage",
  // health and activity (Health Connect on Android, pedometer on iOS)
  "steps_sensor", "daily_steps", "steps", "daily_distance", "distance", "daily_floors", "floors_ascended",
  "floors_descended", "daily_elevation_gained", "average_active_pace", "active_calories_burned",
  "total_calories_burned", "heart_rate", "resting_heart_rate", "heart_rate_variability", "oxygen_saturation",
  "respiratory_rate", "systolic_blood_pressure", "diastolic_blood_pressure", "body_temperature",
  "basal_body_temperature", "blood_glucose", "weight", "height", "body_fat", "lean_body_mass", "bone_mass",
  "body_water_mass", "basal_metabolic_rate", "daily_hydration", "vo2_max", "sleep_duration",
  "sleep_confidence", "sleep_segment",
  // iOS HealthKit and pedometer
  "health_steps", "walking_running_distance", "flights_climbed", "current_pace", "current_cadence", "active_energy",
  "resting_energy", "exercise_time", "walking_heart_rate_average", "blood_oxygen", "blood_pressure_systolic",
  "blood_pressure_diastolic", "body_fat_percentage", "water", "in_bed", "awake", "core_sleep", "rem_sleep", "deep_sleep",
  // iOS barometer, kiosk mode and camera
  "pressure", "kiosk_mode", "kiosk_brightness", "kiosk_volume", "kiosk_screensaver", "camera_motion", "camera_stream",
  // car (Android Auto)
  "android_auto", "car_name", "car_battery", "car_fuel", "car_fuel_type", "car_range_remaining", "car_odometer",
  "car_speed", "car_charging_status", "car_ev_connector_type",
  // phone sensors
  "light_sensor", "proximity_sensor", "accent_color",
  // companion app
  "app_rx_gb", "app_tx_gb", "app_memory", "app_standby_bucket", "app_importance", "app_inactive",
  "ble_transmitter", "beacon_monitor",
];
const KEYS_BY_LENGTH = [...KEYS].sort((a, b) => b.length - a.length);
const BAD = ["unknown", "unavailable", "none", "", "--", null, undefined];

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const norm = (s) => String(s).trim().toLowerCase().replace(/[\s-]+/g, "_");

class PhoneSheetCard extends HTMLElement {
  static getConfigElement() { return document.createElement("phone-sheet-card-editor"); }

  static getStubConfig(hass) {
    const dev = Object.values(hass.devices || {}).find((d) =>
      Object.values(hass.entities || {}).some((e) => e.device_id === d.id && e.platform === "mobile_app"));
    return { device: dev ? dev.id : "" };
  }

  setConfig(config) {
    this._config = { hints: true, ...config };
    this._sig = null;
    this._map = null;
    if (this._hass) this._render();
  }

  set hass(hass) {
    const regChanged = !this._hass || this._hass.entities !== hass.entities;
    this._hass = hass;
    if (regChanged) this._map = null;
    const ids = this._entityIds();
    const sig = ids.map((id) => {
      const s = hass.states[id];
      return s ? s.state + "|" + s.last_updated : "-";
    }).join(";") + "|" + hass.language;
    if (sig !== this._sig) { this._sig = sig; this._render(); }
  }

  getCardSize() { return 8; }
  getGridOptions() { return { columns: 12, min_columns: 6, rows: "auto" }; }

  _t(k) {
    const lang = (this._hass && this._hass.language || "en").slice(0, 2);
    return (T[lang] || T.en)[k] || T.en[k] || k;
  }

  _entities() {
    if (this._map) return this._map;
    const hass = this._hass, dev = this._config && this._config.device;
    if (!hass || !dev) return null;
    const map = {};
    for (const e of Object.values(hass.entities || {})) {
      if (e.device_id !== dev) continue;
      const id = e.entity_id, dom = id.split(".")[0];
      if (dom === "device_tracker") { map.tracker = id; continue; }
      if (dom !== "sensor" && dom !== "binary_sensor") continue;
      const k = KEYS_BY_LENGTH.find((key) => id.endsWith("_" + key));
      if (k && (!map[k] || map[k].length > id.length)) map[k] = id;
    }
    this._map = map;
    return map;
  }

  _entityIds() {
    const ids = Object.values(this._entities() || {});
    if (this._config && this._config.steps_entity) ids.push(this._config.steps_entity);
    return ids;
  }

  _render() {
    if (!this._hass || !this._config) return;
    if (!this.shadowRoot) this.attachShadow({ mode: "open" });
    const t = (k) => this._t(k);
    const hass = this._hass, m = this._entities();
    const lang = hass.language || "en", ru = lang.startsWith("ru");
    const so = (k) => (m && m[k] ? hass.states[m[k]] : undefined);
    const has = (k) => { const s = so(k); return !!s && !BAD.includes(s.state); };
    const st = (k) => (has(k) ? so(k).state : null);
    const at = (k, a) => { const s = so(k); return s ? s.attributes[a] : undefined; };
    const num = (k) => parseFloat(st(k));
    const on = (k) => st(k) === "on";
    const fmt = (v, d = 0) => Number(v).toLocaleString(lang, { maximumFractionDigits: d });
    const dt = (v, opts) => { const d = new Date(v); return isNaN(d) ? esc(v) : d.toLocaleString(lang, opts); };
    const unit = (u) => (u === undefined || u === null ? "" : (ru && u in UNITS_RU ? UNITS_RU[u] : u));
    const tr = (v) => { const n = norm(v); const x = t(n); return x === n ? esc(v) : x; };
    // value with the sensor's own unit
    const val = (k, d = 1) => {
      if (!has(k)) return null;
      const n = num(k), rawU = at(k, "unit_of_measurement"), u = unit(rawU);
      if (rawU === "min" && !isNaN(n)) return dur(n);
      return (isNaN(n) ? tr(st(k)) : fmt(n, d)) + (u ? (u === "%" || u === "°C" || u === "°F" ? u : " " + u) : "");
    };
    const dur = (mins) => (mins >= 60 ? `${Math.floor(mins / 60)} ${t("h")} ${Math.round(mins % 60)} ${t("min")}` : `${Math.round(mins)} ${t("min")}`);
    const kv = (label, k, d) => (has(k) ? `${label}: ${val(k, d)}` : null);
    const join = (arr) => { const a = arr.filter(Boolean); return a.length ? a.join(" · ") : null; };
    const yesno = (k, yes, no) => (has(k) ? (on(k) ? yes : no) : null);
    const hint = (name) => (this._config.hints ? `<i>${esc(t("hint").replace("{s}", name))}</i>` : null);
    const sections = [];
    const sec = (icon, title, lines) => {
      const l = lines.filter(Boolean);
      if (l.length) sections.push({ icon, title, lines: l });
    };

    let body;
    if (!this._config.device) body = `<div class="msg">${esc(t("no_device"))}</div>`;
    else if (!m || !Object.keys(m).length) body = `<div class="msg">${esc(t("not_found"))}</div>`;
    else {
      const dev = hass.devices && hass.devices[this._config.device];
      const apple = !!dev && /apple/i.test(dev.manufacturer || "");

      // ---- battery
      const b = num("battery_level");
      let l1 = null;
      if (!isNaN(b)) {
        const n = Math.max(0, Math.min(10, Math.ceil(b / 10)));
        l1 = `<span class="bar">${"▮".repeat(n)}${"▯".repeat(10 - n)}</span> <b>${fmt(b)}%</b>`;
        const bs = st("battery_state");
        if (bs) l1 += ` · ${tr(bs)}`;
        const ch = st("charger_type");
        if (ch && ch !== "none") l1 += ` ${t("from")} ${tr(ch)}`;
        const rem = num("remaining_charge_time");
        if (rem > 0) l1 += ` · ${t("until_full")} ${rem >= 60 ? Math.floor(rem / 60) + " " + t("h") + " " : ""}${Math.round(rem % 60)} ${t("min")}`;
      }
      sec("mdi:battery", t("s_battery"), [
        l1,
        join([
          has("battery_temperature") ? `${t("temperature")} ${val("battery_temperature")}` : null,
          has("battery_health") ? `${t("health")}: ${tr(st("battery_health"))}` : null,
          num("battery_cycle_count") > 0 ? `${t("cycles")}: ${fmt(num("battery_cycle_count"))}` : null,
          Math.abs(num("battery_power")) > 0.05 ? `${t("power")} ${val("battery_power")}` : null,
        ]),
        join([
          has("power_save") ? `${t("power_save")}: ${on("power_save") ? t("on") : t("off")}` : null,
          at("battery_state", "Low Power Mode") !== undefined ? `${t("low_power")}: ${at("battery_state", "Low Power Mode") ? t("on") : t("off")}` : null,
          on("doze_mode") ? t("doze") : null,
        ]),
      ]);

      // ---- connectivity
      const nt = st("network_type") || st("connection_type");
      const netName = { wifi: t("wifi"), wi_fi: t("wifi"), cellular: t("cellular"), vpn: t("vpn"), ethernet: t("ethernet"),
        bluetooth: t("bluetooth_net"), no_connection: t("no_connection"), none: t("no_connection") };
      let net = `${t("network")}: ` + (nt ? `<b>${esc(netName[norm(nt)] || nt)}</b>` : (apple ? "—" : (hint(t("hint_network")) || "—")));
      if (has("public_ip_address")) net += ` · ${t("public_ip")} ${esc(st("public_ip_address"))}`;
      let wifi = null;
      const ssid = (on("wi_fi_state") || !has("wi_fi_state")) && (st("wi_fi_connection") || st("ssid"));
      if (ssid && !/not connected/i.test(ssid)) {
        const ws = num("wi_fi_signal_strength");
        wifi = `${t("wifi")} <b>${esc(ssid)}</b>` + (isNaN(ws) ? "" :
          ` · ${fmt(ws)} ${unit("dBm")} (${t(ws >= -55 ? "excellent" : ws >= -67 ? "good" : ws >= -75 ? "fair" : "weak")})`);
        if (has("wi_fi_frequency")) wifi += ` · ${num("wi_fi_frequency") > 4000 ? (num("wi_fi_frequency") > 5900 ? "6" : "5") : fmt(2.4, 1)} ${unit("GHz")}`;
        if (has("wi_fi_link_speed")) wifi += ` · ${fmt(num("wi_fi_link_speed"))} ${unit("Mbit/s")}`;
        if (has("wi_fi_ip_address")) wifi += ` · ${esc(st("wi_fi_ip_address"))}`;
      }
      const gen = (d) => {
        d = String(d || "").toUpperCase();
        if (/NR|5G/.test(d)) return "5G";
        if (/LTE|IWLAN/.test(d)) return "4G";
        if (/UMTS|HSPA|HSDPA|HSUPA|WCDMA|CDMA2000|EVDO|TD_SCDMA/.test(d)) return "3G";
        if (/EDGE|GPRS|GSM|1XRTT|IDEN/.test(d)) return "2G";
        return "";
      };
      const sims = [1, 2].map((i) => {
        if (!has("sim_" + i)) return null;
        const g = gen(st("data_network_type_sim_" + i) || at("sim_" + i, "Current Radio Technology"));
        let s = `${t("sim")} ${i}: <b>${esc(st("sim_" + i))}</b>`;
        if (g) s += ` · ${g}`;
        if (has("signal_strength_sim_" + i)) {
          const q = at("signal_strength_sim_" + i, "quality");
          const qm = { great: "excellent", good: "good", moderate: "fair", poor: "weak", "none or unknown": "no_signal" };
          s += ` · ${fmt(num("signal_strength_sim_" + i))} ${unit("dBm")}${q ? ` (${t(qm[q] || q)})` : ""}`;
        }
        return s;
      });
      const md = join([
        has("mobile_data") ? `${t("mobile_data")}: ${on("mobile_data") ? t("data_on") : t("data_off")}` : null,
        on("mobile_data_roaming") ? t("roaming") : null,
        on("hotspot_state") ? t("hotspot") : null,
      ]);
      let traffic = null;
      if (has("mobile_rx_gb") || has("total_rx_gb")) {
        const p = [];
        if (has("mobile_rx_gb")) p.push(`${t("mobile")} ↓${fmt(num("mobile_rx_gb"), 2)} ↑${fmt(num("mobile_tx_gb"), 2)} ${unit("GB")}`);
        if (has("total_rx_gb")) p.push(`${t("total")} ↓${fmt(num("total_rx_gb"), 2)} ↑${fmt(num("total_tx_gb"), 2)} ${unit("GB")}`);
        traffic = `${t("traffic")}: ${p.join(", ")}`;
      }
      const v6 = has("ipv6_addresses") ? `${t("ipv6")}: ${esc(String(st("ipv6_addresses")).split(/[,\s]+/)[0])}` : null;
      sec("mdi:signal", t("s_connectivity"), [net, wifi, ...sims, md, traffic, v6]);

      // ---- device
      const osl = join([
        has("os_version") ? `${apple ? t("os") : t("android")} ${esc(st("os_version"))}` : null,
        has("security_patch") ? `${t("patch")} ${esc(st("security_patch"))}` : null,
        has("current_version") || has("app_version") ? `${t("app")} ${esc((st("current_version") || st("app_version")).split("-")[0])}` : null,
      ]);
      const rb = join([
        has("last_reboot") ? `${t("rebooted")} ${dt(st("last_reboot"), { dateStyle: "short", timeStyle: "short" })}` : null,
        has("current_time_zone") ? `${t("timezone")} ${esc(st("current_time_zone"))}` : null,
      ]);
      const scr = join([
        has("interactive") ? `${t("screen")} ${on("interactive") ? t("screen_on") : t("screen_off")}` : null,
        has("device_locked") || has("keyguard_locked") ? (on("device_locked") || on("keyguard_locked") ? t("locked") : t("unlocked")) : null,
        has("screen_brightness") ? `${t("brightness")} ${num("screen_brightness") <= 255 ? Math.round(num("screen_brightness") / 255 * 100) + "%" : fmt(num("screen_brightness"))}${at("screen_brightness", "automatic") ? ` (${t("auto")})` : ""}` : null,
        has("screen_off_timeout") ? `${t("timeout")} ${Math.round(num("screen_off_timeout") / 1000)} ${t("sec")}` : null,
      ]);
      const scr2 = join([
        has("screen_orientation") ? `${t("orientation")}: ${tr(st("screen_orientation"))}` : null,
        has("screen_rotation") ? `${t("rotation")} ${esc(st("screen_rotation"))}` : null,
        has("device_secure") || has("keyguard_secure") ? (on("device_secure") || on("keyguard_secure") ? t("secure") : t("not_secure")) : null,
        on("work_profile") ? t("work_profile") : null,
        has("nfc_state") ? `${t("nfc")} ${on("nfc_state") ? t("on") : t("off")}` : null,
      ]);
      const apps = join([
        has("last_used_app") ? `${t("last_app")}: <b>${esc(st("last_used_app").split(".").pop())}</b>` : null,
        has("frontmost_app") ? `${t("frontmost_app")}: <b>${esc(st("frontmost_app"))}</b>` : null,
      ]);
      const notif = join([
        has("active_notification_count") ? `${t("notifications")}: ${fmt(num("active_notification_count"))}` : null,
        has("last_notification") && at("last_notification", "package") ? `${t("last_notification_from")} ${esc(String(at("last_notification", "package")).split(".").pop())}` : null,
      ]);
      const call = has("phone_state") && st("phone_state") !== "idle" ? `${t("call")}: ${tr(st("phone_state"))}` : null;
      const mac = join([
        has("active") ? `${on("active") ? t("active") : t("inactive")}` : null,
        on("camera_in_use") ? t("camera_in_use") : null,
        on("microphone_in_use") ? t("mic_in_use") : null,
        has("primary_display_name") ? `${t("display")}: ${esc(st("primary_display_name"))}` : null,
      ]);
      sec("mdi:cellphone", t("s_device"), [osl, rb, scr, scr2, apps, notif, call, mac]);

      // ---- sound and media
      const snd = join([
        has("ringer_mode") ? `${t("sound")}: ${tr(st("ringer_mode") === "normal" ? "ring" : st("ringer_mode"))}` : null,
        has("audio_mode") && st("audio_mode") !== "normal" ? `${t("audio_mode")}: ${tr(st("audio_mode"))}` : null,
        has("do_not_disturb_sensor") && st("do_not_disturb_sensor") !== "off" ? t("dnd") : null,
        on("focus") ? t("focus") : null,
      ]);
      const vols = ["ringer", "music", "alarm", "call", "notification", "system", "dtmf", "accessibility"]
        .filter((v) => has("volume_level_" + v)).map((v) => `${t("v_" + v)} ${esc(st("volume_level_" + v))}`);
      const vol = vols.length ? `${t("volume")}: ${vols.join(", ")}` : null;
      const media = join([
        on("headphones") ? t("headphones") : null,
        on("mic_muted") ? t("mic_muted") : null,
        on("speakerphone") ? t("speakerphone") : null,
        has("audio_output") ? `${t("audio_output")} ${tr(st("audio_output"))}` : null,
        on("music_active") ? `${t("playing")} ${esc(st("media_session") || t("music"))}` : null,
      ]);
      let bt = null;
      if (has("bluetooth_state")) {
        bt = `${t("bluetooth")} ${on("bluetooth_state") ? t("bt_on") : t("bt_off")}`;
        const devs = at("bluetooth_connection", "connected_paired_devices") || [];
        if (devs.length) bt += ` · ${t("connected")}: ${esc(devs.map((d) => String(d).replace(/\s*\(.*\)$/, "")).join(", "))}`;
      }
      const al = has("next_alarm") ? `${t("alarm")}: ${dt(st("next_alarm"), { weekday: "short", hour: "2-digit", minute: "2-digit" })}` : null;
      sec("mdi:volume-high", t("s_sound"), [snd, vol, media, bt, al]);

      // ---- location
      const trk = m.tracker && hass.states[m.tracker];
      let loc = null;
      if (trk || has("geocoded_location")) {
        const addr = st("geocoded_location") ? [...new Set(String(st("geocoded_location")).split(/\n+/).map((x) => x.trim()).filter(Boolean))].join(", ") : "";
        loc = trk && trk.state === "home" ? t("home") : esc(addr || (trk ? trk.state : ""));
        const acc = trk && trk.attributes.gps_accuracy;
        if (acc) loc += ` · ${t("accuracy")} ±${Math.round(acc)} ${unit("m")}`;
        const act = st("detected_activity") || st("activity");
        if (act && norm(act) !== "unknown") loc += ` · ${tr(act)}`;
      }
      const loc2 = join([
        has("last_update_trigger") ? `${t("update_trigger")}: ${tr(st("last_update_trigger"))}` : null,
        on("high_accuracy_mode") ? `${t("high_accuracy")}${has("high_accuracy_update_interval") ? ` (${t("every")} ${val("high_accuracy_update_interval", 0)})` : ""}` : null,
        has("location_permission") ? `${t("location_permission")}: ${tr(st("location_permission"))}` : null,
      ]);
      sec("mdi:map-marker", t("s_location"), [loc, loc2]);

      // ---- storage
      const storageLine = (k, label) => {
        if (!has(k)) return null;
        const free = num(k);
        const f = at(k, "Free internal storage") || at(k, "Free external storage") || at(k, "Available");
        const tot = at(k, "Total internal storage") || at(k, "Total external storage") || at(k, "Total");
        let s = `${label ? label + ": " : ""}${t("used")} ${fmt(100 - free)}%`;
        if (f && tot) s += ` · ${esc(t("free_of").replace("{f}", f).replace("{t}", tot))}`;
        if (free < 10) s += ` <ha-icon class="warn" icon="mdi:alert"></ha-icon> ${t("low_space")}`;
        return s;
      };
      const ext = storageLine("external_storage", t("external"));
      const internal = storageLine("internal_storage", ext ? t("internal") : "") || storageLine("storage", "");
      sec("mdi:harddisk", t("s_storage"), [internal || (apple ? null : hint(t("hint_storage"))), ext]);

      // ---- health and activity: every metric gets its own colored icon
      const C = (color, icon, html) => (html ? `<span class="m"><ha-icon icon="${icon}" style="color:${color}"></ha-icon>${html}</span>` : null);
      const chips = (arr) => { const a = arr.filter(Boolean); return a.length ? `<span class="chips">${a.join("")}</span>` : null; };
      let steps = null;
      const se = this._config.steps_entity && hass.states[this._config.steps_entity];
      if (se && !BAD.includes(se.state)) steps = `${t("steps")}: <b>${fmt(parseFloat(se.state))}</b>`;
      else if (has("daily_steps")) steps = `${t("steps")}: <b>${fmt(num("daily_steps"))}</b>`;
      else if (has("health_steps")) steps = `${t("steps")}: <b>${fmt(num("health_steps"))}</b>`;
      else if (has("steps")) steps = `${t("steps")}: <b>${fmt(num("steps"))}</b>`;
      else if (has("steps_sensor")) steps = `${t("steps")}: <b>${fmt(num("steps_sensor"))}</b> (${t("steps_since_reboot")})`;
      const distance = has("daily_distance") ? `${t("distance")} ${val("daily_distance")}` : has("walking_running_distance") ? `${t("distance")} ${val("walking_running_distance", 2)}` : (has("distance") ? `${t("distance")} ${val("distance")}` : null);
      const floors = has("daily_floors") ? `${t("floors")} ${val("daily_floors", 0)}` : !has("floors_ascended") && has("flights_climbed") ? `${t("floors")} ↑${fmt(num("flights_climbed"))}` : (has("floors_ascended") ? `${t("floors")} ↑${fmt(num("floors_ascended"))}${has("floors_descended") ? ` ↓${fmt(num("floors_descended"))}` : ""}` : null);
      const move = chips([
        C("#43a047", "mdi:walk", steps),
        C("#1e88e5", "mdi:map-marker-distance", distance),
        C("#fb8c00", "mdi:stairs", floors),
        C("#8d6e63", "mdi:image-filter-hdr", has("daily_elevation_gained") ? `${t("elevation")} ${val("daily_elevation_gained")}` : null),
        C("#00897b", "mdi:speedometer", has("average_active_pace") ? `${t("pace")} ${val("average_active_pace", 2)}` : null),
        C("#00897b", "mdi:speedometer", has("current_pace") ? `${t("current_pace")} ${val("current_pace", 2)}` : null),
        C("#00897b", "mdi:shoe-print", has("current_cadence") ? `${t("cadence")} ${val("current_cadence", 2)}` : null),
      ]);
      const cal = chips([
        C("#f4511e", "mdi:fire", kv(t("calories_active"), "active_calories_burned", 0) || kv(t("calories_active"), "active_energy", 0)),
        C("#ff8a65", "mdi:fire-circle", kv(t("resting_energy"), "resting_energy", 0)),
        C("#e64a19", "mdi:fire", kv(t("calories_total"), "total_calories_burned", 0)),
        C("#7cb342", "mdi:run-fast", kv(t("exercise"), "exercise_time", 0)),
      ]);
      const sysK = has("systolic_blood_pressure") ? "systolic_blood_pressure" : has("blood_pressure_systolic") ? "blood_pressure_systolic" : null;
      const diaK = sysK === "systolic_blood_pressure" ? "diastolic_blood_pressure" : "blood_pressure_diastolic";
      const heart = chips([
        C("#e53935", "mdi:heart-pulse", has("heart_rate") ? `${t("heart_rate")} ${val("heart_rate", 0)}` : null),
        C("#ef5350", "mdi:heart", has("resting_heart_rate") ? `${t("resting_hr")} ${val("resting_heart_rate", 0)}` : null),
        C("#ef5350", "mdi:heart", has("walking_heart_rate_average") ? `${t("walking_hr")} ${val("walking_heart_rate_average", 0)}` : null),
        C("#d81b60", "mdi:chart-bell-curve", kv(t("hrv"), "heart_rate_variability", 0)),
        C("#00acc1", "mdi:water-percent", kv(t("spo2"), "oxygen_saturation", 0) || kv(t("spo2"), "blood_oxygen", 0)),
        C("#26a69a", "mdi:lungs", kv(t("respiratory"), "respiratory_rate", 0)),
        C("#8e24aa", "mdi:gauge", sysK ? `${t("pressure")}: ${fmt(num(sysK))}${has(diaK) ? "/" + fmt(num(diaK)) : ""} ${unit(at(sysK, "unit_of_measurement"))}` : null),
      ]);
      const body2 = chips([
        C("#ffb300", "mdi:thermometer", kv(t("body_temp"), "body_temperature")),
        C("#ffa000", "mdi:thermometer-low", kv(t("basal_temp"), "basal_body_temperature")),
        C("#ec407a", "mdi:diabetes", kv(t("glucose"), "blood_glucose")),
      ]);
      const comp = chips([
        C("#00897b", "mdi:scale-bathroom", kv(t("weight"), "weight")),
        C("#5c6bc0", "mdi:human-male-height", kv(t("height"), "height")),
        C("#fdd835", "mdi:water-percent-alert", kv(t("body_fat"), "body_fat") || kv(t("body_fat"), "body_fat_percentage")),
        C("#26a69a", "mdi:arm-flex", kv(t("lean_mass"), "lean_body_mass")),
        C("#bdbdbd", "mdi:bone", kv(t("bone_mass"), "bone_mass")),
        C("#29b6f6", "mdi:water", kv(t("water_mass"), "body_water_mass")),
      ]);
      const meta = chips([
        C("#ff7043", "mdi:fire-alert", kv(t("bmr"), "basal_metabolic_rate", 0)),
        C("#29b6f6", "mdi:cup-water", kv(t("hydration"), "daily_hydration") || kv(t("water"), "water", 0)),
        C("#43a047", "mdi:run", kv(t("vo2"), "vo2_max")),
      ]);
      const sleep = chips([
        C("#5e35b1", "mdi:sleep", has("sleep_duration") ? `${t("sleep")} ${val("sleep_duration")}` : null),
        C("#7e57c2", "mdi:bed", kv(t("in_bed"), "in_bed")),
        C("#311b92", "mdi:power-sleep", kv(t("deep_sleep"), "deep_sleep")),
        C("#7986cb", "mdi:weather-night", kv(t("core_sleep"), "core_sleep")),
        C("#9575cd", "mdi:eye", kv(t("rem_sleep"), "rem_sleep")),
        C("#ffb74d", "mdi:eye-outline", kv(t("awake"), "awake")),
        C("#7e57c2", "mdi:sleep", kv(t("sleep_confidence"), "sleep_confidence", 0)),
        C("#7e57c2", "mdi:sleep", kv(t("sleep_segment"), "sleep_segment", 0)),
      ]);
      sec("mdi:heart-pulse", t("s_health"), [move, cal, heart, body2, comp, meta, sleep]);

      // ---- car
      sec("mdi:car", t("s_car"), [
        join([yesno("android_auto", t("android_auto"), null), has("car_name") ? `<b>${esc(st("car_name"))}</b>` : null]),
        join([kv(t("fuel"), "car_fuel", 0), kv(t("fuel_type"), "car_fuel_type"), kv(t("car_battery"), "car_battery", 0),
          kv(t("range"), "car_range_remaining", 0)]),
        join([kv(t("odometer"), "car_odometer", 0), kv(t("speed"), "car_speed", 0), kv(t("car_charging"), "car_charging_status"),
          kv(t("connector"), "car_ev_connector_type")]),
      ]);

      // ---- phone sensors
      sec("mdi:motion-sensor", t("s_sensors"), [
        join([
          kv(t("light"), "light_sensor", 0),
          kv(t("air_pressure"), "pressure", 0),
          has("proximity_sensor") ? `${t("proximity")}: ${isNaN(num("proximity_sensor")) ? tr(st("proximity_sensor")) : val("proximity_sensor")}` : null,
          has("accent_color") ? `${t("accent")}: <span class="swatch" style="background:${esc(st("accent_color"))}"></span>` : null,
        ]),
      ]);

      // ---- kiosk mode and camera (iOS app)
      sec("mdi:tablet-dashboard", t("s_kiosk"), [
        join([
          has("kiosk_mode") ? `${t("kiosk")}: ${on("kiosk_mode") ? t("on") : t("off")}` : null,
          kv(t("brightness"), "kiosk_brightness", 0), kv(t("volume"), "kiosk_volume", 0),
          on("kiosk_screensaver") ? t("screensaver") : null,
        ]),
        has("camera_motion") ? join([`${t("motion")}: ${on("camera_motion") ? t("on") : t("off")}`,
          at("camera_motion", "Last Motion") ? `${t("last_motion")} ${esc(at("camera_motion", "Last Motion"))}` : null]) : null,
        has("camera_stream") ? join([`${t("stream")}: ${st("camera_stream") === "idle" ? t("stream_idle") : tr(st("camera_stream"))}`,
          at("camera_stream", "Clients") ? `${t("clients")}: ${esc(at("camera_stream", "Clients"))}` : null]) : null,
      ]);

      // ---- companion app
      sec("mdi:home-assistant", t("s_app"), [
        has("app_rx_gb") ? `${t("app_traffic")}: ↓${fmt(num("app_rx_gb"), 3)} ↑${fmt(num("app_tx_gb"), 3)} ${unit("GB")}` : null,
        join([kv(t("app_memory"), "app_memory", 2), kv(t("standby"), "app_standby_bucket"), kv(t("importance"), "app_importance"),
          on("app_inactive") ? t("inactive") : null]),
        join([yesno("ble_transmitter", t("ble"), null) || (has("ble_transmitter") && st("ble_transmitter") !== "off" && st("ble_transmitter") !== "Stopped" ? `${t("ble")}: ${esc(st("ble_transmitter"))}` : null),
          has("beacon_monitor") && !/stopped|off/i.test(st("beacon_monitor")) ? `${t("beacons")}: ${esc(st("beacon_monitor"))}` : null]),
      ]);

      body = sections.map((s) => `
        <div class="sec">
          <div class="head"><ha-icon icon="${s.icon}"></ha-icon><span>${esc(s.title)}</span></div>
          <ul>${s.lines.map((l) => `<li>${l}</li>`).join("")}</ul>
        </div>`).join("");
    }

    const dev = this._config.device && hass.devices && hass.devices[this._config.device];
    const title = this._config.title || (dev ? (dev.name_by_user || dev.name) : "Phone");
    this.shadowRoot.innerHTML = `
      <style>
        ha-card { padding: 12px 16px 8px; }
        .title { display: flex; align-items: center; gap: 8px; font-size: 1.15em; font-weight: 500; margin-bottom: 4px; }
        .sec { margin: 6px 0 2px; }
        .head { display: flex; align-items: center; gap: 8px; font-weight: 500; margin: 8px 0 2px; }
        .head ha-icon { --mdc-icon-size: 20px; color: var(--state-icon-color, var(--primary-color)); }
        ul { margin: 0; padding-left: 34px; }
        li { margin: 2px 0; line-height: 1.45; color: var(--primary-text-color); }
        i { color: var(--secondary-text-color); }
        .bar { letter-spacing: 1px; }
        .warn { --mdc-icon-size: 16px; color: var(--warning-color); vertical-align: -2px; }
        li:has(> .chips) { list-style: none; margin-left: -16px; }
        .chips { display: flex; flex-wrap: wrap; gap: 4px 14px; }
        .m { display: inline-flex; align-items: center; gap: 4px; white-space: nowrap; }
        .m ha-icon { --mdc-icon-size: 18px; }
        .swatch { display: inline-block; width: 12px; height: 12px; border-radius: 3px; vertical-align: -1px; border: 1px solid var(--divider-color); }
        .msg { color: var(--secondary-text-color); padding: 8px 0; }
      </style>
      <ha-card>
        <div class="title"><ha-icon icon="${dev && /apple/i.test(dev.manufacturer || "") ? "mdi:apple" : "mdi:cellphone"}"></ha-icon><span>${esc(title)}</span></div>
        ${body}
      </ha-card>`;
  }
}

class PhoneSheetCardEditor extends HTMLElement {
  setConfig(config) { this._config = config; this._render(); }
  set hass(hass) { this._hass = hass; this._render(); }
  _render() {
    if (!this._hass || !this._config) return;
    const lang = (this._hass.language || "en").slice(0, 2);
    const tr = (k) => (T[lang] || T.en)[k] || T.en[k];
    if (!this._form) {
      this._form = document.createElement("ha-form");
      this._form.computeLabel = (s) => tr({ device: "cfg_device", title: "cfg_title", steps_entity: "cfg_steps", hints: "cfg_hints" }[s.name]);
      this._form.addEventListener("value-changed", (ev) => {
        this._config = ev.detail.value;
        this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: this._config }, bubbles: true, composed: true }));
      });
      this.appendChild(this._form);
    }
    this._form.hass = this._hass;
    this._form.data = { hints: true, ...this._config };
    this._form.schema = [
      { name: "device", required: true, selector: { device: { integration: "mobile_app" } } },
      { name: "title", selector: { text: {} } },
      { name: "steps_entity", selector: { entity: { domain: "sensor" } } },
      { name: "hints", selector: { boolean: {} } },
    ];
  }
}

if (!customElements.get("phone-sheet-card")) {
  customElements.define("phone-sheet-card", PhoneSheetCard);
  customElements.define("phone-sheet-card-editor", PhoneSheetCardEditor);
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: "phone-sheet-card",
    name: "Phone Sheet Card",
    description: "Everything the Companion app reports about a phone, grouped into readable sections.",
    preview: false,
    documentationURL: "https://github.com/saintleningrad-prog/ha-phone-sheet-card",
  });
}
console.info(`%c PHONE-SHEET-CARD %c ${VERSION} `, "background:#03a9f4;color:#fff;border-radius:3px 0 0 3px", "background:#555;color:#fff;border-radius:0 3px 3px 0");
