/* YARD-style list search / tree / inheritance / nav resize / mobile nav. */
(function () {
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function visibleList() {
    return $("#nav.toc .full_list:not([hidden])");
  }

  function searchText(li) {
    var item = li.querySelector(".item") || li;
    var link = item.querySelector("a");
    return (item.textContent + " " + (link ? link.title : "")).toLowerCase();
  }

  function bindSearch(input) {
    if (!input) return;
    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      var list = visibleList();
      if (!list) return;
      $all("li", list).forEach(function (li) {
        var hit = !q || searchText(li).includes(q);
        if (li.querySelector(":scope > ul")) {
          var childHit = $all("li", li).some(function (c) {
            return searchText(c).includes(q);
          });
          hit = hit || childHit;
          if (q && childHit) {
            li.classList.remove("collapsed");
            var t = li.querySelector(":scope > .item .toggle");
            if (t) t.textContent = "▾";
          }
        }
        li.classList.toggle("hidden", !hit);
      });
    });
  }
  bindSearch($("#nav.toc .list_search input"));

  $all("#nav.toc .full_list .toggle").forEach(function (btn) {
    btn.addEventListener("click", function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      var li = btn.closest("li");
      li.classList.toggle("collapsed");
      btn.textContent = li.classList.contains("collapsed") ? "▸" : "▾";
    });
  });

  var titles = { class: "Class List", method: "Method List" };
  $all("#nav.toc .full_list_nav [data-list]").forEach(function (a) {
    a.addEventListener("click", function (ev) {
      ev.preventDefault();
      var kind = a.getAttribute("data-list");
      $all("#nav.toc .full_list_nav [data-list]").forEach(function (x) {
        x.classList.toggle("selected", x === a);
      });
      $all("#nav.toc .full_list").forEach(function (ul) {
        if (ul.getAttribute("data-list") === kind) ul.removeAttribute("hidden");
        else ul.setAttribute("hidden", "");
      });
      var title = $("#nav_title");
      if (title) title.textContent = titles[kind] || "Class List";
      var search = $("#nav.toc .list_search input");
      if (search) search.dispatchEvent(new Event("input"));
    });
  });

  (function highlightCurrent() {
    var id = window.pathId;
    if (!id) return;
    var link = document.querySelector('#nav.toc .full_list a.nav_link[title="' + id.replace(/"/g, '\\"') + '"]');
    if (!link) return;
    var li = link.closest("li");
    if (li) li.classList.add("current");
    var walk = li;
    while (walk) {
      walk.classList.remove("collapsed");
      var t = walk.querySelector(":scope > .item .toggle");
      if (t) t.textContent = "▾";
      walk = walk.parentElement ? walk.parentElement.closest("li") : null;
    }
    if (li && li.scrollIntoView) li.scrollIntoView({ block: "nearest" });
  })();

  $all(".inheritanceTree").forEach(function (a) {
    a.addEventListener("click", function (ev) {
      ev.preventDefault();
      var box = a.closest(".box_info") || a.closest("dd") || document.body;
      box.classList.toggle("showAll");
      a.textContent = box.classList.contains("showAll") ? "hide" : "show all";
    });
  });

  $all("h2 small a").forEach(function (a) {
    if ((a.textContent || "").indexOf("collapse") < 0 && (a.textContent || "").indexOf("expand") < 0) return;
    a.addEventListener("click", function (ev) {
      ev.preventDefault();
      var h = a.closest("h2");
      h.classList.toggle("collapsed");
      a.textContent = h.classList.contains("collapsed") ? "expand" : "collapse";
    });
  });

  var burger = $("#class_list_link");
  if (burger) {
    burger.addEventListener("click", function (ev) {
      ev.preventDefault();
      if (window.matchMedia("(max-width: 920px)").matches) {
        var nav = $("#nav.toc");
        if (nav) nav.classList.toggle("open");
      }
    });
  }

  var resizer = $("#resizer");
  var wrap = $(".nav_wrap");
  if (resizer && wrap) {
    var dragging = false;
    resizer.addEventListener("mousedown", function (e) {
      dragging = true;
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
      e.preventDefault();
    });
    window.addEventListener("mousemove", function (e) {
      if (!dragging) return;
      var min = 160, max = Math.min(520, window.innerWidth * 0.55);
      wrap.style.width = Math.max(min, Math.min(max, e.clientX)) + "px";
    });
    window.addEventListener("mouseup", function () {
      dragging = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    });
  }
})();
