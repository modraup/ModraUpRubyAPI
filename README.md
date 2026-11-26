# ModraUp Ruby API

Browse the [API index](docs/INDEX.md) on GitHub, or open [the searchable HTML reference](docs/index.html) locally. Use **Classes** to find a class such as `ModraUp::Model`, or **Methods** to find a method by name.

## Example plugin: Two-Point Line

Pick a start point, move the pointer to preview the line, and click a second point to create an edge. The tool snaps to geometry and adds the edge to the current editing context. Each completed line is one undo step.

### Install and try it

1. Download [the Two-Point Line extension](examples/line_tool/modraup_example_line.rbz) and install the RBZ file using the Extension Manager.
2. Open a model and choose **Extensions → Two-Point Line**.
3. Click the start point, move the pointer, then click the end point. The tool is ready to draw another independent line. Press **Esc** after the first click to discard the preview.
4. Choose **Edit → Undo** to remove the last line. Switch to the Select tool when you are finished.

### Plugin file structure

The RBZ is a ZIP archive. Its root contains the same two Ruby files as the [example source directory](examples/line_tool).

```text
Plugins/
├── modraup_example_line.rb
└── modraup_example_line/
    └── main.rb
```

- [modraup_example_line.rb](examples/line_tool/modraup_example_line.rb) is the loader. It selects the API namespace and registers a `SketchupExtension` with the name, version, and path to the implementation.
- [main.rb](examples/line_tool/modraup_example_line/main.rb) adds the menu command and implements the tool. `onMouseMove` uses an `InputPoint` to track the cursor, and `draw` renders the preview. On the second click, `onLButtonDown` calls `active_entities.add_line` inside an undoable operation.

To run from source, enter `puts ModraUp.find_support_file('Plugins')` in the ModraUp Ruby Console. Copy the loader and its matching folder directly into the printed directory, following the tree above. Restart ModraUp and use the same menu command.

### Using ModraUp or Sketchup

Inside ModraUp, `ModraUp` and `Sketchup` refer to the same Ruby module. You can write plugins using either spelling, including for classes such as `InputPoint`. Try these in the ModraUp Ruby Console:

```ruby
ModraUp.equal?(Sketchup)                        # => true
ModraUp::InputPoint.equal?(Sketchup::InputPoint) # => true
model = ModraUp.active_model                     # also available as Sketchup.active_model
```

The example chooses the available name once in its loader:

```ruby
API = defined?(::ModraUp) ? ::ModraUp : ::Sketchup
```

The tool then uses `API.active_model` and `API::InputPoint` throughout. `UI`, `Geom`, and `SketchupExtension` keep their top-level names with either spelling.

## Reading the reference

A dot denotes a class or module method, as in `ModraUp.active_model`. A hash denotes an instance method, as in `ModraUp::Model#active_entities`. Plain numeric model coordinates are in inches. Use helpers such as `25.mm` for other units. The [structured API data](docs/api.json) is also available.
