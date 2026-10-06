/*
 * Phone Sheet Card for Home Assistant
 * Shows everything the Home Assistant Companion app (Android) reports about a phone,
 * grouped into readable sections. Pick a phone (mobile_app device), the card finds its sensors.
 * MIT License, https://github.com/saintleningrad-prog/ha-phone-sheet-card
 */
const VERSION = "0.1.0";

const T = {
  en: {
    battery: "Battery", connectivity: "Connectivity", device: "Device", location: "Location", storage: "Storage and activity",
    charging: "charging", discharging: "discharging", full: "full", not_charging: "not charging",
    from: "from", ac: "mains", usb: "USB", wireless: "wireless charger", until_full: "full in",
    h: "h", min: "min", temperature: "temperature", health: "health", cycles: "charge cycles", power: "power",
    health_good: "good", health_overheat: "overheat", health_dead: "worn out", health_cold: "cold",
    power_save: "power saving", on: "on", off: "off",
    network: "network", wifi: "Wi-Fi", cellular: "mobile", vpn: "VPN", ethernet: "ethernet", bluetooth_net: "Bluetooth",
    public_ip: "public IP", sim: "SIM", mobile_data: "mobile data", hotspot: "sharing hotspot", traffic: "traffic since reboot",
    mobile: "mobile", total: "total", excellent: "excellent", good: "good", fair: "fair", weak: "weak", no_signal: "no signal",
    android: "Android", patch: "security patch", app: "HA app", rebooted: "rebooted", screen: "screen",
    screen_on: "on", screen_off: "off", locked: "locked", unlocked: "unlocked", brightness: "brightness", auto: "auto",
    timeout: "turns off after", sec: "s", last_app: "last app", sound: "sound", ring: "ring", vibrate: "vibrate", silent: "silent",
    dnd: "Do Not Disturb", volume_ring: "ring volume", volume_music: "media", bluetooth: "Bluetooth", connected: "connected",
    headphones: "headphones", playing: "playing", music: "music", alarm: "alarm", home: "home", accuracy: "accuracy",
    still: "still", walking: "walking", running: "running", on_foot: "on foot", in_vehicle: "in a vehicle", on_bicycle: "cycling", tilting: "in hand",
    used: "used", free_of: "free of", low_space: "low space", steps: "steps", steps_since_reboot: "since reboot", distance: "distance",
    heart_rate: "heart rate", sleep: "sleep",
    u_dbm: "dBm", u_ghz: "GHz", u_mbit: "Mbit/s", u_m: "m", u_gb: "GB", u_w: "W", u_km: "km", u_bpm: "bpm",
    bt_on: "on", bt_off: "off", data_on: "on", data_off: "off",
    hint: "enable “{s}” in the Companion app", hint_storage: "Internal storage", hint_network: "Network type",
    no_device: "Select a phone (mobile_app device) in the card settings.", not_found: "No sensors found for this phone.",
    cfg_device: "Phone", cfg_title: "Title (optional)", cfg_steps: "Steps entity (optional, e.g. a daily utility meter)", cfg_hints: "Show hints for sensors to enable",
  },
  ru: {
    battery: "Батарея", connectivity: "Связь", device: "Устройство", location: "Где", storage: "Память и активность",
    charging: "заряжается", discharging: "разряжается", full: "заряжен", not_charging: "не заряжается",
    from: "от", ac: "сети", usb: "USB", wireless: "беспроводной зарядки", until_full: "до полной",
    h: "ч", min: "мин", temperature: "температура", health: "состояние", cycles: "циклов зарядки", power: "мощность",
    health_good: "хорошее", health_overheat: "перегрев", health_dead: "изношена", health_cold: "переохлаждена",
    power_save: "энергосбережение", on: "включено", off: "выключено",
    network: "сеть", wifi: "Wi-Fi", cellular: "мобильная", vpn: "VPN", ethernet: "кабель", bluetooth_net: "Bluetooth",
    public_ip: "внешний IP", sim: "SIM", mobile_data: "мобильные данные", hotspot: "раздаёт точку доступа", traffic: "трафик с последней перезагрузки",
    mobile: "мобильный", total: "всего", excellent: "отлично", good: "хорошо", fair: "средне", weak: "слабо", no_signal: "нет сигнала",
    android: "Android", patch: "патч безопасности", app: "приложение HA", rebooted: "перезагружен", screen: "экран",
    screen_on: "включён", screen_off: "выключен", locked: "заблокирован", unlocked: "разблокирован", brightness: "яркость", auto: "авто",
    timeout: "гаснет через", sec: "с", last_app: "последнее приложение", sound: "звук", ring: "звонок", vibrate: "вибрация", silent: "без звука",
    dnd: "«Не беспокоить»", volume_ring: "громкость звонка", volume_music: "музыки", bluetooth: "Bluetooth", connected: "подключено",
    headphones: "в наушниках", playing: "играет", music: "музыка", alarm: "будильник", home: "дома", accuracy: "точность",
    still: "на месте", walking: "идёт", running: "бежит", on_foot: "пешком", in_vehicle: "едет", on_bicycle: "на велосипеде", tilting: "в руках",
    used: "занято", free_of: "свободно", low_space: "мало места", steps: "шаги", steps_since_reboot: "с перезагрузки", distance: "расстояние",
    heart_rate: "пульс", sleep: "сон",
    u_dbm: "дБм", u_ghz: "ГГц", u_mbit: "Мбит/с", u_m: "м", u_gb: "ГБ", u_w: "Вт", u_km: "км", u_bpm: "уд/мин",
    bt_on: "включён", bt_off: "выключен", data_on: "включены", data_off: "выключены",
    hint: "включите «{s}» в приложении", hint_storage: "Внутреннее хранилище", hint_network: "Тип сети",
    no_device: "Выберите телефон (устройство mobile_app) в настройках карточки.", not_found: "У этого телефона не найдено датчиков.",
    cfg_device: "Телефон", cfg_title: "Заголовок (необязательно)", cfg_steps: "Датчик шагов (необязательно, например счётчик за день)", cfg_hints: "Показывать подсказки, какие датчики включить",
  },
};

