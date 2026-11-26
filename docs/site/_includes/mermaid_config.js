{
  /*
    The theme injects this file's contents as the argument to mermaid.initialize,
    so it must stay a bare object literal. The theme's own copy is an empty object.

    Block comments only. The include is emitted on a single line, so a // comment
    would comment out everything after it and leave invalid JavaScript.

    No Liquid tags either, not even inside a comment: Jekyll renders files under
    _includes as Liquid, so an include tag here would make this file include
    itself and the build would fail with "stack level too deep".

    wrappingWidth: Mermaid wraps flowchart label text at 200px by default, which
    turns a one-line stage description into six wrapped lines and makes the
    pipeline diagram around 1500px tall.
  */
  startOnLoad: false,
  flowchart: {
    htmlLabels: false,
    useMaxWidth: true,
    wrappingWidth: 460,
    nodeSpacing: 28,
    rankSpacing: 38,
    padding: 10
  }
}
