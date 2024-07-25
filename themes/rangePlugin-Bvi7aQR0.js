function c(a = {}) {
  return function(e) {
    let s = "", t, o, i;
    const d = () => {
      if (a.input) {
        if (t = a.input instanceof Element ? a.input : window.document.querySelector(a.input), !t) {
          e.config.errorHandler(new Error("Invalid input element specified"));
          return;
        }
        e.config.wrap && (t = t.querySelector("[data-input]"));
      } else
        t = e._input.cloneNode(), t.removeAttribute("id"), t._flatpickr = void 0;
      if (t.value) {
        const n = e.parseDate(t.value);
        n && e.selectedDates.push(n);
      }
      t.setAttribute("data-fp-omit", ""), e.config.clickOpens && (e._bind(t, ["focus", "click"], () => {
        e.selectedDates[1] && (e.latestSelectedDateObj = e.selectedDates[1], e._setHoursFromDate(e.selectedDates[1]), e.jumpToDate(e.selectedDates[1])), o = !0, e.isOpen = !1, e.open(void 0, a.position === "left" ? e._input : t);
      }), e._bind(e._input, ["focus", "click"], (n) => {
        n.preventDefault(), e.isOpen = !1, e.open();
      })), e.config.allowInput && e._bind(t, "keydown", (n) => {
        n.key === "Enter" && (e.setDate([e.selectedDates[0], t.value], !0, s), t.click());
      }), a.input || e._input.parentNode && e._input.parentNode.insertBefore(t, e._input.nextSibling);
    }, u = {
      onParseConfig() {
        e.config.mode = "range", s = e.config.altInput ? e.config.altFormat : e.config.dateFormat;
      },
      onReady() {
        d(), e.config.ignoredFocusElements.push(t), e.config.allowInput ? (e._input.removeAttribute("readonly"), t.removeAttribute("readonly")) : t.setAttribute("readonly", "readonly"), e._bind(e._input, "focus", () => {
          e.latestSelectedDateObj = e.selectedDates[0], e._setHoursFromDate(e.selectedDates[0]), o = !1, e.jumpToDate(e.selectedDates[0]);
        }), e.config.allowInput && e._bind(e._input, "keydown", (n) => {
          n.key === "Enter" && e.setDate([e._input.value, e.selectedDates[1]], !0, s);
        }), e.setDate(e.selectedDates, !1), u.onValueUpdate(e.selectedDates), e.loadedPlugins.push("range");
      },
      onPreCalendarPosition() {
        o && (e._positionElement = t, setTimeout(() => {
          e._positionElement = e._input;
        }, 0));
      },
      onChange() {
        e.selectedDates.length || setTimeout(() => {
          e.selectedDates.length || (t.value = "", i = []);
        }, 10), o && setTimeout(() => {
          t.focus();
        }, 0);
      },
      onDestroy() {
        a.input || t.parentNode && t.parentNode.removeChild(t);
      },
      onValueUpdate(n) {
        if (t) {
          if (i = !i || n.length >= i.length ? [...n] : i, i.length > n.length) {
            const l = n[0], r = o ? [i[0], l] : [l, i[1]];
            e.setDate(r, !1), i = [...r];
          }
          [
            e._input.value = "",
            t.value = ""
          ] = e.selectedDates.map((l) => e.formatDate(l, s));
        }
      }
    };
    return u;
  };
}
export {
  c as default
};