// sensor keys of the Companion app, matched by entity_id suffix within the chosen device
const KEYS = [
  "battery_level", "battery_state", "charger_type", "battery_health", "battery_temperature", "battery_power",
  "battery_cycle_count", "remaining_charge_time", "power_save",
  "network_type", "wi_fi_connection", "wi_fi_signal_strength", "wi_fi_frequency", "wi_fi_link_speed", "wi_fi_ip_address",
  "wi_fi_state", "public_ip_address", "sim_1", "sim_2", "signal_strength_sim_1", "signal_strength_sim_2",
  "data_network_type_sim_1", "data_network_type_sim_2", "mobile_data", "hotspot_state",
  "mobile_rx_gb", "mobile_tx_gb", "total_rx_gb", "total_tx_gb",
  "os_version", "security_patch", "current_version", "last_reboot", "interactive", "device_locked",
  "screen_brightness", "screen_off_timeout", "last_used_app", "ringer_mode", "do_not_disturb_sensor",
  "volume_level_ringer", "volume_level_music", "bluetooth_state", "bluetooth_connection", "headphones",
  "music_active", "media_session", "next_alarm",
  "geocoded_location", "detected_activity", "internal_storage", "steps_sensor", "daily_steps", "daily_distance",
  "heart_rate", "sleep_duration",
];
const BAD = ["unknown", "unavailable", "none", "", null, undefined];

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

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
    if (this._hass) this._render();
  }

  set hass(hass) {
    this._hass = hass;
    const ids = this._entityIds();
    const sig = ids.map((id) => {
      const s = hass.states[id];
      return s ? s.state + "|" + s.last_updated : "-";
    }).join(";") + "|" + hass.language;
    if (sig !== this._sig) { this._sig = sig; this._render(); }
  }

  getCardSize() { return 6; }
  getGridOptions() { return { columns: 12, min_columns: 6, rows: "auto" }; }

  _t(k) {
    const lang = (this._hass && this._hass.language || "en").slice(0, 2);
    return (T[lang] || T.en)[k] || T.en[k] || k;
  }

  _entities() {
    const hass = this._hass, dev = this._config && this._config.device;
    if (!hass || !dev) return null;
    const map = {};
    for (const e of Object.values(hass.entities || {})) {
      if (e.device_id !== dev) continue;
      const id = e.entity_id, dom = id.split(".")[0];
      if (dom === "device_tracker") { map.tracker = id; continue; }
      if (dom !== "sensor" && dom !== "binary_sensor") continue;
      for (const k of KEYS) {
        if (id.endsWith("_" + k) && (!map[k] || map[k].length > id.length)) map[k] = id;
      }
    }
    return map;
  }

  _entityIds() {
    const m = this._entities() || {};
    const ids = Object.values(m);
    if (this._config && this._config.steps_entity) ids.push(this._config.steps_entity);
    return ids;
  }

  _render() {
    if (!this._hass || !this._config) return;
    if (!this.shadowRoot) this.attachShadow({ mode: "open" });
    const t = (k) => this._t(k);
    const hass = this._hass, m = this._entities();
    const so = (k) => (m && m[k] ? hass.states[m[k]] : undefined);
    const has = (k) => { const s = so(k); return !!s && !BAD.includes(s.state); };
    const st = (k) => (has(k) ? so(k).state : null);
    const at = (k, a) => { const s = so(k); return s ? s.attributes[a] : undefined; };
    const num = (k) => parseFloat(st(k));
    const on = (k) => st(k) === "on";
    const lang = (hass.language || "en");
    const fmt = (v, d = 0) => Number(v).toLocaleString(lang, { maximumFractionDigits: d });
    const dt = (v, opts) => { const d = new Date(v); return isNaN(d) ? v : d.toLocaleString(lang, opts); };
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
      // battery
      const b = num("battery_level");
      const bs = st("battery_state");
      const ch = st("charger_type");
      const rem = num("remaining_charge_time");
      let l1 = null;
      if (!isNaN(b)) {
        const n = Math.max(0, Math.min(10, Math.ceil(b / 10)));
        l1 = `<span class="bar">${"▮".repeat(n)}${"▯".repeat(10 - n)}</span> <b>${fmt(b)}%</b>`;
        if (bs) l1 += ` · ${esc(t(bs) || bs)}`;
        if (ch && ch !== "none") l1 += ` ${esc(t("from"))} ${esc(t(ch) || ch)}`;
        if (rem > 0) l1 += ` · ${esc(t("until_full"))} ${rem >= 60 ? Math.floor(rem / 60) + " " + t("h") + " " : ""}${rem % 60} ${t("min")}`;
      }
      const l2 = [];
      if (has("battery_temperature")) l2.push(`${t("temperature")} ${fmt(num("battery_temperature"), 1)} °C`);
      if (has("battery_health")) l2.push(`${t("health")}: ${esc(t("health_" + st("battery_health")) || st("battery_health"))}`);
      if (num("battery_cycle_count") > 0) l2.push(`${t("cycles")}: ${fmt(num("battery_cycle_count"))}`);
      if (Math.abs(num("battery_power")) > 0.05) l2.push(`${t("power")} ${fmt(num("battery_power"), 1)} ${t("u_w")}`);
      sec("mdi:battery", t("battery"), [
        l1, l2.length ? l2.join(" · ") : null,
        has("power_save") ? `${t("power_save")}: ${on("power_save") ? t("on") : t("off")}` : null,
      ]);

      // connectivity
      const nt = st("network_type");
      const netName = { wifi: t("wifi"), cellular: t("cellular"), vpn: t("vpn"), ethernet: t("ethernet"), bluetooth: t("bluetooth_net") };
      let net = `${t("network")}: ` + (nt ? `<b>${esc(netName[nt] || nt)}</b>` : (hint(t("hint_network")) || "—"));
      if (has("public_ip_address")) net += ` · ${t("public_ip")} ${esc(st("public_ip_address"))}`;
      let wifi = null;
      if (on("wi_fi_state") && has("wi_fi_connection") && st("wi_fi_connection") !== "<not connected>") {
        const ws = num("wi_fi_signal_strength");
        const q = isNaN(ws) ? "" : ` · ${fmt(ws)} ${t("u_dbm")} (${t(ws >= -55 ? "excellent" : ws >= -67 ? "good" : ws >= -75 ? "fair" : "weak")})`;
        wifi = `${t("wifi")} <b>${esc(st("wi_fi_connection"))}</b>${q}`;
        if (has("wi_fi_frequency")) wifi += ` · ${num("wi_fi_frequency") > 4000 ? "5" : fmt(2.4, 1)} ${t("u_ghz")}`;
        if (has("wi_fi_link_speed")) wifi += ` · ${fmt(num("wi_fi_link_speed"))} ${t("u_mbit")}`;
        if (has("wi_fi_ip_address")) wifi += ` · ${esc(st("wi_fi_ip_address"))}`;
      }
      const sims = [1, 2].map((i) => {
        if (!has("sim_" + i)) return null;
        const d = (st("data_network_type_sim_" + i) || "").toUpperCase();
        const g = d === "NR" ? "5G" : ["LTE", "LTE_CA", "IWLAN"].includes(d) ? "4G"
          : ["UMTS", "HSPA", "HSPAP", "HSDPA", "HSUPA"].includes(d) ? "3G" : ["EDGE", "GPRS", "GSM"].includes(d) ? "2G" : "";
        let s = `${t("sim")} ${i}: <b>${esc(st("sim_" + i))}</b>`;
        if (g) s += ` · ${g}`;
        if (has("signal_strength_sim_" + i)) {
          const q = at("signal_strength_sim_" + i, "quality");
          const qm = { great: "excellent", good: "good", moderate: "fair", poor: "weak", "none or unknown": "no_signal" };
          s += ` · ${fmt(num("signal_strength_sim_" + i))} ${t("u_dbm")}${q ? ` (${t(qm[q] || q)})` : ""}`;
        }
        return s;
      });
      let md = null;
      if (has("mobile_data")) md = `${t("mobile_data")}: ${on("mobile_data") ? t("data_on") : t("data_off")}` + (on("hotspot_state") ? ` · ${t("hotspot")}` : "");
      let tr = null;
      if (has("mobile_rx_gb")) {
        tr = `${t("traffic")}: ${t("mobile")} ↓${fmt(num("mobile_rx_gb"), 2)} ↑${fmt(num("mobile_tx_gb"), 2)} ${t("u_gb")}`;
        if (has("total_rx_gb")) tr += `, ${t("total")} ↓${fmt(num("total_rx_gb"), 2)} ↑${fmt(num("total_tx_gb"), 2)} ${t("u_gb")}`;
      }
      sec("mdi:signal", t("connectivity"), [net, wifi, ...sims, md, tr]);

      // device
      let os = null;
      if (has("os_version")) {
        os = `${t("android")} ${esc(st("os_version"))}`;
        if (has("security_patch")) os += ` · ${t("patch")} ${esc(st("security_patch"))}`;
        if (has("current_version")) os += ` · ${t("app")} ${esc(st("current_version").split("-")[0])}`;
      }
      const rb = has("last_reboot") ? `${t("rebooted")} ${dt(st("last_reboot"), { dateStyle: "short", timeStyle: "short" })}` : null;
      const sp = [];
      if (has("interactive")) sp.push(`${t("screen")} ${on("interactive") ? t("screen_on") : t("screen_off")}` + (has("device_locked") ? `, ${on("device_locked") ? t("locked") : t("unlocked")}` : ""));
      if (has("screen_brightness")) sp.push(`${t("brightness")} ${num("screen_brightness") <= 255 ? Math.round(num("screen_brightness") / 255 * 100) + "%" : fmt(num("screen_brightness"))}${at("screen_brightness", "automatic") ? ` (${t("auto")})` : ""}`);
      if (has("screen_off_timeout")) sp.push(`${t("timeout")} ${Math.round(num("screen_off_timeout") / 1000)} ${t("sec")}`);
      const app = has("last_used_app") ? `${t("last_app")}: <b>${esc(st("last_used_app").split(".").pop())}</b>` : null;
      let snd = null;
      if (has("ringer_mode")) {
        const rm = { normal: "ring", vibrate: "vibrate", silent: "silent" }[st("ringer_mode")];
        snd = `${t("sound")}: ${esc(rm ? t(rm) : st("ringer_mode"))}`;
        if (has("do_not_disturb_sensor") && st("do_not_disturb_sensor") !== "off") snd += ` · ${t("dnd")}`;
        if (has("volume_level_ringer")) snd += ` · ${t("volume_ring")} ${esc(st("volume_level_ringer"))}`;
        if (has("volume_level_music")) snd += `, ${t("volume_music")} ${esc(st("volume_level_music"))}`;
      }
      let bt = null;
      if (has("bluetooth_state")) {
        bt = `${t("bluetooth")} ${on("bluetooth_state") ? t("bt_on") : t("bt_off")}`;
        const devs = at("bluetooth_connection", "connected_paired_devices") || [];
        if (devs.length) bt += ` · ${t("connected")}: ${esc(devs.map((d) => String(d).replace(/\s*\(.*\)$/, "")).join(", "))}`;
      }
      let media = null;
      if (on("headphones") || on("music_active")) {
        const p = [];
        if (on("headphones")) p.push(t("headphones"));
        if (on("music_active")) p.push(`${t("playing")} ${esc(st("media_session") || t("music"))}`);
        media = p.join(" · ");
      }
      const al = has("next_alarm") ? `${t("alarm")}: ${dt(st("next_alarm"), { weekday: "short", hour: "2-digit", minute: "2-digit" })}` : null;
      sec("mdi:cellphone", t("device"), [os, rb, sp.length ? sp.join(" · ") : null, app, snd, bt, media, al]);

      // location
      const tr0 = m.tracker && hass.states[m.tracker];
      let loc = null;
      if (tr0 || has("geocoded_location")) {
        loc = tr0 && tr0.state === "home" ? t("home") : esc(st("geocoded_location") || (tr0 ? tr0.state : ""));
        const acc = tr0 && tr0.attributes.gps_accuracy;
        if (acc) loc += ` · ${t("accuracy")} ±${Math.round(acc)} ${t("u_m")}`;
        const act = st("detected_activity");
        if (act && act !== "unknown") loc += ` · ${esc(t(act))}`;
      }
      sec("mdi:map-marker", t("location"), [loc]);

      // storage and activity
      let sto = has("internal_storage") ? null : hint(t("hint_storage"));
      if (has("internal_storage")) {
        const free = num("internal_storage");
        sto = `${t("used")} ${fmt(100 - free)}% · ${t("free_of")} ${esc(at("internal_storage", "Free internal storage"))} / ${esc(at("internal_storage", "Total internal storage"))}`;
        if (free < 10) sto += ` <ha-icon class="warn" icon="mdi:alert"></ha-icon> ${t("low_space")}`;
      }
      let steps = null;
      const se = this._config.steps_entity && hass.states[this._config.steps_entity];
      if (se && !BAD.includes(se.state)) steps = `${t("steps")}: <b>${fmt(parseFloat(se.state))}</b>`;
      else if (has("daily_steps")) steps = `${t("steps")}: <b>${fmt(num("daily_steps"))}</b>`;
      else if (has("steps_sensor")) steps = `${t("steps")}: <b>${fmt(num("steps_sensor"))}</b> (${t("steps_since_reboot")})`;
      const dist = has("daily_distance") ? `${t("distance")}: ${fmt(num("daily_distance") / 1000, 1)} ${t("u_km")}` : null;
      const hr = has("heart_rate") ? `${t("heart_rate")}: ${fmt(num("heart_rate"))} ${t("u_bpm")}` : null;
      sec("mdi:harddisk", t("storage"), [sto, steps, dist, hr]);

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
        .msg { color: var(--secondary-text-color); padding: 8px 0; }
      </style>
      <ha-card>
        <div class="title"><ha-icon icon="mdi:cellphone"></ha-icon><span>${esc(title)}</span></div>
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
console.info(`%c PHONE-SHEET-CARD %c ${VERSION} `, "background:#03a9f4;color:#fff;border-radius:3px 0 0 3px", "background:#555;color:#fff;border-radius:0 3px 3px 0");
