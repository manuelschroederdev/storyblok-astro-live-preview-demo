!function (e) {
  "function" == typeof define && define.amd ? define(e) : e()
}(function () {
  const e = e => document.querySelector(`[data-blok-uid="${e}"]`)
    , t = e => {
      const t = e.getBoundingClientRect();
      return t.top < 0 && t.top + t.height >= 0 || t.top >= 0 && t.top <= (window.innerHeight || document.documentElement.clientHeight)
    }
    , o = e => {
      let t = {};
      try {
        const o = e.replace(/\\/g, "");
        t = JSON.parse(o)
      } catch (t) {
        console.error("Error parsing json", e)
      }
      return t
    }
    , n = e => {
      let t = "";
      return location.search.substr(1).split("&").forEach(o => {
        const n = o.split("=");
        n[0] === e && (t = decodeURIComponent(n[1]))
      }
      ),
        t
    }
    , i = e => {
      return e && e.display_name ? e.display_name : "string" != typeof (t = e.name) ? "" : t.toString().replace(/([A-Z])/g, " $1").trim().toLowerCase().replace(/[_-]/g, " ").replace(/(?:^|\s)\S/g, function (e, t) {
        return e.toUpperCase()
      });
      var t
    }
    , s = e => {
      const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      t.setAttribute("viewBox", e.viewBox),
        t.setAttribute("class", e.svgClass);
      const o = document.createElementNS(t.namespaceURI, "path");
      return o.setAttribute("d", e.path),
        o.setAttribute("fill", e.pathFill),
        o.setAttribute("transform", e.pathTransform ? e.pathTransform : "translate(0 0)"),
        t.appendChild(o),
        t
    }
    ;
  var r = "@-webkit-keyframes smoke{0%{background-color:rgba(89,197,198,0)}to{background-color:rgba(89,197,198,.5)}}@keyframes smoke{0%{background-color:rgba(89,197,198,0)}to{background-color:rgba(89,197,198,.5)}}.storyblok--outlined .storyblok__outline,.storyblok--outlined [data-blok-c]{outline:1px dashed #b6babf}.storyblok--outlined .storyblok__outline[data-blok-focused=true],.storyblok--outlined [data-blok-c][data-blok-focused=true]{outline:0}.storyblok__hint{box-sizing:border-box;z-index:16777272}.storyblok__highlight,.storyblok__hint{outline:1px solid #00b3b0;pointer-events:none;position:absolute;transition:opacity .2s ease}.storyblok__highlight{background:rgba(89,197,198,.2);z-index:16777270}.storyblok__overlay{box-sizing:border-box;outline:1px solid #00b3b0;pointer-events:none;position:absolute;z-index:16777273}.storyblok__overlay-menu{background-color:#00b3b0;border-radius:5px;display:inline-flex;font-family:-apple-system,blinkmacsystemfont,Segoe UI,roboto,helvetica,arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;height:30px;left:-1px;pointer-events:auto;position:absolute;top:-40px}.storyblok__overlay-menu--simple .storyblok__overlay-menu-btn{border-bottom-right-radius:5px;border-top-right-radius:5px}.storyblok__overlay-menu-label{color:#fff;font-size:14px;line-height:30px;margin-right:20px;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap}.storyblok__overlay-menu-label:first-child{margin-left:20px}.storyblok__overlay-menu-btn{align-items:center;background-color:transparent;border:0;display:flex;justify-content:center;outline:none;padding:0}.storyblok__overlay-menu-btn:hover{background-color:#40c6c4}.storyblok__overlay-menu-btn-action{border-bottom-right-radius:5px;border-left:1px solid #fff;border-top-right-radius:5px;height:inherit;margin:auto 0 auto auto}.storyblok__overlay-menu-btn-parent{border-bottom-left-radius:5px;border-top-left-radius:5px;cursor:pointer;margin:0;width:auto}.storyblok__overlay-menu-svg{box-sizing:border-box;cursor:pointer;height:24px;margin:0 3px;width:24px}.storyblok__overlay--bottom .storyblok__overlay-menu{bottom:-40px;top:auto}.storyblok__overlay--clicked{-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-name:smoke;animation-name:smoke}.storyblok__actions-menu,.storyblok__breadcrumbs-menu{background-color:#fff;border:1px solid #dfe3e8;border-radius:5px;box-shadow:0 2px 17px 3px rgba(34,42,69,.07);box-sizing:content-box;display:none;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;min-width:156px;overflow:hidden;padding:11px 0;position:absolute;top:25px;z-index:2}.storyblok__actions-menu hr,.storyblok__breadcrumbs-menu hr{background-color:#dfe3e8;border:0;height:1px;margin:11px 0 11px 20px}.storyblok__actions-menu__menu-item,.storyblok__breadcrumbs-menu__menu-item{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#fff;border:0;color:#1b243f;cursor:pointer;display:flex;font-family:-apple-system,blinkmacsystemfont,Segoe UI,roboto,helvetica,arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:14px;padding:8px 20px;text-align:left;width:100%}.storyblok__actions-menu__menu-item--delete,.storyblok__breadcrumbs-menu__menu-item--delete{color:#ff6159;margin-bottom:0}.storyblok__actions-menu__menu-item--selected,.storyblok__breadcrumbs-menu__menu-item--selected{color:#00b3b0;cursor:default;margin-bottom:0}.storyblok__actions-menu__menu-item--selected:hover,.storyblok__breadcrumbs-menu__menu-item--selected:hover{background:transparent}.storyblok__actions-menu__menu-item:hover,.storyblok__breadcrumbs-menu__menu-item:hover{background:#eff1f3}.storyblok__actions-menu__menu-item:focus,.storyblok__breadcrumbs-menu__menu-item:focus{outline:none}.storyblok__actions-menu{left:calc(100% - 20px)}.storyblok__breadcrumbs-menu{left:-10px}";
  const l = "storyblok--outlined"
    , a = "storyblok-bridge-stylesheet"
    , c = "storyblok__overlay"
    , d = "storyblok__overlay-menu"
    , h = "storyblok__actions-menu"
    , u = "storyblok__breadcrumbs-menu";
  class m {
    constructor(e) {
      this.appVersion = "v1",
        this.inEditor = !0,
        this.initialized = !1,
        this.currentUid = null,
        this.storyId = "",
        this.componentNames = {},
        this.outlineOnMoveInterval = null,
        this.calcInterval = null,
        this.canAddBlocks = !1,
        this.canMoveForward = !1,
        this.navigationBreadcrumbs = [],
        this.focusState = !1,
        this.actionsEnabled = !1,
        this.hinter = null,
        this.highlighter = null,
        this.overlay = null,
        this.componentBase = null,
        this.componentLabel = null,
        this.breadcrumbsButtonMenu = null,
        this.breadcrumbsMenu = null,
        this.actionsMenu = null,
        this.actionsMenuButton = null,
        this.actionsMenuItems = null,
        this.events = {
          input: [],
          change: [],
          published: [],
          unpublished: [],
          viewLiveVersion: [],
          enterEditmode: [],
          enterComponent: [],
          hoverComponent: [],
          highlightComponent: [],
          customEvent: [],
          pingBack: [],
          sessionReceived: [],
          editedBlok: [],
          deselectBlok: [],
          addedBlock: [],
          deletedBlock: [],
          movedBlock: [],
          duplicatedBlock: []
        },
        this.config = {
          customParent: null,
          resolveRelations: null,
          resolveLinks: null,
          preventClicks: !1,
          initOnlyOnce: !0,
          ...e
        },
        this.init()
    }
    get isInIframe() {
      return window.top !== window.self
    }
    get csProtocol() {
      let e = location.protocol.replace(":", "");
      return "http" !== e && "https" !== e && (e = "https"),
        e
    }
    get targetOrigin() {
      return this.config.customParent ? this.config.customParent : "stage" === n("_storyblok_env") ? `${this.csProtocol}://app-beta.storyblok.com` : `${this.csProtocol}://app.storyblok.com`
    }
    get lastBreadcrumbItem() {
      return this.navigationBreadcrumbs[this.navigationBreadcrumbs.length - 1] || {}
    }
    isInEditor() {
      return this.inEditor
    }
    init() {
      null !== document.body ? this.config.initOnlyOnce && document.querySelectorAll(".storyblok__hint").length > 0 || this.isInIframe && (this.resetAllEvents(),
        this.addMessageListener(),
        this.outlineOnMove(),
        this.buildBridgeStyles(),
        this.on("enterEditmode", this.enterEditmode),
        this.isInIframe && this.sendDataToEditor({
          action: "initialized",
          config: this.config
        }),
        this.initialized = !0) : console.error("Body tag not found. Please install the Storyblok bridge script inside the body tag")
    }
    keyPress(e, t) {
      ("z" === t.key && t.metaKey || "z" === t.key && t.ctrlKey) && (t.preventDefault(),
        t.stopImmediatePropagation(),
        e.sendDataToEditor({
          action: "undo"
        })),
        ("y" === t.key && t.metaKey || "y" === t.key && t.ctrlKey) && (t.preventDefault(),
          t.stopImmediatePropagation(),
          e.sendDataToEditor({
            action: "redo"
          }))
    }
    sendDataToEditor(e) {
      window.parent.postMessage(e, this.targetOrigin)
    }
    buildBridgeStyles() {
      document.getElementById(a) ? (this.hinter = document.querySelector(".storyblok__hint"),
        this.highlighter = document.querySelector(".storyblok__highlight"),
        this.overlay = document.querySelector(".storyblok__overlay"),
        this.componentBase = document.querySelector(".storyblok__overlay-menu"),
        this.breadcrumbsButtonMenu = document.querySelector(".storyblok__overlay-menu-btn-parent"),
        this.breadcrumbsMenu = document.querySelector(".storyblok__breadcrumbs-menu"),
        this.actionsMenuButton = document.querySelector(".storyblok__overlay-menu-btn-action"),
        this.actionsMenu = document.querySelector(".storyblok__actions-menu"),
        this.componentLabel = document.querySelector(".storyblok__overlay-menu > .storyblok__overlay-menu-label"),
        this.createActionsMenuItems()) : (this.createBridgeStylesheet(),
          this.createHinter(),
          this.createHighlighter(),
          this.createOverlay(),
          this.createComponentContext())
    }
    createBridgeStylesheet() {
      const e = document.createElement("style");
      e.setAttribute("type", "text/css"),
        e.id = a,
        "textContent" in e ? e.textContent = r : e.styleSheet.cssText = r,
        document.getElementsByTagName("head")[0].appendChild(e)
    }
    createHinter() {
      this.hinter = document.createElement("div"),
        this.hinter.className = "storyblok__hint",
        this.hideElement(this.hinter),
        document.body.appendChild(this.hinter)
    }
    createHighlighter() {
      this.highlighter = document.createElement("div"),
        this.highlighter.style.opacity = 0,
        this.hideElement(this.highlighter),
        document.body.appendChild(this.highlighter)
    }
    createOverlay() {
      this.overlay = document.createElement("div"),
        this.overlay.setAttribute("class", c),
        this.overlay.setAttribute("id", c),
        this.hideElement(this.overlay),
        document.body.appendChild(this.overlay)
    }
    calculateElementPosition(t, o) {
      if (!o)
        return void this.hideElement(t);
      const n = e(o);
      if (n) {
        const { left: e, top: o } = this.getElementOffset(n);
        o <= 50 ? this.overlay.classList.add("storyblok__overlay--bottom") : this.overlay.classList.remove("storyblok__overlay--bottom"),
          t.style.top = `${o}px`,
          t.style.left = `${e}px`,
          t.style.width = `${n.offsetWidth}px`,
          t.style.height = `${n.offsetHeight}px`,
          t.style.minHeight = "5px"
      } else
        this.hideElement(t)
    }
    getElementOffset(e) {
      const t = e.getBoundingClientRect()
        , o = window.pageXOffset || document.documentElement.scrollLeft
        , n = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: t.top + n,
        left: t.left + o
      }
    }
    resetAllEvents() {
      for (const e in this.events)
        this.events[e] = []
    }
    addMessageListener() {
      window.addEventListener && addEventListener("message", this.receiveMessageFromApp.bind(this), !1)
    }
    receiveMessageFromApp(e) {
      e && e.data && e.data.action && this.emit(e.data.action, e.data)
    }
    emit(e) {
      const t = this.events[e];
      if (e && t && t.length)
        for (let e = 0; e < t.length; e++)
          t[e].apply(this, [].slice.call(arguments, 1))
    }
    outlineOnMoveHandler() {
      document.body.classList.add(l),
        this.outlineOnMoveInterval && clearTimeout(this.outlineOnMoveInterval),
        this.outlineOnMoveInterval = setTimeout(() => {
          document.body.classList.remove(l),
            this.hinter && (this.hinter.style.opacity = 0)
        }
          , 800)
    }
    outlineOnMove() {
      document.addEventListener("mousemove", this.outlineOnMoveHandler.bind(this), !1)
    }
    on(e, t) {
      if (e.constructor !== Array)
        this.subscribeEvent(e, t);
      else
        for (const o of e)
          this.subscribeEvent(o, t)
    }
    subscribeEvent(e, t) {
      "input" === e && (this.actionsEnabled = !0),
        -1 === this.events[e].indexOf(t) && this.events[e].push(t)
    }
    pingEditor(e) {
      this.isInIframe ? this.sendDataToEditor({
        action: "ping"
      }) : (this.inEditor = !1,
        e(this)),
        this.on("pingBack", this.handlePingBack(e))
    }
    handlePingBack(e) {
      return () => {
        this.inEditor = !0,
          e(this)
      }
    }
    handleEditedBlok(e) {
      this.navigationBreadcrumbs = e.breadcrumbs,
        this.canAddBlocks = e.canAddBlocks || !1,
        this.canMoveForward = e.canMoveForward || !1,
        this.updateComponentBase(e.blok)
    }
    handleAddMoveBlok(t) {
      const o = e(`${this.storyId}-${t.blockId}`);
      o && this.handleOpenBlok(o)
    }
    handleDeselectBlock() {
      document.querySelectorAll("[data-blok-focused]").forEach(e => e.removeAttribute("data-blok-focused")),
        this.hideElement(this.overlay)
    }
    handleDuplicatedBlok(t) {
      this.handleDeselectBlock(),
        setTimeout(() => {
          const o = e(`${this.storyId}-${t.blockId}`);
          this.handleOpenBlok(o)
        }
          , 500)
    }
    handleWindowClick(e) {
      this.handleOpenBlok(e.target, e)
    }
    handleOpenBlok(e, t) {
      const o = (e => {
        const t = ((e, t) => {
          for (; e && 1 === e.nodeType;) {
            if (e.hasAttribute("data-blok-c"))
              return e;
            e = e.parentNode
          }
          return null
        }
        )(e);
        if (!t)
          return null;
        const o = t.getAttribute("data-blok-c");
        return JSON.parse(o)
      }
      )(e);
      if (o) {
        const e = !0 === this.config.preventClicks;
        return (t && o.uid !== this.currentUid || t && e) && (t.preventDefault(),
          t.stopPropagation()),
          this.currentUid = o.uid,
          this.storyId = o.id,
          void this.openBlok(o)
      }
      t && this.toggleFocusElement(e, !0)
    }
    enterEditmode(t) {
      const n = (e => {
        const t = []
          , n = document.createNodeIterator(e, NodeFilter.SHOW_COMMENT, () => NodeFilter.FILTER_ACCEPT, !1);
        let i = {};
        for (; i = n.nextNode();)
          if (i.nodeValue.indexOf("#storyblok#") > -1) {
            const e = i.nodeValue.replace("#storyblok#", "")
              , n = i.nextElementSibling || i.nextSibling
              , s = o(e);
            s && t.push({
              options: s,
              el: n
            })
          }
        return t
      }
      )(document.body);
      t && t.appVersion && (this.appVersion = t.appVersion),
        t && t.componentNames && (this.componentNames = t.componentNames);
      for (let e = 0; e < n.length; e++) {
        const t = n[e].el
          , o = n[e].options;
        t && (o.name = this.componentNames[o.name] || o.name,
          t.setAttribute("data-blok-c", JSON.stringify(o)),
          t.setAttribute("data-blok-uid", `${o.id}-${o.uid}`),
          t.offsetHeight < 5 && (t.style["min-height"] = "5px"),
          t.classList.add("storyblok__outline"))
      }
      if (this.on("addedBlock", this.handleAddMoveBlok),
        this.on("duplicatedBlock", this.handleDuplicatedBlok),
        this.on("movedBlock", this.handleAddMoveBlok),
        this.on("enterComponent", this.enterComponent),
        this.on("highlightComponent", this.highlightComponent),
        this.on("hoverComponent", this.hoverComponent),
        this.on("editedBlok", this.handleEditedBlok),
        this.on("deselectBlok", this.handleDeselectBlock),
        t && t.blockId && this.config.setActiveBlock) {
        const o = e(`${t.storyId}-${t.blockId}`);
        this.handleOpenBlok(o)
      }
      window.addEventListener("click", this.handleWindowClick.bind(this)),
        null !== this.calcInterval && window.clearInterval(this.calcInterval),
        this.calcInterval = window.setInterval(() => {
          this.calculateElementPosition(this.overlay, `${this.storyId}-${this.currentUid}`)
        }
          , 300)
    }
    highlightComponent(o) {
      this.highlighter.innerHTML = "",
        o.componentIds.length > 0 ? (this.highlighter.style.display = "block",
          this.highlighter.style.opacity = 1) : (this.highlighter.style.display = "none",
            this.highlighter.style.opacity = 0);
      for (let n = 0; n < o.componentIds.length; n++) {
        const i = `${o.storyId}-${o.componentIds[n]}`
          , s = e(i);
        if (s) {
          const e = document.createElement("div");
          e.setAttribute("class", "storyblok__highlight"),
            this.highlighter.appendChild(e),
            this.calculateElementPosition(e, i),
            o.componentId !== o.componentIds[n] || t(s) || void 0 === s.scrollIntoView || s.scrollIntoView()
        }
      }
    }
    hoverComponent(e) {
      this.calculateElementPosition(this.hinter, `${e.storyId}-${e.componentId}`),
        this.hinter.style.opacity = 1,
        this.hinter.style.display = "block"
    }
    toggleFocusElement(e, t = !1) {
      if (!this.overlay.contains(e)) {
        if (this.handleDeselectBlock(),
          // in the generated iframe there is no "_storyblok" url param, as the iframe is generated vie srcdoc
          !t && (!n("_storyblok") || this.storyId === n("_storyblok")))
          return e.setAttribute("data-blok-focused", !0),
            this.showFocusedElement(this.overlay),
            void (this.focusState = !1);
        this.focusState || this.sendDataToEditor({
          action: "noFocus"
        })
      }
    }
    showFocusedElement(e) {
      this.currentUid ? (this.showElement(e),
        this.calculateElementPosition(e, `${this.storyId}-${this.currentUid}`)) : this.hideElement(e)
    }
    handleBlokActions(e) {
      this.sendDataToEditor({
        action: e,
        blok: this.lastBreadcrumbItem
      }),
        this.hideElement("addBlockBefore" === e || "addBlockAfter" === e || "copy" === e ? this.actionsMenu : this.overlay),
        "moveForward" !== e && "moveBackward" !== e || (this.focusState = !0)
    }
    hideElement(e) {
      e.style.display = "none"
    }
    showElement(e) {
      e.style.display = "block"
    }
    toggleElement(e) {
      "block" !== e.style.display ? this.showElement(e) : this.hideElement(e)
    }
    enterComponent(t) {
      const o = e(`${t.storyId}-${t.componentId}`);
      this.hinter.style.opacity = 0,
        this.hinter.style.display = "none",
        this.scrollIntoView(o),
        this.handleOpenBlok(o)
    }
    scrollIntoView(e) {
      e && (t(e) || void 0 === e.scrollIntoView || setTimeout(() => {
        e.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      }
        , 100))
    }
    openBlok(e) {
      this.sendDataToEditor({
        action: "edit",
        dataC: e,
        config: this.config
      })
    }
    createComponentContext() {
      this.createComponentBase(),
        this.createActionsMenu(),
        this.createActionsMenuItems(),
        this.createBreadcrumbsMenu(),
        this.createActionsMenuButton(),
        this.createBreadcrumbsMenuButton(),
        this.createComponentLabel(),
        this.createComponentButtonLabel()
    }
    createComponentBase() {
      this.componentBase = document.createElement("div"),
        this.componentBase.setAttribute("class", d),
        this.componentBase.setAttribute("id", d),
        this.overlay.append(this.componentBase)
    }
    createComponentLabel() {
      this.componentLabel = document.createElement("span"),
        this.componentLabel.setAttribute("class", "storyblok__overlay-menu-label"),
        this.componentBase.prepend(this.componentLabel)
    }
    createComponentButtonLabel() {
      const e = document.createElement("span");
      e.setAttribute("class", "storyblok__overlay-menu-label"),
        this.breadcrumbsButtonMenu.appendChild(e)
    }
    updateComponentLabel(e) {
      document.querySelectorAll(".storyblok__overlay-menu-label").forEach(t => t.innerText = this.componentNames[e.name] || i(e))
    }
    updateComponentBase(t) {
      this.hideElement(this.actionsMenu),
        this.hideElement(this.breadcrumbsMenu),
        this.overlay.classList.add("storyblok__overlay--clicked"),
        setTimeout(() => {
          this.overlay.classList.remove("storyblok__overlay--clicked")
        }
          , 400),
        this.navigationBreadcrumbs.length > 1 ? (this.updateBreadcrumbsMenu(this.navigationBreadcrumbs),
          this.actionsEnabled ? this.updateActionsMenu() : (this.componentBase.setAttribute("class", "storyblok__overlay-menu storyblok__overlay-menu--simple"),
            this.hideElement(this.actionsMenuButton)),
          this.hideElement(this.componentLabel)) : (this.hideElement(this.breadcrumbsButtonMenu),
            this.hideElement(this.actionsMenuButton),
            this.showElement(this.componentLabel)),
        this.updateComponentLabel(t);
      const o = e(`${this.storyId}-${t.uid}`);
      o && this.toggleFocusElement(o)
    }
    createBreadcrumbsMenuButton() {
      this.breadcrumbsButtonMenu = document.createElement("button"),
        this.breadcrumbsButtonMenu.setAttribute("class", "storyblok__overlay-menu-btn storyblok__overlay-menu-btn-parent"),
        this.breadcrumbsButtonMenu.prepend(s({
          viewBox: "0 0 24 24",
          svgClass: "storyblok__overlay-menu-svg",
          path: "M13.73 14.284l-2.197-2.216 2.197-2.217a1.051 1.051 0 000-1.477 1.03 1.03 0 00-1.465 0l-2.93 2.955a1.043 1.043 0 00-.287.554l-.014.123v.123c.014.247.115.489.301.677l2.93 2.956a1.03 1.03 0 001.465 0 1.051 1.051 0 000-1.478z",
          pathFill: "#ffffff"
        })),
        this.breadcrumbsButtonMenu.addEventListener("click", () => {
          this.toggleElement(this.breadcrumbsMenu),
            this.hideElement(this.actionsMenu)
        }
        ),
        this.componentBase.prepend(this.breadcrumbsButtonMenu)
    }
    createBreadcrumbsMenu() {
      this.breadcrumbsMenu = document.createElement("div"),
        this.breadcrumbsMenu.setAttribute("class", u),
        this.breadcrumbsMenu.setAttribute("id", u),
        this.componentBase.append(this.breadcrumbsMenu)
    }
    updateBreadcrumbsMenu(e) {
      this.breadcrumbsMenu.innerHTML = "";
      const t = [];
      for (let o = 0; o < e.length; o++) {
        t[o] = document.createElement("button"),
          t[o].innerHTML = i({
            name: e[o].component
          });
        const n = e[o];
        t[o].addEventListener("click", e => {
          e.stopPropagation(),
            this.currentUid = n._uid,
            this.openBlok({
              id: this.storyId,
              uid: n._uid,
              name: n.component
            })
        }
        ),
          t[o].classList.add("storyblok__breadcrumbs-menu__menu-item"),
          e[o]._uid === this.currentUid && (t[o].classList.add("storyblok__breadcrumbs-menu__menu-item--selected"),
            t[o].setAttribute("disabled", !0)),
          this.breadcrumbsMenu.appendChild(t[o]),
          this.breadcrumbsButtonMenu.style.display = "flex"
      }
    }
    createActionsMenuButton() {
      this.actionsMenuButton = document.createElement("button"),
        this.actionsMenuButton.setAttribute("class", "storyblok__overlay-menu-btn storyblok__overlay-menu-btn-action"),
        this.actionsMenuButton.prepend(s({
          viewBox: "0 0 24 24",
          svgClass: "storyblok__overlay-menu-svg",
          path: "M7.5 11a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm10 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z",
          pathFill: "#ffffff"
        })),
        this.actionsMenuButton.addEventListener("click", () => {
          this.toggleElement(this.actionsMenu),
            this.breadcrumbsMenu && this.hideElement(this.breadcrumbsMenu)
        }
        ),
        this.componentBase.append(this.actionsMenuButton)
    }
    createActionsMenuItems() {
      this.actionsMenuItems = [{
        eventFunction: () => this.handleBlokActions.bind(this, "addBlockBefore"),
        innerHTML: "Add Block Before",
        order: 0,
        show: () => this.canAddBlocks
      }, {
        eventFunction: () => this.handleBlokActions.bind(this, "addBlockAfter"),
        innerHTML: "Add Block After",
        order: 1,
        show: () => this.canAddBlocks
      }, {
        eventFunction: () => this.handleBlokActions.bind(this, "duplicateBlock"),
        innerHTML: "Duplicate",
        order: 2,
        show: () => this.canAddBlocks
      }, {
        eventFunction: () => this.handleBlokActions.bind(this, "copy"),
        innerHTML: "Copy",
        order: 3,
        show: () => "v2" === this.appVersion
      }, {
        separator: !0,
        order: 4,
        show: () => this.canAddBlocks && !(!this.canMoveForward && !this.lastBreadcrumbItem._parentindex)
      }, {
        eventFunction: () => this.handleBlokActions.bind(this, "moveForward"),
        innerHTML: "Move Forward",
        order: 5,
        show: () => this.canMoveForward
      }, {
        eventFunction: () => this.handleBlokActions.bind(this, "moveBackward"),
        innerHTML: "Move Backward",
        order: 6,
        show: () => this.lastBreadcrumbItem._parentindex
      }, {
        separator: !0,
        order: 7,
        show: () => this.canAddBlocks
      }, {
        eventFunction: () => this.handleBlokActions.bind(this, "deleteBlock"),
        className: "storyblok__actions-menu__menu-item--delete",
        innerHTML: "Delete",
        order: 8,
        show: () => !0
      }]
    }
    createActionsMenu() {
      this.actionsMenu = document.createElement("div"),
        this.actionsMenu.setAttribute("class", h),
        this.actionsMenu.setAttribute("id", h),
        this.componentBase.append(this.actionsMenu)
    }
    updateActionsMenu() {
      this.actionsMenu.innerHTML = "",
        this.actionsMenuItems.sort((e, t) => e.order > t.order ? 1 : t.order > e.order ? -1 : 0).forEach(e => {
          if (e.separator && e.show())
            return void this.actionsMenu.appendChild(document.createElement("hr"));
          const t = document.createElement(e.element ? e.element : "button");
          t.classList.add("storyblok__actions-menu__menu-item"),
            e.className && t.classList.add(e.className),
            t.innerHTML = e.innerHTML,
            e.eventFunction && t.addEventListener(e.event ? e.event : "click", e.eventFunction()),
            e.show() && this.actionsMenu.appendChild(t)
        }
        ),
        this.actionsMenuButton.style.display = "flex"
    }
  }
  void 0 !== window && (window.StoryblokBridge = class {
    constructor(e) {
      const t = new m(e);
      this.enterEditmode = e => {
        t.enterEditmode(e)
      }
        ,
        this.isInEditor = () => t.isInEditor(),
        this.on = (e, o) => {
          t.on(e, o)
        }
        ,
        this.pingEditor = e => {
          t.pingEditor(e)
        }
    }
  }
  )
});
